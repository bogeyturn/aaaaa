const TIMEZONE_COOKIE = "timezone";
const FALLBACK_TIMEZONE = "Europe/London";

export function displayDate(date: {secs: number}) {
    const parts = getDateParts(date);
    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

export function displayTime(date: {secs: number}) {
    const parts = getDateParts(date);
    return `${parts.hour}:${parts.minute}`;
}

export function setDisplayTimezone(timezone: string) {
    if (!isValidTimezone(timezone)) return;

    const state = getTimezoneState();
    if (state) state.value = timezone;

    if (import.meta.client) {
        document.cookie = `${TIMEZONE_COOKIE}=${encodeURIComponent(timezone)}; path=/; max-age=31536000; samesite=lax`;
    }
}

export function getBrowserTimezone() {
    if (!import.meta.client) return null;
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
}

function getDateParts(date: {secs: number}) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: getDisplayTimezone(),
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    }).formatToParts(new Date(date.secs * 1000));

    const values = Object.fromEntries(
        parts
            .filter((part) => part.type !== "literal")
            .map((part) => [part.type, part.value]),
    );

    return {
        year: values.year,
        month: values.month,
        day: values.day,
        hour: values.hour,
        minute: values.minute,
    };
}

function getDisplayTimezone() {
    const state = getTimezoneState();
    if (state) return state.value;

    return resolveInitialTimezone();
}

function getTimezoneState() {
    if (typeof useState !== "function") return null;

    try {
        return useState<string>("display-timezone", resolveInitialTimezone);
    } catch {
        return null;
    }
}

function resolveInitialTimezone() {
    const cookieTimezone = getTimezoneCookie();
    return cookieTimezone && isValidTimezone(cookieTimezone)
        ? cookieTimezone
        : FALLBACK_TIMEZONE;
}

function getTimezoneCookie() {
    const cookie = getCookieValue();
    return cookie && isValidTimezone(cookie) ? cookie : null;
}

function getCookieValue() {
    if (import.meta.client) {
        return readCookie(document.cookie);
    }

    if (typeof useRequestEvent === "function") {
        const event = useRequestEvent();
        const cookie = event?.node?.req?.headers?.cookie;
        if (cookie) return readCookie(cookie);
    }

    return null;
}

function readCookie(cookieHeader: string) {
    const cookies = cookieHeader.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === TIMEZONE_COOKIE && value) return decodeURIComponent(value);
    }

    return null;
}

function isValidTimezone(timezone: string | null) {
    if (!timezone) return false;

    try {
        Intl.DateTimeFormat("en-GB", {timeZone: timezone});
        return true;
    } catch {
        return false;
    }
}

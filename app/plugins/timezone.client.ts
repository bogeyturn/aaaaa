export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("app:mounted", () => {
        const timezone = getBrowserTimezone();
        if (timezone) setDisplayTimezone(timezone);
    });
});


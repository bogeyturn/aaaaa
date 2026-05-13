import { WasmSession } from "api-scraped-wasm";
import { getCookie } from "~/utils/cookie";

export const getSecret = () => getCookie("EX_COOKIE") ?? "";
let sessionInstance: WasmSession | null = null;

function backendBase(): string {
  if (import.meta.server)
    return process.env.LOCAL_API_ORIGIN ?? "http://127.0.0.1:8081";

  return `${window.location.origin}/proxy/local-api/`;
}

const withProtocol = (url: string) =>
  /^https?:\/\//.test(url) ? url : `https://${url}`;

const proxyIp = () =>
  import.meta.server
    ? (process.env.NUXT_PUBLIC_SITE_ORIGIN ??
      (process.env.VERCEL_URL
        ? withProtocol(process.env.VERCEL_URL)
        : undefined) ??
      process.env.LOCAL_SERVER_ORIGIN ??
      "http://127.0.0.1:3000")
    : window.location.origin;

export function getSession() {
  if (!sessionInstance) {
    sessionInstance = new WasmSession(
      getSecret(),
      `${proxyIp()}/proxy/?url={url}&cookie={cookie}`,
      backendBase(),
    );
  }
  return sessionInstance;
}

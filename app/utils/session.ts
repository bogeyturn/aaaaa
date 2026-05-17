import { WasmSession } from "api-scraped-wasm";
import { getCookie } from "~/utils/cookie";

export const getSecret = () => getCookie("EX_COOKIE") ?? "";
let sessionInstance: WasmSession | null = null;

function backendBase(): string {
  return "https://api.exhint.de";
}

const withProtocol = (url: string) =>
  /^https?:\/\//.test(url) ? url : `https://${url}`;

const proxyIp = () =>
  import.meta.server
    ? (process.env.NUXT_PUBLIC_SITE_ORIGIN ??
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

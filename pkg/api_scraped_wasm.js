import * as wasm from "./api_scraped_wasm_bg.wasm";
import { __wbg_set_wasm, _start } from "./api_scraped_wasm_bg.js";

__wbg_set_wasm(wasm);
_start();

export * from "./api_scraped_wasm_bg.js";

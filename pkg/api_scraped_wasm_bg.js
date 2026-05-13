export class WasmSession {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmSessionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmsession_free(ptr, 0);
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {string} comment
     * @returns {Promise<void>}
     */
    addComment(gid, token, comment) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(comment, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_addComment(this.__wbg_ptr, gid, ptr0, len0, ptr1, len1);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {number} favcat
     * @param {string} favnote
     * @param {boolean} local
     * @returns {Promise<void>}
     */
    addFavorite(gid, token, favcat, favnote, local) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(favnote, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_addFavorite(this.__wbg_ptr, gid, ptr0, len0, favcat, ptr1, len1, local);
        return ret;
    }
    /**
     * @returns {Promise<void>}
     */
    auto_reorder_folder() {
        const ret = wasm.wasmsession_auto_reorder_folder(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {string} query
     * @param {number} page
     * @param {BountyType} btype
     * @param {BountyStatus} status
     * @param {number | null} [user]
     * @returns {Promise<BountyPage>}
     */
    bounty(query, page, btype, status, user) {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_bounty(this.__wbg_ptr, ptr0, len0, page, btype, status, isLikeNone(user) ? 0x100000001 : (user) >>> 0);
        return ret;
    }
    /**
     * @param {bigint} id
     * @returns {Promise<BountyInfo>}
     */
    bounty_info(id) {
        const ret = wasm.wasmsession_bounty_info(this.__wbg_ptr, id);
        return ret;
    }
    /**
     * @returns {Promise<string>}
     */
    cookie() {
        const ret = wasm.wasmsession_cookie(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {string} folder
     * @returns {Promise<void>}
     */
    create_folder(folder) {
        const ptr0 = passStringToWasm0(folder, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_create_folder(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @returns {Promise<CreditLog[]>}
     */
    credit_logs() {
        const ret = wasm.wasmsession_credit_logs(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} folder_id
     * @returns {Promise<void>}
     */
    delete_folder(folder_id) {
        const ret = wasm.wasmsession_delete_folder(this.__wbg_ptr, folder_id);
        return ret;
    }
    /**
     * @returns {Promise<void>}
     */
    donate_info() {
        const ret = wasm.wasmsession_donate_info(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {boolean} hath
     * @param {number} count
     * @param {number} price
     * @returns {Promise<void>}
     */
    exchange_ask(hath, count, price) {
        const ret = wasm.wasmsession_exchange_ask(this.__wbg_ptr, hath, count, price);
        return ret;
    }
    /**
     * @param {boolean} hath
     * @param {number} count
     * @param {number} price
     * @returns {Promise<void>}
     */
    exchange_bid(hath, count, price) {
        const ret = wasm.wasmsession_exchange_bid(this.__wbg_ptr, hath, count, price);
        return ret;
    }
    /**
     * @param {boolean} hath
     * @returns {Promise<ExchangePage>}
     */
    exchange_info(hath) {
        const ret = wasm.wasmsession_exchange_info(this.__wbg_ptr, hath);
        return ret;
    }
    /**
     * @returns {Promise<Folder[]>}
     */
    folder_info() {
        const ret = wasm.wasmsession_folder_info(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Promise<HentaiAtHome>}
     */
    hentai_at_home() {
        const ret = wasm.wasmsession_hentai_at_home(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Promise<HomeInfo>}
     */
    home() {
        const ret = wasm.wasmsession_home(this.__wbg_ptr);
        return ret;
    }
    /**
     * info(id: number, token: string) -> Promise<object>
     * @param {bigint} id
     * @param {string} token
     * @param {number} page
     * @param {boolean} local
     * @returns {Promise<Info>}
     */
    info(id, token, page, local) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_info(this.__wbg_ptr, id, ptr0, len0, page, local);
        return ret;
    }
    /**
     * @returns {Promise<KarmaPage>}
     */
    karma_logs() {
        const ret = wasm.wasmsession_karma_logs(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {FeatureSearchQuery} search
     * @returns {Promise<Favorites>}
     */
    list_favorite(search) {
        const ret = wasm.wasmsession_list_favorite(this.__wbg_ptr, search);
        return ret;
    }
    /**
     * @returns {Promise<GalleryPage>}
     */
    list_upload() {
        const ret = wasm.wasmsession_list_upload(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @returns {Promise<ImagePage[]>}
     */
    mpv(gid, token) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_mpv(this.__wbg_ptr, gid, ptr0, len0);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @returns {Promise<ImagePage[]>}
     */
    mpv_bypass(gid, token) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_mpv_bypass(this.__wbg_ptr, gid, ptr0, len0);
        return ret;
    }
    /**
     * Create a new session. `cookie_str` is your whole cookie header.
     * @param {string} cookie_str
     * @param {string | null} [proxy]
     * @param {string | null} [local_api]
     */
    constructor(cookie_str, proxy, local_api) {
        const ptr0 = passStringToWasm0(cookie_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(proxy) ? 0 : passStringToWasm0(proxy, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(local_api) ? 0 : passStringToWasm0(local_api, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_new(ptr0, len0, ptr1, len1, ptr2, len2);
        this.__wbg_ptr = ret >>> 0;
        WasmSessionFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Promise<News[]>}
     */
    news() {
        const ret = wasm.wasmsession_news(this.__wbg_ptr);
        return ret;
    }
    /**
     * nextImg(id: number, token: string, idx: number, aa?: string) -> Promise<object>
     * @param {bigint} id
     * @param {string} token
     * @param {number} idx
     * @param {string | null} [showkey]
     * @returns {Promise<Resp>}
     */
    nextImg(id, token, idx, showkey) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(showkey) ? 0 : passStringToWasm0(showkey, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_nextImg(this.__wbg_ptr, id, ptr0, len0, idx, ptr1, len1);
        return ret;
    }
    /**
     * @returns {Promise<PerkPage>}
     */
    perks() {
        const ret = wasm.wasmsession_perks(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Promise<SearchInfo[]>}
     */
    popular() {
        const ret = wasm.wasmsession_popular(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {bigint} apiuid
     * @param {string} apikey
     * @param {number} rating
     * @param {boolean} local
     * @returns {Promise<void>}
     */
    rateGallery(gid, token, apiuid, apikey, rating, local) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(apikey, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_rateGallery(this.__wbg_ptr, gid, ptr0, len0, apiuid, ptr1, len1, rating, local);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {boolean} local
     * @returns {Promise<void>}
     */
    removeFavorite(gid, token, local) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_removeFavorite(this.__wbg_ptr, gid, ptr0, len0, local);
        return ret;
    }
    /**
     * @param {Folder[]} folders
     * @returns {Promise<void>}
     */
    reorder_folder(folders) {
        const ptr0 = passArrayJsValueToWasm0(folders, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_reorder_folder(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * search({ query?: string, pid?: number, forward?: boolean }) -> Promise<object>
     * @param {string | null | undefined} query
     * @param {bigint | null | undefined} pid
     * @param {number | null | undefined} range
     * @param {string | null | undefined} seek
     * @param {string | null | undefined} jump
     * @param {boolean | null | undefined} forward
     * @param {AdvancedConfig | null | undefined} advanced
     * @param {number | null | undefined} categories
     * @param {boolean} local
     * @returns {Promise<Search>}
     */
    search(query, pid, range, seek, jump, forward, advanced, categories, local) {
        var ptr0 = isLikeNone(query) ? 0 : passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(seek) ? 0 : passStringToWasm0(seek, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(jump) ? 0 : passStringToWasm0(jump, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_search(this.__wbg_ptr, ptr0, len0, !isLikeNone(pid), isLikeNone(pid) ? BigInt(0) : pid, isLikeNone(range) ? 0xFFFFFF : range, ptr1, len1, ptr2, len2, isLikeNone(forward) ? 0xFFFFFF : forward ? 1 : 0, isLikeNone(advanced) ? 0 : addToExternrefTable0(advanced), isLikeNone(categories) ? 0xFFFFFF : categories, local);
        return ret;
    }
    /**
     * @param {bigint | null} [gid]
     * @param {string | null} [token]
     * @returns {Promise<StatsPage>}
     */
    stats(gid, token) {
        var ptr0 = isLikeNone(token) ? 0 : passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_stats(this.__wbg_ptr, !isLikeNone(gid), isLikeNone(gid) ? BigInt(0) : gid, ptr0, len0);
        return ret;
    }
    /**
     * @param {number} id
     * @param {number} page
     * @returns {Promise<ToplistItem[]>}
     */
    toplist(id, page) {
        const ret = wasm.wasmsession_toplist(this.__wbg_ptr, id, page);
        return ret;
    }
    /**
     * @returns {Promise<Toplists[]>}
     */
    toplists() {
        const ret = wasm.wasmsession_toplists(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {string} query
     * @param {number} page
     * @param {TorrentStatus} status
     * @param {number | null | undefined} my_torrents
     * @param {Sort} order
     * @param {boolean} asc
     * @returns {Promise<TorrentPage>}
     */
    torrents(query, page, status, my_torrents, order, asc) {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_torrents(this.__wbg_ptr, ptr0, len0, page, status, isLikeNone(my_torrents) ? 0x100000001 : (my_torrents) >>> 0, order, asc);
        return ret;
    }
    /**
     * @returns {Promise<string>}
     */
    tos() {
        const ret = wasm.wasmsession_tos(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {bigint} comment_id
     * @param {string} comment
     * @returns {Promise<void>}
     */
    updateComment(gid, token, comment_id, comment) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(comment, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_updateComment(this.__wbg_ptr, gid, ptr0, len0, comment_id, ptr1, len1);
        return ret;
    }
    /**
     * @param {bigint} id
     * @param {boolean} uploaded
     * @returns {Promise<UploadGalleryInfo>}
     */
    upload_info(id, uploaded) {
        const ret = wasm.wasmsession_upload_info(this.__wbg_ptr, id, uploaded);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {bigint} comment_id
     * @param {boolean} upvote
     * @param {bigint} apiuid
     * @param {string} apikey
     * @returns {Promise<CommentVote>}
     */
    voteComment(gid, token, comment_id, upvote, apiuid, apikey) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(apikey, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_voteComment(this.__wbg_ptr, gid, ptr0, len0, comment_id, upvote, apiuid, ptr1, len1);
        return ret;
    }
    /**
     * @param {bigint} gid
     * @param {string} token
     * @param {string} tag
     * @param {boolean} upvote
     * @param {bigint} apiuid
     * @param {string} apikey
     * @returns {Promise<string | undefined>}
     */
    voteTag(gid, token, tag, upvote, apiuid, apikey) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(apikey, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmsession_voteTag(this.__wbg_ptr, gid, ptr0, len0, ptr1, len1, upvote, apiuid, ptr2, len2);
        return ret;
    }
}
if (Symbol.dispose) WasmSession.prototype[Symbol.dispose] = WasmSession.prototype.free;

export function _start() {
    wasm._start();
}
export function __wbg___wbindgen_debug_string_0bc8482c6e3508ae(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_0095a73b8b156f76(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_undefined_9e4d92534c42d778(arg0) {
    const ret = arg0 === undefined;
    return ret;
}
export function __wbg___wbindgen_string_get_72fb696202c56729(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_be289d5034ed271b(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_d9b87ff7982e3b21(arg0) {
    arg0._wbg_cb_unref();
}
export function __wbg_abort_2f0584e03e8e3950(arg0) {
    arg0.abort();
}
export function __wbg_abort_d549b92d3c665de1(arg0, arg1) {
    arg0.abort(arg1);
}
export function __wbg_append_a992ccc37aa62dc4() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_arrayBuffer_bb54076166006c39() { return handleError(function (arg0) {
    const ret = arg0.arrayBuffer();
    return ret;
}, arguments); }
export function __wbg_call_389efe28435a9388() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments); }
export function __wbg_call_4708e0c13bdc8e95() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_clearTimeout_26e350acd8252ec6(arg0) {
    const ret = clearTimeout(arg0);
    return ret;
}
export function __wbg_debug_a4099fa12db6cd61(arg0) {
    console.debug(arg0);
}
export function __wbg_done_57b39ecd9addfe81(arg0) {
    const ret = arg0.done;
    return ret;
}
export function __wbg_entries_04679661ea6e74fc(arg0) {
    const ret = arg0.entries();
    return ret;
}
export function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_error_9a7fe3f932034cde(arg0) {
    console.error(arg0);
}
export function __wbg_fetch_995a2faca6a97afe(arg0) {
    const ret = fetch(arg0);
    return ret;
}
export function __wbg_fetch_afb6a4b6cacf876d(arg0, arg1) {
    const ret = arg0.fetch(arg1);
    return ret;
}
export function __wbg_getTime_1e3cd1391c5c3995(arg0) {
    const ret = arg0.getTime();
    return ret;
}
export function __wbg_getTimezoneOffset_81776d10a4ec18a8(arg0) {
    const ret = arg0.getTimezoneOffset();
    return ret;
}
export function __wbg_get_9b94d73e6221f75c(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_has_d4e53238966c12b6() { return handleError(function (arg0, arg1) {
    const ret = Reflect.has(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_headers_59a2938db9f80985(arg0) {
    const ret = arg0.headers;
    return ret;
}
export function __wbg_info_148d043840582012(arg0) {
    console.info(arg0);
}
export function __wbg_instanceof_Response_ee1d54d79ae41977(arg0) {
    let result;
    try {
        result = arg0 instanceof Response;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isArray_d314bb98fcf08331(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
}
export function __wbg_length_32ed9a279acd054c(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_log_6b5ca2e6124b2808(arg0) {
    console.log(arg0);
}
export function __wbg_new_0_73afc35eb544e539() {
    const ret = new Date();
    return ret;
}
export function __wbg_new_245cd5c49157e602(arg0) {
    const ret = new Date(arg0);
    return ret;
}
export function __wbg_new_361308b2356cecd0() {
    const ret = new Object();
    return ret;
}
export function __wbg_new_64284bd487f9d239() { return handleError(function () {
    const ret = new Headers();
    return ret;
}, arguments); }
export function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return ret;
}
export function __wbg_new_b5d9e2fb389fef91(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return wasm_bindgen__convert__closures_____invoke__h06062a7e72475f3b(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return ret;
    } finally {
        state0.a = state0.b = 0;
    }
}
export function __wbg_new_b949e7f56150a5d1() { return handleError(function () {
    const ret = new AbortController();
    return ret;
}, arguments); }
export function __wbg_new_dd2b680c8bf6ae29(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
}
export function __wbg_new_from_slice_a3d2629dc1826784(arg0, arg1) {
    const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_new_no_args_1c7c842f08d00ebb(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_new_with_str_and_init_a61cbc6bdef21614() { return handleError(function (arg0, arg1, arg2) {
    const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
    return ret;
}, arguments); }
export function __wbg_new_with_year_month_day_hr_min_sec_f82362c71c4dfc23(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ret = new Date(arg0 >>> 0, arg1, arg2, arg3, arg4, arg5);
    return ret;
}
export function __wbg_next_3482f54c49e8af19() { return handleError(function (arg0) {
    const ret = arg0.next();
    return ret;
}, arguments); }
export function __wbg_parse_708461a1feddfb38() { return handleError(function (arg0, arg1) {
    const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return ret;
}, arguments); }
export function __wbg_prototypesetcall_bdcdcc5842e4d77d(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
}
export function __wbg_queueMicrotask_0aa0a927f78f5d98(arg0) {
    const ret = arg0.queueMicrotask;
    return ret;
}
export function __wbg_queueMicrotask_5bb536982f78a56f(arg0) {
    queueMicrotask(arg0);
}
export function __wbg_resolve_002c4b7d9d8f6b64(arg0) {
    const ret = Promise.resolve(arg0);
    return ret;
}
export function __wbg_setTimeout_4360465139fa5dfe(arg0, arg1) {
    const ret = setTimeout(arg0, arg1);
    return ret;
}
export function __wbg_set_body_9a7e00afe3cfe244(arg0, arg1) {
    arg0.body = arg1;
}
export function __wbg_set_cache_315a3ed773a41543(arg0, arg1) {
    arg0.cache = __wbindgen_enum_RequestCache[arg1];
}
export function __wbg_set_credentials_c4a58d2e05ef24fb(arg0, arg1) {
    arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
}
export function __wbg_set_headers_cfc5f4b2c1f20549(arg0, arg1) {
    arg0.headers = arg1;
}
export function __wbg_set_method_c3e20375f5ae7fac(arg0, arg1, arg2) {
    arg0.method = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_mode_b13642c312648202(arg0, arg1) {
    arg0.mode = __wbindgen_enum_RequestMode[arg1];
}
export function __wbg_set_signal_f2d3f8599248896d(arg0, arg1) {
    arg0.signal = arg1;
}
export function __wbg_signal_d1285ecab4ebc5ad(arg0) {
    const ret = arg0.signal;
    return ret;
}
export function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_static_accessor_GLOBAL_12837167ad935116() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_SELF_a621d3dfbb60d0ce() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_WINDOW_f8727f0cf888e0bd() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_status_89d7e803db911ee7(arg0) {
    const ret = arg0.status;
    return ret;
}
export function __wbg_stringify_8d1cc6ff383e8bae() { return handleError(function (arg0) {
    const ret = JSON.stringify(arg0);
    return ret;
}, arguments); }
export function __wbg_text_083b8727c990c8c0() { return handleError(function (arg0) {
    const ret = arg0.text();
    return ret;
}, arguments); }
export function __wbg_then_0d9fe2c7b1857d32(arg0, arg1, arg2) {
    const ret = arg0.then(arg1, arg2);
    return ret;
}
export function __wbg_then_b9e7b3b5f1a9e1b5(arg0, arg1) {
    const ret = arg0.then(arg1);
    return ret;
}
export function __wbg_url_c484c26b1fbf5126(arg0, arg1) {
    const ret = arg1.url;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_value_0546255b415e96c1(arg0) {
    const ret = arg0.value;
    return ret;
}
export function __wbg_warn_f7ae1b2e66ccb930(arg0) {
    console.warn(arg0);
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 1357, function: Function { arguments: [], shim_idx: 1358, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h4f2df820db30f7a3, wasm_bindgen__convert__closures_____invoke__hae72a752180e41cf);
    return ret;
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 1380, function: Function { arguments: [Externref], shim_idx: 1381, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h1f488ca6a1b8324d, wasm_bindgen__convert__closures_____invoke__h59272f6c2d842ae8);
    return ret;
}
export function __wbindgen_cast_0000000000000003(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("CreditLog")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("Folder")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("ImagePage")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("News")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("SearchInfo")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("ToplistItem")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_cast_000000000000000b(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4, 4);
    // Cast intrinsic for `Vector(NamedExternref("Toplists")) -> Externref`.
    const ret = v0;
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
function wasm_bindgen__convert__closures_____invoke__hae72a752180e41cf(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__hae72a752180e41cf(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h59272f6c2d842ae8(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h59272f6c2d842ae8(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h06062a7e72475f3b(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h06062a7e72475f3b(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
const WasmSessionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmsession_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/* tslint:disable */
/* eslint-disable */
export interface AccceptedDetail {
    date: { secs: number; nanos: number };
    status: string;
    person: string;
    person_id: number;
    rating: string;
    comment: string | null;
}

export interface Active {
    vol: number;
    price: number;
}

export interface AdvancedConfig {
    explunged: boolean | null;
    require_torrent: boolean | null;
    min_pages: number | null;
    max_pages: number | null;
    min_rating: number | null;
    disable_lang: boolean | null;
    disable_uploader: boolean | null;
    disable_tags: boolean | null;
}

export interface Bounty {
    last_updated: { secs: number; nanos: number };
    headline: string;
    bounty_type: string;
    status: string;
    total: string;
    posted_by: string;
    uid: number;
    id: number;
}

export interface BountyInfo {
    title: string;
    img: string | null;
    description: string;
    reward: string;
    reward_detail: RewardDetail[];
    accepted: AccceptedDetail[];
    credits_owned: number;
    hath_owned: number;
    accepted_delivery: string;
    required_rank: string;
    status: string;
    type: string;
    posted: { secs: number; nanos: number };
    updated: { secs: number; nanos: number } | null;
    posted_by: string;
    posted_by_id: number;
    can_accept: boolean;
}

export interface BountyInternal {
    last_updated: string;
    headline: string;
    bounty_type: string;
    status: string;
    total: string;
    posted_by: string;
}

export interface BountyPage {
    pages: number;
    title: string;
    items: Bounty[];
    msg: string;
}

export interface Comment {
    id: number;
    text: string;
    votes: number | null;
    voters: string[];
    posted: string;
    uploader: string;
    updated: string | null;
}

export interface CommentVote {
    comment_id: number;
    comment_score: number;
}

export interface CreditLog {
    date: { secs: number; nanos: number };
    ammount: number;
    information: string;
}

export interface EHTracker {
    key: string;
    seedmins: number;
    gallery_completes: number;
    torrent_completes: number;
    uploaded_bytes: number;
    downloaded_bytes: number;
    up_down_ratio: number;
}

export interface ExchangePage {
    actionkey: string;
    credits: number;
    currency: number;
    bid_count: number;
    bid_price: number;
    ask_count: number;
    ask_price: number;
    l8h: Stats;
    l24h: Stats;
    active_bid: Active[];
    active_ask: Active[];
    recent: Recent[];
}

export interface Favorites {
    counts: number[];
    items: SearchInfo[];
    next: Pid | null;
    last: Pid | null;
    prev: Pid | null;
}

export interface FeatureSearchQuery {
    query: string | null;
    pid: Pid | null;
    forward: boolean;
    cat: number | null;
    order_by_published: boolean;
}

export interface File {
    file: string;
    link: string;
    size: number;
    hash: string;
}

export interface Folder {
    name: string;
    id: number;
    index: number;
}

export interface GP {
    gallery_visits: number;
    torrent_completions: number;
    archive_downloads: number;
    hentai_at_home: number;
}

export interface Gallery {
    name: string;
    uid: number;
    date: { secs: number; nanos: number };
    files: number;
    category: string;
}

export interface GalleryPage {
    published: [string, Gallery[]][];
    unpublished: [string, Gallery[]][];
}

export interface HentaiAtHome {
    clients: Stat[];
    client_download: File[];
}

export interface HomeInfo {
    gp: GP;
    ehtracker: EHTracker;
    toplist: TopListPlace[];
    power: ModerationPower;
    user_id: number;
}

export interface ImagePage {
    id: number;
    width: number;
    height: number;
    ratio: [number, number];
    key: string;
    name: string;
    url: string;
}

export interface Info {
    id: number;
    token: string;
    thumb: ImagePage;
    tags: string[];
    rating: number | null;
    newer: [number, string][];
    category: string;
    title: string;
    alt_title: string | null;
    per_page: number;
    pages: ImagePage[];
    posted: { secs: number; nanos: number };
    files: number;
    size: number;
    visible: boolean;
    language: string;
    uploader: string;
    uploader_id: number | null;
    parent: Parent | null;
    apiuid: number | null;
    apikey: string | null;
    favorited: number;
    favorite: number | null;
    my_stars: number | null;
    comments: Comment[];
}

export interface KarmaLog {
    date: { secs: number; nanos: number };
    ammount: number;
    from: string;
    from_id: number;
    topic: string;
    comment: string;
}

export interface KarmaPage {
    karma: number;
    logs: KarmaLog[];
}

export interface ModerationPower {
    current: number;
    base: number;
    awards: number;
    tagging: number;
    level: number;
    donations: number;
    forum_activity: number;
    uploads: number;
    account_age: number;
    sum: number;
}

export interface News {
    link: string;
    title: string;
    content: string;
    link2: string | null;
    date: string | null;
}

export interface Parent {
    id: number;
    key: string;
}

export interface Perk {
    title: string;
    description: string;
    free: number | null;
    price: number;
    disabled: boolean;
    purchased: boolean;
}

export interface PerkPage {
    hath: number;
    perks: Perk[][];
}

export interface Recent {
    time: { secs: number; nanos: number };
    seller: string;
    buyer: string;
    vol: number;
    price: number;
}

export interface Resp {
    prev: string | null;
    next: string | null;
    showkey: string;
    url: string;
    original: string | null;
    size: string;
    name: string;
    hash: string;
    w: number;
    h: number;
    count: number;
    gallery_key: string;
}

export interface RewardDetail {
    date: { secs: number; nanos: number } | null;
    amount: string;
    added_by: string;
    added_by_id: number;
}

export interface Search {
    progress_min: number;
    progress_max: number;
    items: SearchInfo[];
    first: boolean;
    last: boolean;
    count: string;
}

export interface SearchInfo {
    img: string | null;
    id: number;
    token: string;
    category: string;
    publisher: string;
    published: { secs: number; nanos: number };
    disowned: boolean;
    new: boolean;
    pages: number;
    rating: number;
    tags: string[];
    title: string;
    voted: boolean;
    favorite: number | null;
}

export interface SearchQuery {
    query: string | null;
    pid: number | null;
    range: number | null;
    seek: string | null;
    jump: string | null;
    forward: boolean;
    cat: number | null;
    advanced: AdvancedConfig | null;
}

export interface Stat {
    name: string;
    load_bytes: number;
    hits_sec: number | null;
    hits_gb: number | null;
    quality: number | null;
}

export interface StatRanking {
    all: string;
    year: string;
    month: string;
    yesterday: string;
}

export interface Stats {
    high: number;
    low: number;
    avg: number;
    vol: number;
}

export interface StatsPage {
    title: string;
    ranking: StatRanking | null;
    total: number;
    daily: VisitStat[];
    monthly: VisitStat[];
    yearly: VisitStat[];
}

export interface TopListItem {
    idx: number;
    name: string;
    link: ToplistLink;
}

export interface TopListPlace {
    position: number;
    name: string;
    toplist_id: number;
}

export interface Toplist {
    id: string;
    name: string;
    items: TopListItem[];
}

export interface ToplistItem {
    Rank: string;
    Score: string;
    Name: string;
}

export interface Toplists {
    name: string;
    toplists: Toplist[];
}

export interface Torrent {
    added: { secs: number; nanos: number };
    name: string;
    gallery: number;
    size: number;
    seeds: number;
    peers: number;
    dls: number;
    uploader: string;
    uploader_id: number;
}

export interface TorrentPage {
    count: number;
    name: string | null;
    user_id: number;
    items: Torrent[];
}

export interface UploadGalleryInfo {
    id: number;
    uploaded: boolean;
    title_en: string;
    title_jp: string;
    category: number;
    categories: [string, number][];
    langs: [string, [number, string][]][];
    lang: number;
    langtype: number;
    folderid: number;
    folders: [string, number][];
    comment: string;
    imgs: UploadImg[];
    added: { secs: number; nanos: number };
    posted: { secs: number; nanos: number } | null;
    files: number;
    file_size: number;
    parent: number | null;
    explunged: boolean;
    visible: boolean;
    token: string | null;
    not_ml: boolean | null;
}

export interface UploadImg {
    page: number;
    preview: string;
    token: string | null;
    fileindex: number | null;
}

export interface VisitStat {
    title: string;
    visits: number;
    hits: number;
    hits_norm: number;
    visits_norm: number;
}

export type BountyStatus = "Open" | "Reserved" | "Claimed" | "Completed" | "PostedMe" | "BoostedMe" | "AcceptedMe" | "ReservedMe" | "ClaimedMe" | "CompletedMe";

export type BountyType = "All" | "Standard" | "Translation" | "Editing";

export type Pid = { Single: number } | { Range: [number, number] };

export type Sort = "Downloads" | "Peers" | "Seeds" | "Size" | "Date";

export type ToplistLink = { User: string } | { Gallery: [number, string] };

export type TorrentStatus = "All" | "Seeded" | "Unseeded";


export class WasmSession {
    free(): void;
    [Symbol.dispose](): void;
    addComment(gid: bigint, token: string, comment: string): Promise<void>;
    addFavorite(gid: bigint, token: string, favcat: number, favnote: string, local: boolean): Promise<void>;
    auto_reorder_folder(): Promise<void>;
    bounty(query: string, page: number, btype: BountyType, status: BountyStatus, user?: number | null): Promise<BountyPage>;
    bounty_info(id: bigint): Promise<BountyInfo>;
    cookie(): Promise<string>;
    create_folder(folder: string): Promise<void>;
    credit_logs(): Promise<CreditLog[]>;
    delete_folder(folder_id: number): Promise<void>;
    donate_info(): Promise<void>;
    exchange_ask(hath: boolean, count: number, price: number): Promise<void>;
    exchange_bid(hath: boolean, count: number, price: number): Promise<void>;
    exchange_info(hath: boolean): Promise<ExchangePage>;
    folder_info(): Promise<Folder[]>;
    hentai_at_home(): Promise<HentaiAtHome>;
    home(): Promise<HomeInfo>;
    /**
     * info(id: number, token: string) -> Promise<object>
     */
    info(id: bigint, token: string, page: number, local: boolean): Promise<Info>;
    karma_logs(): Promise<KarmaPage>;
    list_favorite(search: FeatureSearchQuery): Promise<Favorites>;
    list_upload(): Promise<GalleryPage>;
    mpv(gid: bigint, token: string): Promise<ImagePage[]>;
    mpv_bypass(gid: bigint, token: string): Promise<ImagePage[]>;
    /**
     * Create a new session. `cookie_str` is your whole cookie header.
     */
    constructor(cookie_str: string, proxy?: string | null, local_api?: string | null);
    news(): Promise<News[]>;
    /**
     * nextImg(id: number, token: string, idx: number, aa?: string) -> Promise<object>
     */
    nextImg(id: bigint, token: string, idx: number, showkey?: string | null): Promise<Resp>;
    perks(): Promise<PerkPage>;
    popular(): Promise<SearchInfo[]>;
    rateGallery(gid: bigint, token: string, apiuid: bigint, apikey: string, rating: number, local: boolean): Promise<void>;
    removeFavorite(gid: bigint, token: string, local: boolean): Promise<void>;
    reorder_folder(folders: Folder[]): Promise<void>;
    /**
     * search({ query?: string, pid?: number, forward?: boolean }) -> Promise<object>
     */
    search(query: string | null | undefined, pid: bigint | null | undefined, range: number | null | undefined, seek: string | null | undefined, jump: string | null | undefined, forward: boolean | null | undefined, advanced: AdvancedConfig | null | undefined, categories: number | null | undefined, local: boolean): Promise<Search>;
    stats(gid?: bigint | null, token?: string | null): Promise<StatsPage>;
    toplist(id: number, page: number): Promise<ToplistItem[]>;
    toplists(): Promise<Toplists[]>;
    torrents(query: string, page: number, status: TorrentStatus, my_torrents: number | null | undefined, order: Sort, asc: boolean): Promise<TorrentPage>;
    tos(): Promise<string>;
    updateComment(gid: bigint, token: string, comment_id: bigint, comment: string): Promise<void>;
    upload_info(id: bigint, uploaded: boolean): Promise<UploadGalleryInfo>;
    voteComment(gid: bigint, token: string, comment_id: bigint, upvote: boolean, apiuid: bigint, apikey: string): Promise<CommentVote>;
    voteTag(gid: bigint, token: string, tag: string, upvote: boolean, apiuid: bigint, apikey: string): Promise<string | undefined>;
}

export function _start(): void;

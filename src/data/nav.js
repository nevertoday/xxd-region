// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: true 的页面还没写，左侧导航里显示「编写中」，不给链接；写完一页改成 ready: true（check-i18n 会拦住还空着却标了 true 的页）。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站只有两种语言：读者住在中国大陆，中文是主站，英文给想对照原文的人。 */
export const LANGS = [
  { code: "zh", name: "中文", html: "zh-CN" },
  { code: "en", name: "English", html: "en" },
];
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
/** 当前页面的语言：路径以 /en/ 开头是英文，其余是中文 */
export const langOf = (pathname = "") => (/^\/en(?=\/|$)/.test(pathname.slice(BASE.length)) ? "en" : "zh");
/** 站内链接：部署在子路径时自动加前缀；英文加 /en */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/** 同一页在另一种语言里的地址（两种语言的页面一一对应；404 回首页） */
export const langHref = (pathname, target) => {
  const rel = (pathname.slice(BASE.length) || "/").replace(/^\/en(?=\/|$)/, "") || "/";
  return link(/\/404\/?$/.test(rel) ? "/" : rel, target);
};
/** 取某个对象在当前语言下的字段：英文先找 x.en[key]，没有就用中文 */
export const t = (x, key, lang) => (lang === "zh" ? x[key] : x.en?.[key] ?? x[key]);

/** 这个教程站自己的仓库（反馈、源码）。 */
export const REPO = "https://github.com/nevertoday/xxd-region";
/** Apple 支持：账户、付款和地区的规定以它为准。具体文章的链接写在正文里。 */
export const APPLE = "https://support.apple.com/zh-cn/apple-account";
export const APPLE_EN = "https://support.apple.com/en-us/apple-account";

// 新手入门：给第一次想要外区账户的人。三课讲三件最要紧的事，讲完再去走完整教程。
export const LESSONS = [
  { n: 1, slug: "1-region", title: "账户的地区，管的是什么", minutes: "8 分钟", ready: false, sum: "地区决定商店里有哪些 App、用什么货币标价、能用什么付款；按 Apple 的条款，它是你居住的国家或地区", en: { title: "What an account's region decides", minutes: "8 minutes", sum: "The region decides which apps the store has, what currency prices are in and how you can pay; Apple's terms tie it to where you live" } },
  { n: 2, slug: "2-two-sign-ins", title: "iCloud 和 App Store 是两个登录位", minutes: "8 分钟", ready: false, sum: "iCloud 一直登你自己的账户，外区账户只登在「媒体与购买项目」里；别人的账户永远不登进 iCloud", en: { title: "iCloud and the App Store are two separate sign-ins", minutes: "8 minutes", sum: "Keep your own account in iCloud and sign the other-region account into Media & Purchases only; never put someone else's account in iCloud" } },
  { n: 3, slug: "3-new-account", title: "另注册一个，别动你的主账户", minutes: "8 分钟", ready: false, sum: "给主账户换地区要先清掉余额、订阅和家人共享，买过的东西也不跟着走；另注册一个更省事", en: { title: "Make a second account; leave your main one alone", minutes: "8 minutes", sum: "Moving your main account means clearing your balance, subscriptions and Family Sharing first, and purchases don't come along; a second account is simpler" } },
];
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-why", title: "先想清楚要它做什么", minutes: "读 5 分钟", ready: false, sum: "你要的是某个 App、某项服务还是某个价格；它在不在那个地区，由 Apple 和开发者决定", en: { title: "Know what you want it for", minutes: "5-minute read", sum: "Whether you're after an app, a service or a price; whether it's offered in a region is up to Apple and the developer" } },
  { n: 1, slug: "1-prepare", title: "准备邮箱和手机号", minutes: "5 分钟", ready: false, sum: "一个没注册过 Apple 账户的邮箱，一个你一直能收到验证码的手机号", en: { title: "Get an email address and a phone number ready", minutes: "5 minutes", sum: "An email address that has never been used for an Apple Account, and a phone number where you can always get codes" } },
  { n: 2, slug: "2-create", title: "注册账户：选对国家或地区", minutes: "15 分钟", ready: false, sum: "在网页或 iPhone 上注册，第一步选的国家或地区就是这个账户的地区", en: { title: "Create the account in the right country or region", minutes: "15 minutes", sum: "Sign up on the web or on your iPhone; the country or region you pick first becomes the account's region" } },
  { n: 3, slug: "3-payment", title: "付款方式：无、礼品卡、银行卡", minutes: "10 分钟", ready: false, sum: "什么时候能选「无」，礼品卡只能在买它的国家或地区用，各地区收哪些卡", en: { title: "Payment: None, gift cards or a card", minutes: "10 minutes", sum: "When None is offered, why a gift card only works in the country or region it was bought for, and which cards each region takes" } },
  { n: 4, slug: "4-sign-in", title: "只在「媒体与购买项目」里登录", minutes: "10 分钟", ready: false, sum: "在 iPhone 上把 App Store 换成外区账户，下载、更新，再换回来，iCloud 一直不动", en: { title: "Sign in under Media & Purchases only", minutes: "10 minutes", sum: "Switch the App Store to the other-region account on your iPhone, download and update, then switch back, with iCloud untouched" } },
  { n: 5, slug: "5-subscriptions", title: "订阅、涨价和续费", minutes: "10 分钟", ready: false, sum: "订阅在哪管、涨价时 Apple 怎么通知你、换区前为什么要先取消", en: { title: "Subscriptions, price rises and renewals", minutes: "10 minutes", sum: "Where to manage subscriptions, how Apple tells you about a price rise, and why you cancel before changing region" } },
  { n: 6, slug: "6-keep-safe", title: "保住账户：锁定了找谁", minutes: "10 分钟", ready: false, sum: "账户被锁、购买被拒时找 Apple 官方，别买、别借、别分享账户", en: { title: "Keep it safe: who to ask when it's locked", minutes: "10 minutes", sum: "When the account is locked or a purchase is refused, go to Apple; don't buy, borrow or share accounts" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "注册", en: { group: "Signing up" }, items: [
    { slug: "us-account", title: "注册一个美区 Apple 账户", ready: false, en: { title: "Create a US Apple Account" } },
    { slug: "tr-account", title: "注册一个土区 Apple 账户", ready: false, en: { title: "Create a Turkey Apple Account" } },
    { slug: "change-region", title: "把已有账户换到别的地区", ready: false, en: { title: "Move an existing account to another region" } },
  ]},
  { group: "日常用", en: { group: "Everyday use" }, items: [
    { slug: "switch-store", title: "在 iPhone 上切换 App Store 账户", ready: false, en: { title: "Switch App Store accounts on your iPhone" } },
    { slug: "gift-card", title: "买和兑换礼品卡", ready: false, en: { title: "Buy and redeem a gift card" } },
    { slug: "price-rise", title: "订阅涨价了怎么办", ready: false, en: { title: "When a subscription's price goes up" } },
    { slug: "check-region", title: "看一眼账户现在是哪个地区", ready: false, en: { title: "Check which region an account is in" } },
  ]},
  { group: "出问题了", en: { group: "When things go wrong" }, items: [
    { slug: "cannot-create", title: "提示「此时无法创建你的账户」", ready: false, en: { title: "\"Your account cannot be created at this time\"" } },
    { slug: "purchase-failed", title: "购买被拒，或者说付款方式有问题", ready: false, en: { title: "A purchase is refused or your payment method has a problem" } },
    { slug: "locked", title: "账户被锁定了", ready: false, en: { title: "Your account is locked" } },
  ]},
  { group: "避坑", en: { group: "Avoiding traps" }, items: [
    { slug: "shared-accounts", title: "别人给的账户为什么不能登", ready: false, en: { title: "Why you shouldn't sign in to an account someone gives you" } },
    { slug: "bad-tutorials", title: "哪些教程不该照做", ready: false, en: { title: "Tutorials you shouldn't follow" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 每句话都出自 docs/sources/README.md 里的 Apple 官方来源，出处跟着各自的 Wiki 条目走。
export const GLOSSARY = {
  "Apple 账户": { tip: "你在 App Store、iCloud 和其他 Apple 服务里登录用的账户，以前叫 Apple ID。2024 年随 iOS 18 改的名，邮箱和密码都不变。", wiki: "apple-account", en: { label: "Apple Account", tip: "The account you sign in with for the App Store, iCloud and other Apple services, formerly called Apple ID. It was renamed with iOS 18 in 2024; your email and password didn't change." } },
  国家或地区: { tip: "每个 Apple 账户都属于一个国家或地区。它决定商店里有什么、价格用什么货币、能用哪些付款方式。", wiki: "home-country", en: { label: "country or region", tip: "Every Apple Account belongs to one country or region. It decides what the store offers, what currency prices are in and which payment methods you can use." } },
  居住国家或地区: { tip: "Apple 媒体服务条款里的 Home Country：服务供你在居住的国家或地区使用；在哪个国家或地区创建账户，就等于指定它为你的居住国家或地区。", wiki: "home-country", en: { label: "Home Country", tip: "The term in Apple's Media Services Terms: the services are for use in your country or territory of residence, and creating an account for a country or region specifies it as your Home Country." } },
  媒体与购买项目: { tip: "iPhone 设置里单独的一个登录位，App Store、音乐、图书这些买东西的地方用它。它可以登一个和 iCloud 不同的账户。", wiki: "media-purchases", en: { label: "Media & Purchases", tip: "A separate sign-in in your iPhone's Settings, used by the App Store, Music, Books and the other places you buy things. It can use a different account from iCloud." } },
  备选账户: { tip: "Apple 的叫法：只登在「媒体与购买项目」里、用来买东西的那个账户。登 iCloud 和手机上大部分功能的那个叫首选账户。", wiki: "media-purchases", en: { label: "secondary Apple Account", tip: "Apple's name for an account signed in only under Media & Purchases. The one signed in for iCloud and most features on your iPhone is the primary Apple Account." } },
  云上贵州: { tip: "中国大陆的 iCloud 由云上贵州运营。账户改出中国大陆，iCloud 里的内容会迁到 Apple，迁完以后云上贵州删掉它那份。", wiki: "icloud-china", en: { label: "GCBD", tip: "GCBD (Guizhou-Cloud Big Data) operates iCloud in China mainland. If an account moves out of China mainland, its iCloud content is migrated to Apple, and GCBD then deletes its copy." } },
  家人共享: { tip: "最多六个人一起用的群组，可以共享购买项目和订阅。Apple 的条款要求所有家庭成员的居住国家或地区相同。", wiki: "family-sharing", en: { label: "Family Sharing", tip: "A group of up to six people who can share purchases and subscriptions. Apple's terms require every family member to have the same Home Country." } },
  充值卡: { tip: "Apple 的礼品卡（Gift Card），兑换后变成账户余额。只能用在买它的那个国家或地区的账户上，条款不许转卖。", wiki: "gift-card", en: { label: "gift card", tip: "An Apple Gift Card, which turns into account balance when you redeem it. It only works on an account in the country or region it was bought in, and the terms don't allow reselling it." } },
  "Apple 账户余额": { tip: "兑换充值卡或充值以后存在账户里的钱，买东西时先扣它。换地区之前要先把它用完。", wiki: "gift-card", en: { label: "Apple Account balance", tip: "Money held in your account after you redeem a gift card or add funds. Purchases use it first, and you have to spend it before changing region." } },
  双重认证: { tip: "第一次在新设备或网页上登录时，除了密码，还要输入一个六位验证码，它显示在你的受信任设备上，或者发到你的受信任电话号码。", wiki: "two-factor", en: { label: "two-factor authentication", tip: "When you first sign in on a new device or on the web, you enter a six-digit code as well as your password; it shows on your trusted devices or is sent to your trusted phone number." } },
  受信任电话号码: { tip: "能收到双重认证验证码的手机号。开着双重认证，账户里至少要有一个。", wiki: "two-factor", en: { label: "trusted phone number", tip: "A phone number that can receive your two-factor verification codes. With two-factor authentication on, you need at least one on file." } },
  激活锁: { tip: "打开「查找」时自动开启，把设备和登录的 Apple 账户绑在一起。没有这个账户的密码，谁都关不了「查找」，也抹不掉、激活不了这台设备。", wiki: "activation-lock", en: { label: "Activation Lock", tip: "Turns on automatically with Find My and links the device to the Apple Account signed in on it. Without that account's password, nobody can turn off Find My, erase the device or reactivate it." } },
};

// Wiki 条目：每条同样的结构，一句话（one）、打个比方（like）、放到你身上（here，一两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、++粗墨线++（只给照做会出错的坑）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「怎么写」：像懂行的朋友讲给你听。like 是读者认得出的一个画面；here 写成连着的话；myths 先引读者心里的那句话，再直接回答。
// 每条事实都要出自 docs/sources/README.md 里的 Apple 官方来源，附原文链接；价格写明查看日期。step: 对应的主线步骤；howto: 对应的 How-to。
// one 会当作页面描述和 Wiki 目录里的摘要，所以 one 里不放链接。
// nav.js 的 GLOSSARY 用 wiki: 指向这里的 slug。
// 待写：骨架阶段每一条只有标题，one、like、here、myths 都空着；写完一条就把内容填上，全部写完删掉这一行（npm run release 看到它会停下）。

export const WIKI_GROUPS = ["账户和地区", "付款", "安全"];

const stub = (slug, title, group) => ({ slug, title, group, one: "", like: "", here: [], myths: [] });

export const WIKI = [
  // ---------- 账户和地区 ----------
  stub("apple-account", "Apple 账户（Apple ID）", "账户和地区"),
  stub("home-country", "账户的国家或地区", "账户和地区"),
  stub("media-purchases", "媒体与购买项目", "账户和地区"),
  stub("icloud-china", "云上贵州运营的 iCloud", "账户和地区"),
  stub("app-availability", "App 在哪些地区上架", "账户和地区"),
  stub("family-sharing", "家人共享", "账户和地区"),
  // ---------- 付款 ----------
  stub("payment-none", "付款方式「无」", "付款"),
  stub("gift-card", "Apple 礼品卡", "付款"),
  stub("subscription-price", "订阅涨价", "付款"),
  // ---------- 安全 ----------
  stub("two-factor", "双重认证和受信任电话号码", "安全"),
  stub("activation-lock", "激活锁", "安全"),
  stub("account-locked", "账户被锁定", "安全"),
];

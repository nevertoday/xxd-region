// Wiki 条目：每条同样的结构，一句话（one）、打个比方（like）、放到你身上（here，一两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、++粗墨线++（只给照做会出错的坑）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「怎么写」：像懂行的朋友讲给你听。like 是读者认得出的一个画面；here 写成连着的话；myths 先引读者心里的那句话，再直接回答。
// 每条事实都要出自 docs/sources/README.md 里的 Apple 官方来源，附原文链接；价格写明查看日期。step: 对应的主线步骤；howto: 对应的 How-to。
// one 会当作页面描述和 Wiki 目录里的摘要，所以 one 里不放链接。
// nav.js 的 GLOSSARY 用 wiki: 指向这里的 slug。

export const WIKI_GROUPS = ["账户和地区", "付款", "安全"];


export const WIKI = [
  // ---------- 账户和地区 ----------
  {
    slug: "apple-account", title: "Apple 账户（Apple ID）", group: "账户和地区",
    one: "Apple 账户就是以前的 Apple ID，你在 iPhone 上登 iCloud、在 App Store 里买东西，用的都是它。每个账户都属于一个国家或地区，大家说的「美区账户」「土区账户」，其实就是国家或地区设成了美国、土耳其的 Apple 账户。",
    like: "像一张会员卡。2024 年卡面上的名字从 Apple ID 换成了 Apple 账户，卡号和密码都没变；每张卡都是在某一家分店办的，办卡的那家分店决定了你能买到什么、能怎么付钱。",
    here: [
      `2024 年 6 月，Apple 宣布随着 iOS 18、macOS Sequoia 这一批系统更新，Apple ID 改名为 Apple 账户，登录用的还是原来那套（[Apple 新闻稿](https://www.apple.com/newsroom/2024/06/new-features-come-to-apple-services-this-fall/)，英文）。所以网上说的「外区 ID」「美区 Apple ID」，和 Apple 现在文章里写的「Apple 账户」是同一个东西，Apple 的注册文章也写着，你仍然可以用原来的电子邮件地址或电话号码和密码登录（[如何创建新的 Apple 账户](https://support.apple.com/zh-cn/108647)）。`,
      `一个账户管的事很多：Apple 说，它让你的设备一起工作，也让你用上 iCloud、App Store 这些服务（[在网页上或设备设置中登录 Apple 账户](https://support.apple.com/zh-cn/111001)）。可这些服务不一定要登同一个账户。iPhone 的设置里，iCloud 和「媒体与购买项目」是两个登录位，外区账户只该登在后面那个里，见[媒体与购买项目](/wiki/media-purchases/)。另外每个账户都有自己的国家或地区，商店里有什么、能怎么付钱都跟着它走，见[账户的国家或地区](/wiki/home-country/)。`,
    ],
    list: [
      ["Apple 账户", `Apple 中文页面和 iPhone 设置里现在的叫法（[108647](https://support.apple.com/zh-cn/108647)）`],
      ["Apple ID", `2024 年以前的叫法，中国大陆的条款里还写着 Apple 账户以前称为 Apple ID（[中国大陆条款](https://www.apple.com.cn/legal/internet-services/itunes/cn/terms.html)）`],
      ["Apple Account", `Apple 英文页面上的叫法（[108647 英文版](https://support.apple.com/en-us/108647)）`],
      ["Apple Hesabı", `土耳其语的叫法，旧名 Apple Kimliği，在土耳其的条款里能看到（[土耳其条款](https://www.apple.com/tr/legal/internet-services/itunes/tr/terms.html)，土耳其语）`],
    ],
    listTitle: "你会在哪儿看到它", listHead: ["叫法", "在哪里"],
    myths: [
      `「Apple ID 和 Apple 账户是两个东西，要分别注册。」不是，只是改了个名，原来的邮箱和密码照样能登（[108647](https://support.apple.com/zh-cn/108647)）。`,
      "「美区账户是一种特别的账户。」它就是一个普通的 Apple 账户，只是国家或地区选了美国。按 Apple 的条款，你在哪个国家或地区创建账户，就等于把那里指定为你的居住国家或地区，这件事见[账户的国家或地区](/wiki/home-country/)。",
      `「家里人共用一个账户最省事。」Apple 说不要和他人共用一个账户，家庭成员也不例外，因为共用就等于别人可以看到你所有的个人内容；要是别人帮你设置了账户和密码，Apple 建议你改掉密码（[安全性和 Apple 账户](https://support.apple.com/zh-cn/102614)）。想和家人分享买过的东西，用的是[家人共享](/wiki/family-sharing/)。`,
    ],
    see: ["home-country", "media-purchases", "two-factor"],
    step: 1, howto: "us-account",
  },
  {
    slug: "home-country", title: "账户的国家或地区", group: "账户和地区",
    one: "每个 Apple 账户都属于一个国家或地区，它决定商店里有什么、能用哪些付款方式、能兑换哪里的充值卡。按 Apple 媒体服务条款，它应该是你居住的地方：你在哪个国家或地区创建账户，就等于把那里指定为你的居住国家或地区。",
    like: "像办会员卡时选的那家分店。在哪家分店办的卡，你就只能在那家的货架上挑东西、用那家收的方式付钱、用那家卖的储值券；而会员章程里写着，这家分店应该是你住的那座城里的那一家。",
    here: [
      `国家或地区管着的事，比大多数人想的多。同一个 App 在这个地区的 App Store 里有，在那个地区可能就没有；美国的账户能用 Apple Pay 和 PayPal，土耳其的账户收的是银行卡、手机账单支付和账户余额（[可与 Apple 账户搭配使用的付款方式](https://support.apple.com/zh-cn/111741)）；在美国买的充值卡，只能用在美国的账户上（[美国充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)，英文）。下面这张表把常碰到的几样列了出来。`,
      `按 Apple 的条款，这个地区应该是你住的地方。美国、土耳其、中国大陆三份 Apple 媒体服务条款写的是同一件事：服务供你在居住的国家或地区使用，你为某个国家或地区创建账户，就等于把它指定为你的居住国家或地区（[美国条款](https://www.apple.com/legal/internet-services/itunes/us/terms.html)，英文；[中国大陆条款](https://www.apple.com.cn/legal/internet-services/itunes/cn/terms.html)）。条款也写了不遵守的后果。美国和中国大陆的条款说，你没有遵守、或者 Apple 怀疑你没有遵守条款时，Apple 可以不通知你就终止你的账户；土耳其条款的范围窄一些，针对的是没有尽到付款这类基本义务，或者欺诈（[土耳其条款](https://www.apple.com/tr/legal/internet-services/itunes/tr/terms.html)，土耳其语）。账户的地区和你实际住的地方对不上时，Apple 实际上会怎么处理，它没有公开说过。这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。`,
      `所以注册时的地址，住在美国或土耳其的人填自己的真实地址就好；本站不提供地址，也不教怎么编。还有一件实际的事：添加银行卡时，Apple 要你确认姓名、账单邮寄地址和其他信息与你在金融机构留存的信息一致（[为你的 Apple 账户添加付款方式](https://support.apple.com/zh-cn/118429)），所以一个和银行资料对不上的地址，到你要加卡的那天就会卡住。Apple 给搬家的人的建议也写得很直白：不想填新地区的付款方式，就等你本人到了那里，再创建新的 Apple 账户（[更改 Apple 账户国家或地区](https://support.apple.com/zh-cn/118283)）。规则和后果就是这些，怎么做由你自己决定；这是 Apple 和你之间的条款问题，本站讲的是条款怎么写，不是法律意见。`,
    ],
    list: [
      ["App 和服务", `开发者决定 App 在哪些国家或地区上架；Apple 自己的服务也分地区，比如土耳其的 Apple Books 只有公版书（[Apple 媒体服务的提供情况](https://support.apple.com/zh-cn/118205)），见[App 在哪些地区上架](/wiki/app-availability/)`],
      ["付款方式", `美国收 Apple Pay、PayPal 和大多数信用卡、借记卡；土耳其收大多数信用卡和借记卡、手机账单支付和账户余额（[111741](https://support.apple.com/zh-cn/111741)）`],
      ["充值卡", `只能用在买卡的那个国家或地区的账户上（[美国充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)、[土耳其充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/tr/terms.html)），见[Apple 礼品卡](/wiki/gift-card/)`],
      ["价格和货币", `iCloud+ 在美国用美元标价，在土耳其用里拉标价，土耳其的价格都含税（[iCloud+ 方案和定价](https://support.apple.com/zh-cn/108047)）`],
      ["家人共享", `所有家庭成员的居住国家或地区要相同（[美国条款](https://www.apple.com/legal/internet-services/itunes/us/terms.html)），见[家人共享](/wiki/family-sharing/)`],
      ["iCloud 由谁运营", `国家或地区是中国大陆的账户，iCloud 由云上贵州运营（[进一步了解 iCloud（中国大陆）](https://support.apple.com/zh-cn/111754)），见[云上贵州运营的 iCloud](/wiki/icloud-china/)`],
    ],
    listTitle: "国家或地区管着哪些事", listHead: ["事情", "怎么跟着地区走"],
    myths: [
      `「地区就是注册时随手选的一项，以后想改就改。」能改，但要先清场：用完余额，取消订阅并等订阅期结束，等预购、租借和退款处理完，可能还要填新地区的付款方式；在家人共享群组里的人，可能根本改不了（[118283](https://support.apple.com/zh-cn/118283)）。所以本站建议另注册一个，别动你的主账户，见[另注册一个，别动你的主账户](/start/3-new-account/)。`,
      "「条款写居住地，只是走个形式。」条款怎么写、按条款 Apple 可以做什么，上面都摆出来了；Apple 实际上怎么执行，它没有公开说过。本站不替 Apple 猜，也不替你下结论。",
      `「账单地址填哪里都一样。」不一样。添加付款方式时，姓名和账单邮寄地址要和你在金融机构留存的信息一致（[118429](https://support.apple.com/zh-cn/118429)）；付款方式被拒时，Apple 让你先查的也是这一条（[如果你的付款方式被拒绝](https://support.apple.com/zh-cn/108095)）。`,
    ],
    see: ["apple-account", "app-availability", "icloud-china"],
    step: 2, howto: "change-region",
  },
  {
    slug: "media-purchases", title: "媒体与购买项目", group: "账户和地区",
    one: "「媒体与购买项目」是 iPhone 设置里单独的一个登录位，App Store、音乐这些买东西的地方用它。它可以登一个和 iCloud 不同的账户，Apple 把只登在这里的账户叫备选账户。",
    like: "像家里的大门钥匙和信箱钥匙。大门钥匙（iCloud）管着你的照片、通讯录和备份，一直是你自己的；信箱钥匙（媒体与购买项目）只开收东西的那个口，换一把也不影响你进家门。真正要小心的是，别一着急把大门钥匙也换了。",
    here: [
      `Apple 在讲迁移购买项目的文章里，把这种用法说得很清楚：用来登录 iCloud 和 iPhone 上大多数功能的账户叫首选 Apple 账户，只用来登录「媒体与购买项目」的叫备选 Apple 账户（[将购买项目从一个 Apple 账户迁移到另一个 Apple 账户](https://support.apple.com/zh-cn/117294)）。同一篇也写了怎么换：在「设置」里轻点你的姓名，要是购买用的是另一个账户，它会显示在 **媒体与购买项目** 下面；想换，就轻点 **媒体与购买项目**，再轻点 **退出登录**，退出以后再轻点 **媒体与购买项目**，选 **不是 [你的姓名]？**，登录另一个账户。如果你的 iPhone 上看到的不一样，以你看到的为准。`,
      `换的时候最容易出错的，是退出登录点错了地方。++你的姓名那一页最底下的 **退出登录** 是整机退出++，它会把 iCloud、App Store 和其他媒体服务、iMessage 信息和 FaceTime 通话一起退掉（[在你的设备上退出登录 Apple 账户和 iCloud](https://support.apple.com/zh-cn/104958)），你要退的只是 **媒体与购买项目** 里那一个。还有两条限制要知道。同一时间只能有一个账户登录 App Store 和其他媒体服务，用另一个账户买的内容也没法用这个账户更新（[在网页上或设备设置中登录 Apple 账户](https://support.apple.com/zh-cn/111001)），所以美区账户下的 App 要更新，得先换回美区账户。一个账户最多能关联十台拿来买东西的设备，其中电脑最多五台；一台以前关联过的设备再关联别的账户时，可能会提示要等上一段时间，最长 90 天（[查看和移除关联设备](https://support.apple.com/zh-cn/118412)）。`,
    ],
    myths: [
      `「外区账户一登进 App Store，iCloud 里的照片就没了。」不会。只要你退的是 **媒体与购买项目** 里那一个，iCloud 一直登着你自己的账户；退出整机账户，才会在这台设备上关掉 iCloud 照片、iCloud 云盘这些服务，存在 iCloud 里的内容仍留在 iCloud 里（[104958](https://support.apple.com/zh-cn/104958)）。`,
      `「两个账户可以同时登着，想用哪个用哪个。」不行，同一时间只能有一个账户登录 App Store 和其他媒体服务（[111001](https://support.apple.com/zh-cn/111001)）。要下载或更新哪个账户的 App，就先切到哪个账户。`,
      `「Apple 说一个账户走天下，另登一个是不是不允许？」Apple 确实建议每次登录 Apple 设备或服务时都用同一个账户（[管理和使用你的 Apple 账户](https://support.apple.com/zh-cn/105023)），可它也在讲迁移购买项目的那篇文章里讲了首选、备选两个账户的用法，还给了把备选账户的购买项目迁到首选账户的办法。迁移有个前提，两个账户要设成同一个国家或地区（[117294](https://support.apple.com/zh-cn/117294)），所以美区账户里买的东西，迁不到国区的主账户上。`,
    ],
    see: ["activation-lock", "icloud-china", "apple-account"],
    step: 4, howto: "switch-store",
  },
  {
    slug: "icloud-china", title: "云上贵州运营的 iCloud", group: "账户和地区",
    one: "国家或地区是中国大陆的 Apple 账户，iCloud 由云上贵州运营，你的照片、备份这些 iCloud 内容存在云上贵州。账户改出中国大陆，内容会跨境迁到 Apple，迁完以后云上贵州删掉它那份。",
    like: "像你的东西一直寄存在本地的一家仓库。要是你把会员转到外地的分店，仓库会把整批东西打包运去外地的总仓，运完就把本地那份清掉。你本来想要的也许只是外地店里的一样东西，结果搬了一整个家。",
    here: [
      `Apple 的说法是，iCloud 在中国大陆由云上贵州（云上艾珀（贵州）技术有限公司）运营，iCloud 服务和你存在 iCloud 里的所有数据，包括照片、视频、文稿和备份，都遵循云上贵州的那份条款（[进一步了解 iCloud（中国大陆）](https://support.apple.com/zh-cn/111754)）。条款写了改地区时会发生什么：把账户的国家或地区从中国大陆改成别的，就等于授权云上贵州把你的内容迁到 Apple，并且明确同意把内容跨境转移到中国大陆以外；迁移完成后，云上贵州删除这些内容，不再提供服务。反过来改进中国大陆，内容就从 Apple 迁到云上贵州（[iCloud（由云上贵州运营）条款与条件](https://www.apple.com.cn/legal/internet-services/icloud/cn_si/gcbd-terms.html)）。中文版的[更改 Apple 账户国家或地区](https://support.apple.com/zh-cn/118283)也专门有一节讲这件事，英文版没有这一节，这里以中文版和条款为准。`,
      `所以为了一个 App 去给国区的主账户换地区，代价比看上去大得多，iCloud 里的整个家都会跟着搬。Apple 讲中国大陆 iCloud 的那篇文章还写着，如果你不是居住在中国大陆的中国公民，可以把账户的国家或地区改成你现在所在的地方，在 Apple 的条款下继续用 iCloud（[111754](https://support.apple.com/zh-cn/111754)）。==想用外区的 App Store，另注册一个账户，只登在「媒体与购买项目」里，iCloud 和里面的内容一动不动。==怎么做见[媒体与购买项目](/wiki/media-purchases/)和[另注册一个，别动你的主账户](/start/3-new-account/)。`,
    ],
    myths: [
      `「改了地区，iCloud 里的东西就丢了。」条款说的是迁移：内容从云上贵州迁到 Apple，迁完云上贵州删掉它那份（[云上贵州条款](https://www.apple.com.cn/legal/internet-services/icloud/cn_si/gcbd-terms.html)）。可迁移本身就是一次跨境转移，条款还写了，在适用法律允许的范围内，你尝试改地区时可能会受到限制。`,
      `「只要不碰 iCloud，主账户改地区也没事。」iCloud 跟着账户走，账户的地区一改，迁移就会开始。而且改之前还要用完余额、取消订阅并等订阅期结束（[118283](https://support.apple.com/zh-cn/118283)）。`,
      "「把外区账户登进 iCloud，就能用海外的 iCloud 了。」本站不建议这样做。外区账户只登 **媒体与购买项目**；登在 iCloud 里的账户管着你的照片和通讯录，开着「查找」的话，这台设备的激活锁也会绑在它上面，见[激活锁](/wiki/activation-lock/)。别人的账户更是永远不要登进 iCloud。",
    ],
    see: ["home-country", "media-purchases", "activation-lock"],
    howto: "change-region",
  },
  {
    slug: "app-availability", title: "App 在哪些地区上架", group: "账户和地区",
    one: "一个 App 在哪些国家或地区的 App Store 上架，是开发者自己选的；有的 App 还会因为法律或监管要求，在某些地区不能下载或使用。所以朋友推荐的 App 在国区搜不到，Apple 给的原因都在 App 这一头。",
    like: "像一本书在哪些国家发行，是出版社决定的。书店再大，也只能上它拿到发行权的书；你在本地书店找不到，另一个国家的书店也许有，可那是另一个国家的书店，有它自己的规矩。",
    here: [
      `Apple 写给开发者的帮助文档说，开发者可以把 App 发布到 App Store 所在的 175 个国家或地区里的任何一个，选的时候有「所有国家或地区」「特定国家或地区」和预购几种；同一页还写着，因为法律或监管要求，App 在某些国家或地区可能不能下载或使用（[App Store Connect 帮助](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store)，英文）。Apple 给用户的文章说的是同一件事：根据你所在的国家或地区，你可能无法购买、下载或订阅某些类型的媒体，如果你认为某个 App 应该在你的地区提供，就直接联系它的开发者或发布者（[Apple 媒体服务的提供情况](https://support.apple.com/zh-cn/118205)）。`,
      `Apple 自己的服务也分地区。按这篇文章的清单，中国大陆那一栏里没有 Apple Books、Apple Arcade、Apple TV 和 Apple One；土耳其有 Apple Arcade 和 Apple TV，但 Apple Books 只有公版书，Apple Podcasts 只有免费播客（[118205](https://support.apple.com/zh-cn/118205)）。所以去外区之前，先想清楚你要的是哪个 App、哪项服务，再去看它在那个地区有没有，见[先想清楚要它做什么](/guide/0-why/)。`,
    ],
    myths: [
      `「搜不到，是因为网络没设好。」本站不讲网络设置。Apple 给的原因在 App 这一头：上架哪些地区由开发者设定，有的 App 因为法律或监管要求在某些地区不能下载或使用（[App Store Connect 帮助](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store)）。`,
      `「换一个外区账户，什么 App 都能下。」每个地区的 App 都不一样，开发者可以只选几个地区（[App Store Connect 帮助](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store)）。你要的 App 在美区有，不代表土区也有，反过来也一样。`,
      `「下过的 App，换了地区照样能更新、重新下载。」不一定。用另一个账户买的内容，要换回那个账户才能更新（[111001](https://support.apple.com/zh-cn/111001)）；Apple 给改地区的人的建议也是，先在要用的设备上把 App、音乐、影片这些下载好，因为某些内容在新的地区可能不可用（[118283](https://support.apple.com/zh-cn/118283)）。`,
    ],
    see: ["home-country", "media-purchases"],
    step: 0,
  },
  {
    slug: "family-sharing", title: "家人共享", group: "账户和地区",
    one: "家人共享让你和另外最多五个人共享 iCloud+、Apple Music 这些订阅和买过的东西，每个人用的还是自己的 Apple 账户。Apple 的条款要求所有家庭成员的居住国家或地区相同，所以群组里的人，改地区时可能会被卡住。",
    like: "像一张全家共用的超市会员卡，大家买的东西都记在办卡的那个人账上。可这家超市只在一座城里开，全家都得登记在这座城；有人想把自己的会员单独转去外地，可能得先从这张家庭卡上下来。",
    here: [
      `Apple 的说明是，借助「家人共享」，你可以和另外最多五名家庭成员共享 iCloud+、Apple Music、Apple TV 这些服务；由一个成年人当组织者，邀请其他人加入，打开「购买项目共享」以后，大家还能用彼此买的 App、音乐、影片和图书（[“家人共享”的相关信息](https://support.apple.com/zh-cn/105062)）。钱是组织者出的。美国的条款写着，组织者同意为家庭成员发起的交易付款，用的是组织者的付款方式（[美国条款](https://www.apple.com/legal/internet-services/itunes/us/terms.html)，英文），所以组织者开着购买项目共享时，账户里至少要留一种付款方式（[从 Apple 账户中移除付款方式](https://support.apple.com/zh-cn/118291)）。`,
      `和地区有关的规矩写在条款里。美国的条款要求所有家庭成员的居住国家或地区相同，一个人同一时间只能属于一个家庭，一年最多加入两次，和家庭关联的 Apple 账户每 90 天最多换一次（[美国条款](https://www.apple.com/legal/internet-services/itunes/us/terms.html)）；中国大陆的条款写的是「所有家庭成员必须位于同一居住国家或地区」（[中国大陆条款](https://www.apple.com.cn/legal/internet-services/itunes/cn/terms.html)），土耳其的条款也有类似的规定。落到操作上，Apple 在改地区的文章里提醒，如果你是家人共享群组的成员，你可能无法更改自己的国家或地区（[118283](https://support.apple.com/zh-cn/118283)）；想把备选账户的购买项目迁到首选账户，也要先让备选账户离开家人共享群组（[117294](https://support.apple.com/zh-cn/117294)）。成员改了地区以后整个群组会怎样，Apple 没有说。这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。`,
    ],
    myths: [
      `「家人共享就是全家用一个账户。」不是。每个家庭成员用的都是自己的 Apple 账户（[105062](https://support.apple.com/zh-cn/105062)），Apple 也说不要和他人共用一个账户，家庭成员也不例外（[安全性和 Apple 账户](https://support.apple.com/zh-cn/102614)）。`,
      `「把外区账户拉进家里的家人共享，全家都能用外区的订阅。」条款要求所有家庭成员的居住国家或地区相同（[美国条款](https://www.apple.com/legal/internet-services/itunes/us/terms.html)）。本站也不讲拼车、合租这类做法。`,
      `「我是群组成员，想改地区直接改就行。」可能改不了。Apple 建议你先看看自己的家人共享状态（[118283](https://support.apple.com/zh-cn/118283)），要离开群组，见[如何从“家人共享”群组中离开或移除成员](https://support.apple.com/zh-cn/102652)。`,
    ],
    see: ["home-country", "payment-none", "apple-account"],
    howto: "change-region",
  },
  // ---------- 付款 ----------
  {
    slug: "payment-none", title: "付款方式「无」", group: "付款",
    one: "「无」是注册时付款方式那一步可以选的一项，选了它，账户里就不绑银行卡。Apple 在 App Store、Mac 和 Windows 的注册流程里都写了可以选「无」，网页注册的步骤里根本没有付款这一步。",
    like: "像办会员卡时，柜台问你要不要绑一张卡自动扣款，你说先不用。卡照样办得下来；可等你办了按月扣钱的服务，或者欠了账，柜台还是会请你留一种付款方式。",
    here: [
      `Apple 的注册文章在 App Store、Mac 和 Windows 三个流程里写的是同一句：输入付款方式和账单信息，你也可以选取「无」，如果你没有购买项目，Apple 不会收取任何费用；在 account.apple.com 网页上注册，步骤是邮箱、密码、地区、生日和电话号码，没有付款这一步（[如何创建新的 Apple 账户](https://support.apple.com/zh-cn/108647)）。不过「无」不是一直都能选。账户里有 iCloud+ 这类订阅、有没付清的余款，或者你是家人共享的组织者并开着购买项目共享，就必须至少留一种付款方式（[从 Apple 账户中移除付款方式](https://support.apple.com/zh-cn/118291)）。有些免费 App 下载或更新时，也可能需要付款方式（[为你的 Apple 账户添加付款方式](https://support.apple.com/zh-cn/118429)）。`,
      `注册时没看到「无」，是读者最常问的事之一。除了上面这几种情况，Apple 没有列出别的会让「无」不出现的原因。这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。以后想加付款方式，路径是 **设置** → 你的姓名 → **付款与配送** → **添加付款方式**，加的时候，姓名和账单邮寄地址要和你在金融机构留存的信息一致（[118429](https://support.apple.com/zh-cn/118429)）。每个地区收哪些付款方式，见[付款方式：无、礼品卡、银行卡](/guide/3-payment/)。`,
    ],
    myths: [
      `「选了『无』，就永远不用绑卡。」不是。订阅 iCloud+ 这类服务、有没付清的余款、当家人共享组织者并开着购买项目共享，都得至少留一种付款方式（[118291](https://support.apple.com/zh-cn/118291)）。`,
      `「『无』是外区注册的漏洞，迟早会被堵上。」它就写在 Apple 自己的注册文章里（[108647](https://support.apple.com/zh-cn/108647)），文章没有说它只限某些地区。`,
      `「改地区的时候也能选『无』。」不一定。Apple 说改到新的国家或地区时，你可能需要输入新地区的有效付款方式；不想输入，就等你本人到了那里，再创建新的 Apple 账户（[更改 Apple 账户国家或地区](https://support.apple.com/zh-cn/118283)）。`,
    ],
    see: ["gift-card", "family-sharing", "home-country"],
    step: 3, howto: "us-account",
  },
  {
    slug: "gift-card", title: "Apple 礼品卡", group: "付款",
    one: "Apple 的礼品卡，Apple 中文页面叫充值卡，兑换以后变成你 Apple 账户里的余额。它只能用在买卡的那个国家或地区的账户上；条款不许转卖，Apple 怀疑卡来路不正时，可以作废它，还可以暂停或终止账户。",
    like: "像一张只在某家分店收的储值券。在美国分店买的，只能存进美国分店的会员卡里，拿到土耳其分店，柜台不收。券上还写着不许转卖，店家怀疑券来路不明，可以作废它，连你的会员卡一起停掉。",
    here: [
      `Apple 的中文页面把 Gift Card 都叫作充值卡。常见的 Apple Gift Card 和大多数正面是蓝色的 App Store 充值卡，都能在 App Store 里兑换；正面是纯色的 Apple Store 充值卡不一样，它只能在 Apple Store 商店使用，不能在 iTunes Store 兑换（[我拥有哪种类型的充值卡？](https://support.apple.com/zh-cn/118407)），也不能拿来升级 iCloud+（[iCloud+ 方案和定价](https://support.apple.com/zh-cn/108047)）。兑换的入口在 App Store：轻点你的照片、姓名首字母或 **我的账户** 按钮，再轻点 **兑换代码**，用摄像头扫或者手动输入卡背面的 16 位代码（[兑换充值卡](https://support.apple.com/zh-cn/118242)）。兑换进来的就是 Apple 账户余额，买东西时 Apple 先从余额里扣，不够才扣你的主要付款方式（[Apple 的 App、内容和订阅如何扣费](https://support.apple.com/zh-cn/118244)）；要换地区，得先把余额用完，剩下的不够买一件东西的，联系 Apple 支持清零（[更改 Apple 账户国家或地区](https://support.apple.com/zh-cn/118283)）。`,
      `地区的规矩写在各地的充值卡条款里。美国的条款说，在美国买的充值卡只能关联到美国的账户、只能在美国消费；土耳其的条款也说，在土耳其买的只能用在土耳其的账户上（[美国充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)，英文；[土耳其充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/tr/terms.html)，土耳其语）。两份条款都写着充值卡不能兑现、不能转卖；Apple 怀疑卡是以非法、欺诈或违反条款的方式取得或使用的，可以不通知你、不退款就作废它，并暂停或终止账户。至于从非官方渠道买的卡会怎样，Apple 没有公开列出授权卖家，也没有专门讲。这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。还有一条要记牢：++卡背面的号码，不要给你不了解或没见过的人++；有人让你用充值卡买 Apple 以外的东西，你可能遇到了诈骗（[关于充值卡诈骗](https://support.apple.com/zh-cn/120933)）。`,
    ],
    myths: [
      `「礼品卡就是钱，哪个地区的账户都能充。」只能充到买卡的那个国家或地区的账户上（[美国充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)）。有网友在 X 上分享，买成了美区的卡，在土区账户上兑换不了（[帖子](https://x.com/zzgo_sh/status/1993977418630185424)），和条款写的一致。`,
      `「打折的卡也是卡，能兑换就行。」条款写着充值卡不得转卖，Apple 怀疑卡的来路有问题时，可以作废卡，并暂停或终止账户（[美国充值卡条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)）。本站不推荐任何卖卡、代充的渠道，也不推荐折价卡。`,
      `「有了余额，就不用绑卡了。」不一定。Apple 说某些购买项目可能要求账户里登记一张信用卡，即使你用余额付款也一样（[118242](https://support.apple.com/zh-cn/118242)）。`,
    ],
    see: ["payment-none", "home-country", "subscription-price"],
    step: 3, howto: "gift-card",
  },
  {
    slug: "subscription-price", title: "订阅涨价", group: "付款",
    one: "订阅的价格会变，Apple 和开发者都会调价。按新价扣钱之前，Apple 会通知你；有的涨价还要你同意，你不同意，订阅就在这一期结束时到期。",
    like: "像小区的物业费调价。涨得不多，物业贴个通知，到期按新价收；涨得多，就得挨家挨户签字同意，不签的人，这一期到了就不再续。至于老住户涨不涨，还要看物业愿不愿意给老住户留着原价。",
    here: [
      `Apple 写给开发者的文档把涨价分成两种（[自动续期订阅的定价](https://developer.apple.com/help/app-store-connect/manage-subscriptions/manage-pricing-for-auto-renewable-subscriptions)，英文）。一种只通知：Apple 在下次续订前 27 天或 7 天，通过邮件和推送告诉订阅者新价格，然后按新价续订。另一种要订阅者同意：涨幅超过各地区的门槛、12 个月里已经涨过一次，或者订阅者所在地区的法律要求同意时，Apple 会通过邮件或推送请你同意；你不同意或者不理会，Apple 大约每周再问一次，直到这个计费周期结束，订阅就到期了。开发者还可以选择给老订阅者保留原价，所以同一个 App 涨价以后，老订阅者续费是什么价，要看开发者怎么设。`,
      `土耳其的条款另写了一条：订阅要涨价时，至少提前 30 天发邮件通知你，你不接受，可以在新价格生效前免费取消；条款还说，你可以随时联系 Apple 支持，立即取消订阅并按比例退款（[土耳其条款](https://www.apple.com/tr/legal/internet-services/itunes/tr/terms.html)，土耳其语）。2026 年 6 月，有网友在 X 上说土区的 ChatGPT Plus 涨价了（[帖子](https://x.com/st7evechou/status/2064866774106218518)），可也有网友说自己是老订阅者，续费显示的还是原价（[帖子](https://x.com/ainotes_KK/status/2064954319586398536)），还有网友提醒，涨价很可能只针对新订阅者（[帖子](https://x.com/Lonely__MH/status/2064917859470647728)），这和「开发者可以保留原价」对得上。想停掉一个订阅，路径是 **设置** → 你的姓名 → **订阅** → 轻点它 → **取消订阅**（[取消 Apple 提供的订阅](https://support.apple.com/zh-cn/118428)）；要换地区，也得先取消订阅，等到订阅期结束（[118283](https://support.apple.com/zh-cn/118283)）。`,
    ],
    myths: [
      `「土区的价格不会变。」本站不比价，只说一件事，价格会变。有网友在 X 上反映，2025 年土区 iCloud+ 2 TB 涨过一次价（[帖子](https://x.com/landiantech/status/1958721244058329528)）；截至 2026-11-19，Apple 的 iCloud+ 价格页上，土耳其 2 TB 是每月 549.99 里拉（含税）（[iCloud+ 方案和定价](https://support.apple.com/zh-cn/108047)），以后也还会变。`,
      `「涨价了，Apple 会不声不响从我这儿多扣。」按新价扣钱之前，Apple 会通知你（[自动续期订阅的定价](https://developer.apple.com/help/app-store-connect/manage-subscriptions/manage-pricing-for-auto-renewable-subscriptions)）。要你同意的涨价，你不同意，订阅在这一期结束时到期；只通知的涨价，通知以后按新价续订，不想续，就在续订前取消。`,
      `「我是老订阅者，涨价跟我没关系。」要看开发者。开发者可以给老订阅者保留原价，也可以让新价格对老订阅者生效（[自动续期订阅的定价](https://developer.apple.com/help/app-store-connect/manage-subscriptions/manage-pricing-for-auto-renewable-subscriptions)）。`,
    ],
    see: ["gift-card", "home-country"],
    step: 5, howto: "price-rise",
  },
  // ---------- 安全 ----------
  {
    slug: "two-factor", title: "双重认证和受信任电话号码", group: "安全",
    one: "双重认证让你第一次在新设备或网页上登录时，除了密码，还要输入一个六位验证码，它显示在你的受信任设备上，或者发到你的受信任电话号码。开着双重认证，账户里至少要有一个能收验证码的受信任电话号码。",
    like: "像家门上装了两道锁，一道是密码，一道是只有你的手机收得到的那串数字。别人就算知道了密码，没有第二道也进不来；可第二道的钥匙要是丢了，你自己也得费一番功夫才进得去。",
    here: [
      `Apple 的说法是，双重认证是大多数 Apple 账户默认的安全方式，Apple Pay 这类功能要求开着它；在新设备或网页上首次登录时，你要输入密码和六位验证码，之后在这台设备上就不会再问，除非你完全退出登录、抹掉设备，或者因为安全原因要改密码（[Apple 账户的双重认证](https://support.apple.com/zh-cn/102660)）。要用双重认证，账户里至少要登记一个受信任电话号码。Apple 还建议，你有好几个号码的话，再加一个不在这台 iPhone 上的号码，因为 iPhone 要是你唯一的受信任设备、又是唯一能用这个号码的设备，它一丢，你就收不到验证码了（[关于受信任电话号码和受信任设备](https://support.apple.com/zh-cn/122621)）。添加的路径是 **设置** → 你的姓名 → **登录与安全性** → **双重认证** → **添加受信任电话号码**。`,
      `外区账户最常被问的是，受信任电话号码能不能是中国的号码。Apple 的文章只说要有至少一个能收验证码的号码，没有说它必须和账户属于同一个国家或地区，也没有说可以不同（[122621](https://support.apple.com/zh-cn/122621)）。这一点 Apple 的页面没有写明，拿不准就先问 Apple 支持。Apple 唯一点名的地区要求是中国大陆：中文版的注册文章说，在中国大陆可能需要提供 +86 开头的号码才能创建账户，英文版（更新一些）说的是这个账户可能需要 +86 号码，两版都说这个号码可以稍后更改，而且只在中国大陆需要（[如何创建新的 Apple 账户](https://support.apple.com/zh-cn/108647)）。两版说法不同，这里只讲它们都写了的那部分。不管用哪个号码，挑一个你一直能收到验证码的，见[准备邮箱和手机号](/guide/1-prepare/)。`,
    ],
    myths: [
      `「验证码收不到了，就重新注册一个。」先别急。暂时用不了受信任设备或号码，最快的办法是等几天能用了再登录；以后都用不了，可以在登录屏幕上走账户恢复，它可能要几天或更久，联系 Apple 也没法加快（[122621](https://support.apple.com/zh-cn/122621)）。`,
      `「双重认证太麻烦，关掉算了。」账户要是用双重认证创建的，就没法关；最近才打开的，注册后两周内可以选择降回去（[102660](https://support.apple.com/zh-cn/102660)）。`,
      `「验证码告诉帮我注册的人也没关系。」Apple 说不要把 Apple 账户密码、验证码或账户安全设置的详情告诉任何人；别人帮你设置了账户和密码的，请改掉密码（[安全性和 Apple 账户](https://support.apple.com/zh-cn/102614)）。`,
    ],
    see: ["account-locked", "apple-account"],
    step: 1,
  },
  {
    slug: "activation-lock", title: "激活锁", group: "安全",
    one: "激活锁在你打开「查找」时自动开启，把设备和登录在上面的那个 Apple 账户绑在一起。没有那个账户的密码，谁都关不了「查找」，也抹不掉、重新激活不了这台设备。",
    like: "像给手机上了一把锁，钥匙在账户主人手里。账户是你自己的，这把锁就是你的护身符，手机丢了别人也用不了；登的是谁的账户，钥匙就在谁手里。",
    here: [
      `Apple 的说明是，设置「查找」以后激活锁会自动打开，Apple 把你的 Apple 账户安全地存在激活服务器上，并把它和你的设备关联起来；之后任何人都要输入这个账户的密码，才能关闭「查找」、抹掉设备，或者重新激活并使用它，就算远程抹掉了设备，激活锁也照样挡着（[iPhone 和 iPad 的激活锁](https://support.apple.com/zh-cn/108794)）。设备在你自己手里时，这是好事，丢了、被偷了，别人拿去也用不了。`,
      `麻烦出在登错账户的时候。Apple 没有专门讲这种情况，不过按激活锁的工作方式，你用别人的账户登录 iCloud 并开着「查找」，这台设备就会和那个账户绑在一起，以后关「查找」、抹掉、重新激活，都要那个账户的密码，而密码在别人手里。这是推出来的，不是 Apple 的原话，可它足够说明本站为什么一直说，外区账户只登 **媒体与购买项目**，别人给的账户永远不要登进 iCloud（见[别人给的账户为什么不能登](/howto/shared-accounts/)）。真被锁住了，Apple 给的路是：在屏幕上输入设置设备时用的 Apple 账户和密码，或者设备密码；设备离线时，账户主人可以在 icloud.com/find 上把它移除；需要帮助、手上又有购买凭证的，可以发起激活锁支持请求（[如何解除“激活锁”](https://support.apple.com/zh-cn/108934)、[如果你的 Apple 账户被锁定](https://support.apple.com/zh-cn/102640)）。`,
    ],
    myths: [
      `「激活锁有工具能绕过去。」本站不讲任何绕过激活锁的办法。Apple 给的路只有上面这几条：输入账户和密码、账户主人在网页上移除设备，或者带着购买凭证发起支持请求（[108934](https://support.apple.com/zh-cn/108934)）。`,
      `「借别人的账户登一下 iCloud，用完马上退出就行。」本站不教借号，也不建议你这样试。按上面推出来的道理，登着的那段时间只要「查找」开着，设备就和对方的账户绑在一起；Apple 也说不要和他人共用账户（[安全性和 Apple 账户](https://support.apple.com/zh-cn/102614)）。下载外区的 App，只需要 **媒体与购买项目**。`,
      `「二手 iPhone 开得了机，就没问题。」Apple 说，受激活锁保护的设备开机或唤醒时会显示 **iPhone 已与物主锁定**；设置时要你输入原所有者的 Apple 账户信息，说明它还关联着原主人的账户，在从原主人的账户里移除之前，不要买（[108794](https://support.apple.com/zh-cn/108794)）。`,
    ],
    see: ["media-purchases", "account-locked", "icloud-china"],
    step: 6, howto: "shared-accounts",
  },
  {
    slug: "account-locked", title: "账户被锁定", group: "安全",
    one: "账户被锁有好几种，提示不一样，办法也不一样：因为安全原因被停用的，重设密码；提示被锁定或处于非活跃状态的，申请恢复访问；只是「媒体与购买项目」被停用的，申请重新激活。这些都找 Apple 自己。",
    like: "像银行卡出了状况。密码输错太多次被锁的，重置密码就能解；被风控锁住的，要你本人去申请解冻；只停了网上支付的，重新开通网上支付就行。先看清是哪一种，再去对应的窗口。",
    here: [
      `Apple 把这几种情况分开讲（[如果你的 Apple 账户被锁定、处于非活跃状态或被停用](https://support.apple.com/zh-cn/102640)）。看到「此 Apple 账户因安全原因被停用」「此 Apple 账户因为安全原因而被锁定」这类提示，是账户为了保护你的安全自动锁上了，可能是你或别人输错密码或其他账户信息的次数太多，要重设密码才能恢复。提示账户被锁定或处于非活跃状态的，可以直接轻点提示里的 **请求访问**，也可以到 [iforgot.apple.com/unlock](https://iforgot.apple.com/unlock) 申请。提示「你的“媒体与购买项目”账户已被停用」的，可以轻点提示里的 **继续**，申请重新激活。`,
      `申请也可能不成：你可能会看到「此 Apple 账户已锁定，无法使用」，或者请求被拒绝。这时 Apple 给的路有两条，创建一个新的 Apple 账户；或者你要解除激活锁、手上又有购买凭证的，发起激活锁支持请求（[102640](https://support.apple.com/zh-cn/102640)）。外区账户被锁的人不少，有网友在 X 上问过土区账户锁了怎么办（[帖子](https://x.com/jaywcjlove/status/2054082597798740363)），也有网友分享说外区账户被锁时写邮件申诉就行（[帖子](https://x.com/berryxia/status/2068879059342475395)）。那是个人经验，该走哪条路，以 Apple 的这篇文章为准。`,
    ],
    myths: [
      `「被锁了就是被封了，账户没救了。」先看提示是哪一种。因为安全原因被停用的，重设密码就能恢复；被锁定或非活跃的，可以申请恢复访问（[102640](https://support.apple.com/zh-cn/102640)）。`,
      `「网上有人能帮忙解锁，给点钱就行。」本站不推荐任何代解锁的人。Apple 说不要把密码、验证码或账户安全设置的详情告诉任何人（[安全性和 Apple 账户](https://support.apple.com/zh-cn/102614)）；申请恢复，走 iforgot.apple.com/unlock 或者 Apple 支持。`,
      `「赶紧再注册一个新账户顶上。」Apple 确实把创建新账户列为一条路，可那是申请不回来以后的事（[102640](https://support.apple.com/zh-cn/102640)）。先按提示走一遍申请。`,
    ],
    see: ["two-factor", "activation-lock"],
    step: 6, howto: "locked",
  },
];

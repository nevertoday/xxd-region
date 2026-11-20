# Apple 账户地区资料参考库（官方部分）

这是 region.xiaoxiaodong.ai 的写作参考库。该站是独立、开源、非官方的学习站，面向中国大陆读者，讲 Apple 账户（原 Apple ID）的国家或地区是怎么回事，以及美区、土耳其区账户怎么注册。这里只记 Apple 官方怎么说，不是站点文案，也不替编辑定方针。

- 所有页面都在 **2026-11-19**（UTC）用 curl 抓取，没有登录，没有提交任何表单。每个原文副本在 `raw/official/<分组>/`，文件头写着来源 URL、跳转后的最终 URL 和抓取时间。
- 分组：`support-en/` 和 `support-zh/` 放同一篇支持文章的 en-us 版和 zh-cn 版，文件名就是文章编号（如 `118283.md`）；`legal/` 放条款；`pricing/` 放价格页；`newsroom/` 放新闻稿；`developer/` 放开发者页面。
- 引文保留原文语言，尽量短。中文界面用语取自 zh-cn 版文章。
- 每篇文章的发布日期见第 18 节。价格只在注明日期时引用。
- 社区帖子不在这份文件里，见 `docs/sources/COMMUNITY.md`（原文在 `raw/community/`）；哪些帖子可以链接，以 `docs/MAINTAINING.md` 的「网友的帖子」一条为准。
- 重抓：`bash tools/fetch-list.sh tools/official-urls.tsv raw/official`（已存在的文件会跳过，`FORCE=1` 时覆盖）。清单 `tools/official-urls.tsv` 共 109 行，对应 109 个文件。
- `tools/fetch.py` 新增 `--html` 参数。部分 support.apple.com/en-us 页面在 Accept 头里带 `application/json` 时会返回 404（108105、118407 实测如此），清单里这几行加了 `--html`。

## 目录

1. Apple 媒体服务条款：居住国家、付款、违约后果
2. 创建 Apple 账户：步骤、国家或地区、邮箱、电话、年龄
3. 不绑定付款方式（“无”）
4. 美国、土耳其、中国大陆可用的付款方式
5. 更改账户的国家或地区
6. 中国大陆 iCloud 由云上贵州运营
7. 另用一个账户登录“媒体与购买项目”；共用账户和激活锁的警告
8. 充值卡（Gift Card）
9. 家人共享的国家或地区要求
10. 服务可用性、App 上架范围、重新下载
11. iCloud+ 与 Apple One 价格
12. Apple ID 更名为 Apple 账户
13. Apple 商标使用指南
14. 土耳其和美国的特有规定
15. 官方没说清楚的
16. 官方页面互相矛盾的
17. 需要浏览器检查
18. 文件清单与旧编号跳转

## 1. Apple 媒体服务条款：居住国家、付款、违约后果

三份条款都标注 2026 年 9 月 14 日更新：美国 “Last Updated: September 14, 2026”，土耳其 “Son Güncellenme Tarihi: 14 Eylül 2026”，中国大陆 “上次更新日期：2026 年 9 月 14 日”。

**居住国家（Home Country）**

- 美国：“Our Services are available for your use in your country or territory of residence (“Home Country”). By creating an account for use of the Services in a particular country or territory you are specifying it as your Home Country.” [US terms](https://www.apple.com/legal/internet-services/itunes/us/terms.html)，`raw/official/legal/ams-terms-us-en.md`
- 土耳其（只有土耳其语版，没有找到英文版；`/legal/internet-services/itunes/tr/terms-en.html` 是 404）：“Hizmetlerimiz, ikamet ettiğiniz ülkede veya bölgede ("Yaşadığınız Ülke") kullanımınıza sunulur. Hizmetleri belirli bir ülkede ya da bölgede kullanmak üzere hesap oluşturarak burayı Yaşadığınız Ülke olarak belirlemiş olursunuz.” [TR terms](https://www.apple.com/tr/legal/internet-services/itunes/tr/terms.html)，`raw/official/legal/ams-terms-tr-tr.md`。`www.apple.com/legal/internet-services/itunes/tr/terms.html` 正文和它相同，只是导航栏为英文，所以只存了一份。
- 中国大陆：“你可以在你所在国家或居住所在地 (以下简称“居住国家或地区”) 获取并使用我们的服务。你创建一个在中国大陆使用服务的账户，即表示你指定中国大陆作为你的居住国家或地区。” [CN terms](https://www.apple.com.cn/legal/internet-services/itunes/cn/terms.html)，`raw/official/legal/ams-terms-cn-zh.md`
- 三份条款都写明 Apple 账户 “previously called an Apple ID” / “önceki adıyla Apple Kimliği” / “以前称为 Apple ID”。

**付款方式与账单地址**

- 三份条款都只说 Apple 向你选定的付款方式收费，“including any applicable taxes”（美国），“geçerli vergiler dahil”（土耳其），“包括相关税费”（中国大陆）。条款里**没有**要求账单地址或付款方式属于居住国家（见第 15 节）。
- 主要付款方式扣款失败时，Apple 会按顺序尝试其他付款方式（三份条款相同）。
- 美国条款：“From time to time, Apple may suspend or cancel payment or refuse a refund request if we find evidence of fraud, abuse, or unlawful or other manipulative behavior”。
- 只有中国大陆条款要求注册资料准确：“你同意在注册本服务时以及在使用本服务时提供准确和完整的信息 (“服务注册资料”)……若未能提供准确、及时、完整的服务注册数据，你的 Apple 账户可能会因此被暂停和/或终止。”美国和土耳其条款的“账户”一节没有这句话。

**违约后果**

- 美国：“If you fail, or Apple suspects that you have failed, to comply with any of the provisions of this Agreement, Apple may, without notice to you: (i) terminate this Agreement and/or your Apple Account, and you will remain liable for all amounts due … (ii) terminate your license to the software; and/or (iii) preclude your access to the Services.”
- 中国大陆措辞相同：“如果你未遵守或 Apple 怀疑你未遵守本协议的任何规定，Apple 可在无需通知你的情况下：(i) 终止本协议和/或你的 Apple 账户……”
- 土耳其范围更窄，只针对未履行基本义务（付款、“HESAP”一节等）或欺诈：“…temel yükümlülüklerinizi yerine getirmemeniz veya dolandırıcılık durumunda Apple şunları yapabilir: (i) işbu Sözleşmeyi ve/veya Apple Hesabınızı feshedebilir…”
- 签约主体：美国用户是 Apple Inc.；土耳其和中国大陆都属于 “all other users”，即 Apple Distribution International Ltd.（爱尔兰科克）。来源是三份条款末尾的 “Apple” 定义。

## 2. 创建 Apple 账户：步骤、国家或地区、邮箱、电话、年龄

主文章：[108647 en](https://support.apple.com/en-us/108647) / [zh](https://support.apple.com/zh-cn/108647)，`raw/official/support-en/108647.md`、`raw/official/support-zh/108647.md`。旧链接 HT204316 和 HT204034 都跳到这里。

**iPhone / iPad，设置设备时**：轻点“忘记密码或没有账户？”→“创建免费 Apple 账户”→ 选生日、输入姓名 → 提供电子邮件地址（没有邮箱可轻点“没有电子邮件地址？”申请免费 iCloud 邮箱）→ 按屏幕步骤“验证你的电子邮件地址，创建强密码，设置国家或地区，并设置双重认证”。之后系统“可能会要求你输入电话号码，或付款方式和账单信息”。

**iPhone / iPad，在 App Store 里**：App Store →“我的账户”→“创建新 Apple 账户”（看不到就先退出 iCloud，见 [104958](https://support.apple.com/zh-cn/104958)）→ 邮箱、密码、国家或地区 → 付款方式和账单信息，“你也可以选取‘无’”→ 确认电话号码 → 验证邮箱。

**Mac**：苹果菜单 →“系统设置”→ 边栏“登录”→“没有账户？”→ 生日、邮箱、密码、国家或地区 → 付款方式，同样可选“无”→ 确认电话号码 → 验证邮箱。

**网页（account.apple.com）**：点按“创建你的 Apple 账户”→ 邮箱、密码、“设置设备地区”→“输入你的生日和随时都能使用的电话号码”→ 可勾选订阅 Apple 更新 →“继续”→ 验证邮箱和电话号码。网页流程的步骤里没有付款方式这一步。

**电话号码**

- 只有中国大陆有特别规定：“In China mainland, you might be required to provide a +86 phone number for your Apple Account. You can change the number later. This number is only required in China mainland for verification purposes.”（108647）
- [105023](https://support.apple.com/en-us/105023) 补充：“You can change the number later, or change your country or region to a location that doesn't require it.”
- 受信任电话号码：[122621](https://support.apple.com/en-us/122621) 说要用双重认证，“you need at least one trusted phone number on file where you can receive verification codes”。文章没有说受信任号码是否必须和账户属于同一国家或地区（见第 15 节）。双重认证本身见 [102660](https://support.apple.com/en-us/102660)。
- zh-cn 路径：“设置”→ 你的姓名 →“登录与安全性”→“双重认证”→“添加受信任电话号码”。网页上是“登录和安全”→“账户安全”。

**年龄**

- 美国条款：“You must be age thirteen (13) (or equivalent minimum age in your Home Country, as set forth in the Apple Account creation process)”。中国大陆条款相同（“年满十三 (13) 周岁 (或……相应最低年龄)”）。
- [125666](https://support.apple.com/en-us/125666) 列出必须作为儿童账户的年龄：“Under 14 in … China mainland …”；“Under 18 in Brazil and the United States (Texas)”；“Under 13 in all other countries and regions”。土耳其不在特殊名单里，所以按 13 岁。美国除得克萨斯州外按 13 岁。
- 部分地区会要求确认已成年。适用地区是澳大利亚、巴西、新加坡、韩国、英国和美国得克萨斯州，确认方式包括本人信用卡、证件或自拍，“Debit cards and gift cards aren't supported”。见 125666、[125662](https://support.apple.com/en-us/125662)。

**创建失败**

- [120636](https://support.apple.com/en-us/120636)：出现“此时无法创建你的账户”时，Apple 的建议是：有 Apple 设备的，用它在“设置”或“系统设置”里创建；有 Windows 电脑或安卓设备的，到 account.apple.com 网页上创建（“If you have an Apple device, use that to create your account in Settings or System Settings. If you have a Windows PC or Android device, try creating your account on the web”）；更新软件；检查网络，稍后再试，可以换成蜂窝数据或别的 Wi-Fi，看系统状态页。注意：在“设置”里创建会把新账户登进 iCloud，和本站“iCloud 一直登你自己的账户”的建议冲突；页面上要分开写“Apple 的建议”和“本站的建议”。
- [101661](https://support.apple.com/en-us/101661)：“已激活了最大数目的免费账户”表示 “you have exceeded the number of accounts that you can set up with iCloud on a single device in one year”。文章没给具体数字。

## 3. 不绑定付款方式（“无”）

- 已没有单独的文章。旧链接 HT204034 原本是讲不用付款方式创建账户的文章，现在跳到 108647。
- 108647 在 App Store、Mac、Windows 三个创建流程里都写了：“Enter your payment method and billing information … You can also choose None. You won't be charged until you make a purchase.” zh-cn：“你也可以选取‘无’。如果你没有购买项目，我们不会收取任何费用。”
- 网页创建流程的步骤里没有付款方式这一步。
- 什么时候不能把付款方式删到一个不剩，见 [118291](https://support.apple.com/en-us/118291)：“If you have subscriptions like iCloud+, have an unpaid balance, or are a Family Sharing organizer and use purchase sharing, you must keep at least one payment method on file.”
- [118429](https://support.apple.com/en-us/118429)：“You might need a payment method to download or update some free apps.”
- 更改国家或地区时，[118283](https://support.apple.com/en-us/118283)：“You might need to enter a valid payment method for your new country or region. If you don’t want to enter a payment method, wait until you're physically in your new country or region. Then create a new Apple Account.”
- zh-cn 用语：“付款与配送”“添加付款方式”“编辑”“删除”“移除”“无”。

## 4. 美国、土耳其、中国大陆可用的付款方式

来源：[111741 en](https://support.apple.com/en-us/111741)（发布于 2026-11-18）/ [zh](https://support.apple.com/zh-cn/111741)（2026-08-06），`raw/official/support-en/111741.md`。旧链接 HT202631 跳到这里。“Payment methods are subject to change.”

| 国家或地区 | 付款方式（数字是文章脚注编号） |
| --- | --- |
| 美国 | Apple Account balance¹²˒¹³、Apple Card、Apple Cash、Apple Pay¹、Most credit and debit cards、PayPal² |
| 土耳其 | Apple Account balance（兑换 App Store & iTunes Gift Cards 或充值）、Mobile phone billing⁵（Paycell、Türk Telekom Mobil Ödeme、Vodafone Mobil Ödeme）、Most credit and debit cards |
| 中国大陆 | 支付宝²˒⁷、Apple 账户余额⁶（App Store 充值卡或充值）、抖音支付²、大多数信用卡和借记卡¹¹、微信支付² |

用到的脚注：1 “Apple Pay requires two-factor authentication.” 2 “You might be asked to verify your account with the payment method provider.” 5 手机账单支付只限受支持的运营商。6 不能用于 AppleCare+ 分期，“In China mainland, this payment method can't be used for any AppleCare+ plan.” 7 不能在 Apple Vision Pro 上添加。11 “This payment method can't be used to add funds to an Apple Account balance.”（中国大陆的银行卡）。12、13 是在 Apple Store 零售店和“钱包”里使用余额。脚注编号是按页面脚注列表的顺序推出来的，要用到时请对照原页面。

- 土耳其没有 Apple Pay，也没有 PayPal。[102775](https://support.apple.com/en-us/102775) 的 Apple Pay 国家列表里有中国大陆和美国，没有土耳其（2026-10-27）。
- 添加付款方式时，[118429](https://support.apple.com/en-us/118429) 要求“confirm that your name, billing address, and other information are spelled correctly and match what you have on file with your financial institution”。zh-cn：“确认你的姓名、账单邮寄地址和其他信息拼写正确，并且与你在金融机构留存的信息一致。”
- 同一篇的排错部分：“If you're using an accepted payment method but your Apple Account is set to a different country or region, change your country or region.” zh-cn：“如果你使用的是被接受的付款方式，但为你的 Apple 账户设置了其他国家或地区，请更改你所在的国家或地区。”
- 扣款顺序：先扣 Apple 账户余额，再扣主要付款方式，再从上到下扣其他付款方式。见 [118244](https://support.apple.com/en-us/118244)（旧 HT201359 和 HT5582 都跳到这里）。

## 5. 更改账户的国家或地区

来源：[118283 en](https://support.apple.com/en-us/118283)（2026-10-30）/ [zh](https://support.apple.com/zh-cn/118283)（2026-10-07），`raw/official/support-en/118283.md`、`raw/official/support-zh/118283.md`。旧链接 HT201389 跳到这里。

**改之前要做的（zh-cn 原文小标题）**

1. “用完所有剩余的 Apple 账户余额”（查余额见 [119902](https://support.apple.com/zh-cn/119902)）。
2. “清零较低的 Apple 账户余额”：余额不够买一件商品时，联系 Apple 支持清零。
3. “取消会阻止更改国家或地区的订阅”，“然后等到订阅期结束”（取消订阅见 [118428](https://support.apple.com/zh-cn/118428)）。
4. “等待待处理的活动完成”：会员资格、预购、影片租借、季票；“还需等待 Apple 处理完所有待处理的退款”（取消预购见 [118414](https://support.apple.com/zh-cn/118414)）。
5. “查看你的‘家人共享’状态”：“如果你是‘家人共享’群组的成员，你可能无法更改自己的国家或地区。”
6. “准备好有效的付款方式”：可能需要输入新国家或地区的有效付款方式；不想输入的话，“请等到你本人到达新的国家或地区后再处理。然后创建新的 Apple 账户。”英文原文：“wait until you're physically in your new country or region. Then create a new Apple Account.”
7. “重新下载你的内容”：“某些类型的内容可能在你新的国家或地区不可用”，所以先在以后要用的设备上把 App、音乐、影片、电视节目和图书下载好。

**iCloud 和订阅**

- 英文版：“If you cancel your Apple One or iCloud+ subscription, your iCloud storage is reduced to the free 5 GB plan.” zh-cn 版没有“5 GB”这半句（见第 16 节）。
- 超出容量的后果见 [108318](https://support.apple.com/en-us/108318)：“iCloud won't sync or update your information, and iCloud backups won't complete.”
- 更新付款信息后，如果新国家或地区提供这些服务，可以重新订阅。

**操作路径（zh-cn 界面用语）**

- iPhone / iPad：“设置”→ 你的姓名 →“媒体与购买项目”→“国家/地区”→ 选择新国家或地区 →“继续”→ 查看“条款与条件”并轻点“同意”→ 选择付款方式，输入新付款信息和账单邮寄地址 →“完成”。
- Mac：打开“音乐”App 或 Apple TV App →“账户”菜单 →“账户设置”→“国家/地区”。
- Windows：“查看我的账户”→“更改国家或地区”。
- 网页：account.apple.com →“个人信息”→“国家/地区”。

**改不了时**：先确认订阅已取消、待处理的活动已结清、余额已用完。余额低于单件商品价格，就联系 Apple 支持清零。余额不能兑现，“除非法律另有规定”。

**过去的购买**：文章只说部分内容在新地区可能不可用，所以要提前下载。文章没有说过去的购买会被删除或保留（见第 15 节）。

## 6. 中国大陆 iCloud 由云上贵州运营

- [111754 en](https://support.apple.com/en-us/111754)（2025-04-15）/ [zh](https://support.apple.com/zh-cn/111754)（2025-04-22）：“iCloud 在中国大陆由云上贵州（云上艾珀（贵州）技术有限公司）运营。”“如果你不是居住在中国大陆的中国公民，你可以编辑你 Apple 账户的国家或地区设置，以反映你当前所在的国家或地区，并在 Apple 当前条款和条件的约束下继续使用 iCloud。”旧链接 HT208351 跳到这里。
- [iCloud（由云上贵州运营）条款与条件](https://www.apple.com.cn/legal/internet-services/icloud/cn_si/gcbd-terms.html)（最近修订：2026年9月14日），`raw/official/legal/icloud-gcbd-terms-zh.md`；英文版见 [gcbd-terms en](https://www.apple.com/legal/internet-services/icloud/en/gcbd-terms.html)，`raw/official/legal/icloud-gcbd-terms-en.md`。
  - **改入中国大陆**：“如果你将账户国家或地区更改为中国大陆，即表示你授权苹果在转移期间提供本服务，并开始将你在 iCloud 中的内容从苹果迁移至云上贵州。在本服务转移至云上贵州后，你即终止约束你使用 iCloud 服务的所有协议，并接受本协议……”
  - **改出中国大陆**：“如果你将账户国家或地区从中国大陆更改为其他，即表示你授权云上贵州在转移期间提供本服务，并开始将你在本服务中的内容从云上贵州迁移至苹果。你亦在此明确同意将你在iCloud中的内容跨境转移至中国大陆之外。……你iCloud中的内容迁移完成后，云上贵州将删除相关内容并不再提供本服务。在适用法律允许的范围内，当你尝试更改账户的国家或地区时，可能会受到限制。”
  - 英文原文：“You also thereby expressly consent to the cross-border transfer of your Content outside China mainland. … Upon completion of the migration of your Content in iCloud, GCBD will delete the relevant Content and no longer provide the Service.”
  - GCBD 条款也要求注册资料准确，否则“可能导致你的帐户被暂停和/或终止”。
- zh-cn 版 118283 另有一节“如果你将地区从中国大陆更改”，说法与上面一致：“即表示你明确同意云上贵州 (GCBD) 将你的内容跨境转移至中国大陆境外的 Apple 服务器。你也同意云上贵州 (GCBD) 在转移完成后，从中国大陆的服务器上删除你的内容。”en-us 版没有这一节。

## 7. 另用一个账户登录“媒体与购买项目”；共用账户和激活锁的警告

**Apple 怎么描述这种用法**

- 没有找到专门讲 iCloud 用自己的账户、App Store 用另一个账户的操作文章。Apple 在购买项目迁移文章里描述了这种用法，并称两个账户为“首选 / 备选”。[117294 en](https://support.apple.com/en-us/117294) / [zh](https://support.apple.com/zh-cn/117294)（2026-10-21）：“the Apple Account signed in for use with iCloud and most features on your iPhone or iPad will be referred to as the primary Apple Account. … the Apple Account signed in just for use with Media & Purchases will be referred to as the secondary Apple Account.”
- 切换步骤（同一篇）：“在‘设置’中，轻点你的姓名。如果你使用不同的 Apple 账户登录购买，则会在‘媒体与购买项目’下方看到这个账户。如果你在这里没有看到另一个 Apple 账户，请依次轻点‘媒体与购买项目’和‘退出登录’。退出登录后，请轻点‘媒体与购买项目’，然后选取‘不是 [你的姓名]？’以登录另一个 Apple 账户。”
- 迁移条件之一：“Make sure both accounts are set to the same country and region for purchases.” 另外要求两个账户都开启双重认证，备选账户不在家人共享群组里，余额已用完。“In the European Union, South Korea, and China mainland, you might have to wait up to 15 days for purchases made using Apple Account balance to completely process.”
- 迁移后：“The secondary Apple Account can no longer be used for Media & Purchases.” 撤销迁移后 1 年内不能再迁移。iCloud 数据不迁移。见 [117267](https://support.apple.com/en-us/117267)。zh-cn 界面：“媒体与购买项目”→“查看账户”→“迁移购买项目”。

**限制**

- [111001](https://support.apple.com/en-us/111001)：“You can’t sign in on the App Store and other media services with more than one Apple Account at the same time, or update the content you buy with a different Apple Account.” zh-cn：“你无法同时使用多个 Apple 账户登录 App Store 和其他媒体服务，也无法更新使用另一个 Apple 账户购买的内容。”
- [118412](https://support.apple.com/en-us/118412)：一个账户最多关联 10 台用于购买的设备（其中电脑不超过 5 台）。“You might need to wait up to 90 days to associate the device with a different Apple Account.” 提示原文：“This device is associated with another Apple Account. You cannot associate this device with another Apple Account for [number] days.”
- [108105](https://support.apple.com/en-us/108105)：在购买记录里找不到某个项目，“you might have purchased the item with a different Apple Account”。

**共用账户、激活锁**

- [102614](https://support.apple.com/en-us/102614)：“Don't share an account with other people, even family members. Sharing an Apple Account means that you're giving someone else access to all of your personal content.” zh-cn 小标题是“不要共用 Apple 账户”，正文：“不要与他人共用一个账户，即使是家庭成员也不例外。”同一篇还说：“Never share your Apple Account password, verification codes, or account security details with anyone.”
- [105023](https://support.apple.com/en-us/105023)：“Use the same Apple Account every time you’re asked to sign in on an Apple device or service.” zh-cn：“每当系统要求你登录 Apple 设备或服务时，请使用同一 Apple 账户。”
- 117294 和 117267 都写了：“neither account should be shared with anyone else”。
- [108794](https://support.apple.com/en-us/108794)：“Activation Lock turns on automatically when you set up Find My.* After it's turned on, Apple securely stores your Apple Account on its activation servers and links it to your device. Your Apple Account password is required before anyone can turn off Find My, erase your device, or reactivate and use your device.” 移除激活锁见 [108934](https://support.apple.com/en-us/108934)，出售前的准备见 [109511](https://support.apple.com/en-us/109511)。
- Apple 没有直接写用别人的账户登录 iCloud 后设备会锁在对方账户上。这是把 108794 的机制套到这种情况上推出来的，写的时候要标成推断。

## 8. 充值卡（Gift Card）

zh-cn 把 Gift Card 统一译作“充值卡”（如“关于充值卡诈骗”）。

**美国**：[Apple Gift Card 条款](https://www.apple.com/legal/internet-services/itunes/giftcards/us/terms.html)（Last updated: October 14, 2024），`raw/official/legal/gift-card-terms-us-en.md`。

- 发卡方：“Apple gift cards are issued and managed by Apple Value Services, LLC”。
- 可用范围：“Gift Cards purchased in the United States and content codes can only be linked to an Account in the United States and can only be used for purchases in the United States.”
- 转卖：“Gift Cards are not redeemable for cash and cannot be returned for a cash refund (except as required by law); exchanged; resold; or used to purchase Gift Cards. Unused Associated Balances are not transferable.”
- 作废与封号：“We and Apple reserve the right, without notice to you, to void or deactivate Gift Cards or content codes without a refund, suspend or terminate Accounts … if we suspect Gift Cards or content codes were obtained, used, or associated with an Account unlawfully, fraudulently, or otherwise in violation of these Terms.”
- 在美国用卡买内容 “requires an Account in the United States and acceptance of the Apple Media Services Terms and Conditions”。
- 另有一种 Apple Store Gift Card，只能在美国 Apple Store、apple.com 或电话订购中使用，“may not be redeemed for purchases made from Apple Media Services, at Apple resellers … Gift cards are also not for resale.” 见 [apple.com/legal/giftcards/applestore](https://www.apple.com/legal/giftcards/applestore/)，`raw/official/legal/apple-store-gift-card-terms-us-en.md`。

**土耳其**：[App Store Kartları 条款](https://www.apple.com/legal/internet-services/itunes/giftcards/tr/terms.html)（Son güncelleme: 24 Nisan 2026），`raw/official/legal/gift-card-terms-tr.md`。

- 发卡方：“App Store Kartları, Apple Distribution International Ltd. ("Apple") tarafından düzenlenir ve yönetilir.”
- 可用范围：“Türkiye'de satın alınan Mağaza Kredisi ve İçerik Kodları yalnızca Türkiye'deki bir Hesapta kullanılabilir.”
- 转卖：“Mağaza Kredisi nakde çevrilemez … takas edilemez; yeniden satılamaz”。
- 作废与封号：Apple 怀疑余额 “hileli, yasa dışı veya bu hüküm ve koşulları başka bir şekilde ihlal ederek elde edildiğinden, kullanıldığından ya da bir Apple Hesabına uygulandığından” 时，可以不通知、不退款作废余额，并 “müşteri hesaplarını askıya alma veya sonlandırma”。

**诈骗**：[120933 en](https://support.apple.com/en-us/120933) / [zh](https://support.apple.com/zh-cn/120933)：“Apple gift cards can be used only to purchase products and services from Apple. If someone asks you to use Apple gift cards to purchase something not sold by Apple, you might be the target of a scam.”“Do not provide the numbers on the back of a gift card to someone you don’t know well or haven’t met.” 社交工程诈骗的总览见 [102568](https://support.apple.com/en-us/102568)。

**兑换**：[118242](https://support.apple.com/en-us/118242)（旧 HT201209），入口是 apple.com/redeem。“Gift cards aren't available in all countries or regions.” 卡的种类见 [118407](https://support.apple.com/en-us/118407)。

**未授权卖家**：抓到的页面里，Apple 没有直接讲“从未授权卖家买的卡”。能引用的只有两条：卡不得转卖；Apple 怀疑卡是以非法、欺诈或违反条款的方式取得或使用时，可以作废卡并暂停或终止账户（见第 15 节）。

## 9. 家人共享的国家或地区要求

- 美国条款 M 节：“All Family members must share the same Home Country.” 同一节还写了 “You can only belong to one (1) Family at a time, and may join any Family no more than twice per year. You can change the Apple Account you associate with a Family no more than once every ninety (90) days.”
- 中国大陆条款：“所有家庭成员必须位于同一居住国家或地区。”
- 土耳其条款：“Tüm Aile üyeleri Yaşadığınız Ülkede bulunmalıdır.”
- 支持文章里只有 118283 提到这一点：“你可能无法更改自己的国家或地区”。[105062](https://support.apple.com/en-us/105062)、[108380](https://support.apple.com/en-us/108380)、[102652](https://support.apple.com/en-us/102652) 讲的是年龄和移除成员的规则，没有写国家或地区的要求。
- 组织者年龄：“eighteen (18) years (or the equivalent age of majority in their Home Country) or older”（美国条款）。
- 111741 的脚注 4 是 “This payment method can’t be used for Family Sharing.” 美国、土耳其、中国大陆三栏里的付款方式都没有标脚注 4。

## 10. 服务可用性、App 上架范围、重新下载

[118205 en](https://support.apple.com/en-us/118205)（2026-10-30）/ [zh](https://support.apple.com/zh-cn/118205)（2026-09-16）。旧链接 HT204411 和 HT204632 都跳到这里。

- 总说明：“Depending on your country or region, you might not be able to buy, download, or subscribe to certain types of media. … If you think an app or other media should be available in your country or region, contact the developer or publisher directly.”
- **美国**：Apple Books（含图书和有声书购买）、Apple Creator Studio、Apple Fitness+、Apple Music、Apple Music Classical、Apple News+、Apple One、Apple Podcasts、Apple Sports app、App Store、Apple Arcade、Apple TV app、Apple TV subscription、影片和电视节目购买、iTunes Store 音乐购买、铃声购买、Shazam。
- **土耳其**：Apple Books（“Public domain books only”）、Apple Creator Studio、Apple Music、Apple Podcasts（“Free podcasts only”）、Apple Sports app、App Store、Apple Arcade²、Apple TV app、Apple TV subscription²、Movie purchases⁴、iTunes Store 音乐购买、铃声购买、Shazam。脚注 2：“Apple Arcade and Apple TV access might be included with your iCloud+ subscription.” 脚注 4：“You can buy movies, but iTunes Extras aren’t available”。列表里没有 Apple One，也没有 Apple Fitness+ 和 Apple News+。
- **中国大陆**：Apple Creator Studio¹、Apple Music、Apple Music Classical、Apple Podcasts（仅免费播客）、Apple Sports app（只出现在英文版）、App Store、Shazam、“视频”App。列表里没有 Apple Books、Apple Arcade、Apple TV、Apple One，也没有影片购买。
- **App 上架由开发者设定**：[App Store Connect 帮助](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store)：“You can release your app in any of the 175 countries or regions where the App Store is available”，开发者可选 “All Countries or Regions, Specific Countries or Regions, or Publish as Pre-Order”。另有一句：“Your app may not be available for download or use in some countries or regions due to legal or regulatory requirements.” 文件 `raw/official/developer/asc-manage-app-availability.md`。
- **重新下载**：三份条款都写 “You can see Content types available for Redownload in your Home Country at https://support.apple.com/HT204632”，又说 “Content may not be available for Redownload if that Content is no longer offered on our Services.” 但 HT204632 现在跳到 118205，而 118205 里没有可重新下载内容类型的清单（见第 16 节）。操作步骤见 [102417](https://support.apple.com/zh-cn/102417)：App Store →“我的账户”→“App 和购买记录”→“你的 App”→“不在此 [设备] 上”→“重新下载”。隐藏的项目见 [108091](https://support.apple.com/en-us/108091)。

## 11. iCloud+ 与 Apple One 价格

**iCloud+**：[108047 en](https://support.apple.com/en-us/108047)（2026-09-16）/ [zh](https://support.apple.com/zh-cn/108047)（2026-09-29），抓取于 2026-11-19。旧链接 HT201238 跳到这里。每月价格：

| 国家或地区 | 50 GB | 200 GB | 2 TB | 6 TB | 12 TB | 脚注 |
| --- | --- | --- | --- | --- | --- | --- |
| 美国（USD） | $0.99 | $2.99 | $9.99 | $29.99 | $59.99 | 4 “Residents in some U.S. states have tax added to the monthly payment due to state laws.” |
| 土耳其（TRY） | 49.99 TL | 169.99 TL | 549.99 TL | 1699.99 TL | 3399.99 TL | 3 “Taxes are included in all prices for this country or region.” |
| 中国大陆（CNY） | ¥6 | ¥21 | ¥68 | ¥198 | ¥398 | 3（含税） |

- 同一篇：“Apple Store gift cards aren't accepted as payment for upgrading iCloud+.”
- 土耳其的 iCloud+ 包含 Apple TV 和 Apple Arcade。[icloud.com/info/icloud-plus-tv-arcade](https://www.icloud.com/info/icloud-plus-tv-arcade) 的可用国家名单里有 Türkiye，没有美国，也没有中国大陆。土耳其语版 [tr-tr](https://www.icloud.com/tr-tr/info/icloud-plus-tv-arcade) 标 50 GB “49,99 TL/ay”、200 GB “169,99 TL/ay”，和 108047 一致。美国版页面的价格位置是占位符 “$xx/month”。文件在 `raw/official/pricing/`。

**Apple One**：[apple.com/apple-one](https://www.apple.com/apple-one/)（美国，抓取于 2026-11-19），`raw/official/pricing/apple-one-us-en.md`：Individual $21.95/mo、Family $27.95/mo、Premier $39.95/mo。`apple.com/tr/apple-one/` 和 `apple.com.cn/apple-one/` 都返回 404，118205 的土耳其和中国大陆列表里也没有 Apple One。

## 12. Apple ID 更名为 Apple 账户

- Apple 新闻稿 [New features come to Apple services this fall](https://www.apple.com/newsroom/2024/06/new-features-come-to-apple-services-this-fall/)，2024 年 6 月 11 日：“With the releases of iOS 18, iPadOS 18, macOS Sequoia, and watchOS 11, Apple ID is renamed to Apple Account for a consistent sign-in experience across Apple services and devices, and relies on a user’s existing credentials.” 文件 `raw/official/newsroom/2024-06-new-features-apple-services-en.md`。apple.com.cn 上同一路径是 404。
- 支持文章 108647 和 105023：“Apple ID is now Apple Account. You can still sign in with the same email address or phone number and password.” zh-cn：“Apple ID 现已更名为‘Apple 账户’。你仍然可以使用相同的电子邮件地址或电话号码和密码进行登录。”
- 条款：“An Apple Account (previously called an Apple ID)”，GCBD 条款写作“Apple 账户（此前称‘Apple ID’）”。
- 土耳其语叫 “Apple Hesabı”，旧名 “Apple Kimliği”。

## 13. Apple 商标使用指南

[Guidelines for Using Apple Trademarks and Copyrights](https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html)，页面没有标注日期，`raw/official/legal/trademark-guidelines-en.md`。

- 网站：“Web sites that serve only as noncommercial electronic informational forums concerning an Apple product or technology may use the appropriate Apple word mark, provided such use complies with the guidelines set forth in Section 3 above.” 第 3 节的要求包括：用法是指称性的，比标题其余部分更不显眼；不出现 Apple 标志；附免责声明 “(Title) is an independent (publication) and has not been authorized, sponsored, or otherwise approved by Apple Inc.”；在署名处附商标归属声明。
- 域名：“You may not use an identical or virtually identical Apple trademark as a second level domain name.” 不可接受的例子：“imac.com” “imacapple.com” “imac-apple.com” “ipodmart.com”。
- 标志：“You may not use the Apple Logo or any other Apple-owned graphic symbol, logo, or icon on or in connection with web sites … except pursuant to an express written trademark license from Apple”。
- 不得暗示关联：“in a manner that would imply Apple’s affiliation with or endorsement, sponsorship, or support of a third party product or service”。
- 不得模仿：“You may not imitate the distinctive Apple packaging, web site design, logos, or typefaces.”
- 美国以外发布的署名格式（不加 ™/® 符号）：“_________ is a trademark of Apple Inc., registered in the U.S. and other countries and regions.” 或 “_________ is a trademark of Apple Inc.” 正确拼写和符号以 [Apple Trademark List](https://www.apple.com/legal/intellectual-property/trademark/appletmlist.html) 为准（这份清单没有抓取）。

## 14. 土耳其和美国的特有规定

**土耳其**

- 付款方式：手机账单支付（Paycell、Türk Telekom Mobil Ödeme、Vodafone Mobil Ödeme）、银行卡、余额。没有 Apple Pay，没有 PayPal（第 4 节）。
- iCloud+ 价格含税，并包含 Apple TV 和 Apple Arcade（第 11 节）。
- 充值卡只能用于土耳其账户，发卡方是 Apple Distribution International（第 8 节）。
- 开发者新闻 [gvnljl3f](https://developer.apple.com/news/?id=gvnljl3f)（2026 年 1 月 29 日）：“Türkiye: Digital sales tax (DST) rate decrease from 7.5% to 5%”，归在开发者分成（proceeds）调整之下。同一条新闻里，自动调价只针对 Mauritius。文件 `raw/official/developer/news-gvnljl3f-price-tax-updates.md`。
- 土耳其条款允许立即取消订阅并按比例退款，要联系 Apple 支持或写信给 Apple Distribution International：“Abonelikleri derhal yürürlüğe girmek üzere istediğiniz zaman iptal edebilir ve oransal olarak bölünmüş bir şekilde ücretinizi geri alabilirsiniz”。条款里的土耳其电话是 00800 4488 29878。
- 订阅涨价至少提前 30 天邮件通知（“en az 30 gün önceden e-posta ile”）。

**美国**

- 税：iCloud+ 脚注 4 “Residents in some U.S. states have tax added to the monthly payment due to state laws.” 条款只说收费 “including any applicable taxes”。抓到的页面里没有一句说税额按账单地址计算（见第 15 节）。
- 付款方式比另外两地多：Apple Card、Apple Cash、PayPal（第 4 节）。
- 得克萨斯州：18 岁以下必须是儿童账户，要确认已成年（第 2 节）。
- 美国充值卡只能用于美国账户（第 8 节）。

## 15. 官方没说清楚的

写到这些点时，要标明“官方未确认”。

1. **账户国家和实际居住地不一致时会怎样。** 条款把居住国家定义为 “country or territory of residence”，又说在哪个国家创建账户就等于指定哪个国家为居住国家。条款没有写两者不一致的具体后果。能引用的只有违约后果的通用条款（第 1 节），而且土耳其版的范围更窄。
2. **账单地址和付款方式是否必须属于账户所在国家或地区。** 条款没有这样写。支持文章只说账单地址要“与你在金融机构留存的信息一致”，以及付款方式被接受但账户设成了别的国家或地区时，要去更改国家或地区。外国发行的银行卡能不能用，Apple 没有说。脚注 10（“For international credit and check cards, you might be asked to authenticate your payment method”）没有出现在美国、土耳其、中国大陆三栏。
3. **受信任电话号码能否是另一个国家的号码。** 122621 和 102660 都没有说。只有中国大陆写了“可能需要 +86 号码”，并说“可以稍后更改”。
4. **“无”选项什么时候不会出现。** 108647 只说“你也可以选取‘无’”，网页创建流程里没有付款步骤。除 118291 的三种情况（有订阅、有欠款、组织者开着购买项目共享）外，Apple 没有列出别的限制。
5. **改区后过去的购买怎么办。** 118283 只说部分内容“可能不可用”，建议先下载。文章没有说购买记录会保留还是丢失。
6. **各地区可重新下载的内容类型。** 条款指向的 HT204632 现在跳到 118205，而 118205 里没有这份清单。
7. **从非官方渠道买的充值卡。** Apple 没有点名未授权卖家，只有不得转卖、怀疑以非法或欺诈方式取得时可作废并封号这两条。
8. **美国销售税是否按账单地址计算。** 只有 iCloud+ 脚注说部分州的居民要加税。
9. **一台设备一年能激活多少个免费账户。** 101661 没给数字。
10. **家人共享成员跨国。** 条款要求同一居住国家，118283 只说“可能无法更改”。成员改区后群组会怎样，Apple 没有说。
11. **另用账户登录“媒体与购买项目”的官方操作文章。** 没有找到。步骤只出现在迁移文章 117294 里。旧文章 108106（“If you subscribe to Apple One and use a different Apple Account for iCloud”，出现在搜索结果里）在 en-us、zh-cn、en-am 三个版本下都返回 404。
12. **Apple One 在土耳其、中国大陆是否提供。** Apple 没有明说“不提供”。只能说可用性列表里没有它，对应的 apple.com 页面是 404。
13. **土耳其 DST 下调是否影响消费者价格。** 开发者新闻只把它列在分成调整里，没有说消费者价格会不会变。

## 16. 官方页面互相矛盾的

1. **118283 中英文内容不同。** zh-cn 版（2026-10-07）多一节“如果你将地区从中国大陆更改”（云上贵州跨境转移并删除内容），en-us 版（2026-10-30）没有这一节。en-us 版有 “your iCloud storage is reduced to the free 5 GB plan”，zh-cn 版没有。
2. **118205 的中国大陆列表。** en-us 版（2026-10-30）有 “Apple Sports app”，zh-cn 版（2026-09-16）没有“Apple Sports App”。
3. **108647 的 +86 号码用途。** en-us 版写 “you might be required to provide a +86 phone number for your Apple Account”，zh-cn 版写“才能创建 Apple 账户”。en-us 版（2026-11-12）还多一段 Apple HomeView，zh-cn 版是 2026-09-15 发布的。
4. **重新下载链接失效。** 三份条款都说可重新下载的内容类型见 HT204632，但这个链接现在跳到一篇没有该清单的文章。
5. **家人共享规则的措辞。** 美国是 “must share the same Home Country”，中国大陆是“必须位于同一居住国家或地区”，土耳其是 “Yaşadığınız Ülkede bulunmalıdır”（直译为“必须在你的居住国家”）。意思接近，但土耳其版字面上说的是“在”这个国家，不是“同一个居住国家”。
6. **年龄。** 中国大陆条款写 13 周岁（“或……相应最低年龄”），125666 写中国大陆 14 周岁以下要用儿童账户，GCBD 条款里也出现了“未满14周岁”。条款的括号让两者可以并存，但写作时应以 125666 的数字为准，并注明出处。
7. **激活锁要什么才能解除。** [108794](https://support.apple.com/en-us/108794) 说关闭“查找”、抹掉或重新激活设备都要 Apple 账户密码；[108934](https://support.apple.com/en-us/108934) 说在设备上解除时，输入设置设备时用的 Apple 账户和密码，“or your device passcode”。写的时候以 108794 讲机制，以 108934 讲解除步骤，不把两句合成一句。
8. **发布日期差距。** 111741 的 en-us 版是 2026-11-18，zh-cn 版是 2026-08-06；111001 的 en-us 版是 2026-11-12，zh-cn 版是 2026-02-23。美国、土耳其、中国大陆三地的付款方式在两个版本里一致。111001 里关于“媒体与购买项目”的那句话，两个版本也一致。

## 17. 需要浏览器检查

完整记录在 `tools/blocked.txt`。

- https://account.apple.com/account ：curl 拿到 500（页面由脚本渲染）。网页版创建流程只能以 108647 的文字为准，表单本身没有读到。
- **2026-11-19 用浏览器核对过**（主会话，Chrome，未登录，没有填任何表单）：account.apple.com 首页有 “Create Your Apple Account” 和 “Sign In” 两个按钮，和 108647 写的网页创建入口一致；iforgot.apple.com/unlock 是 “Recover Your Apple Account” 页面，正文 “Request access to your account. Enter your email address or phone number that you use with your account to continue.”，和 102640 说的申请访问一致。这两个网址对 curl 返回 403，`check-doc-links` 会把它们算作被挡住，不是坏链接。
- 没有其他页面被拦。几处要注意：108105 和 118407 的 en-us 版要加 `--html` 才能抓到；108106 是真正的 404，不是被拦；icloud.com 美国版价格是占位符，因为美国不在适用名单里。

## 18. 文件清单与旧编号跳转

**支持文章**（`raw/official/support-en/<编号>.md` 与 `raw/official/support-zh/<编号>.md`；括号内是 en / zh 发布日期）

| 编号 | 英文标题 | 中文标题 | 发布日期 en / zh |
| --- | --- | --- | --- |
| 101661 | If you see “The maximum number of free accounts have been activated” | 如果你看到“已激活了最大数目的免费账户” | 2025-12-05 / 2025-12-10 |
| 102417 | Redownload apps from Apple | 如何在 Apple 设备上重新下载 App 或恢复已购项目 | 2026-09-17 / 2026-09-18 |
| 102552 | Use a different Apple Account to share purchases with Family Sharing | 使用其他 Apple 账户通过“家人共享”共享购买项目 | 2026-09-14 / 2026-09-23 |
| 102568 | Recognize and avoid social engineering schemes … | 识别并避免社交工程欺诈…… | 2026-06-15 / 2026-06-22 |
| 102606 | Get a verification code and sign in with two-factor authentication | 双重认证开启时获取验证码并登录 | 2025-12-18 / 2025-12-26 |
| 102614 | Security and your Apple Account | 安全性和 Apple 账户 | 2024-09-16 / 2024-09-27 |
| 102617 | Create an Apple Account for your child | 为你的孩子创建 Apple 账户 | 2026-11-06 / 2026-11-13 |
| 102627 | If you forgot your Apple Account primary email address or phone number | 如果你忘记了自己 Apple 账户的主要电子邮件地址或电话号码 | 2026-01-14 / 2026-01-21 |
| 102652 | How to leave or remove a member from a Family Sharing group | 如何从“家人共享”群组中离开或移除成员 | 2026-09-18 / 2026-11-19 |
| 102660 | Two-factor authentication for Apple Account | Apple 账户的双重认证 | 2026-08-13 / 2026-08-13 |
| 102775 | Countries and regions that support Apple Pay | 支持 Apple Pay 的国家和地区 | 2026-10-27 / 2026-10-27 |
| 104958 | Sign out of your Apple Account and iCloud on your devices | 在你的设备上退出登录 Apple 账户和 iCloud | 2026-11-12 / 2026-11-16 |
| 105023 | Manage and use your Apple Account | 管理和使用你的 Apple 账户 | 2026-09-14 / 2026-09-23 |
| 105062 | How Family Sharing works | “家人共享”的相关信息 | 2026-09-14 / 2026-09-21 |
| 108047 | iCloud+ plans and pricing | iCloud+ 方案和定价 | 2026-09-16 / 2026-09-29 |
| 108091 | Hide and unhide apps in your App Store purchase list | 在 App Store 购买项目列表中隐藏和取消隐藏 App | 2026-09-17 / 2026-09-21 |
| 108105 | If there’s an issue when you redownload apps, movies, or other content from Apple | 如果从 Apple 重新下载 App、影片或其他内容时遇到问题 | 2024-09-16 / 2024-09-26 |
| 108318 | Downgrade or cancel your iCloud+ plan | 降级或取消 iCloud+ 方案 | 2026-09-15 / 2026-09-15 |
| 108380 | How to set up Family Sharing on your iPhone, iPad, or Mac | 如何在 iPhone、iPad 或 Mac 上设置“家人共享” | 2026-11-09 / 2026-11-11 |
| 108647 | How to create a new Apple Account | 如何创建新的 Apple 账户 | 2026-11-12 / 2026-09-15 |
| 108774 | Share apps and purchases with Family Sharing on your iPhone or iPad | 在 iPhone 或 iPad 上通过“家人共享”共享 App 和购买项目 | 2026-09-14 / 2026-09-21 |
| 108794 | Activation Lock for iPhone and iPad | iPhone 和 iPad 的激活锁 | 2026-04-29 / 2026-05-04 |
| 108934 | How to remove Activation Lock | 如何解除“激活锁” | 2026-10-15 / 2026-10-16 |
| 109511 | What to do before you sell, give away, or trade in your iPhone or iPad | 出售、赠送或折抵 iPhone 或 iPad 前该怎么做 | 2026-05-29 / 2026-06-12 |
| 111001 | Sign in to your Apple Account on the web or in your device settings | 在网页上或设备设置中登录 Apple 账户 | 2026-11-12 / 2026-02-23 |
| 111741 | Payment methods that you can use with your Apple Account | 可与 Apple 账户搭配使用的付款方式 | 2026-11-18 / 2026-08-06 |
| 111754 | Learn more about iCloud in China mainland | 进一步了解 iCloud（中国大陆） | 2025-04-15 / 2025-04-22 |
| 117267 | About migrating Apple Account purchases between accounts | 关于在账户之间迁移 Apple 账户购买项目 | 2026-10-21 / 2026-10-21 |
| 117294 | Migrate purchases from one Apple Account to another Apple Account | 将购买项目从一个 Apple 账户迁移到另一个 Apple 账户 | 2026-10-21 / 2026-10-21 |
| 118205 | Availability of Apple Media Services | Apple 媒体服务的提供情况 | 2026-10-30 / 2026-09-16 |
| 118242 | Redeem your Apple Gift Card, App Store Card, or App Store & iTunes Gift Card | 兑换你的 Apple Gift Card、App Store Card 或 App Store 与 iTunes 充值卡 | 2026-09-21 / 2026-09-22 |
| 118244 | How apps, content, and subscriptions from Apple are billed | Apple 的 App、内容和订阅如何扣费 | 2026-05-29 / 2026-06-02 |
| 118283 | Change your Apple Account country or region | 更改 Apple 账户国家或地区 | 2026-10-30 / 2026-10-07 |
| 118291 | Remove a payment method from your Apple Account | 从 Apple 账户中移除付款方式 | 2026-03-24 / 2026-09-28 |
| 118293 | If you need to change or update your Apple Account payment method | 如果你需要更改或更新自己的 Apple 账户付款方式 | 2026-09-16 / 2026-09-25 |
| 118297 | Add money to your Apple Account balance | 为你的 Apple 账户余额充值 | 2026-11-11 / 2026-09-21 |
| 118407 | What type of gift card do I have? | 我拥有哪种类型的充值卡？ | 2025-02-05 / 2025-02-20 |
| 118412 | View and remove your devices that are associated with your Apple Account for purchases | 查看和移除与用于购买项目的 Apple 账户关联的设备 | 2026-09-15 / 2026-09-30 |
| 118414 | View or cancel pre-orders for apps, movies, music, or books | 查看或取消对 App、影片、音乐或图书的预订 | 2026-09-16 / 2026-09-17 |
| 118428 | Cancel a subscription from Apple | 取消 Apple 提供的订阅 | 2026-09-29 / 2026-09-29 |
| 118429 | Add a payment method to your Apple Account | 为你的 Apple 账户添加付款方式 | 2026-09-16 / 2026-09-28 |
| 119902 | Check your Apple Account balance | 查看 Apple 账户余额 | 2026-09-16 / 2026-09-17 |
| 120636 | If you can’t create an Apple Account or see “your account cannot be created at this time” | 如果你无法创建 Apple 账户或看到“此时无法创建你的账户” | 2026-09-14 / 2026-09-24 |
| 120933 | About gift card scams | 关于充值卡诈骗 | 2026-06-24 / 2026-06-30 |
| 122621 | About trusted phone numbers and trusted devices for Apple Account | 关于 Apple 账户的受信任电话号码和受信任设备 | 2026-09-14 / 2026-09-23 |
| 125662 | If you're asked to confirm that you’re an adult | 如果要求你确认自己是成年人 | 2026-10-26 / 2026-10-26 |
| 125666 | Region-specific rules for managing an Apple Account | 有关管理 Apple 账户的特定地区规则 | 2026-10-26 / 2026-10-26 |

**其他文件**

- `legal/`：`ams-terms-us-en.md`、`ams-terms-tr-tr.md`、`ams-terms-cn-zh.md`、`gift-card-terms-us-en.md`、`gift-card-terms-tr.md`、`apple-store-gift-card-terms-us-en.md`、`icloud-gcbd-terms-zh.md`、`icloud-gcbd-terms-en.md`、`trademark-guidelines-en.md`
- `pricing/`：`apple-one-us-en.md`、`icloud-plus-tv-arcade.md`（美国）、`icloud-plus-tv-arcade-tr.md`
- `newsroom/`：`2024-06-new-features-apple-services-en.md`
- `developer/`：`news-gvnljl3f-price-tax-updates.md`、`asc-manage-app-availability.md`

**旧 HT 编号跳转**（2026-11-19 用 curl 跟随跳转所得）

HT204316 → 108647；HT204034 → 108647；HT202631 → 111741；HT201266 → 118429；HT201389 → 118283；HT208351 → 111754；HT204053 → 111001；HT201365 → 108794；HT201351 → 109511；HT201303 → 102614；HT204759 → 102568；HT201060 → 105062；HT201088 → 108380；HT201081 → 102652；HT201079 → 108774；HT204411 → 118205；HT204632 → 118205；HT201238 → 108047；HT204915 → 102660；HT201084 → 102617；HT201441 → 108934；HT202039 → 118428；HT203993 → 105023；HT201209 → 118242；HT201359 → 118244；HT5582 → 118244；HT207957 → 102775；HT213252 → 109501（未抓取）。

## 19. 主会话补抓的几篇（2026-11-19）

研究完成后，写 How-to 时还缺几篇，主会话用同一个 `fetch.py` 补抓，清单已追加到 `tools/official-urls.tsv`。中文界面用语看 `support-zh/` 里的同号文件。

**账户被锁定、非活跃、被停用**：[102640 en](https://support.apple.com/en-us/102640) / [zh](https://support.apple.com/zh-cn/102640)（en 发布于 2025-12-05）。旧链接 HT204106 跳到这里。

- 因安全原因被锁（“This Apple Account has been disabled for security reasons”等）：“This might happen if you or someone else might have entered your password or other account information incorrectly too many times. To regain access, you need to reset your password.”（重设密码见 [102656](https://support.apple.com/en-us/102656)，未抓取）
- 显示被锁定或非活跃：可以在提示里轻点 “Request Access”，也可以到 [iforgot.apple.com/unlock](https://iforgot.apple.com/unlock) 申请。
- 申请不回来时，Apple 给的两条路：创建新的 Apple 账户（108647）；有购买凭证的，发起激活锁支持请求（[al-support.apple.com](https://al-support.apple.com/#/kbase)）。
- “Your Media & Purchases account has been disabled”：可以在提示里轻点 “Continue” 申请重新启用，或走 getsupport.apple.com 的链接。

**付款方式被拒绝**：[108095 en](https://support.apple.com/en-us/108095) / [zh](https://support.apple.com/zh-cn/108095)。旧链接 HT203005 跳到这里。

- “Your billing details must match the information on file with your financial institution.”
- 先添加新的付款方式，再移除旧的，再试一次；路径是“设置”→ 你的姓名 →“付款与配送”→“添加付款方式”。
- 有未付款的订单时，“you might not be able to make purchases or download free apps until your balance is paid”（付款见 118284，未抓取）。
- “If you're using an accepted payment method but your Apple Account is set to a different country or region, change your country or region.”
- “Apple doesn't have information about why the payment method was declined.”要问发卡的金融机构；可能要让银行开通境外交易。
- 看到 “Purchase Not Completed”：“If Apple detects suspicious purchase activity, you might need to submit a review request for your purchase.” 回到想买的项目，再买一次，看到提示时选 “Continue”，照屏幕提示提交审核；也可以在 [getsupport.apple.com](https://getsupport.apple.com/?caller=kbase) 提交。“Apple Support can't submit a review on your behalf or expedite the review process.”

**请求退款**：[118223 en](https://support.apple.com/en-us/118223) / [zh](https://support.apple.com/zh-cn/118223)（en 发布于 2026-09-17）。旧链接 HT204084 跳到这里。

- 在 [reportaproblem.apple.com](https://reportaproblem.apple.com/) 登录 →“I'd like to” →“Request a refund”→ 选原因 → 选项目 → 提交；24 到 48 小时内会有更新。
- 找不到那笔扣费：在邮箱里搜 “receipt from Apple”，看收据上是哪个 Apple 账户买的，用那个账户登录 reportaproblem。有多个账户的，每个都登录查一遍。
- “Refund eligibility might vary by country or region.”

**订阅涨价**（开发者文档，讲 Apple 怎么通知订阅者）：[App Store Connect：Manage pricing for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/manage-pricing-for-auto-renewable-subscriptions)，`raw/official/developer/asc-subscription-pricing.md`；[涨价门槛表](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/auto-renewable-subscription-price-increase-thresholds/)，`raw/official/developer/asc-price-increase-thresholds.md`；[StoreKit：Managing price increases](https://developer.apple.com/documentation/storekit/managing-price-increases-for-auto-renewable-subscriptions)，`raw/official/developer/storekit-managing-price-increases.md`（这一篇对脚本是空壳，抓的是同地址加 `.md` 的版本）。

- 涨价分两种：要订阅者同意的，和只通知、不用同意的。“If a subscriber doesn't consent before the first renewal at the higher price, their subscription will expire at the end of the last renewal cycle at the former price.”
- 要同意时：“Apple will automatically contact subscribers by email or push notification to request consent.” 不同意或不理会，Apple 大约每周再问一次，直到这个计费周期结束、订阅到期。
- 不用同意时：“Apple will automatically notify subscribers of the price increase with no additional request for consent”，在下次续订前 27 或 7 天发邮件和推送。
- 开发者可以给老订阅者保留原价：“You also have the option to preserve prices for existing subscribers.” 所以老订阅者续费是不是涨价，要看这个 App 的开发者怎么设，社区帖子里两种说法都对得上。
- 哪些情况要同意（超过各地区的门槛、12 个月内已经涨过一次、所在地区法律要求），门槛按国家或地区列在门槛表里。写的时候讲原则，不抄具体数字。
- 土耳其条款另写了涨价至少提前 30 天邮件通知（第 14 节）。

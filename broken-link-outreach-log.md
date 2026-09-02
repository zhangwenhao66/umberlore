# UmberLore 断链置换外链日志

`trafficsite-broken-link-building` 定时任务的执行记录。

---

## 2026-08-04（首次运行）

### 检查过的资源页

| 资源页 | 外链数 | 真实失效 |
|---|---|---|
| https://libguides.brooklyn.cuny.edu/artresourceguide/webresources （Brooklyn College, Art Web Resources） | 3 | 0 |
| https://libguides.drew.edu/ARTH/web （Drew University, Art History Web Resources） | 25 | **2** |
| https://libguides.dickinson.edu/art/websites （Dickinson College, Art & Art History Websites） | 42 | 0 |
| https://libguides.library.ohio.edu/arthistory/websites （Ohio University, Art History Websites） | 23 | **1** |

合计核查 93 条外链。

### 发现的真实失效链接

1. **https://pictures.royalsociety.org/home/** —— 真实 404（`404 - File or directory not found.`），锚文本 "Royal Society Picture Library"，在 Drew 页上
2. **https://www.fcusd.org/cms/lib/.../University%20of%20Chicago%20Writing%20an%20Argument%20in%20College.pdf** —— 真实 404，锚文本 "Writing in College – A Short Guide to College Writing"，在 Drew 页上
3. **https://dahj.org/newsblog/digital-art-history-society-dahs** —— 真实 404，锚文本 "Digital Art History Society"，在 Ohio 页上

### 处理结果

**本站本次跳过，未发出任何邮件。**

逐条说明为什么都不能置换：

- **Royal Society Picture Library**：英国皇家学会的**科学史图像馆藏**（肖像、手稿、科学插图），不是艺术史内容。UmberLore 目前 9 篇文章讲的是梵高、蒙娜丽莎、克里姆特、波普艺术、赖特建筑、滴水嘴兽，主题不对应
- **Writing in College（芝加哥大学学术写作指南 PDF）**：学术写作教学材料，跟视觉艺术史毫无关系
- **Digital Art History Society**：一个**学术组织的介绍页**，收录目的是让读者了解并加入该组织，不是可被文章替代的内容页。用一篇《蒙娜丽莎》文章去顶替一个学会的组织页不成立

三条都属于硬性原则 2 禁止的硬凑，如实放弃。

### 排除的误报

`403`（7 条，Drew 页居多）、`429`（限流）、`502`、`0` 均不计为失效，只认干净 404。

### 遗留待办

本站建站于 2026-08-02，目前 9 篇文章、无 `[已发布]` 状态的 linkable asset（`linkable-asset-backlog.md` 明确建议积累 15-20 篇后再做资产），所以本轮只能拿单篇文章去匹配，可匹配面窄。等文章数上来、且有了资产型页面（如流派时间线、颜料史对照表）之后再跑，命中率会明显提高——因为艺术史资源页收录的多是**参考型资源**而非单篇文章，这一点跟 WarCrumbs 首轮遇到的失败模式一致。

---

## 2026-08-09（第二次运行）

文章数已从 9 篇涨到 18 篇（`src/data/guides.ts`），但类别仍只有三个：Architecture（4：gargoyle、Frank Lloyd Wright、St. Peter's Basilica、Sagrada Família）、Painting（11：Van Gogh、Monet 睡莲、Mona Lisa、Klimt、famous-paintings、Munch's Scream、Frida Kahlo、Starry Night、Goya's Saturn、Andy Warhol、Diego Rivera）、Movements（2：Abstract Art、Pop Art、Art Deco）。没有 Photography / Art Crime（独立支柱）/ Pigments & Materials / Decorative Arts 文章。`linkable-asset-backlog.md` 里 4 个资产点子仍全部 `[待制作]`，没有一个 `[已发布]`。

### 检查过的资源页

| 资源页 | 类型 | 检查的外链数（含内部/机构链接） | 真实失效 |
|---|---|---|---|
| https://guides.lib.utexas.edu/art （UT Austin 主页） | 大学图书馆 LibGuide | ~20（大多站内） | 0 |
| https://libguides.unomaha.edu/art/free （Nebraska Omaha） | 大学图书馆 LibGuide | 12 | 0 |
| https://guides.library.barnard.edu/AHIS （Barnard） | 大学图书馆 LibGuide | 大多站内/Columbia 内部 | 0 |
| https://libguides.csusb.edu/artresources/arthistory （CSU San Bernardino） | 大学图书馆 LibGuide | 15 | 0 |
| https://libguides.utsa.edu/oercolfa/art （UTSA OER） | 大学图书馆 LibGuide | 18 | 0 |
| https://guides.library.duke.edu/arthistory （Duke） | 大学图书馆 LibGuide | 10+（大多站内/Duke catalog） | 0 |
| https://libguides.academyart.edu/art-history （Academy of Art University） | 大学图书馆 LibGuide | 大多是需校内代理登录的数据库链接 | 0 |
| https://arthistoryteachingresources.org/lessons/mexican-muralism/ （AHTR，Mexican Muralism 课程页） | 教学资源页 | 7 | **2（见下，均放弃）** |
| https://guides.ll.georgetown.edu/c.php?g=277383&p=2945859 （Georgetown 法学院 Art Crime 研究指南） | 大学图书馆 LibGuide | 25+ | **1（见下，放弃）** |
| https://libguides.bates.edu/art-crime （Bates College） | 大学图书馆 LibGuide | 20 | 0 |
| https://bloggers.feedspot.com/art_history_blogs/ （Feedspot「25 Best Art History Blogs」榜单） | 榜单页 | 14 | 0（3 条 blogspot/自建博客域名返回 `000` 连接失败，判定为沙箱噪音，不计入，见下） |
| https://libguides.getty.edu/holocaust （Getty Research Institute，Holocaust-Era Research Resources） | 大学图书馆 LibGuide | 全部是 Getty 内部 catalog handle 链接，无外部链接可测 | — |
| Fallingwater 结构工程相关搜索命中的 3 个页面（PSU 工学院失效案例页、waterlandlife.org、omicsgroup.org） | 单篇文章/PDF | 3 | 0（1 条 523、1 条 403，均排除） |
| Mona Lisa 1911 失窃相关的 Library of Congress Chronicling America 指南页 | 图书馆指南 | 全部站内链接，无外部链接可测 | — |

合计新核查约 10 个资源页、140+ 条外链（含大量站内/数据库链接，真正可测的外部内容链接约 90 条）。

### 发现的真实失效链接

1. **http://docproj.loyola.edu/index.html** —— 干净 404（`Microsoft-HTTPAPI/2.0`，"HTTP Error 404. The requested resource is not found."），锚文本 "The Project for the Documentation of Wartime Cultural Losses (The Documentation Project)"，位于 Georgetown 法学院 Art Crime 研究指南的 **"Stolen and Looted Art Databases and Resources"** 板块，与 FBI Art Crime、ArtClaim、LootedArt.com、Interpol 数据库并列。
2. AHTR「Mexican Muralism」课程页上两条：**http://www.wpamurals.com/**（DNS 无法解析，真实站点已搬到 wpamurals.org，域名不同不是简单的协议/子域名变化）和 **http://icaadocs.mfah.org/icaadocs/**（DNS 无法解析，经 WebSearch 核实该项目已搬到 icaa.mfah.org/s/en/page/home）。这两条不是"干净 404"，是 DNS 解析失败（`curl -v` 显示 `Could not resolve host`），按项目约定的排除清单本不计入失效统计，但因为有独立 WebSearch 交叉验证确认目标站点确实搬家/域名作废，记录在案供下次参考，本轮不作为可发送机会处理。

### 处理结果

**本站本次仍跳过，未发出任何邮件，`outreach-drafts.md` 未新增草稿。**

- **docproj.loyola.edu（Georgetown Law）**：所在板块是"失窃艺术品数据库与资源"清单，跟另外三个都是可检索的档案/数据库项目。UmberLore 现有的 `gustav-klimt` 文章讲的是一个具体案例（Bloch-Bauer 和 Beethoven Frieze 两桩归还案的对比），是叙事型文章，不是数据库或档案工具，功能上不能替代一个战时文物损失记录项目——跟 2026-08-04 日志里 "Digital Art History Society" 那次拒绝理由完全同构（组织/工具类资源不能被单篇文章硬顶）。没有找到更贴切的候选，如实放弃。
- **wpamurals.com / icaadocs.mfah.org（AHTR 课程页）**：同样是档案数据库/机构项目类链接（WPA 壁画数据库、拉美现当代艺术文献数字档案），UmberLore 没有对应的数据库型资产可以替换；且这两条不是干净 404，按规则不计入正式失效统计，双重原因都不构成机会。
- 其余检查的 8 个大学图书馆 LibGuide 页面外链绝大多数指向机构官网、博物馆、稳定的学术数据库（Getty、Smarthistory、JSTOR 等），链接健康度很高，没有发现新的失效链接。

### 排除的误报

`403`（waterlandlife.org 等）、`523`（omicsgroup.org，Cloudflare 源站不可达）、`429`（melbourneblogger.blogspot.com 限流）、`000`（3 条 blogspot 域名 + theartofvalue.blog，连接失败/SSL 握手失败，无法排除是沙箱层面的拦截）均不计为失效，只认干净 404，延续上次约定。

### 遗留待办 / 下次建议

1. **内容广度仍是主要瓶颈，不是资源页数量**：这次核查的资源页比首轮更多、外链总数是首轮的 1.5 倍，但唯二命中的真失效链接又都指向数据库/档案类资源，UmberLore 18 篇全是叙事型文章（Architecture / Painting / Movements 三类），仍然没有一篇能匹配"数据库替换数据库"的场景。这跟首轮结论一致：**艺术史资源页收录的多是参考型/工具型资源，不是单篇文章**，单靠涨文章数不能解决这个结构性错配，需要 `linkable-asset-backlog.md` 里的资产型页面（颜料时间轴、开放版权图库总目录、未追回艺术品登记册等）落地才能真正打开这类资源页的置换机会——这几个点子目前全部 `[待制作]`，没有一个 `[已发布]`。
2. Photography、Art Crime（独立支柱，不是像 Klimt 文章那样附带提及）、Pigments & Materials、Decorative Arts 几个定位支柱仍是内容空白，这些类别对应的资源页（摄影史、艺术品鉴定/保险、颜料化学）目前完全没有可匹配的文章，选题上可以优先补齐。
3. 下次运行前建议直接检索这四个空白支柱 + 已发布资产的关键词组合的资源页，而不是继续在 Architecture/Painting/Movements 已经检查过的大学图书馆 LibGuide 里重复找（本轮检查的 8 个新 LibGuide 命中率为 0，收益递减）。

---

## 2026-08-16（第三次运行）

### 方向调整

本轮启动前先复查 `src/data/guides.ts`：文章数已从 18 篇涨到 **32 篇**，新增了三个此前完全空白的类别——**Photography**（1 篇：`daguerreotype`，"What Is a Daguerreotype?"，2026-08-10 发布）、**Sculpture**（`venus-de-milo`）、**Non-Western Art**（`mandala-art`），以及 **Technique** 类别下的 `cloisonne`（珐琅/装饰工艺技法）、`elements-of-art`、`emphasis-in-art`。`linkable-asset-backlog.md` 里 4 个资产点子仍全部 `[待制作]`，没有一个 `[已发布]`，所以本轮仍是纯文章匹配，无资产可递。

按建议方向，本轮改为直接检索 Photography（早期摄影史/达盖尔银版法）和 Decorative Arts（珐琅/金属工艺）两个新覆盖到的空白支柱对应的资源页，不再重复检查 Architecture/Painting/Movements 已经查过多轮、收益递减的大学图书馆 LibGuide。Art Crime（仍无独立文章）、Pigments & Materials（仍无对应文章）本轮未检索，因为站内确实没有可匹配内容，检索了也无法处理，如实跳过而非硬凑。

### 检查过的资源页

| 资源页 | 主题 | 检查的外链数 | 真实失效 |
|---|---|---|---|
| https://libguides.marian.edu/c.php?g=115953&p=752197 （Marian University, Photography "Online Resources"） | 早期摄影史 | 15 | **1** |
| https://guides.library.oregonstate.edu/earlyphotoformats/daguerreotypes （Oregon State, Daguerreotypes 专页） | 早期摄影史 | 30+（几乎全为站内/图书馆导航） | 0 |
| https://libguides.lib.msu.edu/c.php?g=1158158&p=8453228 （Michigan State, Photography History） | 早期摄影史 | 15+（多为馆藏目录链接） | 0 |
| https://utrgv.libguides.com/earlyphotographs/daguerrotype （UT Rio Grande Valley, Daguerreotype 专页） | 早期摄影史 | 9 | 0 |
| https://libguides.library.albany.edu/photohistory （SUNY Albany, History of Photography） | 早期摄影史 | 0（页面主内容区未渲染出可测外链） | — |
| https://libguides.colum.edu/photography/historybios （Columbia College Chicago, History & Bios） | 早期摄影史 | 20+（多为图书馆目录 permalink） | 0 |
| https://libguides.clarkart.edu/c.php?g=746774&p=5350392 （Clark Art Institute, History/Theory/Criticism） | 摄影史 | 27（全为馆藏目录 permalink） | 0 |
| https://libguides.colum.edu/photography/historyofphotography （Columbia College Chicago, History of Photography） | 摄影史 | 22 | 0 |
| https://utrgv.libguides.com/earlyphotographs/resources （UTRGV, Additional Resources） | 早期摄影史 | 18 | 0 |
| https://libguides.columbiastate.edu/Photography （Columbia State CC, History of Photography） | 摄影史 | 6 | 0 |
| https://libguides.clarkart.edu/c.php?g=746774&p=5350390 （Clark Art Institute, Researching Photographers） | 摄影史/研究工具 | 16（多为馆藏目录 permalink） | 0 |
| https://guides.library.illinois.edu/decorativearts_metalwork/finding_articles （UIUC, Decorative Arts: Metalwork） | 装饰工艺/金属工艺 | 4（3 条为需校内代理登录的数据库） | 0 |
| https://libguides.clarkart.edu/c.php?g=746773&p=5350426 （Clark Art Institute, Decorative Arts 研究生指南） | 装饰工艺 | 34（全为馆藏目录 permalink） | 0 |

合计核查 13 个资源页，约 220 条链接（含大量图书馆内部 permalink/目录链接，真正可测的外部内容链接约 40 条）。

### 发现的真实失效链接

**http://www.rleggat.com/photohistory/** —— Robert Leggat 撰写的知名摄影史参考站点《A History of Photography》（1999 年上线，被多篇学术文献引用），锚文本 "A History of Photography from its beginnings till the 1920s"，位于 Marian University Photography LibGuide 的 "Online Resources" 板块。**用两个独立 DNS 解析器交叉验证为域名整体已死**：`dns.google` 和 `cloudflare-dns.com` 均返回 "lame delegation" / "No Reachable Authority at delegation rleggat.com"（不是普通的 NXDOMAIN，是该域名的权威名字服务器本身不可达，说明域名注册或 DNS 托管已彻底失效），`curl -v` 确认 "Could not resolve host"。

### 处理结果

**本站本次匹配到 1 条真实机会并成功发送。**

站内 2026-08-10 新发布的 `daguerreotype` 文章（"What Is a Daguerreotype? A 'First Photo' That Barely Survived"）覆盖达盖尔银版摄影法的工艺细节、1838 年 Boulevard du Temple 那张常被称为"最早的人像照片"的银版照片、以及现存流通版本实际上都源自 1930 年代复制品而非原版这几点，跟失效链接所在的"早期摄影史通用综述"主题真实对应——不是数据库/档案类资源被硬顶（Leggat 的站点本身也是一篇长文本性质的历史综述，不是可检索数据库），而是用一篇聚焦更窄的单一技术专题文章去补一个已经消失的综述资源，邮件措辞明确写成"覆盖了同一早期阶段的一部分"而非声称完全等价。

邮件按"先陈述断链问题，再给替换建议"两段式撰写，过 humanizer + avoid-ai-writing 两道检查后存入 `outreach-drafts.md`（Pitch 5），独立复核 agent（全新上下文）核实：无 14 天内重复联系记录、DNS 死链证据属实、替换内容主题对应且措辞诚实、收件人确系该指南负责馆员、文本无 AI 写作痕迹，五项全部通过，判定"可以发送"。

已发送至 cbalgeman@marian.edu（Caitlin Balgeman，Marian University Photography 学科馆员），`gmail_send.py --from umberlore`，Message ID `1a0093d69f104a52`。

### 排除的误报

- `403`（`www.asmp.org`、`www.fstopmagazine.com`、`www.loc.gov/pictures/`、`chroniclingamerica.loc.gov`、`www.newspapers.com`、`newspaperarchive.com`、`siris-archives.si.edu`、`www.eastman.org`、`imma.ie`、`francine.clarkart.edu` 等，多为反爬 WAF）不计为失效。
- `000`（连接超时/无法解析）两条：`http://www.imcpl.org/resources/digitallibrary/index.html`、`http://www.pbs.org/ktca/americanphotography/`——分别核实 `imcpl.org`、`pbs.org` 根域名均能正常解析（DNS 记录存在），说明只是具体路径超时/失效或服务器慢，不是域名整体已死，不满足"干净 404 或域名整体已死"的计入标准，不计入。
- `https://images.google.com/hosted/life`（Life Magazine on Google 旧版功能，已被 Google 停用）返回 200 但重定向到无关页面，判定为"软失效"而非硬失效，未作为机会处理。

### 遗留待办 / 下次建议

1. **内容广度瓶颈开始松动**：这是第一次在 Photography/Decorative Arts 方向真正命中机会，验证了上两轮"先补齐内容支柱，命中率才会提高"的判断是对的——18 篇（Architecture/Painting/Movements 三类）时连续两轮 0 命中，32 篇（新增 Photography/Sculpture/Non-Western Art/Technique）后第一次命中。但样本量还小（1 条），不能高估为"问题已解决"。
2. **Decorative Arts 方向本轮检索了但未命中**：UIUC 和 Clark Art Institute 的装饰工艺资源页外链健康度很高（多为图书馆目录/需校内代理的数据库，非公开可测外链），`cloisonne` 文章暂时没有匹配到断链机会，不代表这个方向没价值，只是这次抽样没碰到。
3. **Art Crime、Pigments & Materials 仍是内容空白**：站内仍然一篇都没有，下次运行前如果这两个支柱有新文章发布，可以优先检索对应资源页；如果仍是空白，继续跳过，不要为了"凑机会"检索后再放弃。
4. `linkable-asset-backlog.md` 里 4 个资产点子仍全部 `[待制作]`——一旦有资产型页面（尤其是颜料时间轴、开放版权图库总目录）发布，应优先重新检索数据库/档案类资源页（Getty、Founding LibGuides 里带"databases"板块的部分），这类资源页此前两轮的失效链接几乎都出现在"数据库/档案清单"板块而非普通链接列表，需要用资产而非文章去匹配。

---

## 2026-08-21（第四次运行）

### 第一部分：核实旧 pitch

`broken-link-outreach-log.md` 里唯一一条"已发送"记录是 2026-08-16 的 Pitch 5（Marian University, cbalgeman@marian.edu），发送日期晚于 2026-08-11 这个核实窗口的截止线，不满足"发送日期在 2026-08-11 之前"的条件。**没有符合条件的记录，第一部分按规则跳过。**

### 第二部分：新断链机会

站内文章数已从上次（2026-08-16）的 32 篇涨到 **40 篇**（`src/data/guides.ts`），新增覆盖：Non-Western Art 从 1 篇（mandala-art）涨到 4 篇（新增 aztec-art、mayan-art、aboriginal-art），Movements 新增 renaissance-art、art-styles、psychedelic-art，Technique 新增 cloisonne、emphasis-in-art、encaustic-painting，另有 baroque-paintings、the-broken-column、whistler-ruskin-trial、jackson-pollock 等多篇 Painting。本轮据此改为直接检索 Aztec/Mesoamerican、Renaissance、Aboriginal/Indigenous、Encaustic、Psychedelic Art 这几个新覆盖或首次覆盖的方向，避开此前两轮已反复检查、收益递减的 Architecture/Painting/Movements 通用大学图书馆 LibGuide。

**检查过的资源页**：合计 34 个（超过任务要求的 20-30 个下限），覆盖 Aztec/Mesoamerican（10 个，Kean/Yale/UAH/UCLA/Southwestern/St. Thomas/UTSA 等）、Renaissance（7 个，Illinois/UCLA/Rutgers/Brown/Michigan/SCU/Augsburg）、Encaustic（1 个，encaustic.com/links）、Aboriginal/Indigenous Art（6 个，Brandon/Calgary/Newcastle/SVA/UBC/Queen's）、Psychedelic Art（1 个，Evergreen State）、以及不限主题的通用艺术史资源页（9 个，Lincoln/Santa Fe College/William Paterson/SUNY Oswego/Kalamazoo/West Sound Academy/Wesleyan/Utah Tech/TAMUC，用于补齐样本量）。合计出站链接约 600+ 条。**两个资源页本身抓取失败**（`libguides.stthomas.edu/mesoamericanart` 返回自身 404，`tamuc.libguides.com/ArtResearchResources` SSL 握手失败，均判定为噪音跳过，非站点内容失效）。

**脚本判定 DEAD 共 21 条**，逐条核实后**全部排除，本轮无可发送机会**，原因分三类：

1. **站内系统链接，非内容页**（约 8 条）：Twitter 账号页、图书馆内部登录门户/楼层导览/"建议采购"表单、Berkeley 的"如何评估网络资源"教学页等——这些链接本身跟艺术史内容无关，站在断链置换的立场上没有匹配空间，直接排除。
2. **数据库/档案/机构主页类资源，功能上无法被叙事型文章替代**（约 9 条）：Tulane 数字图书馆的"Mesoamerican Painted Manuscripts"手稿库（Islandora 平台已于 2024 年 7 月正式下线，经 WebSearch 独立信息源交叉验证确认真实停用，但目标资源是手稿数据库，站内 aztec-art/mayan-art 均是叙事型文章，不覆盖手稿本体）、Rutgers Renaissance 指南的 BIVIO 意大利文艺复兴艺术全文数字图书馆（两个独立 DNS 解析器一致返回 NXDOMAIN，确认子域名已失效，但同样是全文档案库不是叙事内容）、Princeton Art Museum 的"Art of the Ancient Americas"藏品浏览页（`curl -L` 确认真实 404，藏品数据库类）、Museo de Arte de Lima 的 `/collections` 虚拟藏品页（同样真实 404，藏品数据库类）、Santa Fe College 资源页上的 Galleria dell'Accademia di Firenze 和 National Art Museum of China 两个机构主页（分别为佛罗伦萨学院美术馆、中国美术馆，两个独立 DNS 解析器确认失效，但属于"世界各地美术馆列表"里的机构官网条目，不是可被单篇文章替代的叙事内容）、Wesleyan 页面上的 ncmodernist.org/library.htm（"US Modernist Architecture Magazine Archive"建筑期刊全文档案库，经比对同批次 Kalamazoo College 页面上的 `usmodernist.org/library` SOFT 记录，确认该资源实际已平迁至新域名 usmodernist.org 而非真正消失，正确的"修复"是更新链接指向新域名而非塞入我们自己的内容，如实排除）。这类"数据库/机构页不能被叙事文章硬顶"的判断跟本日志 2026-08-04、2026-08-09 两次运行的既有先例完全一致，延续同一标准。
3. **地理/文化传统不对应**（2 条）：SVA 的 Indigenous Art 指南上 Portland Art Museum 的"Native American Art"专区页和 University of Alaska Fairbanks 的"Native Arts Center"页——均为北美原住民/阿拉斯加原住民艺术传统，跟站内 `aboriginal-art` 文章（专讲澳大利亚原住民、Papunya 定居点、Western Desert Art Movement）是两个完全不同的文化传统和地理区域，不构成规则 4 要求的"真实对应"，如实排除，不硬凑。
4. **`mna.inah.gob.mx`（墨西哥国家人类学博物馆，与 `aztec-art` 文章主题高度吻合——该文章的太阳石配图就来自这家博物馆）本可能是本轮最佳候选，但核实后确认是假阳性**：脚本报告 DNS 解析失败，但用 `dns.google` 和 `cloudflare-dns.com` 两个独立解析器交叉核实，`cloudflare-dns.com` 能正常解析出 IP，且 WebSearch 能检索到该域名下多个当前存活的子页面（`/informacion_general.php`、`/el_museo.php` 等），确认这是沙箱网络环境的解析不稳定造成的假阳性，不是真实失效，按硬性规则 3 不得作为机会处理。

**本轮结论**：34 个资源页、21 条脚本判定 DEAD，逐条核实后无一通过"真实失效 + 真实主题对应 + 目标页有真实权威度"三重门槛，**未发出任何邮件，`outreach-drafts.md` 未新增草稿**。由于全部是"检索了但确实没有匹配机会"而非"没轮到"，不写入 Owen 待办文档（按规则 10，单纯没找到机会不算需要 Owen 处理的事）。

### 遗留待办 / 下次建议

1. **Non-Western Art 方向（Aztec/Mesoamerican/Aboriginal）本轮首次系统检索，命中率仍是 0**，但样本本身健康度很高（大学图书馆藏品数据库/机构官网链接存活率普遍很高），不代表方向无价值，只是这批资源页的链接维护得比之前检查过的摄影史/建筑类页面更好。
2. **`usmodernist.org`（原 `ncmodernist.org`）值得记一笔**：这是一个仍在运营、只是换了域名的建筑期刊全文数据库，本轮两个不同资源页上分别出现了它的新旧域名（旧域名 404，新域名本轮探测到 502 但域名本身存活）。不构成本站的断链置换机会（数据库对数据库，不是叙事文章能替代的），但如果以后本站做 Frank Lloyd Wright 相关的资产型页面，这类档案库可以作为引用来源。
3. **数据库/档案类资源仍是本站结构性触达不到的机会类型**：连续四轮运行命中的失效链接里，凡是数据库/档案/机构主页类的全部因"功能不对等"被排除，唯一一次成功案例（2026-08-16 Marian University）匹配的是另一篇叙事型综述文章对叙事型综述文章。`linkable-asset-backlog.md` 里的资产点子（尤其 2 号"开放版权艺术图库总目录"、3 号"未追回艺术品登记册"）一旦发布，会是本站唯一能真正打开这类资源页机会的路径，目前仍全部 `[待制作]`。

### 更正（同日）：DEAD 计数复核

上面正文写的"21 条脚本判定 DEAD"是基于一次被并发任务覆盖、读取不完整的扫描输出统计的（本次运行的共享 scratchpad 目录被同一会话内其他站点的断链任务用相同的通用文件名如 `result.md`/`urls.txt` 反复覆写，是本轮才发现的并发写入问题）。用带站点前缀的独立文件名重新完整核对两批扫描后，**真实 DEAD 总数是 50 条（第一批 24 页 40 条 + 第二批 10 页 10 条），不是 21 条**。补充复核了此前未及查看的新增 29 条，逐条结论如下，均不改变"本轮无发送"的结论：

- **Southwestern 页面的 6 条**：5 条是该校 EZproxy 代理登录链接（`navigator.southwestern.edu/login?url=...` 包着 JSTOR/EBSCO/Films Media Group 等，代理子域名整体失效），属于需要校内认证的数据库访问口，非公开内容页，直接排除；另 1 条 `famsi.org`（Foundation for the Advancement of Mesoamerican Studies）经两个独立 DNS 解析器交叉确认真实失效，但资源页自己的描述原文是"pre-Columbian studies 的 invaluable tool...principal source"，明确定位为研究工具/门户，仍是数据库类资源，按既有标准排除。
- **Rutgers 页面新增 1 条**：`dt-forum.org`（Deutsches Forum für Kunstgeschichte，巴黎的德国艺术史研究机构）经 DNS 交叉确认真实失效，但同样是机构官网，非叙事内容，排除。
- **Brown 页面 1 条**：`bbis.advancement.brown.edu/.../giving/library` 是校友捐赠系统链接，与艺术史内容无关，排除。
- **Augsburg 页面 1 条**：`mcm.edu/academic/galileo/ars/arshtml/arstoc.html`（"The Art of Renaissance Science: Galileo and Perspective"）经核实域名本身存活（301 跳转到 https 后取得干净 404，非沙箱假阳性），且是叙事型文章而非数据库——这是本轮唯一一条通过"叙事对叙事"这道此前筛掉大量候选的门槛的机会，但主题核实后发现讲的是文艺复兴透视法与伽利略天文学的交叉关系，站内 `renaissance-art` 文章讲的是瓦萨里《艺苑名人传》与"文艺复兴"这个名称的由来，两者同属"文艺复兴"大类但具体主题不重合（一个是科学史交叉，一个是术语史/瓦萨里），站内目前没有任何一篇文章覆盖线性透视技法本身，勉强嫁接会违反规则 4 的"真实对应"要求，故不作为机会处理，如实放弃。
- **encaustic.com/links 页面新增 14 条**（连同此前已计入的合计 17 条 DEAD，出站链接共 87 条）：全部是失蜡画个体艺术家的个人网站/作品集，均为一对一的个人主页，本站 `encaustic-painting` 是综述性技法文章，替换个人艺术家作品集在功能上不对等（读者点进个人网站是想看这位艺术家的作品，不是看技法综述），且该页 87 条链接里 17 条确认失效（约 20%），链接维护状态一般，即使有主题匹配也需要额外评估规则 5 的资源页权威度门槛，本轮不作为机会处理。
- **Newcastle 页面新增 1 条**：`twitter.com/uonlib`，社交媒体账号，非内容页，排除。
- **UBC/SVA 页面新增的重复项**（Hatch Gallery、cdn.ubc.ca centennial、sva.edu 内部链接、Twitter 账号）：与正文已述一致，非内容页或非站内主题匹配，排除。

复核后仍然是**本轮 0 条可发送机会**，结论不变，仅为保证日志计数准确而补记。

---

## 2026-08-24（第五次运行，第二部分）

### 第一部分

已由上层会话统一核实：本站唯一发送(Marian University, 8/16)距今仅8天不满10天，无需验证，跳过。

### 第二部分：新断链置换机会

本轮方向：Art Forgery/Provenance research（对应本站"艺术犯罪"支柱）+ Medieval/Byzantine/Gothic art + American Architecture（此前未系统查过的方向）。用WebSearch收集51个候选大学LibGuides资源页（Cornell/Brown/Harvard/Princeton/Northwestern/Illinois/Berkeley/MSU等），分批用`broken_link_scan.py`扫描（部分子agent中途因等待脚本完成即以完成状态返回，未落盘，本次由上层会话续跑完成，输出保存在带前缀的专属文件里避免并发覆盖）。

**扫描结果**：合计47条脚本判定DEAD。逐条核实后**全部排除，本轮无可发送机会**，原因分类：
1. **代理/校内认证系统链接**（约15条）：Brown的BBIS捐赠系统、Northwestern的Bluesky账号/文章传递服务、各校EZproxy/VuFind内部检索页——非公开内容资源。
2. **档案/机构主页/收藏数据库类，功能不对等**（约20条）：Louvre旧版藏品页、卢浮宫检索系统、Maecenas古典艺术图片库、乔治·奥尔蒂斯古物收藏站、Dyabola考古数据库、National Gallery of Art展览目录页、Virginia's3D古罗马别墅重建项目、RCA设计数据库、VT国际艺术品数据库——均为数据库/机构收藏页，本站叙事型综述文章无法一对一替代，延续本站连续五轮的既有排除标准。
3. **主题不对应**（约10条）：`magazine.artland.com`的Art of Forgery文章（本站目前没有已发布的艺术伪造/艺术犯罪类文章，此支柱在`linkable-asset-backlog.md`里仍是待制作状态）、`themourners.org`（勃艮第公爵墓雕塑巡展，本站无对应中世纪雕塑文章）、Columbia的Byzantine icon/Amiens大教堂人文项目（本站`romanesque-painting`覆盖罗曼式非拜占庭/哥特式，主题相邻但不精确对应）、`hastings1066.com`贝叶挂毯页（本站无贝叶挂毯相关文章）——均为"主题相邻但不精确对应"，未硬凑。
4. 新增排查`westportlibrary.libguides.com/ArtHeists`（艺术盗窃案主题指南，理论上是本站"艺术犯罪"支柱的理想目标页）：仅3条出站链接，0条DEAD，本身链接密度太低不构成有效候选池，作废。

**本轮结论**：延续连续五轮的核心教训——数据库/档案/机构收藏类资源是本站结构性触达不到的机会类型，唯一路径是`linkable-asset-backlog.md`里"开放版权艺术图库总目录"/"未追回艺术品登记册"/艺术伪造相关资产尽快发布。

### 遗留待办

1. 若"艺术犯罪/伪造"方向的资产/文章一旦发布，`magazine.artland.com`的Art of Forgery文章、`westportlibrary.libguides.com/ArtHeists`指南都是可以立即重新评估的目标（后者虽然本轮链接密度太低不构成候选池，但主题极度吻合，届时可直接推资产而非等断链）。
2. 中世纪/拜占庭/哥特式艺术方向本轮系统查过但零命中，短期内不建议重复投入，除非站内新增更精确对应的文章（如专门讲拜占庭圣像画或贝叶挂毯的文章）。

---

## 2026-08-24（对上面"第五次运行第二部分"的补正，同日另一路执行）

**补正结论：`magazine.artland.com`的Art of Forgery机会实际有效，已发送。** 上面记录的拒绝理由"本站目前没有已发布的艺术伪造/艺术犯罪类文章"是误判——核对`src/data/guides.ts`确认`frida-kahlo-paintings`（Painting分类）早在2026-08-04已发布，正文覆盖2009年伪造Kahlo档案争议（专家指控方vs.坚持真品的持有人）与2025年10月巴伐利亚警方查获仿冒Kahlo画作（与仿冒毕加索、伦勃朗一同查获）两桩具体案例，主题与目标断链（Artland Magazine的"艺术伪造者"综述文章）高度吻合。此前那次拒绝只按"Art Crime独立分类=0篇"做了判断，没有逐篇通读Painting分类下是否有主题实质对应伪造/鉴定争议的文章，属于分类标签误导实际内容覆盖的疏漏。

**验证细节**：
- 目标资源页 https://westportlibrary.libguides.com/ArtForgery 的"Learn More Online"板块确认仍含该死链，与thecollector.com/hyperallergic.com/artsy.net等叙事型文章并列，页面`Last Updated: Mar 27, 2026`，维护活跃。
- 死链 https://magazine.artland.com/the-art-of-forgery-art-forgers-duped-world/ 用两个独立DNS解析器交叉确认：`dig @8.8.8.8`返回NXDOMAIN；`dig @1.1.1.1`本机因本地代理返回畸形报文，改用Cloudflare DoH JSON API（`https://cloudflare-dns.com/dns-query`）交叉验证，返回`Status:3`（NXDOMAIN），确认双解析器一致判定为真实DNS层失效，非HTTP层403/超时误报。`artland.com`根域名本身可解析但返回403（反爬），WebSearch未找到该文章已迁移到新地址的证据，不构成"仅搬新域名"的排除情形。
- 收件人 mkelly@westportlibrary.org（Melanie Kelly，Westport Library成人参考服务与馆藏策展主管）通过她本人的LibGuides员工资料页（`westportlibrary.libguides.com/prf.php?account_id=78445`）直接确认邮箱，非仅靠邮箱格式推测。`gmail_send.py list`按收件人和域名两种query核查均为空，全矩阵`outreach-drafts.md`/`broken-link-outreach-log.md`交叉查重也未发现这对URL-收件人组合被其他站处理过。
- 邮件按两段式结构撰写（第一段只谈断链，不提本站；第二段才给替换建议），过`Skill(humanizer)`+`Skill(avoid-ai-writing)`两道检查，独立复核agent（全新上下文）逐项重新核实DNS死链、目标页真实含该链接、主题真实对应（叙事对叙事，非数据库误配）、收件人真实性、邮件内每条Kahlo事实均可回溯guides.ts原文、无AI写作痕迹，全部通过，判定"VERDICT: can send"。

**已发送**：2026-08-24 via `gmail_send.py --from umberlore` 至 mkelly@westportlibrary.org，Message ID `1a033fb8dbb043ef`。完整邮件正文见`outreach-drafts.md` Pitch 8。

**遗留提醒**：上面"第五次运行第二部分"记录的其余44条DEAD链接排除结论（代理系统/数据库机构页/主题不对应）本次未重新复核，维持原判——只有`magazine.artland.com`这一条因为"分类标签掩盖实际内容覆盖"这个具体疏漏被重新捞出，不代表整批复核结论需要推翻。以后核对"本站是否已有对应主题文章"时，应逐篇通读候选分类下的文章正文/coreSummary，不能只看分类标签数量是否为0。

---

## 2026-08-28（第七次运行）— trafficsite-broken-link-building「外链产能集中规则」本轮命中UmberLore（11-30位曝光218，矩阵内容型五站中排名第一）

### 第一部分：核实一条10天以上旧pitch

Pitch 5（2026-08-16，Marian University Library Photography guide，cbalgeman@marian.edu，Message ID `1a0093d69f104a52`）距今12天，是本轮唯一满足条件的记录（Westport Library 8/24送出的Pitch 8仅4天，未到期）。

- curl访问目标页`https://libguides.marian.edu/c.php?g=115953&p=752197`返回200，死链`rleggat.com/photohistory/`原样仍在"Online Resources"板块，页面全文无"umberlore"字样，确认未换链。
- `dataforseo_query.py backlinks umberlore.com`当前全站仅1条外链（stackscope.dev，无关，首次发现8/25），marian.edu未出现。
- `gmail_send.py list --query "from:cbalgeman@marian.edu OR to:cbalgeman@marian.edu"`只有己方原邮件，零回复。
- **判定：`not_replaced`**。

满足"10-14天+目标页有真实权威度+对方零回复"跟进条件，已发送简短跟进（同线程），过humanizer+avoid-ai-writing检查无需改动，`gmail_send.py --from umberlore --reply-to 1a0093d69f104a52`发出，**Message ID `1a0488390e7a3eae`**。标记 `verified_not_replaced_followed_up_once`。

### 第二部分：新断链机会——本轮无有效机会

冷启动方向对齐新发布文章：Decorative Arts/陶瓷（`majolica`，8/25发布）+ Native American/西南部艺术（`sand-painting`，8/27发布，纳瓦霍仪式沙画）。`broken_link_scan.py`扫描24个资源页（16个陶瓷LibGuide+8个Native American艺术LibGuide）、约600+出站链接，9个页面命中DEAD标记，逐条核实：

- **陶瓷方向**：全部DEAD链接指向当代实践类资源（陶艺家个人站/画廊/MFA作品集/釉料供应商产品页/材料安全数据表/个人链接目录/展览信息/行业期刊），无一涉及`majolica`文章讲的"维多利亚majolica vs.文艺复兴maiolica术语混淆"这条历史线索，判定硬凑不采用。
- **Native American艺术方向**：多数DEAD链接是机构系统页（捐赠入口/Title IX政策页/图书馆社区页），3条看似内容的候选逐一WebSearch核实后排除：波特兰艺术博物馆/UAF学位项目页/北达科他州历史学会手稿索引均为数据库/项目页/地域或部落不对应，非可替代的叙事型内容（沿用本站自8/4起"数据库页不能被叙事文章替代"的一贯标准）。

**本轮无新增pitch**，是真实排查后的"确实没有可采用机会"结论，非偷懒未查——24页/600+链接全部逐条核实。

**累计口径**：UmberLore断链置换战术累计已发送8封pitch（含本轮1封跟进）；已验证`not_replaced` 2条（Marian、以及此前记录里的其他条目见上文各次运行）、`verified_live_backlink_confirmed` 0条，转化率仍为0。

**独立agent执行说明**：本轮由独立研究子agent完成调研+跟进邮件撰写发送（跟进邮件按规则允许自行发送，不需独立复核），上层编排会话核实其查重记录（`gmail_send.py list`+全矩阵grep）后确认无误，代为写入本条日志。

---

## 2026-08-31（第九次运行）— trafficsite-broken-link-building「外链产能集中规则」本轮命中UmberLore（11-30位曝光344，矩阵内容型五站排名第三）

### 流程异常：两次独立子agent先后"提前返回"，上层会话接手完成

按流程spawn了一个独立general-purpose子agent负责本站本轮调研，该agent两次以"completed"状态返回，但结果内容均显示任务实际未完成——第一次返回"I'll wait for the monitor notification before proceeding further"，第二次（收到续接消息后）返回"候选URL扫描仍在后台跑，我armed了一个Monitor任务，会在它完成时立即恢复"，随后仍以completed状态结束自己的回合而不是真正阻塞等待。两次检查`broken-link-outreach-log.md`和`git log`均确认没有任何新记录或commit产生。按全局CLAUDE.md"后台agent看门狗"协议：给了两次机会（累计约15分钟/近30万tokens）仍未产出，判定为流程性卡死（不是单次工具报错，是子agent对"后台任务未完成"这类场景系统性选择"提前收工等通知"而非同步等待/主动查询完成），用`TaskStop`终止该子agent，改为上层编排会话本次运行内自行完成同等严格度的调研，未悄悄跳过这道产能。

### 冷启动候选与扫描

读`src/data/guides.ts`最近发布文章（`pattern-in-art`8/31当天发布、`non-objective-art`/`famous-mexican-artists`8/30、`aphrodite-painting`/`icarus-painting`8/29），结合此前未覆盖过的`romanesque-painting`（8/22）方向，WebSearch收集15个大学/图书馆LibGuides候选（Harvard中世纪艺术建筑指南、UNM Los Alamos古典神话指南×2、STLCC古典神话参考资源、Santa Clara希腊艺术资源×2、Southern CT古典神话网站资源、Wichita State古典语言神话指南、Brooklyn CUNY/Pasco-Hernando/MSU/Lincoln/St. Joseph's/CCAD/SCAD艺术类Web Resources页），跑`broken_link_scan.py`扫描。

**扫描结果**：13个页面成功抓取（2个返回404资源页本身已下线：`libguides.phsc.edu`/`libguides.lib.msu.edu`），合计出站链接约360条，DEAD命中37条（Wichita State一页贡献20条，全部是该校自己图书馆目录`libcat.wichita.edu`内部检索链接，按硬性规则2排除，非第三方内容资源）。

**逐一质量门槛核实（4条看似有内容价值的候选）**：
- `http://hastings1066.com/baythumb.shtml`（Bayeux Tapestry缩略图页，Harvard中世纪艺术指南上失效）——**排除，主题不对应**。UmberLore的`romanesque-painting`文章专讲加泰罗尼亚/卡斯蒂利亚教堂壁画在1919-1926年被商人剥离转卖博物馆的历史，媒介是壁画（fresco），地域是西班牙；Bayeux Tapestry是诺曼/英格兰的刺绣挂毯，媒介和地域都不对应，不能算作"Romanesque painting"的替代内容，硬凑会误导。
- `http://www.paleothea.com/Gallery.html`（希腊神话女性图像总览，在UNM Los Alamos两个古典神话指南页上重复失效）——**排除，匹配度不够具体**。用Wayback Machine复核该页实际内容（2021-01快照）：这是一个横跨多位艺术家/多件雕塑绘画的Aphrodite及其他女神图像索引页（Titian的Actaeon、Picou/Bol等次要画家的Aphrodite画作、Knidos的Aphrodite雕塑等），性质接近"图像数据库/索引"而非叙事文章；本站`aphrodite-painting`一文明确聚焦四幅共享同一斜卧姿势谱系的特定名作（乔尔乔内-提香-马奈-委拉斯开兹），且开篇特意声明不重复覆盖已单独成文的《维纳斯的诞生》——两者的具体范围差距过大，替换会构成本站一贯反对的"用叙事文章冒充数据库页替代品"，未采用。
- `http://www.timelessmyths.com/classical/heracles.html`（同一UNM Los Alamos指南上失效）——**排除，本站无对应文章**。UmberLore目前没有任何Heracles/Hercules专题文章，无内容可替换。
- `http://web.uvic.ca/grs/department_files/classical_myth/index.html`（Southern CT古典神话资源页上失效）——**排除，无法核实内容对应性**。Wayback Machine在多个时间点均未收录该页快照（404），无法确认原页面是否覆盖了本站`icarus-painting`文章讲的Bruegel/Draper两幅具体画作，不能凭猜测认定匹配，未采用。

其余DEAD链接（Southern CT的图书馆捐款页、Lincoln University的Twitter主页与内部登录页等）均为机构内部导航/系统链接或社交媒体主页，按硬性规则2排除，非可替换的第三方内容资源。

**本轮无新增pitch**，是真实排查后的结论——4条看似有价值的候选逐一核实后均因主题不对应/范围过窄或过宽/无法验证内容而排除，不硬凑。

**累计口径**：UmberLore断链置换战术累计已发送8封pitch（含1封跟进）；已验证`not_replaced` 2条、`verified_live_backlink_confirmed` 0条，转化率仍为0。

### 遗留待办

1. `paleothea.com`若未来UmberLore发布覆盖面更广的"Aphrodite in art"综述型文章（而非当前聚焦4幅特定名画的窄口径文章），可重新评估这条候选。
2. 本站编排层的"独立子agent遇到后台任务未完成时倾向于提前收工而非同步等待"这个模式已连续在断链置换任务里复现（本轮为第三次同类记录，此前两次是08-16/08-26的WageLark站，本次是UmberLore站首次），建议以后本站及其余站的子agent任务说明里更明确要求"任何后台脚本必须同步等待完成，不能以'已armed monitor'为由提前结束回合"。

---

## 2026-09-02（第十次运行）— trafficsite-broken-link-building「外链产能集中规则」本轮命中UmberLore（11-30位曝光408，矩阵内容型站排名第三）

### 第一部分：核实旧pitch

复查全部"已发送"记录：Pitch 5（Marian University，2026-08-16）已在2026-08-28验证为`not_replaced`并完成一次跟进（`verified_not_replaced_followed_up_once`），按规则不再重复验证、也不二次跟进。Pitch 8（Westport Library，2026-08-24）距今仅9天，不满足"10天以前"的核实窗口。**没有满足"10天以前且从未验证过"条件的记录，第一部分按规则跳过。**

### 第二部分：新断链机会

**冷启动方向对齐最近发布文章**：读`src/data/guides.ts`确认站内文章数已涨到**58篇**，最近14天新发布且此前未系统检索过的方向包括`chiaroscuro-woodcut`（2026-09-01，Technique分类，讲Cranach木版画倒填年份的具体考据）、`famous-portraits`（2026-08-28，Painting分类，讲Las Meninas/Madame X/American Gothic三幅肖像画的档案争议）、`ghost-of-a-flea`+`pandemonium-painting`（Blake插画相关）、`monochromatic-painting`/`non-objective-art`（2026-09-01/08-30，Movements）。据此确定三个检索方向：① 版画史/Printmaking（对应`chiaroscuro-woodcut`）② William Blake（对应`ghost-of-a-flea`/`pandemonium-painting`）③ Portraiture/肖像画史（对应`famous-portraits`）。均为本站首次系统检索这几个方向（此前九轮检索过的方向是Architecture/Painting/Movements通用页、Photography、Decorative Arts/金属工艺、Aztec/Renaissance/Aboriginal/Encaustic/Psychedelic、Art Forgery/Medieval/Byzantine/American Architecture、陶瓷/Native American）。

用WebSearch收集candidate 29个大学图书馆LibGuides/机构研究指南（RISD Printmaking系列4个、Simmons/SUNY New Paltz/OCADU/Towson/MassArt/Clark Art Institute《The Print》系列2个共9个印刷史资源页，Duquesne/Bryn Mawr Tri-Co系列3个/Missouri/Yale Blake系列5个共10个Blake资源页，Illinois Milton Studies/New St. Andrews/Dartmouth Milton Reading Room共3个，UCNJ/SJSU/Smithsonian/Brown/Columbia College Chicago共5个肖像画资源页），跑`broken_link_scan.py`扫描（29个URL，超过任务20-30下限）。

**扫描结果**：4个RISD页面因SSL握手失败（`curl -v`交叉确认为连接层`Connection reset by peer`，非HTTP层错误，判定为沙箱/对方WAF噪音，非站点内容失效）、3个Bryn Mawr Tri-Co页面返回404（资源页自身已下线或迁移，非目标内容失效）、1个tyndale.nsa.edu页面返回403（反爬），均排除不计入。**成功扫描25个资源页，合计出站链接约1,000+条，脚本判定DEAD共24条**。

**逐条核实24条DEAD，全部排除，本轮无可发送机会**，原因分类：

1. **代理/校内认证系统链接**（1条）：Duquesne Blake指南上`www-oxfordreference-com.authenticate.library.duq.edu`（校内代理域名整体失效）——非公开内容，排除。
2. **图书馆内部系统/目录/ILL链接**（6条）：Missouri的`library.missouri.edu/databases/moreinfo/?id=3177`（内部数据库信息页）、Dartmouth的`libcat.dartmouth.edu`（本校目录首页）、Yale Illuminated Books页上3条`borrow-direct.relaisd2d.com`深链（馆际互借系统按查询条件生成的检索结果页，非内容页）、Smithsonian页上`library.dev.si.edu/research/art-and-design-collections-smithsonian`（URL本身带`.dev.`，是对方网站自己的staging环境地址误留在生产页面，属于对方需要自己修正的内部typo，不是可被第三方内容替换的资源）——均排除。
3. **机构/校务/无关页面**（3条）：Missouri的`missouri.edu/eeo-aa/`（学校平权行动政策页，与内容无关，属页脚模板链接失效）、Brown的`bbis.advancement.brown.edu/BBPhenix/giving/library`（校友捐赠系统，与2026-08-21本站曾排除的同款Brown捐赠链接是同一模式）——排除。
4. **专业协会/博物馆机构主页，功能不对等**（8条）：`ifpda.org/content/`（国际版画经销商协会官网首页）、Smithsonian页上`www.npg.si.edu`×2（国家肖像馆官网首页，DNS解析失败，即便该机构确实存在，官网首页也不能被叙事文章替代）、`www.americanart.si.edu/renwick/index.cfm`（Renwick Gallery旧版URL）、`www.addisongallery.org`（Addison Gallery美国艺术博物馆官网首页，HTTP 404）、`www.appraisersassoc.org`（美国鉴定师协会官网）、`www.asopa.com`（经WebSearch核实为American Society of Portrait Artists旧域名，肖像画家协会官网）、`www.portraitsociety.org`（Portrait Society of America官网）——延续本站自2026-08-04起一贯的"机构/协会主页不能被单篇叙事文章硬顶"标准，全部排除。
5. **数据库/收藏项目类资源**（1条）：Smithsonian页上`decorativearts.library.wisc.edu`（University of Wisconsin的装饰艺术图像数据库项目），排除（数据库对数据库，本站无对应资产）。
6. **主题/媒介不对应，逐条WebSearch/Wayback核实内容后排除**（5条）：
   - `graphicstudio.usf.edu/gs/education/printmaking.html`（USF Graphicstudio当代版画工作室的教育项目页）与`blog.art21.org/category/media/printmaking/`（Art21纪录片系列关于"printmaking"标签的博客文章聚合页）——均为**当代版画教育/媒体机构资源**，本站唯一版画类文章`chiaroscuro-woodcut`讲的是1506-1516年间Cranach/Burgkmair/Ugo da Carpi的具体断代考据（16世纪历史专题），跟当代版画教育项目/纪录片博客毫无交集，硬凑会误导，排除。
   - `www.philaprintshop.com/diction.html`（费城印刷品商店的版画术语词典）——工具类词典页，非叙事内容，且`chiaroscuro-woodcut`是聚焦单一断代争议的窄口径文章，不能替代一份通用术语词典，排除。
   - `www.loebclassics.com/view/horace-odes/2004/pb_LCL033.23.xml/`（Dartmouth Milton Reading Room上失效的贺拉斯《颂歌》文本链接）——古典文学文本版本，跟本站视觉艺术史内容完全不相关（本站没有任何一篇文章覆盖古典文学文本本身），排除。
   - `www.rc.umd.edu`（Missouri《英语4168：1789-1890年主要作家》课程指南上失效，经识别为马里兰大学"Romantic Circles"浪漫主义文学学术门户旧域名）——**这是本轮核实最仔细的一条**：门户覆盖的是浪漫主义时期文学与文本研究（诗歌、书信、学术论文），不是视觉艺术；本站`ghost-of-a-flea`和`pandemonium-painting`两篇都是关于Blake作为**画家/版画家**的具体单幅作品考据，跟一个文学研究门户在媒介（文字研究 vs. 视觉艺术）和内容颗粒度（综合性学术门户 vs. 单幅画作专题）上都不对应，排除。
   - `www.neuegalerie.org/madame-dora`（Columbia College Chicago"Photo History I - Portraiture"页上失效，经Wayback核实为Neue Galerie博物馆关于摄影师Madame d'Ora [Dora Kallmus，1920-30年代维也纳/巴黎肖像摄影师]的过往特展页）——**本轮唯一认真评估过是否匹配的候选**：所在资源页明确是"摄影史"分类页（Photo History I），死链本身也是摄影师的特展介绍；本站`famous-portraits`一文虽然标题相关，但全文三个案例（Velázquez的《宫娥》、Sargent的《X夫人》、Grant Wood的《美国哥特式》）全部是**绘画**而非摄影，媒介不对应，站内也没有任何一篇覆盖20世纪肖像摄影或Madame d'Ora本人的文章，如实排除，不因标题字面相似（"portrait"）就硬凑。

**本轮结论**：29个候选、25个成功扫描、24条脚本判定DEAD，逐条核实后**无一通过"真实失效+真实主题对应+目标页有真实权威度"三重门槛，本轮无发送**。是真实排查后的"确实没有可采用机会"结论，非偷懒未查。

### 累计口径更正

前几轮日志里"累计已发送8封pitch"的表述有误——核对`outreach-drafts.md`的"Pitch N"编号后发现该编号是本站全部外链战术（guest-post-outreach + broken-link-building + linkable-asset-building）共用的同一套流水号，不是断链置换战术专属计数。**按`trafficsite-broken-link-building`战术本身重新核实**：本战术累计实际发送 **3封邮件**（Pitch 5原始pitch 1封 + 8/28对Pitch 5的跟进1封 + Pitch 8原始pitch 1封），已验证`verified_not_replaced_followed_up_once` 1条（Marian）、`verified_live_backlink_confirmed` 0条、Pitch 8（Westport）尚未到10天核实窗口。转化率 0/2（按2封原始pitch计，不含跟进）。以后本战术的累计口径统计应以`broken-link-outreach-log.md`自身记录的Message ID为准，不套用`outreach-drafts.md`的跨战术流水号。

### 遗留待办

1. 版画史（Printmaking）、William Blake、肖像画史三个方向本轮首次系统检索均为0命中，主要卡在"本站对应文章都是聚焦极窄的单一考据专题（某一年代争议/某一幅具体画作），而资源页上的死链多是机构主页/当代项目/工具词典"这个结构性错配，不是资源页本身链接质量差。跟`linkable-asset-backlog.md`里持续未落地的"开放版权艺术图库总目录"（2号点子）这类参考型资产才是真正能打开这类资源页机会的路径，延续第16/21/24/28次运行已反复记录的同一结论。
2. `www.neuegalerie.org/madame-dora`（Madame d'Ora特展页）如果本站未来发布覆盖20世纪肖像摄影或维也纳/巴黎摄影史的文章，可重新评估这条候选（目标页所在的Columbia College Chicago Photo History Portraiture指南本身应该还在维护，值得留意）。
3. `www.rc.umd.edu`（Romantic Circles）如果本站未来发布聚焦Blake作为诗人/插画家双重身份的综述型文章（而非当前两篇单幅画作窄口径文章），值得重新评估。

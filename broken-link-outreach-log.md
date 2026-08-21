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

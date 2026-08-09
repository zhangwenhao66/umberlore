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

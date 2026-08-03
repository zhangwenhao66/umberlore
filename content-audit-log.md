# UmberLore 内容质量审计日志

由定时任务 `trafficsite-content-quality-audit` 维护，记录已发布内容的回头复核（区别于发布前的七重检查，见 `.claude/scheduled-tasks/umberlore-content-publishing/SKILL.md`）。每篇文章一条记录，选取顺序按 `last_audited` 最早/未审计优先。这是本文件的第一条记录（站点 2026-08-02 上线，此前从未被审计过）。

```json
{
  "url_slug": "what-is-a-gargoyle",
  "last_audited": "2026-08-02",
  "published_date": "2026-08-02",
  "article_specific_checklist": [
    "功能性定义是否准确：gargoyle = 有排水通道的滴水兽，grotesque/chimera = 无通道的纯装饰雕刻，判定标准是有没有水道而非外形（Washington National Cathedral、Friends of Notre-Dame 两处定义引语需逐字核对原文）",
    "词源日期链是否准确：法语 gargouille 最早见于 1294 年欧坦圣拉扎尔教堂账目（拼作 gargoule），1313 年底出现 gargouille 拼法；鲁昂恶龙传说最早文本记录于 1394 年，晚于词源一个世纪，故传说不可能是词的来源（TLFi/CNRTL 需核对）",
    "巴黎圣母院最著名的那批\"滴水兽\"实为 1843-1864 年 Viollet-le-Duc 与 Lassus 修复期间新增的 chimera（无排水功能），雕刻者 Victor Pyanet（U Chicago Press 关于 Michael Camille 研究的页面需核对逐字引语）",
    "希腊先例：Getty 藏品 71.AD.449（Metapontum 出土，公元前 425-400 年，赤陶彩绘）与剑桥古典考古博物馆 Bassae 石膏复制品，两处描述性引语需逐字核对原始藏品页",
    "1914 年兰斯大教堂大火中\"熔化的铅水从滴水兽中流出\"这一具体细节需核对大教堂官方历史页面原文"
  ],
  "findings": [
    {
      "dimension": "事实准确性（含所有引号内引语）",
      "status": "未发现问题",
      "detail": "对文中全部核心引语逐字核对原始出处：Washington National Cathedral 游客指南 PDF（本地 pdftotext 提取，确认\"112 gargoyles and more than 1,200 stone grotesques\"及\"function as drain spouts that direct rain and melted snow away from the building\"均为逐字准确引用）；Friends of Notre-Dame de Paris 官网（curl+正则核对，\"protect the walls from rainwater runoff...\"与\"many of the original gargoyles were replaced with new sculptures\"均逐字匹配）；University of Chicago Press 关于 Michael Camille《The Gargoyles of Notre-Dame》的页面（\"probably do not realize...not constructed until the nineteenth century\"及\"from 1843 to 1864, when the gargoyles were designed, sculpted by the little-known Victor Pyanet\"均逐字匹配）；Cathédrale Notre-Dame de Reims 官方历史页（\"The heat from the flames melted the 400 tonnes of lead sheeting...molten metal flowed through the gargoyles\"逐字匹配，Henri Deneux 1938 年完工、钢筋混凝土重建细节属实）；J. Paul Getty Museum 藏品页 71.AD.449（读取页面内嵌 JSON-LD 直接核对，材质/年代/产地/描述文字全部逐字匹配）；Museum of Classical Archaeology Cambridge Bassae 石膏复制品页（\"a waterspout for throwing rainwater...\"及位置描述逐字匹配）；CNRTL/TLFi 词源页（1294 gargoule 与 1313 gargouille 两个日期均逐字核实）。未发现任何误引、编造归因或时间线错误。"
    },
    {
      "dimension": "EEAT",
      "status": "未发现问题",
      "detail": "全篇引用真实机构一手资料（主教座堂官方游客指南、藏馆官方藏品页、大学出版社学术专著介绍页、法语词源权威工具书），无模糊归因（无\"专家认为\"\"有研究显示\"这类无出处措辞），sources 数组 10 条全部可验证。"
    },
    {
      "dimension": "时效性",
      "status": "未发现问题",
      "detail": "published/updated 均为 2026-08-02（当天发布），内容为历史/建筑考据性质，无需要随时间更新的时效性数据。"
    },
    {
      "dimension": "竞品差异化",
      "status": "未发现问题",
      "detail": "WebSearch \"what is a gargoyle definition grotesque waterspout\" 显示该词 SERP 由 Wikipedia/Britannica/词典类站点主导。WebFetch 核实 Wikipedia \"Gargoyle\" 条目虽然也讲功能性定义和词源，但**不含**雕刻者姓名（Victor Pyanet）、Getty 具体藏品编号与断代、1914 年兰斯大火细节，也没有 Washington National Cathedral 112:1200 这个具体数据点。本文提供的具体机构级引语和数据是真实增量价值，非维基百科的第三份复述。thecollector.com / artincontext.org 未出现在该词 SERP 前排，未发现同质化竞争。"
    },
    {
      "dimension": "SEO 技术审计",
      "status": "未发现问题（一项边界值已核查，判定无需处理）",
      "detail": "title 计算值 49 字符，拼上站名后端渲染页面标题 61 字符（略超 50-60 的常见经验区间 1 字符，Google 实际截断阈值按像素宽度浮动，61 字符仍在正常显示范围，判定不构成需要修复的问题）；meta description 157 字符，在 150-160 区间内；canonical 由 Layout.astro 用 Astro.url 自动生成自指；单一 H1（guide.title）；7 个 section H2 + FAQ 独立 H2，无跳级；Article/FAQPage/BreadcrumbList 三个 schema 组件均直接从 guide 对象字段动态生成 JSON-LD（见下方 schema 一致性维度）；hero 图与全部 4 张正文插图均有 alt 文本；robots.txt 允许全部抓取，sitemap 已声明；404.astro 已存在（本站已知风险点，已确认不是 CF Pages soft-404）。"
    },
    {
      "dimension": "GEO 审计（99分制11维度）",
      "status": "未发现问题，自评 91/99（阈值 80，达标）",
      "detail": "权威原文引语 16/16（7+条机构级逐字引语且均核实准确）；统计数据完整性 13/14（112:1200 比例、1294/1313/1843-1864/1938/425-400BC 等具体年代数据密集）；可引用性 12/13（coreSummary 与 FAQ 均为可独立摘出的完整陈述）；结构规范性 11/12；表达流畅度 9/10；语义密度 7/8；权威信号 6/8（机构引用扎实，但缺作者专业背景页/credential 展示）；专业术语 6/6（ashlar/spall/cornice/plinth/sima/banker 等石作术语准确使用）；鲁棒性 5/5（核心论断均有一手机构引语支撑，经核实无失实）；跨域连接 3/4（审计前仅 1 条出链到 mona-lisa，无回链，已在本次修复）；易懂表达 3/3。此为审计员基于该站已公开的 99 分制评分标准（见 `.claude/scheduled-tasks/umberlore-content-publishing/SKILL.md`）自行评分，未使用独立工具复验，故记为\"自评\"。"
    },
    {
      "dimension": "AI 味扫描",
      "status": "未发现问题",
      "detail": "机械扫描全文正文：em/en dash 0 处、花体双引号 0 处（文内直引号用于逐字引语，右单引号仅用于所有格/缩写属正常英文排版而非本项扫描对象）、加粗 0 处、常见 AI 高频词（delve/crucial/testament/tapestry/pivotal/vibrant/foster/enhance/underscore/showcase/intricate/interplay/landscape 等）0 命中、填充语（in order to/due to the fact/at this point in time 等）0 命中；唯一命中的 \"not only\" 用例（\"An open mouth with a projecting tongue is not only a snarl.\"）经检查为自然表达而非\"not only...it's...\"套话结构，不构成负面排比套路。句长与风格有真实变化（例如\"The word is built from...\"这类长句与\"No channel, no gargoyle.\"这类短句交替），有具体细节（Reims 1914 年 400 吨铅、Getty 71.AD.449 编号）而非空泛概括，判定为人类/已去 AI 味写作。"
    },
    {
      "dimension": "外部来源链接腐烂",
      "status": "未发现问题",
      "detail": "sources 数组 10 条外部链接（CNRTL/Washington National Cathedral PDF/Friends of Notre-Dame/U Chicago Press/19th-Century Art Worldwide/Cathédrale de Reims/Cambridge Museum/Getty/BnF Passerelles）逐条 curl 实测全部 200。正文内 4 处 Wikimedia Commons 图片来源页链接同样逐条 curl 实测全部 200。"
    },
    {
      "dimension": "内链健康度",
      "status": "确认问题，已修复",
      "detail": "全站仅 5 篇文章，`what-is-a-gargoyle` 是唯一 Architecture 分类文章。`vendor/site-toolkit/packages/related-guides/src/index.ts` 的 `pickRelatedGuides()` 只从同分类文章中选相关文章，同分类仅自己一篇时 `categoryPeers.length === 0`，返回空数组，`[slug].astro` 第 126 行按 `related.length > 0` 门控渲染，侧边栏因此完全不显示。同时全文 grep `src/data/guides.ts` 中全部 4 处手动 markdown 内链（分别指向 mona-lisa/water-lilies-monet-series/van-gogh-paintings/gustav-klimt），确认没有任何一处指向 `/what-is-a-gargoyle/` 或 `/gargoyle/`——本文虽有出链指向 mona-lisa，但零回链，是真正的孤儿页。独立复核 agent 独立重新读取 guides.ts、related-guides 源码与 [slug].astro 逐项核实，判定 CONFIRMED。"
    },
    {
      "dimension": "Schema 数据一致性",
      "status": "未发现问题",
      "detail": "Article/FAQPage/BreadcrumbList 三个 schema 组件（`vendor/site-toolkit/packages/schema/src/*.astro`）均在构建时直接从传入的 guide 对象字段（headline/datePublished/dateModified/description 等）动态生成 JSON-LD，不存在硬编码副本，结构上不可能出现\"正文改了但 schema 没跟着改\"的漂移，此风险类别对本站架构不适用。FAQPage 组件另有 stripMarkdown 处理，正文引号内的 markdown 链接/加粗不会泄漏进 JSON-LD 纯文本字段。"
    },
    {
      "dimension": "合规/敏感度漂移（本站特有：现当代艺术家版权风险）",
      "status": "未发现问题",
      "detail": "本文主题是建筑滴水兽，涉及的人物为匿名中世纪/古希腊石匠与 Eugène Viollet-le-Duc（卒于 1879 年）及雕刻师 Victor Pyanet（19 世纪人物），均远早于 1955 年版权风险分界线，不触及建站计划文档第三节列出的 146 个现当代艺术家版权风险词。全文未出现任何跨站矩阵命名规律（Crumbs/Cairn/Vane）相关措辞，命名边界未被破坏。"
    },
    {
      "dimension": "配图可用性与版权",
      "status": "未发现问题",
      "detail": "4 张配图（gargoyle-notre-dame-rainwater.jpg 头图 + gargoyle-reims-cathedral.jpg / gargoyle-epidauros-lion-waterspouts.jpg / gargoyle-notre-dame-chimeras.jpg 三张正文插图）本地文件均存在于 public/images/。逐张 WebFetch 对应 Wikimedia Commons 文件页核实，许可与站内 imageCredit 标注完全一致（均为 CC BY-SA 4.0，摄影者分别为 David.Clay.Photography / Ad Meskens / Zde / Ivonna Nowicka）。拍摄对象为建筑物与古代文物实拍照片，不涉及在世或近期去世艺术家的作品复制，不触及本站特有的版权高风险类别。"
    }
  ],
  "actions_taken": [
    "在 mona-lisa 文章末段新增一句自然过渡句，回链到 what-is-a-gargoyle（呼应两篇共同的\"拍照对象≠实际起作用的对象\"主题），修复内链健康度这唯一一项确认问题，未改动 gargoyle 正文本身",
    "npm run build 验证通过（13 页无报错），commit 3a44b8d 并 push 到 origin/main，CF Pages 自动部署，轮询确认 mona-lisa 页面线上已渲染新链接",
    "IndexNow 提交 /mona-lisa/（Bing 200 / Yandex 202），更新 indexnow-submit-log.json 对应条目",
    "内容发布日志.md 追加审计记录，明确标注\"本条为content-quality-audit审计更新，非新发布\""
  ],
  "seo_score": "seo-audit 通过（title 61 字符含站名后缀，略超经验区间 1 字符但判定在可接受范围/desc 157/canonical 自指/单一h1/7个h2无跳级/三个schema均基于guide对象动态生成有效/alt全部已有/外链10条全部200）",
  "geo_score": "自评 91/99（阈值 80），11 个维度中跨域连接项因修复内链问题从 3/4 提升空间已实现，未重新整体复验总分",
  "escalation": null,
  "pending_for_owen": null
}
```

```json
{
  "url_slug": "van-gogh-paintings",
  "last_audited": "2026-08-03",
  "published_date": "2026-08-02",
  "article_specific_checklist": [
    "七条书信逐字引语（letters 499/569/595/612/705/740/765，收信人分别为 Theo/Livens/Theo/Bernard/Theo/Koning/Theo）是否与 vangoghletters.org 官方逐字核对一致",
    "1888年4月巴黎颜料订单细节（三种铬黄+普鲁士蓝+翡翠绿+茜草湖蓝+威尼斯绿+铅橙，对比 Maris/Mauve/Israëls 荷兰画派调色板）是否与 letter 595 原文一致",
    "REVIGO 项目细节（2013-2017四年周期、参与机构 Van Gogh Museum/Cultural Heritage Agency of the Netherlands/Delft University of Technology/Tilburg University/Rochester Institute of Technology/AkzoNobel、NWO 资助）是否与梵高博物馆官方 REVIGO 页面一致",
    "\"一生只卖出一幅画\"这一常见误传的博物馆官方澄清（叔父 Cor 委托19幅海牙风景画/Tanguy 购画/Theo 卖给伦敦画廊/Anna Boch 购《红色葡萄园》）是否逐字准确",
    "阿姆斯特丹版《向日葵》断代（1889年1月，非通常引用的1888年）与藏品编号 s0031V1962/F0458/JH1667 是否与官方藏品页匹配；Ella Hendriks 2019年新闻稿引语与 Monico et al. 2015 Angewandte Chemie 论文引用是否准确"
  ],
  "findings": [
    {
      "dimension": "事实准确性（含所有引号内引语）",
      "status": "未发现问题",
      "detail": "对全部7条书信引语逐字核对 vangoghletters.org 官方页面（本地 curl+Python 去标签提取纯文本后 grep 核对）：letter 499（\"in the white...red, blue, yellow together\"、\"dusty potato, unpeeled of course\"）、letter 569（\"In Antwerp I did not even know...\"、\"THE BROKEN AND NEUTRAL TONES\"、\"Trying to render intense COLOUR\"）、letter 595（\"the 3 chromes...Maris, Mauve and Israëls\"、\"all the colours...unstable\"）、letter 612（\"that sea of yellow flowers with a line of purple irises\"）、letter 705（\"pale violet\"/\"butter yellow\"/\"doors lilac\"）、letter 740（\"three chrome yellows, yellow ochre and Veronese green\"）、letter 765（\"The paintings fade like flowers\"）均逐字匹配，日期/收件人无误。梵高博物馆官方页面核对：Sunflowers s0031V1962 断代 Arles/January 1889、F0458/JH1667/95×73cm 全部匹配；REVIGO 页面确认四年周期 2017 完成、机构名单（Tilburg University/Delft University of Technology/Cultural Heritage Agency of the Netherlands/Rochester Institute for Technology/AkzoNobel）及 NWO Science4arts 资助均匹配；2019年新闻稿 Hendriks 引语\"We now know that the colour changes in Sunflowers are mainly caused by...\"逐字匹配，150→50 lux 与\"不再外借\"决定均属实；FAQ 关于\"只卖一幅画\"误传的博物馆官方澄清（叔父 Cor 19幅委托/Tanguy/Theo卖伦敦画廊/Anna Boch 购《红色葡萄园》）逐字匹配。\"Field with Irises near Arles\"背景白点原为粉色、红色颜料只在显微镜下深层可见这一具体技术细节，经独立 agent 复核，在梵高博物馆 REVIGO 官方 PDF 与 IS&T Electronic Imaging 会议论文中找到近乎逐字对应表述（\"The collection of white dots...had been pink. The red pigment is only visible under the microscope deeper in the painted layer\"），判定 CONFIRMED accurate。Monico et al. 2015 Angewandte Chemie 论文经 WebSearch 核实确实存在且内容匹配（DOI 解析正常，仅 Wiley 对 curl 返回 403 反爬，非链接失效）。未发现任何编造引语或时间线错误。"
    },
    {
      "dimension": "EEAT",
      "status": "未发现问题",
      "detail": "全篇以梵高博物馆官方藏品页/官方书信全集/官方新闻稿/同行评议论文（Angewandte Chemie 2015）为一手信源，18 条 sources 全部可验证，无模糊归因表述。"
    },
    {
      "dimension": "时效性",
      "status": "未发现问题",
      "detail": "published/updated 均为 2026-08-02，审计时（2026-08-03）仅隔1天。WebSearch \"Van Gogh new discovery research 2026\" 核实近期梵高相关新闻（分形笔触鉴伪法、Elimar 画作归属新发现、与荷兰古典大师关系研究）均属真伪鉴定/生平研究方向，与本文调色板断代/颜料褪色主题无交叉，不构成需要更新原文的新证据。"
    },
    {
      "dimension": "竞品差异化",
      "status": "未发现问题",
      "detail": "OpenSEO 项目列表中无 UmberLore project，改用 WebSearch 核实 SERP。thecollector.com（《10 Van Gogh Paintings You Should Know》）与 artincontext.org（《Vincent van Gogh Paintings - The Best Works》）均为\"精选作品清单\"体裁，经 curl 抓取 thecollector 全文核实，颜料褪色话题仅一句带过（\"Some of the pigment has faded over time, and the walls and door...now appear as a pale blue\"），既无 REVIGO 项目细节、无书信逐字引用、无向日葵铬黄化学反应说明、无藏品编号，本文在深度和一手信源密度上构成真实增量，非维基百科第三份复述。"
    },
    {
      "dimension": "SEO 技术审计",
      "status": "未发现问题（两项边界值经独立复核，判定均不构成需修复的问题）",
      "detail": "title 原始值53字符，拼站名后渲染66→65字符（\"Van Gogh Paintings: Reading the Palette, Then and Now | UmberLore\"），略超50-60经验区间；独立复核 agent 判定 NOT CONFIRMED——该标题窄字符（i/l/t/标点）占比高，实际像素宽度未必触发截断，且此长度是全站7篇文章的系统性模式（49-55字符原始值），不构成单篇文章级别的缺陷。meta description 恰为160字符（150-160区间上沿），独立复核 agent 判定 NOT CONFIRMED——处在区间边界内属于区间正常使用，非超出容差。canonical 由 Layout.astro 自动生成自指；单一 H1；7个 section H2 + FAQ 独立 H2 无跳级；三个 schema 组件动态生成；3张配图（头图+2张正文插图）alt 文本齐全；robots.txt 允许抓取，sitemap 已声明；站内标题/描述查重未发现与其他6篇重复。"
    },
    {
      "dimension": "GEO 审计（99分制11维度）",
      "status": "未发现问题，自评约 93/99（阈值 80，达标）",
      "detail": "权威原文引语 16/16（7条书信+3条博物馆机构引语全部逐字核实准确）；统计数据完整性 14/14（年代/尺寸/lux数值/藏品编号/REVIGO周期等数据密集且全部核实）；可引用性 12/13（coreSummary 与7条 FAQ 均为可独立摘出的完整陈述）；结构规范性 12/12（7节+FAQ无跳级）；表达流畅度 9/10；语义密度 7/8；权威信号 6/8（机构引用扎实，同样缺作者专业背景credential展示，与gargoyle篇同样短板）；专业术语 6/6（chrome yellow/geranium lake/lead chromate/hyperspectral/XRF等准确使用）；鲁棒性 5/5（核心论断均有一手引语与论文支撑）；跨域连接 4/4（1条出链至water-lilies-monet-series，同时收到 water-lilies-monet-series 与 famous-paintings 两篇的自然锚文本回链，Painting分类5篇≤6篇轮转窗口全覆盖，连接健康）；易懂表达 3/3。此为审计员自评，未使用独立工具复验，记为\"自评\"。"
    },
    {
      "dimension": "AI 味扫描",
      "status": "未发现问题",
      "detail": "机械扫描全文：em-dash 0处、en-dash 0处、常见 AI 高频词（delve/crucial/testament/tapestry/pivotal/vibrant/foster/enhance/underscore/showcase/intricate/interplay/landscape/robust/seamless等）0命中。5处加粗均集中在\"A short method for looking\"一节的清单式要点引导句，属刻意设计的可扫描速查表结构，非套话式加粗，判定不构成AI味特征。句长与语域有真实变化，具体细节密度高（Reims式的具体年份/lux数值/藏品编号），判定为人类/已去AI味写作。site发布日期2026-08-02晚于全矩阵humanizer强制化时间点（2026-07-24前后），不属于\"早期内容\"补漏范围。"
    },
    {
      "dimension": "外部来源链接腐烂",
      "status": "未发现问题",
      "detail": "18条外部链接（3条Wikimedia Commons文件页、4条梵高博物馆藏品/研究页、7条vangoghletters.org书信页、1条新闻稿、1条FAQ页、2条art-and-stories专题页、1条DOI）逐条curl实测：17条200，仅doi.org/10.1002/anie.201505840返回403。改用带浏览器UA的curl复测，DOI正确重定向至onlinelibrary.wiley.com对应论文页（重定向本身成功，仅Wiley对自动化请求做反爬拦截），且WebSearch核实该论文（Monico et al., Angewandte Chemie 2015）确实存在且内容与引用匹配，判定为反爬阻断而非真实链接失效，不构成需要替换来源的问题。"
    },
    {
      "dimension": "内链健康度",
      "status": "未发现问题",
      "detail": "本文有1条出链指向 water-lilies-monet-series；同时被 water-lilies-monet-series（\"see Van Gogh's paintings\"）与 famous-paintings（\"the pigments have not stayed the colours he mixed\"）两篇文章以自然、非重复的锚文本手动回链。Painting分类现有5篇文章，未超过 pickRelatedGuides() 的6篇轮转窗口阈值，会在全部同分类文章的\"相关文章\"侧栏中出现，非孤儿页。"
    },
    {
      "dimension": "Schema 数据一致性",
      "status": "未发现问题",
      "detail": "与 gargoyle 篇结论一致：Article/FAQPage/BreadcrumbList 均在构建时直接从 guide 对象字段动态生成，架构上不存在\"正文改了 schema 未同步\"的漂移风险。"
    },
    {
      "dimension": "合规/敏感度漂移（本站特有：现当代艺术家版权风险）",
      "status": "未发现问题",
      "detail": "梵高卒于1890年，远早于1955年版权风险分界线。全文聚焦调色板/颜料化学史，未涉及其精神健康/自杀等敏感话题，无跨站矩阵命名规律相关措辞。"
    },
    {
      "dimension": "配图可用性与版权",
      "status": "未发现问题",
      "detail": "3张配图（van-gogh-bedroom-arles-1888.jpg头图 + van-gogh-potato-eaters-1885.jpg / van-gogh-sunflowers-1889.jpg正文插图）本地文件均存在于 public/images/。逐张 curl 核实对应 Wikimedia Commons 文件页（De_slaapkamer/De_aardappeleters/Zonnebloemen，均为 s0047V1962/s0005V1962/s0031V1962 梵高博物馆藏品），文件页 Copyright status 均明确标注 Public Domain（PD-Art/PD-old，梵高博物馆基金会公有领域声明），与站内 imageCredit 标注一致。三幅均为梵高本人1885-1889年间原作，梵高卒于1890年，远超70年公有领域门槛，不触及本站\"1955年后去世艺术家作品图\"高风险类别。"
    }
  ],
  "actions_taken": [
    "十二维度深挖后共产生3条待复核的候选发现（title标签65字符渲染长度、meta description恰160字符、Field with Irises背景白点原为粉色的技术细节），均已spawn独立全新上下文agent复核",
    "独立复核结果：title长度与meta description长度两项均判定 NOT CONFIRMED（窄字符占比高/像素宽度未必截断/系统性模式非单篇缺陷；恰处区间边界内属正常使用），不采取行动",
    "独立复核结果：白点原为粉色的技术细节判定 CONFIRMED accurate（梵高博物馆REVIGO官方材料与IS&T会议论文找到近乎逐字对应表述），无需修改",
    "十二个维度均未发现需要修复的真实问题，未对文章正文/元数据做任何编辑，未触发build/commit/push/部署/IndexNow流程（无内容变化，无需重新索引）"
  ],
  "seo_score": "seo-audit 通过（title 65字符含站名后缀/desc 160字符均经独立复核判定为可接受范围而非缺陷/canonical自指/单一h1/7个h2无跳级/三个schema均基于guide对象动态生成有效/alt全部已有/外链18条中17条200+1条DOI反爬但重定向与内容均核实有效/站内标题查重无重复）",
  "geo_score": "自评约93/99（阈值80，达标），11个维度均达标，跨域连接4/4为全维度最高分（gargoyle篇因分类孤例仅3/4，本篇因分类内5篇互相回链天然健康）",
  "escalation": null,
  "pending_for_owen": null
}
```

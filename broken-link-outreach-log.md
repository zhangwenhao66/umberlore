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

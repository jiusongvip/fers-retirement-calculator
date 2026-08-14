# 单页站登顶执行手册

目标词仍是 `fers retirement calculator`。如果把整个项目压缩到只有一个 URL，策略不是“把网站做小”，而是把整站质量集中到这一个页面，并在技术、信任和外部链接上做到比首页竞品更极端。

## 先给结论

单页站能排首页，但有一个条件：它必须同时满足“工具能立刻解决问题”和“信息深度足够支撑决策”。如果只做一个简单计算器，页面再好也只能在第二、三页；如果再加足解释、FAQ、权威来源和多场景对比，再配合精准外链，才有机会进入首页下半段，再逐步向上。

对 `fers retirement calculator` 来说，最大的难点不是技术，而是首页有 OPM.gov 这种高权威官方域，以及 Fedweek、Capital Wealth 等老牌行业站。新域名只靠页面本身很难一夜超过它们，必须把“页面质量”和“外部信任”同时拉满。

## 单页站的排名模型

对这个词，权重大致可以按以下方式理解：

| 因素 | 作用 | 单页站必须怎么做 |
|---|---|---|
| 搜索意图匹配 | 最高优先 | 首屏就是 FERS 计算器，不是介绍页 |
| 内容完整度 | 决定能否承接多个子问题 | 把公式、MRA、Supplement、病假、军人回购、遗属福利、FAQ 放进同一页 |
| 用户体验 | 影响停留和转化 | 计算快、结果清楚、移动端好用、无强制留资 |
| 信任与 E-E-A-T | 决定用户是否相信结果 | 作者/审阅人、OPM 来源、公式展开、免责声明、更新时间 |
| 外链与域名信任 | 新单页站最缺的一块 | 集中获取联邦福利、金融、HR、军事相关的自然链接 |
| 点击率与品牌信号 | 影响 Google 是否继续提权 | Title/Meta 精确，品牌名可辨识，SERP 有结构化展示 |

单页站的天然劣势是内部链接和主题广度，但它也有优势：所有外链和用户信号都落在唯一 URL 上，不会分散权重。这个优势只有在外链质量足够时才会发挥出来。

## 页面结构：从上到下服务用户

不要把页面写成长篇营销文。它应该像一个“工具 + 说明书 + FAQ”的组合，首屏立即干活，后续内容逐步解释结果。

| 顺序 | 模块 | 用户问题 | SEO 功能 |
|---|---|---|---|
| 1 | 首屏计算器 | 我现在能拿多少？ | 精确匹配主词，降低跳出 |
| 2 | 实时结果面板 | 这是怎么算出来的？ | 展示公式，增加可解释性 |
| 3 | 3 个步骤 | 我该怎么填？ | HowTo Schema |
| 4 | 高级字段 | 病假、军人回购、特殊岗位怎么算？ | 覆盖长尾子意图 |
| 5 | 多场景对比 | 57、60、62 岁退休差多少？ | 覆盖决策比较词 |
| 6 | FERS Formula 说明 | 1%、1.1%、1.7% 什么时候用？ | 覆盖 formula 长尾 |
| 7 | MRA+10 与减扣 | 提前退休会不会被扣钱？ | 覆盖 MRA+10 长尾 |
| 8 | FERS Supplement | 62 岁前有没有补充收入？ | 覆盖 supplement 长尾 |
| 9 | 遗属福利、税和 TSP | 实际到手会少多少？ | 提升决策完整度 |
| 10 | FAQ | 官方怎么说？ | FAQPage Schema |
| 11 | 来源、作者、免责声明 | 我能相信吗？ | E-E-A-T 和信任 |

这些模块都放在同一个 URL 里，用清晰的 H2/H3 和锚点导航连接。锚点链接如 `#calculator`、`#formula`、`#mra-10`、`#faq` 不产生额外页面，但能改善可导航性。

## 首屏必须做到极致

首屏不能是 800px 高的品牌横幅。理想首屏是：

- H1：`FERS Retirement Calculator`
- 一句话承诺：`Estimate your FERS pension in under 30 seconds.`
- 3 个默认输入：High-3、Years of Service、Retirement Age
- 1 个计算按钮
- 结果直接显示：Annual、Monthly、Multiplier
- “Advanced options”按钮，不要求登录

移动端时，输入控件要大到可单手操作，按钮在拇指区，结果用 `aria-live` 播报。用户输入后不跳页、不刷新、不弹窗。

## 高级功能是超越首页的关键

首页多数竞品的差距就在高级功能。单页站必须把这些放到同一页的高级面板：

1. 未用病假：输入小时数，按 2,087 小时约等于 1 年转换。
2. 军人服务回购：已支付 deposit 的服务年限。
3. 特殊岗位：LEO、ATC、Firefighter、Nuclear Materials Courier。
4. 遗属福利：Full、Partial、None，并展示 10% 或 5% 减扣。
5. 退休日期：根据出生日期和 MRA 表判断资格。
6. FERS Supplement：根据 Social Security 估算值和 FERS 服务年限近似计算。
7. 多场景：同一组输入展示 MRA+10、60 岁、62 岁。
8. 分享报告：生成可复制 URL，回填所有参数。

这些功能不需要另一个页面，全部在当前页面完成。功能越多，越能承接用户下一步问题，也就越能拉开和普通工具页的差距。

## 页面 SEO 文案

```text
URL: https://fersretirementcalculator.com/
Title: FERS Retirement Calculator: Estimate Your Federal Pension
Meta Description: Free FERS retirement calculator for federal employees. Estimate your pension, FERS Supplement, survivor benefit, and compare retirement dates.
H1: FERS Retirement Calculator
Canonical: https://fersretirementcalculator.com/
```

关键词布局原则：

- 主词精确出现在 H1、Title、首段、首屏、至少一个 H2、FAQ、Schema 和图片 alt。
- 语义变体自然分散：`FERS annuity calculator`、`federal pension calculator`、`FERS pension estimate`、`FERS retirement estimate`。
- 不要把所有变体塞进同一个句子。每个模块只服务一个子问题。
- 如果只做单页，不要在页面里强行写大量离题内容。2,500 到 4,500 字足够，重点是每个字都在回答用户问题。

## 技术实现

推荐纯静态 HTML/CSS/JS，或者 Astro 生成单页。不需要 React 全家桶，除非计算器状态确实复杂。

必须做到：

- 内容在 HTML 中可见，不依赖 JS 才出现正文。
- 一个 `<h1>`，模块用 `<h2>`，FAQ 问题用 `<h3>`。
- 计算器使用真实 `<form>`、`<label>`、`<input>`、`<output>`。
- 结果区域使用 `aria-live="polite"`。
- 输入框使用 `inputmode="decimal"`，适合移动端数字输入。
- 图片只用真实界面截图或清晰的表格图，不用装饰性 hero SVG。
- 核心图片提供准确 alt 和压缩格式。
- 页面加载不引入大型字体、视频、第三方聊天插件或跟踪脚本。
- CSS/JS 内联或极小体积，首屏 LCP 是计算器本身。

## Schema 必须完整

```json
{
  "@context": "https://schema.org",
  "@type": ["WebApplication", "WebPage"],
  "name": "FERS Retirement Calculator",
  "url": "https://fersretirementcalculator.com/",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

同时加：

- `FAQPage`：和页面内可见 FAQ 完全一致。
- `HowTo`：三个计算步骤，和页面内步骤完全一致。
- `SoftwareApplication` 或 `WebApplication`：写清功能、免费、浏览器运行。
- `Organization` 或 `Person`：作者、编辑、日期。

不要用没有真实依据的 `Review` 或 `AggregateRating`，避免被判定为虚假结构化数据。

## 信任与 E-E-A-T

单页站没有“关于我们”等辅助页面，所以信任必须放在页面内：

- 命名作者，例如 `Reviewed by [Name], Federal Benefits Specialist`。
- 显示 `Last updated: [date]`，并定期更新 2026 年规则和数字。
- 每个结果旁有“How we calculate this”展开块。
- 链接 OPM 的 FERS Computation 和 Ballpark Estimator 页面。
- 写清楚：这是教育估算，不构成财务或法律建议，不代表 OPM。
- 避免声称“官方”“OPM 认证”或任何暗示政府背书的表述。

## 外链是单页站能否进首页的分水岭

单页站没有内页来分散外链，所有权重都集中在根域名和首页。正因如此，必须获取足够高质量的相关链接。

优先级最高的外链来源：

1. 联邦员工协会、工会和本地分会资源页。
2. 军队转业、退伍军人、公务员 HR 和福利资源站。
3. 联邦福利规划师、注册会计师、理财顾问的博客和资源页。
4. 行业媒体：FedSmith、Federal News Network、Government Executive 的客座或引用。
5. 播客：联邦退休、政府员工、金融规划主题，提供嘉宾或免费工具。
6. HARO/Connectively、Qwoted：回答记者关于联邦退休的问题，换自然引用。
7. 高等教育机构、政府雇员工会、非营利组织的资源目录。
8. YouTube 视频描述、LinkedIn 帖文、Substack 和行业 newsletter。

不建议的外链方式：

- 大量低质量目录提交。
- 不相关的论坛签名链接。
- 购买 PBN 或私链。
- 在 Reddit/Quora 机械刷链接。

可以在 Reddit、Quora、Facebook Group 里认真回答 FERS 问题，只在真正相关时带一次工具链接。这样既能带来点击，也能留下真实品牌印象。

## 可分享报告制造自然提及

单页站也能产生传播：

- 用户计算后，生成一个可分享链接，例如：

```text
https://fersretirementcalculator.com/?high3=100000&years=25&age=62
```

- 该链接回填输入，并显示“Your FERS retirement estimate”报告。
- 用户会把链接发给同事、工会群、HR 或财务顾问。
- 每个真实分享都会增加品牌搜索和自然引用。
- 如果做 iframe 可嵌入版，允许工会或 HR 网站嵌入计算器，链接会自然回流到你的站。

## 排名节奏与优化闭环

不要期待一次上线就排首页。合理的节奏是：

1. 上线前：完成页面、Schema、移动端、CWV。
2. 第 1 个月：提交 GSC，观察查询和曝光。
3. 第 2 到 3 个月：根据 GSC 出现的相关查询，增加或调整页面模块。
4. 第 3 到 6 个月：持续获取高质量外链，重点做行业媒体和工会资源页。
5. 第 6 到 12 个月：如果排名进入第 2 页，重点优化 Title/Meta 点击率和结果分享率。

关键指标：

- GSC：`fers retirement calculator` 的曝光、点击、平均排名。
- 页面上：计算完成率、高级功能使用率、分享链接次数。
- CWV：LCP、CLS、INP。
- 品牌搜索：`fersretirementcalculator` 和域名搜索是否增长。

如果页面在第 2 页稳定，但上不去，通常不是再加一段文字能解决，而是缺少权威外链或用户品牌信号。此时优先补外链，而不是继续堆内容。

## 单页站上线清单

- [ ] 精确关键词域名已注册
- [ ] 根域名只保留一个可索引 URL
- [ ] 首屏计算器可无登录使用
- [ ] 高级字段覆盖病假、军人回购、特殊岗位、遗属福利、Supplement
- [ ] 多场景对比能展示 MRA+10、60 岁、62 岁
- [ ] 每个数字都有公式和假设
- [ ] FAQ 可见且 Schema 一致
- [ ] 作者、编辑日期、来源、免责声明完整
- [ ] 移动端输入和结果无遮挡
- [ ] LCP、CLS、INP 达标
- [ ] 已提交 GSC 并验证
- [ ] 已制定外链获取清单和节奏


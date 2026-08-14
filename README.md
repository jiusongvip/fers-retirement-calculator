# FERS Retirement Calculator 建站框架

目标关键词：`fers retirement calculator`

这个文件夹不是已经写好的网站代码，而是一份可直接执行的建站框架。它围绕一个核心判断展开：搜索 `fers retirement calculator` 的人不只需要一个基础养老金数字，还需要理解 FERS 规则，并判断“什么时候退休、退休后真正能拿到多少钱、不同选择会差多少”。

## 最终策略

做一个以计算器为首屏、以权威规则说明为支撑的 FERS 专属工具站。计算器默认简单，高级模式可处理 MRA+10、1.1% 增强乘数、特殊岗位、未用病假、军人回购、遗属福利、FERS Supplement，并支持同一组数字对比多个退休日期。

相对当前首页结果，我们的核心壁垒是：

1. 把 OPM 官方公式做成真正可交互、透明、无强制留资的工具。
2. 不只算 Basic FERS Annuity，还覆盖首页多数工具忽略的 Supplement、MRA+10、遗属福利和退休日期对比。
3. 每项结果都能看到公式、假设和来源，而不是只给一个数字后引导咨询。
4. 用一组专业内页承接用户下一步的问题，形成主题权威。

## 文件说明

| 文件 | 用途 |
|---|---|
| `README.md` | 总览、结论、执行顺序 |
| `01-search-intent-and-competitor-gap.md` | 搜索意图、首页结果拆解、缺口和超越点 |
| `02-site-structure-and-keywords.md` | 网站类型、URL 结构、关键词布局和拓展方向 |
| `03-seo-plan.md` | 首页与关键内页的 Title、Meta、H1、Schema、内容模块 |
| `04-calculator-spec.md` | FERS 计算器产品规格、公式和边界规则 |
| `05-implementation-plan.md` | 技术选型、开发阶段、发布和运营清单 |

## 建议执行顺序

1. 先读 `01-search-intent-and-competitor-gap.md`，确认内容主策略。
2. 按 `02-site-structure-and-keywords.md` 确认域名和 URL。
3. 按 `04-calculator-spec.md` 先开发 MVP 计算器。
4. 按 `03-seo-plan.md` 补齐首页内容、FAQ 和 Schema。
5. 按 `05-implementation-plan.md` 上线并持续扩展内页。

## 运行 Astro 项目

当前文件夹已经包含一个可运行的单页 Astro 项目。

```bash
npm install
npm run dev
npm run build
```

本地开发服务器启动后，访问终端显示的地址，默认首页会直接打开 FERS 计算器。

核心实现文件：

- `src/pages/index.astro`
- `src/components/FersCalculator.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`

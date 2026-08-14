# 建站执行方案

## 技术选型

推荐 **Astro + TypeScript + Tailwind CSS**，计算器用可访问的原生表单或轻量 React 组件实现。目标受众偏桌面端，但联邦员工也会在手机上快速估算，所以必须同时优化移动端。

| 模块 | 推荐 |
|---|---|
| 框架 | Astro SSG |
| 样式 | Tailwind CSS |
| 交互 | 原生 JS 或 React/Astro island |
| 部署 | Cloudflare Pages 或 Vercel |
| 分析 | 自托管分析优先，GA4 作为辅助 |
| 测试 | Vitest 计算逻辑单测 + Playwright 核心流程检查 |

如果团队更熟 WordPress，可以用 WordPress 做内容层，计算器用独立静态组件或自托管 JS。SEO 目标相同，但性能和计算器版本管理会弱于 Astro/Next 方案。

## 开发阶段

### Phase 1：MVP 计算器首页

- 默认三字段计算器。
- 公式展开和基础结果。
- 高级模式：病假、军人回购、特殊岗位、遗属福利。
- FAQ、免责声明、OPM 来源链接。
- 首页 Title、Meta、H1、FAQ Schema。

### Phase 2：多场景与报告

- MRA+10、60 岁、62 岁三栏对比。
- FERS Supplement 估算。
- 打印/保存报告。
- URL 可分享，场景参数可回填。
- `WebApplication`、`HowTo` Schema。

### Phase 3：内容内页

优先上线：

1. `/fers-pension-formula/`
2. `/fers-retirement-eligibility/`
3. `/fers-mra-10/`
4. `/fers-supplement-calculator/`
5. `/fers-survivor-benefit/`
6. `/fers-military-buyback/`

每个内页都需要计算器或交互表，避免只写一篇普通博客。

### Phase 4：信任与拓展

- 作者/编辑页面。
- 基于 OPM 官方页的引用和更新时间。
- 更多长尾工具页。
- 收集真实问题，扩展 FAQ 和博客。

## 发布前检查

### 内容准确性

- 对 1%、1.1%、1.7% 的触发条件逐条复核。
- 对 MRA 表和 MRA+10 减扣逐条复核。
- 对 2,087 小时病假转换说明复核。
- 对 FERS Supplement 的估算公式和限制明确标记。
- 所有数字旁有免责声明。

### SEO 与页面质量

- 每页唯一 Title、Description、H1。
- URL 短、可读、无多余参数。
- 移动端输入区域不遮挡、不溢出。
- 首屏有可操作计算器或核心答案。
- JSON-LD 无语法错误。
- 内链完整，面包屑可用。

### 性能与可访问性

- LCP、CLS、INP 达到良好。
- 输入、按钮、结果状态键盘可用。
- 焦点状态清晰。
- 不依赖 JS 才能看到说明内容；计算器失败时有静态公式说明兜底。

## 上线后运营

- 每季度核对 OPM 最新规则和年度数字。
- 每月检查 GSC 中 FERS 相关查询，补充新页面或 FAQ。
- 观察哪些高级字段最常被使用，优先扩展对应工具页。
- 持续监控首页核心词排名和点击率，必要时调整首屏文案和默认场景。
- 不追求一次性铺满所有内页，先让核心词稳定，再横向扩展。


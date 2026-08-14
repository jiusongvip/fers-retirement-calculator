# 页面 SEO 方案

以下 SEO 文案使用英文，因为它们面向美国搜索用户。解释性说明用中文。

## 首页

```text
URL: /
Title: FERS Retirement Calculator: Estimate Your Federal Pension
Meta Description: Free FERS retirement calculator for federal employees. Estimate your pension, FERS Supplement, survivor benefit, and compare retirement dates.
H1: FERS Retirement Calculator
```

### Schema

- `WebApplication`：描述计算器名称、用途、操作系统、交互方式。
- `FAQPage`：承载首页 FAQ。
- `HowTo`：描述计算 FERS 年金的标准步骤。
- `BreadcrumbList`：Home > FERS Retirement Calculator。
- `Organization` 或 `Person`：提供作者、编辑和更新时间，强化 E-E-A-T。

### 首页内容模块

1. **首屏计算器**：默认字段 High-3、Years of Service、Retirement Age；计算按钮和每月/每年结果。
2. **结果解释区**：展示公式步骤、使用的乘数、减扣项、关键假设。
3. **高级字段区**：未用病假、军人回购、特殊岗位、遗属福利、退休日期、Supplement 估算。
4. **多场景对比区**：MRA+10、60 岁、62 岁三条结果。
5. **FERS Formula 说明区**：1%、1.1%、1.7%，High-3，Creditable Service。
6. **FERS Supplement 说明区**：谁符合条件、如何估算、哪些收入会影响。
7. **FAQ 区**：8 到 12 个问题，覆盖用户最关心的计算和退休选择。
8. **来源与免责声明区**：链接 OPM 官方页面，说明这是教育估算。

### 内部链接

首页链接到 `/fers-pension-formula/`、`/fers-retirement-eligibility/`、`/fers-mra-10/`、`/fers-supplement-calculator/`、`/fers-survivor-benefit/`、`/fers-military-buyback/`。

## FERS Supplement 计算器

```text
URL: /fers-supplement-calculator/
Title: FERS Supplement Calculator: Estimate Your Bridge Benefit
Meta Description: Estimate your FERS Special Retirement Supplement and see how it changes before age 62. Free calculator for eligible federal employees.
H1: FERS Supplement Calculator
```

内容模块：

1. 输入 Social Security 预估月金、FERS 服务年限、退休年龄、预计收入。
2. 输出估算 Supplement，并提示收入测试可能减少。
3. 说明 Supplement 不是 Social Security，只对符合特定条件的 FERS 退休人员开放。
4. FAQ：谁有资格、何时开始、何时停止、与 Social Security 的关系。
5. 内部链接回首页、FERS 资格页、MRA+10 页。

## FERS 公式页

```text
URL: /fers-pension-formula/
Title: FERS Pension Formula: High-3, Service, and Multiplier
Meta Description: Learn the FERS pension formula, including 1%, 1.1%, and 1.7% multipliers, high-3 salary, sick leave credit, and worked examples.
H1: FERS Pension Formula
```

内容模块：

1. 标准公式：`High-3 × Years of Creditable Service × Multiplier`。
2. 乘数表：1%、1.1%、1.7%。
3. High-3 的定义和计算步骤。
4. Creditable Service 的构成。
5. 示例：普通 FERS、62 岁 + 20 年、LEO/ATC/Firefighter。
6. 链接到首页计算器和 MRA+10 页。

## FERS MRA+10 页

```text
URL: /fers-mra-10/
Title: FERS MRA+10: Retirement Rules and Age Reduction
Meta Description: How the FERS MRA+10 retirement works, including the minimum retirement age chart and the 5% per year age reduction under 62.
H1: FERS MRA+10 Retirement
```

内容模块：

1. MRA 表。
2. MRA+10 资格。
3. 年龄减扣：62 岁前每满一个月扣 `5/12%`，即每年 5%。
4. 30 年服务或 60 岁 + 20 年如何避免减扣。
5. Postponed vs Deferred 的差异。
6. 内部链接到首页、Supplement 计算器和公式页。

## 通用 SEO 要求

- 每页唯一 Title、Description、H1。
- URL 小写连字符，避免日期和数字碎片。
- 核心图片使用真实界面截图或可理解的表格，不用装饰性 SVG 英雄图。
- 页面首屏不放大段营销文案，计算器或核心信息直接可见。
- 所有交互元素保持键盘可用，字号和对比度符合 WCAG。
- 移动端输入控件大而清晰，数字输入使用合适的 `inputmode="decimal"`。
- 每个数字结果旁边写明公式和假设。
- 首页和内页互相链接，避免孤立页面。
- 用 `canonical` 明确主页，避免分页或筛选参数生成重复页。
- 建立 `llms.txt` 和清晰站点结构，便于 AI 搜索引用。


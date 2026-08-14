# FERS 计算器产品规格

## 产品目标

让用户不需要懂 FERS 术语，也能在 30 秒内得到可信估算；同时允许高级用户把关键退休变量都加进去，得到更接近现实决策的结果。

## 默认模式

默认输入：

- High-3 Average Salary
- Years of Creditable Service
- Retirement Age

默认输出：

- Estimated Annual FERS Pension
- Estimated Monthly FERS Pension
- 使用的乘数
- 公式展开：`High-3 × Service × Multiplier`

## 高级模式

可展开字段：

- Unused Sick Leave Hours
- Military Service Buyback
- Special Category：LEO / ATC / Firefighter / Nuclear Materials Courier
- Survivor Benefit：None / Partial / Full
- Retirement Date 或 Birth Date
- Social Security 预估月金，用于估算 FERS Supplement
- State Income Tax 可选，用于展示粗略净额

## 计算步骤

### 1. 判断 MRA

根据出生年份映射：

| 出生年份 | MRA |
|---|---|
| 1970 及以后 | 57 |
| 1969 | 56 岁 10 个月 |
| 1968 | 56 岁 8 个月 |
| 1967 | 56 岁 6 个月 |
| 1966 | 56 岁 4 个月 |
| 1965 | 56 岁 2 个月 |
| 1953 至 1964 | 56 |
| 1952 | 55 岁 10 个月 |
| 1951 | 55 岁 8 个月 |
| 1950 | 55 岁 6 个月 |
| 1949 | 55 岁 4 个月 |
| 1948 | 55 岁 2 个月 |
| 1948 以前 | 55 |

### 2. 计算 Creditable Service

服务年限包含：

- FERS 覆盖的联邦 civilian service。
- 已支付 deposit 的 military service。
- 未用病假转换：2,087 小时约等于 1 年，按 OPM 换算成月/日。

计算器内部建议统一用“月”作为最小单位，避免浮点误差。展示时再转成年和月。

### 3. 选择乘数

- 普通 FERS：`1.0%`。
- 退休时年满 62 且至少有 20 年服务：`1.1%`。
- 特殊岗位 LEO/ATC/Firefighter/Nuclear Materials Courier：
  - 前 20 年：`1.7%`
  - 20 年以上：`1.0%`
- 如果用户有 CSRS 转移部分，MVP 可先只说明“不包含 CSRS 组件”，后续版本再加。

### 4. 计算基础年金

```text
Annual FERS Pension = High-3 × Creditable Service Years × Multiplier
Monthly = Annual / 12
```

### 5. 应用 MRA+10 减扣

如果用户符合 MRA+10 且在 62 岁前领取年金：

```text
Reduction = 5% × 距 62 岁的完整年数
           + 不足一年的月份 × (5% / 12)
```

例外：

- 满 30 年服务，不减。
- 满 20 年服务且 60 岁领取，不减。

### 6. 应用遗属福利减扣

- Full survivor：年金减少 10%。
- Partial survivor：年金减少 5%。
- No survivor：不减少。

### 7. 估算 FERS Supplement

只对符合资格的退休人员提供近似值：

```text
Supplement ≈ Estimated Social Security at 62
             × FERS Service Years
             ÷ 40
```

如果退休后有高额 earned income，需展示“可能会被收入测试减少”的提示。这个数字必须标记为估算，不作为正式金额。

### 8. 输出结构

对每个场景输出：

- Gross Annual FERS Pension
- Gross Monthly FERS Pension
- After Survivor Reduction
- Estimated FERS Supplement
- Estimated Total FERS + Supplement
- 使用的乘数
- 是否应用 MRA+10 减扣
- 公式和主要假设

## 多场景对比

首页默认展示同一组输入下的三个关键年龄：

- MRA+10
- 60 岁（如果满足资格）
- 62 岁

每个场景卡片显示年月金额、是否减扣、乘数和相对差异。

## 数据模型建议

```ts
type Scenario = {
  high3: number;
  serviceYears: number;
  serviceMonths: number;
  retirementAge: number;
  sickLeaveHours?: number;
  militaryBuybackYears?: number;
  specialCategory?: boolean;
  survivorBenefit?: 'none' | 'partial' | 'full';
  estimatedSocialSecurity?: number;
  birthYear?: number;
};

type Result = {
  multiplier: number;
  annualPension: number;
  monthlyPension: number;
  mra10Reduction: number;
  survivorReduction: number;
  supplementEstimate: number;
  assumptions: string[];
};
```

## 边界和免责声明

- 不声称代表 OPM 或任何政府机构。
- 不把结果称为“最终福利金额”。
- 遇到 deferred、postponed、disability、CSRS 转移、国会员工、临时工等复杂情形，明确提示“需要由 HR/OPM 确认”。
- 不在未处理州税、联邦税、FEHB、FEGLI、Medicare 的情况下声称“到手金额”。
- 结果页提供 OPM 官方链接和最后更新时间。

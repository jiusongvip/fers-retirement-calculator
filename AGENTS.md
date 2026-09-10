# AGENTS.md

## Git 工作流

- 每次修改代码后，必须立即 `git commit` 并 `git push`（用户明确要求每次修改都要提交推送）
- 提交信息使用英文，遵循仓库现有风格（`fix:` / `feat:` / `chore:` 前缀，简短描述）
- 提交前检查 `git status` / `git diff`，只暂存本次改动相关文件

## 验证命令

- 构建：`npm run build`
- 测试：`npx playwright test`（需先启动 `node node_modules/astro/astro.js preview --port 4325 --host 127.0.0.1`，测完停止）

## 项目要点

- 域名：`https://www.fers-retirement-calculator.com`（单语言英文站）
- Astro `trailingSlash: "always"`；首页 canonical 不带尾斜杠，内页带
- `/embed/` 为 noindex 嵌入页，sitemap 已过滤
- 线上 SEO 审计流程见 skill：site-seo-check / technology-seo-check

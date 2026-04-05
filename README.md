# bianma-app

bianma-app 是 Claude Code、Codex CLI、Gemini CLI、OpenCode 与 OpenClaw 等多种 AI 编码工具的统一命令行入口，集中管理扩展、代理与配置。所有对外推广、文档与开发体验都以 bianma-app 为品牌锚点。

## 快速开始
1. 安装 [Node.js 18+](https://nodejs.org/) 与 `pnpm`。
2. 进入仓库后运行 `pnpm install` 以拉取依赖。
3. 使用 `pnpm dev` 启动本地开发服务器并热更新 UI。
4. 若需自定义配置，复制 `env.example` 到 `.env` 并调整变量。

## 资源导航
- [中文用户手册](docs/user-manual/zh/README.md)
- [bianma URI 协议文档](docs/developers/bianma-uri-protocol.md)
- [更新日志](CHANGELOG.md)
- [安全政策](SECURITY.md)

## 文档入口（中文优先）
- [中文用户手册](docs/user-manual/zh/README.md)（首选入口，涵盖最新界面与使用流程）
- [English user manual](docs/user-manual/en/README.md)（英文镜像，供术语比对）
- [日本語ユーザーマニュアル](docs/user-manual/ja/README.md)（日文镜像，供日语读者参考）

## 兼容说明
仅保留[从 CC Switch 迁移](docs/user-manual/zh/5-faq/5.5-migration-from-cc-switch.md)作为历史兼容文档，用于帮助还在使用旧方案的团队过渡；其他场景均以 bianma-app 为主，新的体验与 URI 规范已经完全统一。

## 测试与质量
声明参与贡献前先在本地运行以下命令确认状态：
- `pnpm typecheck`
- `pnpm format:check`
- `pnpm test:unit`

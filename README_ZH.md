# bianma-app

bianma-app 是对 Claude Code、Codex CLI、Gemini CLI、OpenCode 与 OpenClaw 等 AI 编码工具的统一控制台，集中管理扩展、配置与代理，所有对外传播均以 bianma-app 品牌为准。

> **中文主入口**：bianma-app 以中文用户手册作为官方第一入口，English 与 日本語 版本仅作为翻译镜像供参考。

## 项目定位
bianma-app 搭建从代理到工具的全链路体验，集合 CLI、URI、配置与多语言文档，帮助团队稳定地完成模型接入与日常使用。

## 快速上手
1. 安装 Node.js 18+ 与 `pnpm`，符合官方开发依赖。
2. 进入仓库后运行 `pnpm install` 拉取依赖。
3. 使用 `pnpm dev` 启动本地开发服务器和热更新功能。
4. 如需自定义配置，请复制 `env.example` 为 `.env` 并调整变量值。

## 文档与资源
- [中文用户手册](docs/user-manual/zh/README.md)（首选入口）
- [bianma URI 协议文档](docs/developers/bianma-uri-protocol.md)
- [更新日志（历史记录）](CHANGELOG.md)
- [安全政策](SECURITY.md)

## 兼容说明
仓库仅保留[迁移兼容说明](docs/user-manual/zh/5-faq/5.5-migration-compatibility.md)作为兼容支持，其他文档与开发体验均统一为 bianma-app，旧品牌术语仅保留在迁移兼容说明中。

## 测试与质量
提交代码前请在本地运行：
- `pnpm typecheck`
- `pnpm format:check`
- `pnpm test:unit`

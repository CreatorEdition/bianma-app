# bianma-app

面向 AI 编码 CLI 的开源桌面控制面板。

[English](README.md) | 中文 | [日本語](README_JA.md) | [更新日志](CHANGELOG.md) | [中文手册](docs/user-manual/zh/README.md)

## 项目简介

`bianma-app` 用于统一管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw 的供应商配置与扩展配置，减少手动修改多套配置文件的成本。

## 开源核心定位

本仓库承载 `bianma-app` 的开源核心、社区文档和兼容层说明，面向公开协作与公开接入。

## 公有仓边界

- 本仓库提供开源核心能力、公开协议文档、迁移与兼容说明、社区协作入口。
- 完整官方产品能力可由官方版本提供。
- 本仓库不公开私有发布流程、私有 updater 细节、内部治理与内部路线图。

详细边界见 [docs/project/open-source-boundary.md](docs/project/open-source-boundary.md)。

## 快速开始

1. 安装 Node.js 18+ 与 `pnpm`。
2. 在仓库根目录执行 `pnpm install`。
3. 执行 `pnpm dev` 启动开发模式。
4. 在应用内添加并启用第一个供应商配置。

## 协议与迁移

- 主协议文档：[`bianma://` 深度链接协议](docs/user-manual/zh/5-faq/5.3-deeplink.md)。
- 迁移与兼容：[`CC Switch -> bianma-app` 迁移指南](docs/user-manual/zh/5-faq/5.5-migration-from-cc-switch.md)。

## 文档入口

- [中文用户手册](docs/user-manual/zh/README.md)
- [开发者协议文档](docs/developers/bianma-uri-protocol.md)
- [开源边界说明](docs/project/open-source-boundary.md)

历史 release notes 仅作归档，不作为当前主入口文档。

## 贡献

欢迎通过 Issue / PR 参与改进。

提交前建议先执行：

- `pnpm typecheck`
- `pnpm format:check`
- `pnpm test:unit`

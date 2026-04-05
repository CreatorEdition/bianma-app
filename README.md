# bianma-app

Open-source desktop control plane for AI coding CLIs.

[中文](README_ZH.md) | [日本語](README_JA.md) | [Changelog](CHANGELOG.md) | [ZH Manual](docs/user-manual/zh/README.md)

## What is bianma-app

`bianma-app` is a desktop application for managing provider and extension configuration across multiple AI coding CLIs, including Claude Code, Codex, Gemini CLI, OpenCode, and OpenClaw.

## Open-source core positioning

This public repository provides the open-source core, community-facing documentation, and compatibility guidance.

## Repository boundary

- This repo is for open-source core capabilities, public protocol docs, migration guides, and community contribution.
- Full official product capabilities may include additional layers outside this public repository.
- This repo does not document private release channels, private operations, or internal roadmap strategy.

See [Open Source Boundary](docs/project/open-source-boundary.md) for details.

## Quick start

1. Install prerequisites: Node.js 18+ and `pnpm`.
2. Install dependencies: `pnpm install`.
3. Start in dev mode: `pnpm dev`.
4. Open the app and add your first provider.

## Protocol and migration

- Public deep link protocol: [bianma:// guide](docs/user-manual/zh/5-faq/5.3-deeplink.md) (Chinese documentation).
- Migration from CC Switch and legacy link compatibility: [migration guide](docs/user-manual/zh/5-faq/5.5-migration-from-cc-switch.md) (Chinese documentation).

## Documentation

- [Chinese user manual](docs/user-manual/zh/README.md)
- [Developer protocol doc](docs/developers/bianma-uri-protocol.md)
- [Open-source boundary](docs/project/open-source-boundary.md)

Historical release notes are archived for reference only and are not the primary current documentation entry.

## Contributing

Issues and pull requests are welcome.

Before submitting a PR:

- Run type checks: `pnpm typecheck`
- Run format checks: `pnpm format:check`
- Run unit tests: `pnpm test:unit`

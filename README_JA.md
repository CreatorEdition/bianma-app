# bianma-app

AI coding CLI 向けのオープンソースデスクトップ制御パネル。

[English](README.md) | [中文](README_ZH.md) | 日本語 | [Changelog](CHANGELOG.md) | [ZH Manual](docs/user-manual/zh/README.md)

## 概要

`bianma-app` は Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw など複数の AI CLI のプロバイダ設定と拡張設定を一元管理するためのデスクトップアプリです。

## オープンソースとしての位置づけ

この公開リポジトリは、`bianma-app` のオープンソースコア、コミュニティ向けドキュメント、互換レイヤーの説明を提供します。

## リポジトリ境界

- 本リポジトリは公開可能なコア機能、公開プロトコル文書、移行と互換ガイド、コミュニティ貢献を扱います。
- 完全な公式プロダクト機能は、公式版で提供される場合があります。
- 私有リリース運用、私有 updater、内部ガバナンス、内部ロードマップは扱いません。

詳細は [Open Source Boundary](docs/project/open-source-boundary.md) を参照してください。

## クイックスタート

1. Node.js 18+ と `pnpm` をインストール。
2. `pnpm install`
3. `pnpm dev`
4. アプリで最初のプロバイダを追加。

## プロトコルと移行

- 公開プロトコル: [`bianma://` ガイド](docs/user-manual/zh/5-faq/5.3-deeplink.md) (Chinese documentation)。
- CC Switch からの移行: [migration guide](docs/user-manual/zh/5-faq/5.5-migration-from-cc-switch.md) (Chinese documentation)。

## ドキュメント

- [Chinese user manual](docs/user-manual/zh/README.md)
- [Developer protocol doc](docs/developers/bianma-uri-protocol.md)
- [Open-source boundary](docs/project/open-source-boundary.md)

Historical release notes are archived for reference only and are not the primary current documentation entry.

## Contributing

Issue / Pull Request を歓迎します。

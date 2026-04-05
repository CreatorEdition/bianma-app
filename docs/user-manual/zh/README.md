# bianma-app 中文用户手册

本手册面向 `bianma-app` 公有仓的开源核心与公开接入能力。

> **中文主入口**：本文档是 bianma-app 官方推荐的首选入口，English 与日本語 版本为翻译镜像。

## 建议阅读顺序

1. [1.1 软件介绍](./1-getting-started/1.1-introduction.md)
2. [1.2 安装指南](./1-getting-started/1.2-installation.md)
3. [1.4 快速上手](./1-getting-started/1.4-quickstart.md)
4. [5.3 深度链接协议（`bianma://`）](./5-faq/5.3-deeplink.md)
5. [5.5 从 CC Switch 迁移](./5-faq/5.5-migration-from-cc-switch.md)

## 目录结构

```text
📚 bianma-app 中文用户手册
│
├── 1. 快速入门
│   ├── 1.1 软件介绍
│   ├── 1.2 安装指南
│   ├── 1.3 界面概览
│   ├── 1.4 快速上手
│   └── 1.5 个性化设置
│
├── 2. 供应商管理
│   ├── 2.1 添加供应商
│   ├── 2.2 切换供应商
│   ├── 2.3 编辑供应商
│   ├── 2.4 排序与复制
│   └── 2.5 用量查询
│
├── 3. 扩展功能
│   ├── 3.1 MCP
│   ├── 3.2 Prompts
│   ├── 3.3 Skills
│   ├── 3.4 会话管理器
│   └── 3.5 工作区文件与每日记忆
│
├── 4. 代理与高可用
│   ├── 4.1 代理服务
│   ├── 4.2 应用接管
│   ├── 4.3 故障转移
│   ├── 4.4 用量统计
│   └── 4.5 模型检查
│
└── 5. FAQ / 协议 / 迁移
    ├── 5.1 配置文件说明
    ├── 5.2 常见问题
    ├── 5.3 深度链接协议（bianma://）
    ├── 5.4 环境变量冲突
    └── 5.5 从 CC Switch 迁移
```

> 5.5 从 CC Switch 迁移 章节仅用于旧版的迁移与兼容场景，其他内容均围绕 bianma-app 展开，不再正式使用 CC Switch 术语。

## 文件列表

### 1. 快速入门

| 文件 | 内容 |
|------|------|
| [1.1-introduction.md](./1-getting-started/1.1-introduction.md) | 软件介绍、开源定位、核心能力 |
| [1.2-installation.md](./1-getting-started/1.2-installation.md) | Windows / macOS / Linux 安装指南 |
| [1.3-interface.md](./1-getting-started/1.3-interface.md) | 界面布局、导航结构、主要区域说明 |
| [1.4-quickstart.md](./1-getting-started/1.4-quickstart.md) | 5 分钟快速上手教程 |
| [1.5-settings.md](./1-getting-started/1.5-settings.md) | 语言、主题、目录等个性化设置 |

### 2. 供应商管理

| 文件 | 内容 |
|------|------|
| [2.1-add.md](./2-providers/2.1-add.md) | 使用预设、自定义配置、统一供应商 |
| [2.2-switch.md](./2-providers/2.2-switch.md) | 主界面切换、托盘切换、生效方式 |
| [2.3-edit.md](./2-providers/2.3-edit.md) | 编辑配置、修改 API Key、回填机制 |
| [2.4-sort-duplicate.md](./2-providers/2.4-sort-duplicate.md) | 拖拽排序、复制供应商、删除 |
| [2.5-usage-query.md](./2-providers/2.5-usage-query.md) | 用量查询、剩余额度、多套餐显示 |

### 3. 扩展功能

| 文件 | 内容 |
|------|------|
| [3.1-mcp.md](./3-extensions/3.1-mcp.md) | MCP 协议、添加服务器、应用绑定 |
| [3.2-prompts.md](./3-extensions/3.2-prompts.md) | 创建预设、激活切换、智能回填 |
| [3.3-skills.md](./3-extensions/3.3-skills.md) | 发现技能、安装卸载、仓库管理 |
| [3.4-sessions.md](./3-extensions/3.4-sessions.md) | 会话浏览、搜索过滤、恢复与删除 |
| [3.5-workspace.md](./3-extensions/3.5-workspace.md) | OpenClaw 工作区文件、每日记忆 |

### 4. 代理与高可用

| 文件 | 内容 |
|------|------|
| [4.1-service.md](./4-proxy/4.1-service.md) | 启动代理、配置项、运行状态 |
| [4.2-takeover.md](./4-proxy/4.2-takeover.md) | 应用接管、配置修改、状态指示 |
| [4.3-failover.md](./4-proxy/4.3-failover.md) | 故障转移队列、熔断器、健康状态 |
| [4.4-usage.md](./4-proxy/4.4-usage.md) | 用量统计、趋势图表、定价配置 |
| [4.5-model-test.md](./4-proxy/4.5-model-test.md) | 模型检查、健康检测、延迟测试 |

### 5. FAQ / 协议 / 迁移

| 文件 | 内容 |
|------|------|
| [5.1-config-files.md](./5-faq/5.1-config-files.md) | 配置文件位置与结构说明 |
| [5.2-questions.md](./5-faq/5.2-questions.md) | 常见问题解答 |
| [5.3-deeplink.md](./5-faq/5.3-deeplink.md) | 公开深度链接协议与使用方法 |
| [5.4-env-conflict.md](./5-faq/5.4-env-conflict.md) | 环境变量冲突检测与处理 |
| [5.5-migration-from-cc-switch.md](./5-faq/5.5-migration-from-cc-switch.md) | 从 CC Switch 迁移与 legacy 兼容说明 |

## 开发者入口

- [开发者协议文档](../../developers/bianma-uri-protocol.md)

## 快速链接

- **新用户**：从 [1.1 软件介绍](./1-getting-started/1.1-introduction.md) 开始
- **安装问题**：查看 [1.2 安装指南](./1-getting-started/1.2-installation.md)
- **配置供应商**：查看 [2.1 添加供应商](./2-providers/2.1-add.md)
- **协议接入**：查看 [5.3 深度链接协议（`bianma://`）](./5-faq/5.3-deeplink.md)
- **历史迁移**：查看 [5.5 从 CC Switch 迁移](./5-faq/5.5-migration-from-cc-switch.md)
- **遇到问题**：查看 [5.2 常见问题](./5-faq/5.2-questions.md)

历史 release notes 仅作归档，不作为当前主入口文档。

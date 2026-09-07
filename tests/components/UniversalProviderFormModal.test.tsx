import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { UniversalProviderFormModal } from "@/components/universal/UniversalProviderFormModal";
import type { UniversalProvider } from "@/types";

vi.mock("@/components/JsonEditor", () => ({
  default: () => <div data-testid="json-editor" />,
}));

const createProvider = (): UniversalProvider => ({
  id: "p1",
  name: "上游",
  providerType: "custom",
  apps: { claude: true, codex: true, gemini: true },
  baseUrl: "https://api.example.com",
  apiKey: "test-key",
  models: {
    claude: { model: "shared-model" },
    codex: { model: "shared-model", reasoningEffort: "high" },
    gemini: { model: "shared-model" },
  },
});

describe("UniversalProviderFormModal", () => {
  it.each([false, true])(
    "首次配置只保存统一模型，不注入隐藏别名（简易模式：%s）",
    async (simpleMode) => {
      const onSave = vi.fn();

      render(
        <UniversalProviderFormModal
          isOpen
          onClose={vi.fn()}
          onSave={onSave}
          simpleMode={simpleMode}
        />,
      );

      expect(screen.getByLabelText("API 地址")).toBeInTheDocument();
      expect(screen.getByLabelText("API Key")).toBeInTheDocument();
      expect(screen.getByLabelText("默认模型")).toBeInTheDocument();
      expect(
        screen.queryByLabelText("渠道名称（可选）"),
      ).not.toBeInTheDocument();
      expect(screen.queryByText("网关类型")).not.toBeInTheDocument();

      fireEvent.change(screen.getByLabelText("API 地址"), {
        target: { value: "https://api.example.com" },
      });
      fireEvent.change(screen.getByLabelText("API Key"), {
        target: { value: "test-key" },
      });
      fireEvent.change(screen.getByLabelText("默认模型"), {
        target: { value: "gpt-5.4" },
      });
      fireEvent.click(screen.getByText("添加"));

      await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
      const saved = onSave.mock.calls[0][0];
      expect(saved.name).toBe("example.com");
      expect(saved.models.claude.model).toBe("gpt-5.4");
      expect(saved.models.codex.model).toBe("gpt-5.4");
      expect(saved.models.gemini.model).toBe("gpt-5.4");
      expect(saved.models.claude.haikuModel).toBeUndefined();
      expect(saved.models.claude.sonnetModel).toBeUndefined();
      expect(saved.models.claude.opusModel).toBeUndefined();
    },
  );

  it("高级配置展开后才显示客户端映射和可选名称", () => {
    render(
      <UniversalProviderFormModal isOpen onClose={vi.fn()} onSave={vi.fn()} />,
    );

    fireEvent.click(screen.getByText("高级配置"));

    expect(screen.getByLabelText("渠道名称（可选）")).toBeInTheDocument();
    expect(screen.getByText("启用的应用")).toBeInTheDocument();
    expect(screen.getByText("模型配置")).toBeInTheDocument();
  });

  it("简易模式编辑只显示保存，不要求再次确认同步", () => {
    const provider = createProvider();

    render(
      <UniversalProviderFormModal
        isOpen
        onClose={vi.fn()}
        onSave={vi.fn()}
        onSaveAndSync={vi.fn()}
        editingProvider={provider}
        simpleMode
      />,
    );

    expect(screen.getByText("保存")).toBeInTheDocument();
    expect(screen.queryByText("保存并同步")).not.toBeInTheDocument();
    expect(screen.queryByText("高级配置")).not.toBeInTheDocument();
    expect(screen.queryByText("启用的应用")).not.toBeInTheDocument();
  });

  it.each([false, true])(
    "高级修改的客户端模型在保存并重开后保留（同步：%s）",
    async (sync) => {
      const provider = createProvider();
      const onCommit = vi.fn();
      const { unmount } = render(
        <UniversalProviderFormModal
          isOpen
          onClose={vi.fn()}
          onSave={onCommit}
          onSaveAndSync={sync ? onCommit : undefined}
          editingProvider={provider}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
      fireEvent.change(screen.getByPlaceholderText("gpt-5.4"), {
        target: { value: "codex-override" },
      });
      fireEvent.click(
        screen.getByRole("button", { name: sync ? "保存并同步" : "保存" }),
      );
      if (sync) {
        fireEvent.click(
          within(screen.getByRole("dialog")).getByRole("button", {
            name: "保存并同步",
          }),
        );
      }

      await waitFor(() => expect(onCommit).toHaveBeenCalledTimes(1));
      const saved = onCommit.mock.calls[0][0] as UniversalProvider;
      expect(saved.models.codex?.model).toBe("codex-override");
      expect(saved.models.claude?.model).toBe("shared-model");
      expect(saved.models.gemini?.model).toBe("shared-model");
      expect(provider.models.codex?.model).toBe("shared-model");

      unmount();
      render(
        <UniversalProviderFormModal
          isOpen
          onClose={vi.fn()}
          onSave={vi.fn()}
          editingProvider={saved}
        />,
      );
      fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
      expect(screen.getByPlaceholderText("gpt-5.4")).toHaveValue(
        "codex-override",
      );
    },
  );

  it.each([false, true])(
    "修改地址不会改变已有高级模型映射（简易模式：%s）",
    async (simpleMode) => {
      const provider = createProvider();
      provider.models = {
        claude: {
          model: "claude-custom",
          haikuModel: "haiku-custom",
          sonnetModel: "sonnet-custom",
          opusModel: "opus-custom",
        },
        codex: { model: "codex-custom", reasoningEffort: "medium" },
        gemini: { model: "gemini-custom" },
      };
      const onSave = vi.fn();
      render(
        <UniversalProviderFormModal
          isOpen
          onClose={vi.fn()}
          onSave={onSave}
          editingProvider={provider}
          simpleMode={simpleMode}
        />,
      );

      fireEvent.change(screen.getByLabelText("API 地址"), {
        target: { value: "https://new.example.com" },
      });
      fireEvent.click(screen.getByRole("button", { name: "保存" }));

      await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
      expect(onSave.mock.calls[0][0].models).toEqual(provider.models);
    },
  );

  it("更新默认模型立即同步三个主模型，同时保留显式 Claude 别名", async () => {
    const provider = createProvider();
    provider.models.claude!.haikuModel = "haiku-override";
    const onSave = vi.fn();
    render(
      <UniversalProviderFormModal
        isOpen
        onClose={vi.fn()}
        onSave={onSave}
        editingProvider={provider}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
    fireEvent.change(screen.getByLabelText("默认模型"), {
      target: { value: "next-model" },
    });
    expect(screen.getAllByDisplayValue("next-model")).toHaveLength(4);
    expect(screen.getByDisplayValue("haiku-override")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "保存" }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave.mock.calls[0][0].models).toEqual({
      claude: { model: "next-model", haikuModel: "haiku-override" },
      codex: { model: "next-model", reasoningEffort: "high" },
      gemini: { model: "next-model" },
    });
  });

  it("逐字清空默认模型后仍保存原有主模型与显式别名", async () => {
    const provider = createProvider();
    provider.models.claude!.haikuModel = "haiku-override";
    const onSave = vi.fn();
    render(
      <UniversalProviderFormModal
        isOpen
        onClose={vi.fn()}
        onSave={onSave}
        editingProvider={provider}
      />,
    );

    const input = screen.getByLabelText("默认模型");
    for (let length = "shared-model".length - 1; length >= 0; length--) {
      fireEvent.change(input, {
        target: { value: "shared-model".slice(0, length) },
      });
    }
    expect(input).toHaveValue("");
    fireEvent.click(screen.getByRole("button", { name: "保存" }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave.mock.calls[0][0].models).toEqual(provider.models);
  });

  it("清空默认模型保留随后明确设置的客户端覆盖", async () => {
    const provider = createProvider();
    const onSave = vi.fn();
    render(
      <UniversalProviderFormModal
        isOpen
        onClose={vi.fn()}
        onSave={onSave}
        editingProvider={provider}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
    const input = screen.getByLabelText("默认模型");
    fireEvent.change(input, { target: { value: "next-model" } });
    fireEvent.blur(input);
    fireEvent.change(screen.getByPlaceholderText("gpt-5.4"), {
      target: { value: "codex-override" },
    });
    for (let length = "next-model".length - 1; length >= 0; length--) {
      fireEvent.change(input, {
        target: { value: "next-model".slice(0, length) },
      });
    }
    fireEvent.click(screen.getByRole("button", { name: "保存" }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave.mock.calls[0][0].models.claude.model).toBe("next-model");
    expect(onSave.mock.calls[0][0].models.codex.model).toBe("codex-override");
    expect(onSave.mock.calls[0][0].models.gemini.model).toBe("next-model");
  });

  it("清空 Claude 别名后省略覆盖值以继承主模型", async () => {
    const provider = createProvider();
    provider.models.claude!.haikuModel = "haiku-override";
    const onSave = vi.fn();
    render(
      <UniversalProviderFormModal
        isOpen
        onClose={vi.fn()}
        onSave={onSave}
        editingProvider={provider}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
    fireEvent.change(screen.getByDisplayValue("haiku-override"), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByRole("button", { name: "保存" }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave.mock.calls[0][0].models.claude.haikuModel).toBeUndefined();
    expect(onSave.mock.calls[0][0].models.claude.model).toBe("shared-model");
  });

  it("新建时切换网关类型保留已输入模型，不恢复预设别名", async () => {
    const onSave = vi.fn();
    render(
      <UniversalProviderFormModal isOpen onClose={vi.fn()} onSave={onSave} />,
    );
    fireEvent.change(screen.getByLabelText("API 地址"), {
      target: { value: "https://api.example.com" },
    });
    fireEvent.change(screen.getByLabelText("API Key"), {
      target: { value: "test-key" },
    });
    fireEvent.change(screen.getByLabelText("默认模型"), {
      target: { value: "shared-model" },
    });
    fireEvent.click(screen.getByRole("button", { name: "高级配置" }));
    fireEvent.change(screen.getByPlaceholderText("gpt-5.4"), {
      target: { value: "codex-override" },
    });
    fireEvent.click(screen.getByRole("button", { name: /自定义网关/ }));
    expect(screen.getByPlaceholderText("gpt-5.4")).toHaveValue(
      "codex-override",
    );
    fireEvent.click(screen.getByRole("button", { name: "添加" }));

    await waitFor(() => expect(onSave).toHaveBeenCalledTimes(1));
    expect(onSave.mock.calls[0][0].models).toEqual({
      claude: { model: "shared-model" },
      codex: { model: "codex-override", reasoningEffort: "high" },
      gemini: { model: "shared-model" },
    });
  });
});

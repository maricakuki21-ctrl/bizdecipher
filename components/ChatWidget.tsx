"use client";

import { useState, useRef, useEffect } from "react";
import { CHAT_WELCOME } from "@/lib/prompts";
import type { ChatMessage } from "@/types";

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: CHAT_WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "user", content: userMsg },
        { role: "assistant", content: data.content || "抱歉，AI暂时无法回应。" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: userMsg },
        { role: "assistant", content: "网络错误，请检查连接后重试。" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">先免费做一次 AI 风险初筛</h2>
          <p className="section-subtitle mx-auto">
            粘贴一条广告、Listing 或短视频脚本，AI 会先帮你找出明显风险点。
            <br />
            正式报告将由人工复核后交付。
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content.split("\n").map((line, j) => (
                    <div key={j} className={j > 0 ? "mt-1" : ""}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-400">
                  AI 思考中...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="粘贴要审查的内容..."
                rows={3}
                className="input-field resize-none text-sm"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="btn-primary px-4 py-2 self-end text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "..." : "发送"}
              </button>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-400">
                AI 初筛仅供参考，正式审查建议提交人工复核。
              </p>
              <a
                href="#form"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                提交正式审查 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
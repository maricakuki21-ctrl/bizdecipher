import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { RISK_SCREENING_SYSTEM_PROMPT, CHAT_WELCOME, NO_API_KEY_MOCK } from "@/lib/prompts";
import type { ChatMessage } from "@/types";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        role: "assistant",
        content: NO_API_KEY_MOCK,
      });
    }

    const openai = new OpenAI({ apiKey });

    // Build conversation history with system prompt
    const systemMsg = {
      role: "system" as const,
      content: RISK_SCREENING_SYSTEM_PROMPT,
    };

    // If only system + no user messages yet, send welcome
    const userMessages = messages.filter((m) => m.role === "user");
    if (userMessages.length === 0) {
      return NextResponse.json({
        role: "assistant",
        content: CHAT_WELCOME,
      });
    }

    const conversationHistory = [
      systemMsg,
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: conversationHistory,
      max_tokens: 1500,
      temperature: 0.3,
    });

    const reply = completion.choices[0]?.message?.content || "抱歉，AI 暂时无法回应。请稍后重试。";

    return NextResponse.json({ role: "assistant", content: reply });
  } catch (err) {
    console.error("[api/chat]", err);
    return NextResponse.json(
      { error: "AI 服务暂时不可用，请稍后重试。" },
      { status: 500 }
    );
  }
}
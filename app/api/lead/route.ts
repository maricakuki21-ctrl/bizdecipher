import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { validateLeadForm, sanitizeFormData } from "@/lib/validators";
import type { LeadFormData, ApiResponse } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formData = body as LeadFormData;

    // Validation
    const validationError = validateLeadForm(formData);
    if (validationError) {
      return NextResponse.json<ApiResponse>(
        { ok: false, error: validationError },
        { status: 400 }
      );
    }

    const data = sanitizeFormData(formData);

    // Check Supabase config
    if (!isSupabaseConfigured || !supabase) {
      console.log("[api/lead] Supabase not configured, logging lead:", JSON.stringify(data, null, 2));
      return NextResponse.json<ApiResponse>({
        ok: true,
        data: { message: "Lead logged (Supabase not configured)" },
      });
    }

    // Insert into Supabase
    const { error } = await supabase.from("leads").insert([
      {
        name: data.name,
        wechat: data.wechat,
        email: data.email || null,
        platform: data.platform,
        content_type: data.contentType,
        category: data.category,
        market: data.market,
        content: data.content,
        landing_page: data.landingPage || null,
        rejected: data.rejected === "yes",
        rejection_note: data.rejectionNote || null,
        urgent: data.urgent || false,
        note: data.note || null,
        status: "new",
      },
    ]);

    if (error) {
      console.error("[api/lead] Supabase error:", error);
      return NextResponse.json<ApiResponse>(
        { ok: false, error: "保存失败，请稍后重试。" },
        { status: 500 }
      );
    }

    return NextResponse.json<ApiResponse>({ ok: true });
  } catch (err) {
    console.error("[api/lead]", err);
    return NextResponse.json<ApiResponse>(
      { ok: false, error: "服务器错误，请稍后重试。" },
      { status: 500 }
    );
  }
}
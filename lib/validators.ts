import type { LeadFormData } from "@/types";

export function validateLeadForm(data: LeadFormData): string | null {
  if (!data.name?.trim()) return "请填写称呼";
  if (!data.wechat?.trim()) return "请填写微信";
  if (!data.platform?.trim()) return "请选择平台";
  if (!data.contentType?.trim()) return "请选择内容类型";
  if (!data.category?.trim()) return "请填写品类";
  if (!data.market?.trim()) return "请填写目标市场";
  if (!data.content?.trim()) return "请填写待审内容";
  if (data.content.trim().length < 10) return "待审内容过短，请提供更多细节";
  return null;
}

export function sanitizeFormData(data: LeadFormData): Partial<LeadFormData> {
  return {
    name: data.name?.trim(),
    wechat: data.wechat?.trim(),
    email: data.email?.trim() || undefined,
    platform: data.platform?.trim(),
    contentType: data.contentType?.trim(),
    category: data.category?.trim(),
    market: data.market?.trim(),
    content: data.content?.trim(),
    landingPage: data.landingPage?.trim() || undefined,
    rejected: data.rejected,
    rejectionNote: data.rejectionNote?.trim() || undefined,
    urgent: data.urgent,
    note: data.note?.trim() || undefined,
  };
}
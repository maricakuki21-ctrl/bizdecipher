export interface Lead {
  id?: string;
  created_at?: string;
  name: string;
  wechat: string;
  email?: string;
  platform: string;
  content_type: string;
  category: string;
  market: string;
  content: string;
  landing_page?: string;
  rejected?: boolean;
  rejection_note?: string;
  urgent?: boolean;
  note?: string;
  status?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface LeadFormData {
  name: string;
  wechat: string;
  email: string;
  platform: string;
  contentType: string;
  category: string;
  market: string;
  content: string;
  landingPage: string;
  rejected: string;
  rejectionNote: string;
  urgent: boolean;
  note: string;
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}
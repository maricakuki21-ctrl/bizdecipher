"use client";

import { useState } from "react";
import { FORM_REQUIRED_ERROR, LEAD_SUCCESS_MESSAGE, LEAD_ERROR_MESSAGE } from "@/lib/prompts";
import type { LeadFormData } from "@/types";

const PLATFORMS = ["Amazon", "Google Ads", "TikTok Ads", "Meta Ads", "Shopify/独立站", "Other"];
const CONTENT_TYPES = ["Listing", "Ad Copy", "Landing Page", "Image Text", "Video Script", "Other"];

const emptyForm: LeadFormData = {
  name: "", wechat: "", email: "",
  platform: "", contentType: "", category: "", market: "", content: "",
  landingPage: "", rejected: "no", rejectionNote: "", urgent: false, note: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof LeadFormData, v: string | boolean) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.wechat || !form.platform || !form.contentType || !form.category || !form.market || !form.content) {
      setError(FORM_REQUIRED_ERROR);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess(true);
        setForm(emptyForm);
      } else {
        setError(data.error || LEAD_ERROR_MESSAGE);
      }
    } catch {
      setError(LEAD_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="form" className="py-20 bg-blue-600">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-3">已收到您的申请</h2>
          <p className="text-blue-100 text-lg">{LEAD_SUCCESS_MESSAGE}</p>
          <button onClick={() => setSuccess(false)} className="mt-6 text-sm text-blue-200 underline">
            再提交一条
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">提交正式审查</h2>
          <p className="section-subtitle mx-auto">
            填写表单，我们会在微信联系你确认范围和报价。
          </p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          {/* Row 1: name + wechat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">称呼 <span className="text-red-500">*</span></label>
              <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="张三" className="input-field" />
            </div>
            <div>
              <label className="label">微信 <span className="text-red-500">*</span></label>
              <input type="text" value={form.wechat} onChange={(e) => set("wechat", e.target.value)} placeholder="微信号" className="input-field" />
            </div>
          </div>

          {/* Row 2: email */}
          <div>
            <label className="label">邮箱 <span className="text-gray-400 font-normal">(可选)</span></label>
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="your@email.com" className="input-field" />
          </div>

          {/* Row 3: platform + contentType */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">平台 <span className="text-red-500">*</span></label>
              <select value={form.platform} onChange={(e) => set("platform", e.target.value)} className="input-field">
                <option value="">选择平台</option>
                {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="label">内容类型 <span className="text-red-500">*</span></label>
              <select value={form.contentType} onChange={(e) => set("contentType", e.target.value)} className="input-field">
                <option value="">选择类型</option>
                {CONTENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Row 4: category + market */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">品类 <span className="text-red-500">*</span></label>
              <input type="text" value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="如：美妆保健品、3C配件" className="input-field" />
            </div>
            <div>
              <label className="label">目标市场 <span className="text-red-500">*</span></label>
              <input type="text" value={form.market} onChange={(e) => set("market", e.target.value)} placeholder="如：美国、欧盟、东南亚" className="input-field" />
            </div>
          </div>

          {/* Row 5: content */}
          <div>
            <label className="label">待审内容 <span className="text-red-500">*</span></label>
            <textarea value={form.content} onChange={(e) => set("content", e.target.value)} rows={5} placeholder="粘贴广告文案、Listing内容、落地页文字或其他待审内容..." className="input-field resize-none" />
          </div>

          {/* Row 6: landing page */}
          <div>
            <label className="label">落地页链接 <span className="text-gray-400 font-normal">(可选)</span></label>
            <input type="url" value={form.landingPage} onChange={(e) => set("landingPage", e.target.value)} placeholder="https://..." className="input-field" />
          </div>

          {/* Row 7: rejected */}
          <div>
            <label className="label">是否已被拒审？</label>
            <div className="flex gap-4 mt-2">
              {[
                { value: "no", label: "否，内容还未提交" },
                { value: "yes", label: "是，已收到拒审通知" },
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rejected"
                    value={opt.value}
                    checked={form.rejected === opt.value}
                    onChange={() => set("rejected", opt.value)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row 8: rejection note */}
          {form.rejected === "yes" && (
            <div>
              <label className="label">拒审原因 / 截图链接 <span className="text-gray-400 font-normal">(可选)</span></label>
              <input type="text" value={form.rejectionNote} onChange={(e) => set("rejectionNote", e.target.value)} placeholder="拒审原因文字或截图链接" className="input-field" />
            </div>
          )}

          {/* Row 9: urgent */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="urgent" checked={form.urgent} onChange={(e) => set("urgent", e.target.checked)} className="accent-blue-600 w-4 h-4" />
            <label htmlFor="urgent" className="text-sm text-gray-700 cursor-pointer">申请加急（24小时交付，+¥399）</label>
          </div>

          {/* Row 10: note */}
          <div>
            <label className="label">备注 <span className="text-gray-400 font-normal">(可选)</span></label>
            <textarea value={form.note} onChange={(e) => set("note", e.target.value)} rows={2} placeholder="其他补充信息或特殊需求..." className="input-field resize-none" />
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
          )}

          {/* Submit */}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? "提交中..." : "提交正式审查"}
          </button>
        </form>
      </div>
    </section>
  );
}
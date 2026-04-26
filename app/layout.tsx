import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizDecipher / 商业解密 — AI内容发布前风险审查",
  description:
    "为跨境卖家、投放团队和代运营提供AI内容发布前风险审查，识别拒审、下架、投诉、侵权和虚假宣传风险，提供最低整改版本与留痕报告。",
  keywords: "AI内容审查, 跨境电商, Amazon审核, 广告合规, 拒审修复, 内容风控",
  openGraph: {
    title: "BizDecipher / 商业解密",
    description: "AI内容发布前风险审查 — 让AI内容敢用、能用、可负责",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}

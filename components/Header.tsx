"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BD</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">BizDecipher</span>
              <span className="text-gray-400 text-sm ml-1">/ 商业解密</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "服务", href: "#service" },
              { label: "风险类型", href: "#risks" },
              { label: "样例报告", href: "#sample" },
              { label: "AI初筛", href: "#chat" },
              { label: "价格", href: "#pricing" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Link href="#form" className="btn-primary text-sm px-4 py-2">
            提交审查
          </Link>
        </div>
      </div>
    </header>
  );
}
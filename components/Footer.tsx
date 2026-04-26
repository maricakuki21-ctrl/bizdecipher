export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BD</span>
              </div>
              <span className="font-semibold text-white">BizDecipher / 商业解密</span>
            </div>
            <p className="text-sm text-gray-500">让AI内容敢用、能用、可负责。</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {[
              { label: "服务", href: "#service" },
              { label: "风险类型", href: "#risks" },
              { label: "样例报告", href: "#sample" },
              { label: "AI初筛", href: "#chat" },
              { label: "价格", href: "#pricing" },
              { label: "提交审查", href: "#form" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            <strong className="text-gray-500">免责声明：</strong>
            本服务为发布前风险审查与整改建议，不构成法律意见或平台最终审核保证。
            平台政策、审核尺度及外部环境可能变化，客户应结合自身业务情况作最终发布决策。
          </p>
          <p className="text-xs text-gray-700">
            © 2026 BizDecipher / 商业解密. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
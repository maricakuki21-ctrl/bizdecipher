import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            AI 内容发布前风险审查
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            AI写得快，
            <br />
            但上线前谁来负责？
          </h1>

          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            BizDecipher / 商业解密为跨境卖家、投放团队和代运营提供 AI
            内容发布前风险审查，识别可能导致拒审、下架、投诉、侵权和虚假宣传的问题，并提供最低整改版本与留痕报告。
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500">
            {["早鸟价 ¥99", "48小时交付", "广告 · Listing · 落地页 · 短视频脚本"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#chat" className="btn-primary text-center">
              先让AI初筛
            </a>
            <a href="#form" className="btn-secondary text-center">
              提交正式审查
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
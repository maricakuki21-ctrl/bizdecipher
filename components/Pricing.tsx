const plans = [
  {
    name: "AI初筛",
    price: "免费",
    desc: "即时 AI 风险初筛，识别明显高危词和违禁表达。",
    features: ["即时反馈", "主要风险点识别", "整改方向建议", "不限次数"],
    cta: "开始初筛",
    href: "#chat",
    highlight: false,
  },
  {
    name: "单条审查",
    price: "¥99",
    priceNote: "早鸟价 · 原价¥199",
    desc: "AI初筛 + 人工复核 + PDF报告，含风险点清单和最小整改版本。",
    features: ["AI初筛", "人工复核", "风险点清单", "最小整改版本", "PDF留痕报告", "48小时交付"],
    cta: "提交审查",
    href: "#form",
    highlight: true,
  },
  {
    name: "拒审修复包",
    price: "¥499起",
    priceNote: "按内容复杂度定价",
    desc: "针对已被平台拒审的内容，提供整改方案和申诉支持。",
    features: ["拒审原因分析", "整改方案", "申诉文案建议", "沟通话术参考", "48小时交付"],
    cta: "联系咨询",
    href: "#form",
    highlight: false,
  },
  {
    name: "加急审查",
    price: "¥399起",
    priceNote: "在单条基础上加急",
    desc: "24小时交付，适合紧急上线前最后一轮检查。",
    features: ["AI初筛", "人工复核", "PDF报告", "24小时交付", "优先排队"],
    cta: "提交加急",
    href: "#form",
    highlight: false,
  },
  {
    name: "月包10条",
    price: "¥1499起",
    priceNote: "按需求定制",
    desc: "适合持续产出内容的团队，当月未用完可顺延。",
    features: ["10条审查额度", "优先排队", "专属对接", "月度风险总结", "滚动顺延"],
    cta: "联系定制",
    href: "#form",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">简单透明的价格</h2>
          <p className="section-subtitle mx-auto">
            按需选择，没有隐藏费用，没有套路。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card flex flex-col ${
                plan.highlight
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : ""
              }`}
            >
              {plan.highlight && (
                <div className="text-xs text-blue-600 font-medium mb-2">热门选择</div>
              )}
              <h3 className="font-semibold text-gray-900 mb-1">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                {plan.priceNote && (
                  <span className="text-xs text-gray-400 ml-1">{plan.priceNote}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-1">{plan.desc}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className={plan.highlight ? "btn-primary text-center text-sm" : "btn-secondary text-center text-sm"}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
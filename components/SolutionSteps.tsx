const steps = [
  {
    step: "01",
    title: "提交内容",
    desc: "广告 / Listing / 落地页 / 图片文字 / 视频脚本，直接粘贴或上传截图。",
  },
  {
    step: "02",
    title: "风险审查",
    desc: "AI初筛识别明显风险点，人工复核关键段落，给出最小整改版本和留痕报告。",
  },
  {
    step: "03",
    title: "交付报告",
    desc: "PDF报告包含：风险结论、风险点清单、整改版本、审核记录，可直接存档或提交平台申诉。",
  },
];

export default function SolutionSteps() {
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">上线前最后一道风险闸门</h2>
          <p className="section-subtitle mx-auto">
            提交 → 审查 → 报告，三步完成一次完整的发布前风险审查。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-5">
                {s.step}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 text-4xl font-light">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
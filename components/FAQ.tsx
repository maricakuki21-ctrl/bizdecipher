const faqs = [
  {
    q: "你们能保证100%过审吗？",
    a: "不能。我们提供发布前风险识别、整改建议和留痕记录，不承诺平台最终审核结果。平台政策可能随时调整，审核尺度因审核员而异。",
  },
  {
    q: "你们和普通文案润色有什么不同？",
    a: "我们不是优化文风，而是识别可能导致拒审、下架、投诉、侵权和虚假宣传的风险，给出最小整改版本，并提供可存档的审查记录。",
  },
  {
    q: "适合哪些内容？",
    a: "广告文案（Google Ads / Meta Ads / TikTok Ads）、Amazon Listing、独立站落地页、商品图片文字、短视频脚本等。",
  },
  {
    q: "多久交付？",
    a: "普通单48小时交付，加急单24小时交付。拒审修复包通常48小时内完成。",
  },
  {
    q: "是否有人工复核？",
    a: "是的。正式审查包含AI初筛+人工复核，AI初筛仅供免费初步判断。",
  },
  {
    q: "如何收费？",
    a: "AI初筛免费。单条审查早鸟价¥99（原价¥199）。拒审修复包¥499起。加急¥399起。月包¥1499起。",
  },
  {
    q: "如果内容已经被拒审，还能审查吗？",
    a: "可以。拒审修复包专门针对已拒审内容，分析拒审原因并提供整改方案和申诉文案参考。",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">常见问题</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-medium text-gray-900 mb-2 text-sm">{f.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
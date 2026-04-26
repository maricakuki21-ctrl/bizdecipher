const risks = [
  { icon: "📋", title: "平台政策风险", desc: "违反亚马逊/谷歌/Meta/TikTok广告政策导致拒审或账户风险。" },
  { icon: "🗣️", title: "夸大宣传", desc: '"Guaranteed", "best", "only"等绝对化表达触发平台审核。' },
  { icon: "💊", title: "功效/疗效承诺", desc: "cure, treat, heal, instant results 等医疗或效果宣称需谨慎。" },
  { icon: "🔒", title: "绝对化表达", desc: 'best, #1, guaranteed, only, risk-free 等词高风险。' },
  { icon: "💰", title: "价格/促销不透明", desc: "隐藏费用、模糊折扣、误导性免费试用违反消费者保护。" },
  { icon: "©️", title: "竞品词/商标风险", desc: "未经授权使用竞品商标、名人姓名或版权素材构成侵权。" },
  { icon: "🔗", title: "广告落地页不一致", desc: "广告承诺与落地页实际信息不匹配违反平台规则。" },
  { icon: "📊", title: "证据不足宣称", desc: '"clinically proven", "FDA approved"等无依据宣称。' },
  { icon: "🎯", title: "诱导点击/假交互", desc: "假按钮、虚假倒计时、诱导性设计违反广告法。" },
  { icon: "🏷️", title: "品牌与舆情风险", desc: "争议性内容、恐吓营销、羞辱性表达影响品牌声誉。" },
];

export default function RiskTypes() {
  return (
    <section id="risks" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">我们重点识别这些风险</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {risks.map((r) => (
            <div key={r.title} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl flex-shrink-0">{r.icon}</span>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{r.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
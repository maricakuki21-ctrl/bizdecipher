const painPoints = [
  {
    icon: "🚫",
    title: "广告反复被拒审",
    desc: "AI生成的文案里有高危词，过了初稿过不了平台。反复修改浪费时间，错过投放窗口。",
  },
  {
    icon: "📦",
    title: "Listing 上架后被下架",
    desc: "亚马逊、Shopee、TikTok各平台政策不同，一不小心就触发下架或抑制流量。",
  },
  {
    icon: "⚠️",
    title: "AI文案里有夸大承诺",
    desc: '"Guaranteed", "7天见效", "FDA approved"——AI不知道这些词有多危险。',
  },
  {
    icon: "👀",
    title: "运营自己审自己，容易漏",
    desc: "自己写的文案自己看不出来问题，熟悉的地方也是盲区。",
  },
  {
    icon: "📋",
    title: "出事后没有审核记录",
    desc: "平台追责时，拿不出「我已经审核过」的证明，只有聊天记录。",
  },
  {
    icon: "📈",
    title: "内容量暴涨，审核跟不上",
    desc: "日产100条素材，靠人工审核根本不可能，只能裸奔上线。",
  },
];

export default function PainPoints() {
  return (
    <section id="pain" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">AI生成不是问题，敢不敢发才是问题。</h2>
          <p className="section-subtitle mx-auto">
            每一条AI生成的内容，在上线前都应该经过一道风险闸门。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((p) => (
            <div key={p.title} className="card">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
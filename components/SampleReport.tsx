export default function SampleReport() {
  return (
    <section id="sample" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">你收到的不只是一份建议</h2>
          <p className="section-subtitle mx-auto">
            而是一份可归档的审查记录，直接用于平台申诉或内部存档。
          </p>
        </div>

        {/* Mock Report Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Report Header */}
          <div className="bg-gray-900 text-white px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BD</span>
                </div>
                <div>
                  <div className="font-semibold">BizDecipher / 商业解密</div>
                  <div className="text-xs text-gray-400">AI 内容发布前风险审查报告</div>
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="text-gray-400 text-xs">订单编号</div>
                <div className="font-mono text-gray-200">BD-20260425-001</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-400 text-xs">审核版本</div>
                <div className="text-white">V1.0</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs">审核时间</div>
                <div className="text-white">2026-04-25</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs">审核员</div>
                <div className="text-white">BD-R001</div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="text-xs text-amber-600 font-medium mb-0.5">审核结论</div>
                <div className="text-amber-800 font-semibold">修改后可发布</div>
              </div>
              <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="text-xs text-amber-600 font-medium mb-0.5">风险等级</div>
                <div className="text-amber-800 font-semibold">中风险</div>
              </div>
            </div>
          </div>

          {/* Risk Points */}
          <div className="px-8 py-6 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">风险点清单</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  <div>
                    <div className="text-xs text-red-600 font-medium mb-1">风险 1 · 确定性结果承诺</div>
                    <div className="text-sm text-gray-700 mb-2">
                      <span className="font-medium text-gray-500">原文：</span>
                      <span className="font-mono bg-red-100 px-1.5 py-0.5 rounded text-red-700">
                        "Guaranteed results in 7 days"
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium text-gray-500">风险说明：</span>
                      使用"guaranteed"等绝对化词汇容易触发平台夸大宣传政策，可能导致广告拒审或下架。
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium text-green-600">建议修改：</span>
                      <span className="font-mono bg-green-50 px-1.5 py-0.5 rounded text-green-700">
                        "Designed to support visible improvement over time with consistent use"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="px-8 py-6 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">AI 初筛总结</h3>
            <p className="text-sm text-gray-600">
              检测到1处高风险表达（确定性结果承诺），建议替换为更克制的功能描述语气。
              整体文案框架良好，符合平台基本规范。
            </p>
          </div>

          {/* Disclaimer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              本报告为 AI 辅助初筛 + 人工复核结果，不构成法律意见或平台最终审核保证。
              平台政策、审核尺度及外部环境可能变化，客户应结合自身业务情况作最终发布决策。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
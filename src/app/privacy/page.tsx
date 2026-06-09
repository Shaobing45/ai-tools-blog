import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'AI创收指南 的隐私政策，说明我们如何收集和使用你的信息。',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">📜 隐私政策</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
        <p>
          <strong>最后更新日期：2025 年 6 月</strong>
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">1. 信息收集</h2>
          <p>
            本网站通过 Google AdSense 和 Google Analytics 等服务自动收集匿名的浏览数据（如页面访问量、停留时间、粗略地理位置等），用于分析网站流量和优化内容。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">2. Cookie 使用</h2>
          <p>
            本网站和第三方服务（Google AdSense）可能使用 Cookie 来展示个性化广告和进行流量分析。你可以在浏览器设置中选择禁用 Cookie。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">3. 联盟链接</h2>
          <p>
            本站部分链接为联盟营销链接。点击这些链接并完成购买，我们可能会获得少量佣金。这不会影响你支付的价格。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">4. 信息安全</h2>
          <p>
            我们重视你的隐私。我们不会主动收集你的个人信息（除非你自愿订阅 Newsletter）。订阅邮件仅用于发送网站更新，不会出售或分享给第三方。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">5. 联系我们</h2>
          <p>
            如有任何隐私相关问题，请联系：hello@aicreateguide.com
          </p>
        </section>
      </div>
    </div>
  )
}

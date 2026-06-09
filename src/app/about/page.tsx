import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '关于本站',
  description: '了解 AI创收指南 的创建初衷和作者背景。',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">🙋 关于本站</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">为什么创建这个网站？</h2>
          <p>
            2024-2025 年，AI 工具正在以前所未有的速度改变我们的工作和生活方式。
            作为一个大学生/职场新人，你可能每天都在担心："我会不会被 AI 取代？"
          </p>
          <p className="mt-3">
            与其担心，不如拥抱。这个网站的使命就是——
            <strong>帮你学会用 AI 工具提升效率，甚至用 AI 创造副业收入</strong>。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">网站内容</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>AI 工具评测：</strong>
              真实上手体验各种 AI 工具，告诉你哪些值得用、哪些是智商税。
            </li>
            <li>
              <strong>实用教程：</strong>
              从零开始的保姆级教程，手把手教你用 AI 工具完成具体任务。
            </li>
            <li>
              <strong>副业方法：</strong>
              分享普通人能用 AI 做的副业项目，不画饼，只说实操。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">盈利模式</h2>
          <p>
            本站通过以下方式维持运营，所有收入用于提升内容质量：
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Google AdSense 广告</li>
            <li>联盟营销（推荐优质产品获得佣金）</li>
          </ul>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            我们承诺：只推荐自己使用过并真心认可的产品。联盟佣金不会影响你的购买价格。
          </p>
        </section>

        <section className="bg-indigo-50 dark:bg-indigo-950 rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">📬 联系与合作</h2>
          <p className="text-indigo-800 dark:text-indigo-200">
            有任何问题、建议或合作意向，欢迎通过以下方式联系：
          </p>
          <ul className="mt-3 space-y-2 text-indigo-700 dark:text-indigo-300">
            <li>
              📧 邮箱：<code className="bg-indigo-100 dark:bg-indigo-900 px-2 py-0.5 rounded">shaobing152@gmail.com</code>
            </li>
          </ul>
        </section>

        <div className="text-center pt-6">
          <Link
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            ← 返回首页看文章
          </Link>
        </div>
      </div>
    </div>
  )
}

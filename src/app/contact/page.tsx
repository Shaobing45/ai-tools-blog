import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '联系我',
  description: '与 AI创收指南 取得联系 — 合作、投稿、广告咨询。',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
        📬 联系我
      </h1>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            合作咨询
          </h2>
          <p>
            如果你有 AI 工具想让我们评测、有副业项目想合作推广，
            或者有广告投放需求，欢迎联系我们。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            投稿
          </h2>
          <p>
            我们欢迎高质量的 AI 工具教程/评测/副业经验分享投稿。
            投稿前请先邮件沟通选题，通过后稿件会在 3 个工作日内审核。
          </p>
        </section>

        <section className="bg-indigo-50 dark:bg-indigo-950 rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
            📧 联系方式
          </h2>
          <ul className="space-y-3 text-indigo-700 dark:text-indigo-300">
            <li>
              <strong>邮箱：</strong>
              <code className="bg-indigo-100 dark:bg-indigo-900 px-2 py-0.5 rounded text-sm">
                shaobing152@gmail.com
              </code>
            </li>
            <li>
            <li className="pt-2">
              <strong>响应时间：</strong>通常 24 小时内回复
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            💼 广告合作
          </h2>
          <p>本站接受以下形式的广告合作：</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>文章内嵌广告位（Google AdSense / 直投）</li>
            <li>联盟营销合作（高佣金产品优先）</li>
            <li>赞助内容（标记为「赞助」）</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            我们承诺：赞助内容会明确标注，保持透明度。
          </p>
        </section>

        <div className="text-center pt-6">
          <Link
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}

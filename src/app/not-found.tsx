import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl mb-4">🔍</p>
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">页面未找到</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        你访问的页面不存在，可能已被移动或删除。
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
      >
        ← 返回首页
      </Link>
    </div>
  )
}

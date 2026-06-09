import Link from 'next/link'
import { getAllCategories, getRecentPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  const posts = getRecentPosts(6)
  const categories = getAllCategories()

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-gray-950 dark:to-purple-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
            🤖 用 AI 工具，开启你的
            <span className="text-indigo-600">副业赚钱</span>
            之路
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            从零基础到上手，分享最实用的 AI 工具评测、教程和副业赚钱方法。
            每篇文章都是实操经验，不是纸上谈兵。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/category/ai-tools"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
            >
              浏览 AI 工具 →
            </Link>
            <Link
              href="/category/side-hustle"
              className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-300 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
            >
              查看副业方法 →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category nav */}
        {categories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">📂 内容分类</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md transition-all bg-white dark:bg-gray-900"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{cat.name}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                    {cat.count} 篇
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Latest posts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">📝 最新文章</h2>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-3">📭</p>
              <p>还没有文章，马上开始写第一篇吧！</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </div>
  )
}

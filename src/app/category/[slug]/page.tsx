import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

const categoryLabels: Record<string, string> = {
  'ai-tools': 'AI 工具',
  'side-hustle': '副业指南',
  tutorial: '实用教程',
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const label = categoryLabels[slug]
  if (!label) return {}
  return {
    title: `${label} — 全部文章`,
    description: `浏览所有关于${label}的文章和教程。`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const label = categoryLabels[slug]

  if (!label) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 dark:text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📂 {label}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        共 {posts.length} 篇文章
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-4xl mb-3">📭</p>
          <p>这个分类下还没有文章。</p>
          <Link
            href="/"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium mt-2 inline-block"
          >
            ← 返回首页
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

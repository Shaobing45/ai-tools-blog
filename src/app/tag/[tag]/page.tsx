import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPostsByTag, getAllTags } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ tag: tag.name }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  return {
    title: `#${tag} — 标签`,
    description: `浏览所有标记为「${tag}」的文章。`,
  }
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 dark:text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-300">标签</span>
        <span className="mx-2">/</span>
        <span className="text-gray-600 dark:text-gray-300">#{tag}</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
        🏷️ #{tag}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        共 {posts.length} 篇文章
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

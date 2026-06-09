import Link from 'next/link'
import type { PostMeta } from '@/types'

const categoryLabels: Record<string, string> = {
  'ai-tools': 'AI 工具',
  'side-hustle': '副业指南',
  tutorial: '实用教程',
}

const categoryColors: Record<string, string> = {
  'ai-tools': 'bg-purple-100 text-purple-700',
  'side-hustle': 'bg-green-100 text-green-700',
  tutorial: 'bg-blue-100 text-blue-700',
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all bg-white dark:bg-gray-900 h-full flex flex-col">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 self-start ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}
        >
          {categoryLabels[post.category] || post.category}
        </span>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mt-auto">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags && post.tags.length > 0 && (
            <span className="truncate ml-2">{post.tags.slice(0, 2).join(' · ')}</span>
          )}
        </div>
      </article>
    </Link>
  )
}

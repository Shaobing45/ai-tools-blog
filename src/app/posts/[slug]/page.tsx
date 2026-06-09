import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/jsonld'
import TableOfContents from '@/components/TableOfContents'
import AdUnit from '@/components/AdUnit'
import AffiliateCard from '@/components/AffiliateCard'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'

const categoryLabels: Record<string, string> = {
  'ai-tools': 'AI 工具',
  'side-hustle': '副业指南',
  tutorial: '实用教程',
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  // Compile MDX content with evaluate
  let MDXContent: React.ComponentType
  try {
    const result = await evaluate(post.content, {
      ...runtime,
      development: false,
    })
    MDXContent = result.default
  } catch (err) {
    console.error('MDX compile error:', err)
    // Fallback: render as plain text wrapped in pre
    MDXContent = () => (
      <pre className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
        {post.content}
      </pre>
    )
  }

  const breadcrumbItems = [
    { name: '首页', url: '/' },
    { name: categoryLabels[post.category] || post.category, url: `/category/${post.category}` },
    { name: post.title, url: `/posts/${post.slug}` },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <div className="flex gap-8">
        {/* Main content */}
        <article className="flex-1 min-w-0 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/category/${post.category}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {categoryLabels[post.category] || post.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 dark:text-gray-300">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 mb-3">
              {categoryLabels[post.category] || post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* MDX Content */}
          <div className="prose-custom">
            <MDXContent />
          </div>

          {/* Ad after content */}
          <AdUnit slot="in-content" />

          {/* Affiliate disclosure */}
          {post.affiliateProducts && post.affiliateProducts.length > 0 && (
            <AffiliateDisclosure />
          )}

          {/* Affiliate products */}
          {post.affiliateProducts &&
            post.affiliateProducts.length > 0 &&
            post.affiliateProducts.map((product, i) => (
              <AffiliateCard key={i} product={product} />
            ))}

          {/* Newsletter */}
          <Newsletter />
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents />
          <div className="mt-8">
            <AdUnit slot="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  )
}

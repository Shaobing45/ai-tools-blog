import type { PostMeta } from '@/types'

const BASE_URL = 'https://aicreateguide.com'

interface BreadcrumbItem {
  name: string
  url: string
}

/** 站点全局 Organization + WebSite */
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'AI创收指南',
        url: BASE_URL,
        description: '专注于 AI 工具教程与副业赚钱方法',
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/favicon.ico`,
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: 'AI创收指南',
        url: BASE_URL,
        publisher: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'zh-CN',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }
}

/** 文章详情页 BlogPosting */
export function blogPostingSchema(post: PostMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/posts/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/posts/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'AI创收指南',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI创收指南',
    },
    image: post.coverImage
      ? `${BASE_URL}${post.coverImage}`
      : undefined,
    keywords: post.tags?.join(', '),
    inLanguage: 'zh-CN',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/posts/${post.slug}`,
    },
  }
}

/** 面包屑 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** 分类页 CollectionPage */
export function collectionPageSchema(
  name: string,
  slug: string,
  description: string,
  postCount: number,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: `${BASE_URL}/category/${slug}`,
    description,
    numberOfItems: postCount,
    isAccessibleForFree: true,
    inLanguage: 'zh-CN',
  }
}

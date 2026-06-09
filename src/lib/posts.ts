import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post, PostMeta } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function parsePost(filename: string): Post | null {
  if (!filename.endsWith('.mdx')) return null

  const slug = filename.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, filename)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    category: data.category || 'tutorial',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage,
    tags: data.tags || [],
    affiliateProducts: data.affiliateProducts || [],
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const filenames = fs.readdirSync(postsDirectory)
  const posts = filenames
    .map(parsePost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts.map(({ content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.mdx`
  return parsePost(filename)
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getAllCategories(): { slug: string; name: string; count: number }[] {
  const posts = getAllPosts()
  const categoryMap: Record<string, { name: string; count: number }> = {
    'ai-tools': { name: 'AI 工具', count: 0 },
    'side-hustle': { name: '副业指南', count: 0 },
    tutorial: { name: '实用教程', count: 0 },
  }

  posts.forEach((p) => {
    if (categoryMap[p.category]) {
      categoryMap[p.category].count++
    }
  })

  return Object.entries(categoryMap)
    .filter(([, v]) => v.count > 0)
    .map(([slug, { name, count }]) => ({ slug, name, count }))
}

export function getRecentPosts(count: number = 6): PostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.tags && p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  )
}

export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts()
  const tagMap: Record<string, number> = {}
  posts.forEach((p) => {
    p.tags?.forEach((t) => {
      tagMap[t] = (tagMap[t] || 0) + 1
    })
  })
  return Object.entries(tagMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

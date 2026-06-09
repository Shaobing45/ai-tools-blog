export interface AffiliateProduct {
  name: string
  link: string
  description: string
  price?: string
}

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: 'ai-tools' | 'side-hustle' | 'tutorial'
  excerpt: string
  coverImage?: string
  tags?: string[]
  affiliateProducts?: AffiliateProduct[]
}

export interface Post extends PostMeta {
  content: string
}

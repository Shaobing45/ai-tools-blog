import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteSchema } from '@/lib/jsonld'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'AI创收指南 — AI 工具教程与副业赚钱方法',
    template: '%s | AI创收指南',
  },
  description:
    '专注于 AI 工具教程与副业赚钱方法，帮助大学生和职场新人用 AI 提升效率、创造收入。',
  keywords: [
    'AI工具',
    '副业',
    '赚钱',
    '大学生',
    'ChatGPT',
    'AI绘画',
    '联盟营销',
    '自媒体',
  ],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'AI创收指南',
    title: 'AI创收指南 — AI 工具教程与副业赚钱方法',
    description:
      '专注于 AI 工具教程与副业赚钱方法，帮助大学生和职场新人用 AI 提升效率、创造收入。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* 防止暗色模式闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        {/* 站点级结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

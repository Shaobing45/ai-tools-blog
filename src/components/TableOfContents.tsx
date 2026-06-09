'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll('article h2, article h3')
    const tocItems: TocItem[] = Array.from(headings).map((h) => ({
      id: h.id,
      text: h.textContent || '',
      level: parseInt(h.tagName[1]),
    }))
    setItems(tocItems)

    if (tocItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -70% 0px' },
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <nav className="hidden lg:block sticky top-24">
      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">📑 目录</h4>
      <ul className="space-y-1.5 border-l-2 border-gray-200 dark:border-gray-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-xs py-1 transition-all ${
                item.level === 3 ? 'pl-4' : 'pl-3'
              } ${
                activeId === item.id
                  ? 'text-indigo-600 dark:text-indigo-400 border-l-2 border-indigo-600 dark:border-indigo-400 -ml-[2px] font-medium'
                  : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

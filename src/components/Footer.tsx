import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">🤖 AI创收指南</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              专注于 AI 工具教程与副业赚钱方法，帮助大学生和职场新人用 AI 提升效率、创造收入。
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">快速链接</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                关于本站
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                联系我
              </Link>
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                隐私政策
              </Link>
              <a href="/feed.xml" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                RSS 订阅
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">声明</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              本站部分链接为联盟营销链接。通过链接购买我们可能获得佣金，这不会影响你的购买价格。我们只推荐自己使用过并认可的产品。
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400 dark:text-gray-500">
          © {year} AI创收指南. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

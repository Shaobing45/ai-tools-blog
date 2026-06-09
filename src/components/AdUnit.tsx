export default function AdUnit({
  slot = 'in-content',
}: {
  slot?: 'in-content' | 'sidebar'
}) {
  return (
    <div className={`my-8 ${slot === 'sidebar' ? 'max-w-sm mx-auto' : 'max-w-full'}`}>
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center bg-gray-50/50 dark:bg-gray-800/50">
        <p className="text-xs text-gray-400 mb-1 font-medium tracking-wide uppercase">广告位</p>
        <p className="text-xs text-gray-400">
          {slot === 'in-content' ? '📢 文章内嵌广告 (Google AdSense)' : '📢 侧边栏广告 (Google AdSense)'}
        </p>
        <p className="text-[11px] text-gray-300 mt-2">
          部署后将此区块替换为你的 AdSense 广告代码
        </p>
      </div>
    </div>
  )
}

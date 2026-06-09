import type { AffiliateProduct } from '@/types'

export default function AffiliateCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">🛒</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base">{product.name}</h4>
          {product.price && (
            <span className="inline-block mt-1 text-sm text-amber-700 font-semibold">
              {product.price}
            </span>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{product.description}</p>
          <a
            href={product.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 px-5 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-sm"
          >
            查看详情
            <span className="text-xs opacity-70">→</span>
          </a>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">
        ※ 联盟营销链接：通过此链接购买我们可能获得少量佣金，不会影响你的购买价格。感谢支持！🙏
      </p>
    </div>
  )
}

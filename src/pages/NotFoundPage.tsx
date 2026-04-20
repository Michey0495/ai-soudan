import { Link } from 'react-router-dom'

// 404ページ
export function NotFoundPage() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold text-warm-300 mb-4">404</p>
        <h1 className="text-xl font-semibold text-warm-900 mb-3">
          ページが見つかりません
        </h1>
        <p className="text-sm text-warm-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-warm-900 text-white text-sm rounded-lg hover:bg-warm-800 transition-colors no-underline"
        >
          トップページへ
        </Link>
      </div>
    </div>
  )
}

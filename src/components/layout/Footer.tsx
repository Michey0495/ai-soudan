import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-semibold">AI</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                AIの相談所
              </span>
            </div>
            <p className="text-sm leading-relaxed text-warm-400 max-w-sm">
              札幌発のAI導入支援サービス。
              まずは無料で1時間、AIのプロに相談してみませんか。
              オンライン・対面、どちらでも対応します。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors no-underline text-warm-400">AI導入コンサルティング</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors no-underline text-warm-400">AI研修・トレーニング</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors no-underline text-warm-400">AI開発支援</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors no-underline text-warm-400">ベンダー選定サポート</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#company" className="hover:text-white transition-colors no-underline text-warm-400">会社概要</a></li>
              <li><Link to="/booking" className="hover:text-white transition-colors no-underline text-warm-400">無料相談を予約</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-warm-500">
                〒060-0000 北海道札幌市
              </p>
              <p className="text-xs text-warm-500 mt-1">
                info@ai-soudan.jp
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-500">
            &copy; 2026 AIの相談所. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-warm-500">
            <Link to="/privacy" className="hover:text-warm-300 no-underline">プライバシーポリシー</Link>
            <Link to="/terms" className="hover:text-warm-300 no-underline">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

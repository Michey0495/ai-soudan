import { Link } from 'react-router-dom'

// 利用規約ページ
export function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-warm-900 mb-2">利用規約</h1>
        <p className="text-sm text-warm-500 mb-10">最終更新日: 2026年4月20日</p>

        <div className="space-y-8 text-sm text-warm-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第1条（適用）</h2>
            <p>
              本規約は、EZOAI（以下「当社」）が提供する「AIの相談所」（以下「本サービス」）の
              利用に関する条件を定めるものです。利用者は本規約に同意のうえ、本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第2条（サービス内容）</h2>
            <p>本サービスは、以下の内容を提供します。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>AI導入に関する無料相談（1時間）</li>
              <li>AI導入コンサルティング</li>
              <li>AI研修・トレーニング</li>
              <li>ベンダー選定サポート</li>
            </ul>
            <p className="mt-2">
              サービス内容は予告なく変更する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第3条（利用条件）</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>利用者は正確な情報を提供すること</li>
              <li>相談内容を第三者に無断で公開しないこと</li>
              <li>他の利用者や当社に不利益を与える行為をしないこと</li>
              <li>法令や公序良俗に反する目的で利用しないこと</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第4条（免責事項）</h2>
            <p>
              当社は、本サービスを通じて提供する情報の正確性・完全性を保証するものではありません。
              本サービスの利用により生じた損害について、当社の故意または重大な過失がある場合を除き、
              一切の責任を負いません。
            </p>
            <p className="mt-2">
              無料相談はあくまで助言であり、AI導入の成果を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第5条（知的財産権）</h2>
            <p>
              本サービスに関する知的財産権は、当社または正当な権利者に帰属します。
              利用者は、当社の事前の書面による承諾なく、本サービスで提供される資料・情報を
              複製・転載・再配布することはできません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第6条（規約の変更）</h2>
            <p>
              当社は、必要に応じて本規約を変更することがあります。
              変更後の規約は、当サイトに掲載した時点から効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">第7条（準拠法・管轄裁判所）</h2>
            <p>
              本規約の解釈には日本法を準拠法とします。
              本サービスに関して紛争が生じた場合は、札幌地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <Link to="/" className="text-sm text-warm-600 hover:text-warm-900 transition-colors">
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

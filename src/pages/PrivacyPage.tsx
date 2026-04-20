import { Link } from 'react-router-dom'

// プライバシーポリシーページ
export function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-warm-900 mb-2">プライバシーポリシー</h1>
        <p className="text-sm text-warm-500 mb-10">最終更新日: 2026年4月20日</p>

        <div className="space-y-8 text-sm text-warm-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">1. 事業者情報</h2>
            <ul className="space-y-1">
              <li>事業者名: EZOAI</li>
              <li>代表者: 安田 光喜</li>
              <li>所在地: 北海道札幌市</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">2. 取得する個人情報</h2>
            <p>当サービスでは、以下の個人情報を取得します。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>会社名</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">3. 利用目的</h2>
            <p>取得した個人情報は、以下の目的で利用します。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>相談予約の管理・ご連絡</li>
              <li>サービスの提供・改善</li>
              <li>お知らせ・ご案内の送信</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">4. 第三者提供について</h2>
            <p>
              当サービスでは、ご本人の同意なく個人情報を第三者に提供することはありません。
              ただし、法令に基づく場合を除きます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">5. 個人情報の開示・訂正・削除</h2>
            <p>
              ご本人からの開示・訂正・削除のご請求については、以下のメールアドレスにて受け付けます。
              本人確認のうえ、合理的な期間内に対応いたします。
            </p>
            <p className="mt-2">連絡先: info@ai-soudan.jp</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">6. Cookieの使用について</h2>
            <p>
              当サイトでは、アクセス解析のためGoogle Analyticsを使用しています。
              Google Analyticsはデータ収集のためにCookieを使用します。
              このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-2">
              Cookieを無効にすることで収集を拒否できます。
              お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-warm-900 mb-3">7. ポリシーの改定</h2>
            <p>
              本ポリシーは、必要に応じて随時改定します。
              改定した場合は、当サイト上で通知いたします。
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

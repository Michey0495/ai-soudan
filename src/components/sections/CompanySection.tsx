import { MapPin, Mail, Clock } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function CompanySection() {
  return (
    <section id="company" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="About Us"
          title="会社概要"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-warm-100 p-8">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-warm-100">
                {[
                  ['会社名', 'EZOAI（仮）'],
                  ['代表', '安田 光喜'],
                  ['設立', '2026年'],
                  ['所在地', '北海道札幌市'],
                  ['事業内容', 'AI導入支援、AI研修、AI開発、ベンダー紹介'],
                  ['対応エリア', '全国（オンライン対応）'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-3 pr-6 text-warm-400 font-medium whitespace-nowrap">{label}</td>
                    <td className="py-3 text-warm-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-warm-100 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-navy-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-warm-900">所在地</h4>
                <p className="text-sm text-warm-500 mt-1">
                  北海道札幌市
                  <br />
                  JR札幌駅から徒歩圏内
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-warm-100 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={18} className="text-navy-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-warm-900">お問い合わせ</h4>
                <p className="text-sm text-warm-500 mt-1">
                  info@ai-soudan.jp
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-warm-100 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={18} className="text-navy-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-warm-900">営業時間</h4>
                <p className="text-sm text-warm-500 mt-1">
                  平日 9:00 - 18:00
                  <br />
                  土日祝は事前予約で対応可
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

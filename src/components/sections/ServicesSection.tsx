import { motion } from 'framer-motion'
import { MessageSquare, GraduationCap, Code2, ArrowRightLeft } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const SERVICES = [
  {
    icon: MessageSquare,
    title: 'AI導入コンサルティング',
    description: '業務分析から要件定義、ベンダー選定まで。御社に最適なAI活用戦略を設計します。月次顧問プランで継続的にサポートすることも可能です。',
    features: ['現状業務の分析・可視化', 'AI導入ロードマップ策定', '投資対効果の試算', 'PoC企画・推進支援'],
  },
  {
    icon: GraduationCap,
    title: 'AI研修・トレーニング',
    description: 'ChatGPTの基本操作から、プロンプトエンジニアリング、RAG構築のハンズオンまで。受講者のレベルに合わせたカリキュラムを組みます。',
    features: ['生成AI基礎研修', 'プロンプト設計実践', 'AI駆動開発研修', 'マネジメント層向け講座'],
  },
  {
    icon: Code2,
    title: 'AI開発支援',
    description: 'チャットボット、RAGシステム、業務自動化ツール。企画段階から伴走し、社内で運用できる形で納品します。',
    features: ['社内チャットボット構築', 'RAG/検索システム開発', '業務自動化ツール', 'AIエージェント構築'],
  },
  {
    icon: ArrowRightLeft,
    title: 'ベンダー選定サポート',
    description: 'AIツールやSaaSは星の数ほどあります。御社の要件に合った選択肢を絞り込み、中立の立場で比較・推薦します。',
    features: ['要件整理・RFP作成支援', 'ベンダー候補のリストアップ', '比較検討資料の作成', '導入後の定着フォロー'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="Services"
          title="無料相談から、あらゆるAI課題に応える"
          description="1時間の無料相談で課題を整理。その先は、御社に必要なサポートだけを選んでいただけます。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group bg-white rounded-2xl border border-warm-100 hover:border-navy-200 p-8 transition-all hover:shadow-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-50 group-hover:bg-navy-100 rounded-xl flex items-center justify-center transition-colors shrink-0">
                  <service.icon size={24} className="text-navy-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-warm-500 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-warm-600">
                    <span className="w-1 h-1 bg-navy-400 rounded-full shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

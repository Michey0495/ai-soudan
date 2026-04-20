import { motion } from 'framer-motion'
import { HelpCircle, TrendingUp, Users, Shield } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const PAINS = [
  {
    icon: HelpCircle,
    title: 'AIを導入すべきかわからない',
    description: '話題だから始めるのか、事業に必要だから始めるのか。判断の軸が定まらないまま時間だけが過ぎている。',
  },
  {
    icon: TrendingUp,
    title: '何から手をつけていいかわからない',
    description: 'ChatGPTは触ってみた。でもそこから先、自社の業務にどう組み込めばいいのか、道筋が見えない。',
  },
  {
    icon: Users,
    title: '社内にAI人材がいない',
    description: 'エンジニアはいるがAIの専門知識が足りない。外部に頼るにしても、どこに何を頼めばいいのか。',
  },
  {
    icon: Shield,
    title: 'セキュリティやリスクが不安',
    description: '機密データを扱う業務にAIを入れて大丈夫なのか。ガバナンスやコンプライアンスの整備が追いつかない。',
  },
]

export function PainSection() {
  return (
    <section className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="Challenges"
          title="こんな課題、抱えていませんか"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-warm-100"
            >
              <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                <pain.icon size={20} className="text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold text-warm-900 mb-2">{pain.title}</h3>
              <p className="text-sm text-warm-500 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

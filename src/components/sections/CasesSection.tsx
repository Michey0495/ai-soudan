import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const CASES = [
  {
    industry: '製造業',
    company: '従業員300名 / 北海道',
    challenge: '品質検査の属人化が深刻で、ベテラン退職後の技術継承が課題だった',
    solution: '画像認識AIによる外観検査システムを導入。検査精度を95%以上に向上させ、人的工数を60%削減',
    tags: ['AI開発支援', 'コンサルティング'],
  },
  {
    industry: '不動産',
    company: '従業員50名 / 札幌市',
    challenge: '物件問い合わせの初期対応に時間を取られ、営業が本来の業務に集中できなかった',
    solution: '社内ナレッジを学習したAIチャットボットを構築。問い合わせの70%を自動応答し、営業の商談時間が倍増',
    tags: ['AI開発支援', 'ベンダー選定'],
  },
  {
    industry: '金融',
    company: '従業員1,200名 / 全国',
    challenge: '全社的なAIリテラシーが低く、現場から活用アイデアが出てこなかった',
    solution: '部門別にカスタマイズした研修を3ヶ月で全社展開。受講後、現場発のAI活用提案が月20件に増加',
    tags: ['AI研修', 'コンサルティング'],
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="Case Studies"
          title="導入事例"
          description="業種も規模も異なる企業に、それぞれの最適解を。"
        />

        <div className="space-y-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl border border-warm-100 p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <span className="text-xs font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <p className="text-xs text-warm-400 mt-2">{c.company}</p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs font-medium text-warm-400 uppercase tracking-wide">課題</span>
                    <p className="text-sm text-warm-700 mt-1">{c.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-warm-400 uppercase tracking-wide">成果</span>
                    <p className="text-sm text-warm-900 font-medium mt-1">{c.solution}</p>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-xs text-warm-500 border border-warm-200 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

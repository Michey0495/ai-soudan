import { motion } from 'framer-motion'
import { CalendarCheck, MessageCircle, FileText, Rocket } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const STEPS = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Web予約',
    description: 'カレンダーから空いている日程を選んで、フォームに必要事項を入力。最短翌営業日に相談可能です。',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: '無料相談（1時間）',
    description: 'オンライン or 札幌オフィスで対面。現状の課題をヒアリングし、AI活用の方向性を一緒に整理します。',
  },
  {
    icon: FileText,
    step: '03',
    title: 'ご提案',
    description: '相談内容をもとに、具体的な支援プランと概算費用をご提示。押し売りは一切しません。',
  },
  {
    icon: Rocket,
    step: '04',
    title: '支援開始',
    description: 'ご納得いただけたら契約へ。研修、開発、コンサルティング、ベンダー紹介、必要なものを必要なだけ。',
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="How it works"
          title="相談の流れ"
          description="申し込みから支援開始まで、シンプルな4ステップ。"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-warm-100 h-full">
                <span className="text-3xl font-bold text-navy-100">{step.step}</span>
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mt-4 mb-3">
                  <step.icon size={20} className="text-navy-600" />
                </div>
                <h3 className="text-base font-semibold text-warm-900 mb-2">{step.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{step.description}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-warm-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

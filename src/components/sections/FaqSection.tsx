import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const FAQS = [
  {
    q: '無料相談で売り込みをされることはありますか？',
    a: 'ありません。1時間の無料相談は、御社の課題整理とAI活用の方向性を一緒に考える場です。相談後に提案書をお送りすることはありますが、契約を迫ることは一切しません。合わないと思えば、そこで終わりにしていただいて構いません。',
  },
  {
    q: 'AIの知識がまったくなくても相談できますか？',
    a: 'もちろんです。むしろ「何がわからないかもわからない」という段階こそ、相談の価値が高い。ChatGPTを触ったことがないレベルからでも、御社の業務に合わせた活用方法を具体的にお伝えします。',
  },
  {
    q: 'オンライン相談の場合、どのツールを使いますか？',
    a: 'Google Meet、Zoom、Microsoft Teamsのいずれかで対応します。御社で普段使われているツールに合わせますので、予約フォームの備考欄でご希望をお知らせください。',
  },
  {
    q: '札幌以外でも対面相談は可能ですか？',
    a: '基本はオンラインでの対応となりますが、プロジェクトの規模や内容によっては出張対応も可能です。まずはオンラインで初回相談を行い、その後の支援方法を相談しましょう。',
  },
  {
    q: '費用はどの程度かかりますか？',
    a: '初回1時間の相談は完全無料です。その後の支援は、研修1日あたり30万円〜、月次顧問20万円〜、開発は要件に応じてお見積りとなります。詳細は無料相談の中で御社の状況に合わせてご説明します。',
  },
  {
    q: '相談の予約後にキャンセルや日程変更はできますか？',
    a: '前日までであればメール1本でキャンセル・変更可能です。予約確認メールに変更用のリンクを記載しています。',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-warm-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          tag="FAQ"
          title="よくある質問"
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-warm-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                >
                  <span className="text-sm font-medium text-warm-800">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-warm-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-warm-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

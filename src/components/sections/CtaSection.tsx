import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-navy-700 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-navy-600/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-navy-800/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              まずは1時間、話してみませんか
            </h2>
            <p className="mt-4 text-navy-200 text-lg max-w-lg mx-auto">
              オンラインでも対面でも。
              押し売りはしません。AIの活用方法を一緒に考えましょう。
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 mt-8 text-base font-medium text-navy-700 bg-white hover:bg-navy-50 px-8 py-4 rounded-xl transition-all no-underline"
            >
              無料相談を予約する
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

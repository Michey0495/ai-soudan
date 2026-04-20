import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50/60 to-white pointer-events-none" />

      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-navy-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-sm text-navy-600 bg-navy-50 border border-navy-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-navy-500 rounded-full" />
            無料1時間相談 受付中
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-warm-900 tracking-tight leading-[1.1]">
            AIのことなら、
            <br />
            <span className="text-navy-700">まず相談。</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-warm-500 leading-relaxed max-w-xl">
            導入すべきか判断がつかない。何から始めればいいかわからない。
            そんな企業の声に、AIのプロが1時間じっくり向き合います。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-navy-700 hover:bg-navy-800 px-8 py-4 rounded-xl transition-all hover:shadow-lg no-underline"
            >
              無料相談を予約する
              <ArrowRight size={18} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center text-base font-medium text-warm-700 bg-white border border-warm-200 hover:border-warm-300 px-8 py-4 rounded-xl transition-all no-underline"
            >
              サービスを見る
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-sm text-warm-400">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-warm-800">500+</span>
              <span>相談実績</span>
            </div>
            <div className="w-px h-10 bg-warm-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-warm-800">98%</span>
              <span>満足度</span>
            </div>
            <div className="w-px h-10 bg-warm-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-warm-800">0円</span>
              <span>初回相談</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

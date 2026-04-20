import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface BookingFormProps {
  selectedDate: Date | null
  selectedTime: string | null
}

type ConsultationType = 'online' | 'offline'

export function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState<ConsultationType>('online')
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })

  const isReady = selectedDate && selectedTime && formData.companyName && formData.name && formData.email && !submitting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isReady || !selectedDate) return

    setSubmitting(true)
    setError(null)

    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: dateStr,
          time: selectedTime,
          consultationType,
          ...formData,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || '送信に失敗しました')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '送信に失敗しました。時間をおいて再度お試しください。')
    } finally {
      setSubmitting(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-warm-100 p-8 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-warm-900 mb-2">予約を受け付けました</h3>
        <p className="text-sm text-warm-500 mb-4">
          {selectedDate && `${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日`}
          {selectedTime && ` ${selectedTime}〜`}
          {consultationType === 'online' ? '（オンライン）' : '（対面・札幌オフィス）'}
        </p>
        <p className="text-sm text-warm-400">
          確認メールをお送りしました。
          当日のご案内は前日までにメールでお届けします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-warm-100 p-6 space-y-5">
      <h3 className="text-base font-semibold text-warm-900">お客様情報</h3>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">相談形式</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: 'online' as const, label: 'オンライン' },
            { value: 'offline' as const, label: '対面（札幌）' },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setConsultationType(opt.value)}
              className={`
                py-2.5 rounded-lg text-sm font-medium transition-all border
                ${consultationType === opt.value
                  ? 'bg-navy-700 text-white border-navy-700'
                  : 'text-warm-600 border-warm-200 hover:border-navy-300'
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">
          会社名 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => updateField('companyName', e.target.value)}
          placeholder="株式会社"
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
          required
        />
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="山田 太郎"
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
          required
        />
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="taro@example.com"
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
          required
        />
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">電話番号</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="090-1234-5678"
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">相談したいテーマ</label>
        <select
          value={formData.topic}
          onChange={(e) => updateField('topic', e.target.value)}
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm text-warm-700 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors bg-white"
        >
          <option value="">選択してください</option>
          <option value="introduction">AI導入の検討</option>
          <option value="training">社員向けAI研修</option>
          <option value="development">AIツール・システム開発</option>
          <option value="vendor">ベンダー・ツール選定</option>
          <option value="strategy">AI戦略・ロードマップ策定</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-warm-500 mb-1.5 block">
          補足・ご要望
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          rows={3}
          placeholder="現在の状況や、相談したい内容を自由にお書きください"
          className="w-full px-4 py-2.5 border border-warm-200 rounded-lg text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!isReady}
        className={`
          w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all
          ${isReady
            ? 'bg-navy-700 text-white hover:bg-navy-800 cursor-pointer'
            : 'bg-warm-100 text-warm-400 cursor-not-allowed'
          }
        `}
      >
        <Send size={16} />
        {submitting ? '送信中...' : '無料相談を予約する'}
      </button>

      <p className="text-xs text-warm-400 text-center">
        送信後、確認メールが届きます。日程変更・キャンセルはメールからいつでも可能です。
      </p>
    </form>
  )
}

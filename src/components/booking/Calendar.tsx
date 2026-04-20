import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CalendarProps {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

function getAvailableSlots(date: Date): boolean {
  const day = date.getDay()
  // 土日は事前予約のみ、平日は利用可能
  // 過去日は除外
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (date < today) return false
  // 翌営業日以降のみ
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  if (date < tomorrow) return false
  // 平日のみデフォルト利用可能
  return day >= 1 && day <= 5
}

export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })

  const days = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const result: (Date | null)[] = []
    for (let i = 0; i < firstDay; i++) {
      result.push(null)
    }
    for (let d = 1; d <= daysInMonth; d++) {
      result.push(new Date(year, month, d))
    }
    return result
  }, [currentMonth])

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const formatMonth = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`
  }

  const isSameDay = (a: Date | null, b: Date | null) => {
    if (!a || !b) return false
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
  }

  return (
    <div className="bg-white rounded-2xl border border-warm-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-warm-50 rounded-lg transition-colors"
          aria-label="前月"
        >
          <ChevronLeft size={18} className="text-warm-500" />
        </button>
        <span className="text-base font-semibold text-warm-900">
          {formatMonth(currentMonth)}
        </span>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-warm-50 rounded-lg transition-colors"
          aria-label="翌月"
        >
          <ChevronRight size={18} className="text-warm-500" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((day, i) => (
          <div
            key={day}
            className={`text-center text-xs font-medium py-2 ${
              i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-warm-400'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className="aspect-square" />
          }

          const available = getAvailableSlots(date)
          const selected = isSameDay(date, selectedDate)

          return (
            <button
              key={date.toISOString()}
              onClick={() => available && onSelectDate(date)}
              disabled={!available}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-all
                ${selected
                  ? 'bg-navy-700 text-white'
                  : available
                    ? 'text-warm-800 hover:bg-navy-50 cursor-pointer'
                    : 'text-warm-300 cursor-not-allowed'
                }
              `}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-warm-400">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-navy-700 rounded" />
          選択中
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-warm-50 border border-warm-200 rounded" />
          選択可
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-warm-50 rounded" />
          選択不可
        </div>
      </div>
    </div>
  )
}

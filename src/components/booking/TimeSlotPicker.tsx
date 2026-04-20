interface TimeSlotPickerProps {
  selectedDate: Date | null
  selectedTime: string | null
  onSelectTime: (time: string) => void
}

const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

export function TimeSlotPicker({ selectedDate, selectedTime, onSelectTime }: TimeSlotPickerProps) {
  if (!selectedDate) {
    return (
      <div className="bg-white rounded-2xl border border-warm-100 p-6">
        <h3 className="text-base font-semibold text-warm-900 mb-4">時間帯を選択</h3>
        <p className="text-sm text-warm-400">日付を選択してください</p>
      </div>
    )
  }

  const dateStr = `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日`

  return (
    <div className="bg-white rounded-2xl border border-warm-100 p-6">
      <h3 className="text-base font-semibold text-warm-900 mb-1">時間帯を選択</h3>
      <p className="text-xs text-warm-400 mb-4">{dateStr}の空き状況</p>

      <div className="grid grid-cols-2 gap-2">
        {TIME_SLOTS.map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
            className={`
              py-3 rounded-lg text-sm font-medium transition-all border
              ${selectedTime === time
                ? 'bg-navy-700 text-white border-navy-700'
                : 'text-warm-700 border-warm-200 hover:border-navy-300 hover:bg-navy-50'
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>

      <p className="text-xs text-warm-400 mt-3">
        所要時間: 約60分
      </p>
    </div>
  )
}

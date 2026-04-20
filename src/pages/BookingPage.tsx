import { useState, useEffect } from 'react'
import { Calendar } from '../components/booking/Calendar'
import { TimeSlotPicker } from '../components/booking/TimeSlotPicker'
import { BookingForm } from '../components/booking/BookingForm'
import { Clock, Video, MapPin } from 'lucide-react'

export function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-warm-900 tracking-tight">
            無料相談を予約する
          </h1>
          <p className="mt-4 text-warm-500 text-lg">
            日程と時間を選んで、必要事項を入力してください。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-warm-500">
              <Clock size={16} className="text-navy-500" />
              所要時間 約60分
            </div>
            <div className="flex items-center gap-2 text-sm text-warm-500">
              <Video size={16} className="text-navy-500" />
              オンライン対応
            </div>
            <div className="flex items-center gap-2 text-sm text-warm-500">
              <MapPin size={16} className="text-navy-500" />
              札幌オフィスで対面も可
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={handleSelectDate}
            />
            <TimeSlotPicker
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>

          <div className="lg:col-span-2">
            <BookingForm
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

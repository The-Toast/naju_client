'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import { Events } from 'assets'
import { Left, Right } from 'assets'
import * as S from './styled'

const getEventForDate = (date: dayjs.Dayjs) =>
  Events.filter(event => dayjs(event.date).isSame(date, 'day'))

export default function CalendarUi() {
  const [currentDate, setCurrentDate] = useState(dayjs())
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)

  const eventsForSelectedDate = selectedDate ? getEventForDate(selectedDate) : []

  const handleDateClick = (date: dayjs.Dayjs) => {
    setSelectedDate(prev => (prev?.isSame(date, 'day') ? null : date))
  }

  const startOfMonth = currentDate.startOf('month')
  const endOfMonth = currentDate.endOf('month')
  const startWeekDay = startOfMonth.day()

  const daysInMonth: (dayjs.Dayjs | null)[] = [
    ...Array(startWeekDay).fill(null),
    ...Array(endOfMonth.date()).fill(null).map((_, i) => startOfMonth.date(i + 1)),
  ]

  const weeks = Array.from({ length: Math.ceil(daysInMonth.length / 7) }, (_, i) =>
    daysInMonth.slice(i * 7, i * 7 + 7)
  )

  return (
    <>
      <S.Container>
        <S.Header>
          <S.CurrentMonth>
            <S.MonthLabel>{currentDate.format('YYYY년 M월')}</S.MonthLabel>
          </S.CurrentMonth>
          <S.Controls>
            <S.Icon onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}>
              <Left />
            </S.Icon>
            <S.Icon onClick={() => setCurrentDate(currentDate.add(1, 'month'))}>
              <Right />
            </S.Icon>
          </S.Controls>
        </S.Header>

        <S.Row>
          {['일', '월', '화', '수', '목', '금', '토'].map(day => (
            <S.Cell key={day}>{day}</S.Cell>
          ))}
        </S.Row>

        <S.Dates>
          {weeks.map((week, weekIdx) => (
            <S.Row key={weekIdx}>
              {week.map((day, dayIdx) => {
                const isToday = day?.isSame(dayjs(), 'day') ?? false
                const isSelected = day?.isSame(selectedDate, 'day') ?? false
                const hasEvent = day ? getEventForDate(day).length > 0 : false

                return (
                  <S.Day
                    key={dayIdx}
                    isToday={isToday}
                    isSelected={isSelected}
                    weekDay={dayIdx}
                    hasEvent={hasEvent}
                    onClick={() => day && handleDateClick(day)}
                  >
                    {day && (
                      <>
                        <span>{day.date()}</span>
                        {hasEvent && <S.Dot />}
                      </>
                    )}
                  </S.Day>
                )
              })}
            </S.Row>
          ))}
        </S.Dates>
      </S.Container>

      {selectedDate && eventsForSelectedDate.length > 0 && (
        <S.Events>
          <S.DateLabel>{selectedDate.format('YYYY.MM.DD')}</S.DateLabel>
          {eventsForSelectedDate.map((event, idx) => (
            <S.EventTitle key={idx}>{event.title}</S.EventTitle>
          ))}
        </S.Events>
      )}
    </>
  )
}
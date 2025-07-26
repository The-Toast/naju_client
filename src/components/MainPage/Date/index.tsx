'use client'

import { Events } from 'assets'
import { parseISO, isWithinInterval, format } from 'date-fns'
import { getCurrentWeekRange } from 'utils'

export default function Date() {
  const { start, end } = getCurrentWeekRange()

  const weeklyEvents = Events.filter(event => {
    const eventDate = parseISO(event.date)
    return isWithinInterval(eventDate, { start, end })
  })
  return (
    <Content>
      {weeklyEvents.length === 0 ? (
        <Text>이번 주 일정이 없어요.</Text>
      ) : (
        weeklyEvents.map((event, i) => (
          <Event key={i}>
            <Day>{format(parseISO(event.date), 'dd')}</Day>
            <Text>
              <strong>{event.title}</strong>
            </Text>
          </Event>
        ))
      )}
    </Content>
  )
}

import styled from '@emotion/styled'

export const Content = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export const Event = styled.div`
  // Layout
  display: flex;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`

export const Day = styled.div`
  // Layout
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  
  // Style
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.Black[40]};
  background: ${({ theme }) => theme.Background.BG2};
`

export const Text = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 146.667% */
  letter-spacing: -0.02344rem;
`
import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const Header = styled.div`
  // Layout
  display: flex;
  height: 2.625rem;
  align-items: center;
  align-self: stretch;
  align-content: center;
  padding-bottom: 0.5rem;
`

export const CurrentMonth = styled.div`
  // Layout
  display: flex;
  width: 100%;
  align-items: center;
  align-self: stretch;
`

export const MonthLabel = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
`

export const Controls = styled.div`
  // Layout
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex: 1 0 0;
`

export const Row = styled.div`
  // Layout
  display: grid;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
`

export const Cell = styled.div`
  // Layout
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  min-height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  // Typography
  color: ${({ theme }) => theme.Black[40]};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.02188rem;
`

export const Dates = styled.div`
  // Layout
  display: flex;
  padding-top: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`

export const Day = styled.div<{ isToday?: boolean; isSelected?: boolean; weekDay?: number; hasEvent?: boolean }>`
  // Layout
  display: flex;
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  min-height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 6.25rem;
  overflow: visible;
  
  // Style
  background: ${({ isSelected, isToday }) =>
      isSelected ? '#0075FF' : isToday ? 'transparent' : 'transparent'};
  border: ${({ isToday, theme }) =>
      isToday ? `1.5px solid ${theme.Black[100]}` : 'none'};
  color: ${({ isSelected, isToday, weekDay, theme }) => {
      if (isSelected) return 'white'
      if (isToday && weekDay === 0) return '#FF3B30'
      if (isToday && weekDay === 6) return '#007AFF'
      if (weekDay === 0) return '#FF3B30'
      if (weekDay === 6) return '#007AFF'
      if (isToday) return theme.Black[100]
      return theme.Black[100]
  }};


  // Typography
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.02188rem;
`

export const Dot = styled.div`
  // Layout
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  align-items: flex-start;
  gap: 0.625rem;
  
  // Position
  position: absolute;
  right: 0.125rem;
  top: 0.125rem;
  
  // Style
  border-radius: 6.25rem;
  background: #0025AB;
`

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`

export const EventTitle = styled.div`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 144.444% */
`

export const DateLabel = styled.div`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 146.667% */
  letter-spacing: -0.02344rem;
`
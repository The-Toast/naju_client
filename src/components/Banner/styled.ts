import styled from '@emotion/styled'

export const Container = styled.div<{ image: string; }>`
  // Layout
  display: flex;
  width: 100%;
  height: 11.25rem;
  
  // Style
  border-radius: 1rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${( props ) => props.image})lightgray 50% / cover no-repeat;
`

export const Content = styled.div`
  // Layout
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`

export const TextContent = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  flex: 1 0 0;
  align-self: stretch;
`

export const Title = styled.p`
  // Layout
  color: #FFF;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.03125rem;
`

export const Description = styled.p`
  // Layout
  color: #FFF;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 138.462% */
  letter-spacing: -0.02031rem;
`

export const DotContent = styled.div`
  // Layout
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Dot = styled.div<{ active: boolean }>`
  // Layout
  width: ${({ active }) => (active ? '2rem' : '0.5rem')};
  height: 0.5rem;
  
  // Style
  border-radius: 5rem;
  background: ${({ active }) =>
  active ? '#FFF' : '#9E9E9E'}
`
'use client'

// Layout
import Header from 'components/Header'

interface Stamp {
  id: string
  name: string
  location: string
  description: string
}

const categoryLabels: Record<string, string> = {
  history: '나주시의 역사',
  food: '전통시장과 상점 탐방',
  museum: '전시관과 박물관 체험',
  nature: '자연과 공원에서 힐링'
}

export default function CategoryPage(
  { category, stamps }: {
  category: string
  stamps: Stamp[]
}) {
  const title = categoryLabels[category] ?? category

  return (
    <>
      <Header>
        {title}
      </Header>
      <Container>
        <Content>
          <Section>
            {stamps.length === 0 ? (
              <Title>여기에 스탬프가 생길 예정이에요!</Title>
            ) : (
              <>
                {stamps.map((stamp) => (
                  <Item key={stamp.id}>
                    <Title>{stamp.name}</Title>
                    <Text>{stamp.location}</Text>
                    <Detail>{stamp.description}</Detail>
                  </Item>
                ))}
              </>
            )}
          </Section>
        </Content>
      </Container>
    </>
  )
}

import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  width: 100vw;
  height: 100%;
  padding-top: 4.5rem;
  padding-bottom: 72px;

  // Style
  background: ${({ theme }) => theme.Background.BG1};
`

export const Content = styled.div`
  // Layout
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`

export const Section = styled.section`
  // Layout
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`

export const Item = styled.div`
  // Layout
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;

  // Style
  border-radius: 1rem;
  background: ${({ theme }) => theme.Black[4]};
`

export const Title = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.03125rem;
`

export const Text = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.02188rem;
`

export const Detail = styled.p`
  // Layout
  width: 80%;
  
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.01875rem;
`
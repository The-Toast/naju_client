'use client'

import Link from 'next/link'

// Layout
import Header from 'components/Header'
import Navigation from 'components/Navigation'

const categories = [
  {
    id: 'history',
    label: '나주시의 전통과 역사를 따라가기',
    description: '금성관, 나주향교, 독립운동 기념관 등 나주를 대표하는 유적지를 방문하며 조선시대부터 근현대까지의 역사를 체험할 수 있어요.'
  },
  {
    id: 'food',
    label: '나주의 전통시장과 상점가를 탐방하기',
    description: '중앙시장, 골목 상점, 로컬 맛집 등에서 나주 사람들의 일상을 직접 느껴보세요. 따뜻한 인심과 정겨운 분위기가 가득해요.'
  },
  {
    id: 'museum',
    label: '전시관과 박물관에서 나주를 알아가기',
    description: '국립나주박물관, 농업박물관 등에서 나주의 문화와 역사, 다양한 테마 전시를 관람하며 깊이 있는 시간을 보낼 수 있어요.'
  },
  {
    id: 'nature',
    label: '자연과 공원 속에서 나주를 느끼기',
    description: '영산강, 공원 산책로, 정원과 생태공원 등에서 자연과 함께하는 힐링 타임! 사진 찍기 좋은 포토존도 가득해요.'
  }
]

export default function StampPage() {
  return (
    <>
      <Header>
        스탬프
      </Header>
      <Navigation />
      <Container>
        <Content>
          <Section>
            {categories.map(({ id, label, description }) => (
              <Item key={id} href={`/stamp/${id}`}>
                <Title>{label}</Title>
                <Detail>{description}</Detail>
              </Item>
            ))}
          </Section>
        </Content>
        {/*<Title>스탬프 카테고리</Title>
      <List>
        {categories.map(({ id, label }) => (
          <Link key={id} href={`/stamp/${id}`}>
            <Button>{label}</Button>
          </Link>
        ))}
      </List>*/}
      </Container>
    </>
  )
}

import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  width: 100vw;
  height: 100dvh;
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

export const Item = styled(Link)`
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
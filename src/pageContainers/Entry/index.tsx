'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from 'uikit/Button'

const pages = [
  {
    icon: '3D/Calendar.png',
    text: '나주의 모든 일정을 한눈에!',
    id: "처음",
  },
  {
    icon: '3D/Map.png',
    text: '나주의 맛집, 여기 다 있어요!',
    id: "중간",
  },
  {
    icon: '3D/Location.png',
    text: '스탬프 찍고, 추억을 남겨요!',
    id: "끝",
  }
]

export default function EntryPage() {
  const [page, setPage] = useState(0)
  const isLast = page === pages.length - 1

  const router = useRouter()

  const handleClick = () => {
    if (isLast) {
      router.push('/auth/login')
    } else {
      setPage(page + 1)
    }
  }

  return (
    <Container>
      <Content>
        <CenterContent>
          <Icon>
            <Image src={pages[page].icon} alt={pages[page].id}/>
          </Icon>
          <Text>
            {pages[page].text}
          </Text>
        </CenterContent>
        <BottomContent>
          <PageControl>
            {pages.map((_, i) => (
              <Dot key={i} active={i === page} />
            ))}
          </PageControl>
          <Button onClick={handleClick} size={'100%'}>
            {isLast ? '시작하기' : '계속하기'}
          </Button>
        </BottomContent>
      </Content>
    </Container>
  )
}

import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  width: 100vw;
  height: 100dvh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

export const Content = styled.div`
  // Layout
  display: flex;
  padding: 0 1.125rem 1.125rem 1.125rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`

export const CenterContent = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
`

export const Icon = styled.div`
  // Layout
  display: flex;
  width: 9.375rem;
  height: 9.375rem;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
`

export const Image = styled.img`
  width: 9.375rem;
  height: 9.375rem;
`

export const Text = styled.div`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.375rem; /* 135.714% */
  letter-spacing: -0.04375rem;
`

export const BottomContent = styled.div`
  // Layout
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const PageControl = styled.div`
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
  background: ${({ theme, active }) =>
      active ? '#0075FF' : theme.Black[10]};
`
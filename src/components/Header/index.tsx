'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

import { ArrowLeftIcon } from '@phosphor-icons/react'

export default function Header(
  { children }: { children: ReactNode }
) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <Container>
      <HeaderInner>
        <IconContent onClick={handleBack}>
          <ArrowLeftIcon size={28} />
        </IconContent>
        <Title>{children}</Title>
      </HeaderInner>
    </Container>
  )
}

import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.5rem;
  align-items: center;
  flex-shrink: 0;

  // Style
  border-bottom: 1px solid ${({ theme }) => theme.Black[4]};
  background: ${({ theme }) => theme.White[100]};
`

export const HeaderInner = styled.div`
  // Layout
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 1.25rem;
  align-items: center;
  justify-content: center;
`

export const IconContent = styled.div`
  // Layout
  display: flex;
  position: absolute;
  left: 0;
  padding-left: 1.25rem;
`

export const Title = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.03125rem;
`
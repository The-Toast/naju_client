'use client'

import { NajuLarge } from 'assets'

export default function LoadingPage() {
  return (
    <Container>
      <Content>
        <NajuLarge />
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
  gap: 0.625rem;
  flex-shrink: 0;
`

export const Content = styled.div``
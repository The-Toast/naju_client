'use client'

import { CaretRightIcon } from '@phosphor-icons/react'

export default function MoreBtn() {
  return (
    <Content>
      <Text>자세히 보기</Text>
      <CaretRightIcon size="16" />
    </Content>
  )
}

import styled from '@emotion/styled'

export const Content = styled.div`
  // Layout
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  // Style
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.Black[10]};
`

export const Text = styled.p`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.02188rem;
`
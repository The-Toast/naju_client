'use client'

import { ReactNode } from 'react'

export default function Title(
  { children }: { children: ReactNode }
) {
  return <StyledTitle>{children}</StyledTitle>
}

import styled from '@emotion/styled'

export const StyledTitle = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.03125rem;
`
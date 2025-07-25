'use client'

interface StampProps {
  StampNumber: number;
}

export default function Stamp(
  { StampNumber }: StampProps
) {
  return <Text>지금까지 모은 스탬프는 총 <strong>{StampNumber}개</strong>에요!</Text>
}

import styled from '@emotion/styled'

export const Text = styled.p`
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.03125rem;
  
  strong {
    color: #0075C2;
  }
`
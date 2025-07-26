'use client'

import { useEffect, useState } from 'react'

export default function Stamp() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    fetch('/api/stamp?me=true')
      .then(res => res.json())
      .then(data => {
        if (typeof data.count === 'number') setCount(data.count)
      })
      .catch(err => console.error('카운트 불러오기 실패:', err))
  }, [])
  return <Text>지금까지 모은 스탬프는 총 <strong>{count}개</strong>에요!</Text>
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
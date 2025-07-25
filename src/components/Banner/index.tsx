'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Banner from './Banner'

const banners = [
  {
    title: '나주의 모든 일정을 한눈에!',
    description: '지역 축제부터 전시회까지, 빠짐없이 확인하세요.',
    image: '/images/banner1.jpg',
  },
  {
    title: '나주의 맛집, 여기 다 있어요!',
    description: 'SNS에서 핫한 식당들을 한 자리에 모았어요.',
    image: '/images/banner2.jpg',
  },
  {
    title: '스탬프 찍고 추억을 남겨요!',
    description: '역사 명소를 방문하고 스탬프를 모아보세요.',
    image: '/images/banner3.jpg',
  }
]

export default function BannerSlider() {
  const [current, setCurrent] = useState(0)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const delta = touchStartX.current - touchEndX.current
      const threshold = 50 // 최소 스와이프 거리

      if (delta > threshold) {
        // 왼쪽으로 넘김 → 다음 배너
        setCurrent(prev => (prev + 1) % banners.length)
      } else if (delta < -threshold) {
        // 오른쪽으로 넘김 → 이전 배너
        setCurrent(prev =>
          prev === 0 ? banners.length - 1 : prev - 1
        )
      }
    }

    // 초기화
    touchStartX.current = null
    touchEndX.current = null
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length)
    }, 50000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Banner
        Title={banners[current].title}
        Description={banners[current].description}
        Image={banners[current].image}
        Number={current}
        Total={banners.length}
      />
    </Wrapper>
  )
}

import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
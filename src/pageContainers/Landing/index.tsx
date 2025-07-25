'use client'

import { useEffect, useState } from 'react'

import LoadingPage from 'pageContainers/Loading'

// Layout
import Header from 'components/MainPage/Header'
import Navigation from 'components/Navigation'
import Camera from 'components/MainPage/Camera'

// Common
import Title from 'components/MainPage/Title'

// First Section
import Stamp from 'components/MainPage/Stamp'
import Banner from 'components/Banner'

//Second Section
import Date from 'components/MainPage/Date'
import MoreBtn from 'components/MainPage/MoreBtn'

interface User {
  nickname: string
  profileImage: string
}

export default function Landing() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('유저 정보 불러오기 실패:', err))
  }, [])

  if (!user) return <LoadingPage />

  return (
    <>
      <Navigation />
      <Camera />
      <Container>
        <Content>
          <Section>
            <TopContent>
              <Header UserName={user.nickname} ProfileImage={user.profileImage} />
              <Stamp StampNumber={10}/>
            </TopContent>
            <Banner />
          </Section>
          <SectionLine />
          <Section>
            <Title>이번주 일정이에요</Title>
            <Date />
            <AlignCenter>
              <MoreBtn />
            </AlignCenter>
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
  height: 100dvh;
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

export const AlignCenter = styled.div`
  // Layout
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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

export const TopContent = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

export const SectionLine = styled.div`
  // Layout
  display: flex;
  height: 0.625rem;
  align-self: stretch;
  
  // Style
  background: ${({ theme }) => theme.Black[4]};
`
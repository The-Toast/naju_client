'use client'

import { NajuSmall } from 'assets'

import LoginButton from 'components/LoginButton'

import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <Container>
      <Content>
        <LogoContent>
          <NajuSmall />
          <TextContent>
            <Title>
              지금 <strong>다시시작</strong>
            </Title>
            <Text>
              <strong>영산강</strong>의 새로운 이야기
            </Text>
          </TextContent>
        </LogoContent>
        <LoginButton onClick={() => signIn('kakao', { callbackUrl: '/' })} />
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
`

export const Content = styled.div`
  // Layout
  display: flex;
  padding: 1.125rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
`

export const LogoContent = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const TextContent = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`

export const Title = styled.p`
  // Typography
  color: ${({ theme }) => theme.Black[100]};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem; /* 131.25% */
  letter-spacing: -0.05rem;
  
  // Strong, Typography
  strong {
    color: #2DBAAF;
  }
`

export const Text = styled.p`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.125rem;
  letter-spacing: -0.0375rem;
  
  // Strong, Typography
  strong {
    color: #DBB400;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.125rem; /* 141.667% */
    letter-spacing: -0.0375rem;
  }
`
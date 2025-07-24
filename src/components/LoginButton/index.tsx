'use client'

interface LoginButtonProps {
  onClick: () => void;
}

import { KakaoLogo } from 'assets'

export default function LoginButton() {
  return (
    <Container>
      <LogoContent>
        <KakaoLogo />
      </LogoContent>
      <Text>카카오로 계속하기</Text>
    </StyledButton>
  )
}

import styled from '@emotion/styled'

export const StyledButton = styled.button`
  // Layout
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  // Style
  border-radius: 0.75rem;
  background: #FEE500;

  // Active, Style
  &:active {
    background: #D6C23E;
  }
`

export const LogoContent = styled.div`
  // Layout
  display: flex;
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  
  // Style
  background: initial;
  
  svg {
    background: initial;
  }
`

export const Text = styled.div`
  color: ${({ theme }) => theme.Brand};
  text-align: center;

  /* Button/BUT1_Sb */
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
  
  // Style
  background: initial;
`
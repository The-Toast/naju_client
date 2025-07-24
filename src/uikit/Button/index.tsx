'use client'

import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  color?: string
  bg?: string
  size?: string | '100%';
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export default function StyledButton(
  {  color = '#FFF', bg = '0075FF', size = '22.625rem', children, onClick }: ButtonProps
) {
  return (
    <Button color={color} bg={bg} size={size} onClick={onClick} >
      <BtnText>
        {children}
      </BtnText>
    </Button>
  )
}

import styled from '@emotion/styled'

export const Button = styled.button<{ color: string; bg: string; size: string }>`
  // Layout
  display: flex;
  width: ${props => props.size};
  height: 3.75rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.75rem;
  background: #${props => props.bg};
  color: #${props => props.color};
`

export const BtnText = styled.p`
  // Layout
  color: #FFF;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
`
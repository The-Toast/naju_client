'use client'

interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
}

export default function StyledInput(
  { placeholder, type }: InputProps
) {
  return (
    <Input placeholder={placeholder} type={type} />
  )
}

import styled from '@emotion/styled'

export const Input = styled.input`
  // Layout
  display: flex;
  width: 22.625rem;
  height: 3.75rem;
  padding: 0rem 1.25rem;
  align-items: center;
  
  // Style
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.Black[10]};
  background: ${({ theme }) => theme.Black[4]};
  
  // Typography
  color: ${({ theme }) => theme.Black[100]};

  /* MO/Body/KR/B1_KR_Rg */
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 146.667% */
  letter-spacing: -0.02344rem;
  
  // Placeholder, Typography
  &::placeholder {
    color: ${({ theme }) => theme.Black[20]};

    /* MO/Body/KR/B1_KR_Rg */
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem; /* 146.667% */
    letter-spacing: -0.02344rem;
  }
`
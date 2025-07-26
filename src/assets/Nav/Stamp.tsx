'use client'

import { useTheme } from '@emotion/react'

export function Stamp() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M21 13.9999C21 11.6666 23.3333 10.4999 24.5 10.4999V5.83325H3.5V10.4999C4.66667 10.4999 7 11.6666 7 13.9999C7 16.3333 4.66667 17.4999 3.5 17.4999V22.1666H24.5V17.4999C23.3333 17.4999 21 16.3333 21 13.9999Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}
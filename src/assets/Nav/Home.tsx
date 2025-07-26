'use client'

import { useTheme } from '@emotion/react'

export function Home() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M4.86667 10.6061L14.2 4.66675L23.5333 10.6061V23.3334H4.86667V10.6061Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8667 16.3333H16.5333" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
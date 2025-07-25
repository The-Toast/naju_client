'use client'

import { useTheme } from '@emotion/react'

export function Calendar() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M23.9333 8.16675H5.26667V23.3334H23.9333V8.16675Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.9333 8.16675H5.26667V14.0001H23.9333V8.16675Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.76667 4.66675V8.16675" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4333 4.66675V8.16675" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
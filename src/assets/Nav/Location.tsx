'use client'

import { useTheme } from '@emotion/react'

export function Location() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <path d="M14.4 23.3334C17.9 19.6001 21.4 16.2571 21.4 12.1334C21.4 8.00969 18.266 4.66675 14.4 4.66675C10.534 4.66675 7.40002 8.00969 7.40002 12.1334C7.40002 16.2571 10.9 19.6001 14.4 23.3334Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14.4" cy="11.6666" r="2.33333" fill={theme.Black[100]} />
    </svg>
  )
}
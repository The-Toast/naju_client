'use client'

import { useTheme } from '@emotion/react'

export function My() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
      <ellipse cx="14.8" cy="8.16675" rx="3.5" ry="3.5" stroke={theme.Black[100]} strokeWidth="1.5"/>
      <path d="M5.46671 20.3333C5.46671 18.1241 7.25757 16.3333 9.46671 16.3333H20.1334C22.3425 16.3333 24.1334 18.1241 24.1334 20.3333V23.3333H5.46671V20.3333Z" stroke={theme.Black[100]} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}
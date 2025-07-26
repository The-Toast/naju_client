'use client'

import { useTheme } from '@emotion/react'

export function Down() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 9.5L12 14.5L17 9.5H7Z" fill={theme.Black[100]} fillOpacity="0.8"/>
    </svg>
  )
}
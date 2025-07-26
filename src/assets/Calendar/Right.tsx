'use client'

import { useTheme } from '@emotion/react'

export function Right() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M9.70498 6.5L8.29498 7.91L12.875 12.5L8.29498 17.09L9.70498 18.5L15.705 12.5L9.70498 6.5Z" fill={theme.Black[100]} fillOpacity="0.8"/>
    </svg>
  )
}
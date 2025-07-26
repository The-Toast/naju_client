'use client'

import { useTheme } from '@emotion/react'

export function Left() {
  const theme = useTheme()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M15.705 7.91L14.295 6.5L8.29498 12.5L14.295 18.5L15.705 17.09L11.125 12.5L15.705 7.91Z" fill={theme.Black[100]} fillOpacity="0.8"/>
    </svg>
  )
}
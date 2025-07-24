'use client'

import { ReactNode } from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'
import { useEmotionCache } from 'hooks'
import { useThemeSetup } from 'hooks'
import { GlobalStyle } from 'styles'

export default function Providers({ children }: { children: ReactNode }) {
  const cache = useEmotionCache()
  const { theme, isMounted } = useThemeSetup()

  if (!isMounted) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>
      </CacheProvider>
    )
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <GlobalStyle />
          {children}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
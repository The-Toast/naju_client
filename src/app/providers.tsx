'use client'

import { ReactNode } from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { GlobalStyle, LightTheme, DarkTheme } from 'styles'

import { useDarkStore } from 'stores'

const emotionCache = createCache({ key: 'css', prepend: true })

export default function Providers(
  {children}: {children: ReactNode}
) {
  const { isDark } = useDarkStore()
  return (
    <ThemeProvider theme={ isDark ? DarkTheme : LightTheme }>
      <CacheProvider value={emotionCache}>
        <GlobalStyle />
        {children}
      </CacheProvider>
    </ThemeProvider>
  )
}
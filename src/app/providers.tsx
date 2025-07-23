'use client'

import { ReactNode } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { GlobalStyle } from 'styles'

const emotionCache = createCache({ key: 'css', prepend: true })

export default function Providers(
  {children}: {children: ReactNode}
) {
  return (
    <CacheProvider value={emotionCache}>
      <GlobalStyle />
      {children}
    </CacheProvider>
  )
}
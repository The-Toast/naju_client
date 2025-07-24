import { ReactNode } from 'react'

import Provider from './providers'

import { cache } from '@emotion/css';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
}

export default function RootLayout(
  { children }: { children: ReactNode }
) {
  return (
    <html lang={'ko'}>
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style
          data-emotion-css={cache.inserted._global}
          dangerouslySetInnerHTML={{
            __html: Object.values(cache.inserted)
              .map((style) => style)
              .join('\n'),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}


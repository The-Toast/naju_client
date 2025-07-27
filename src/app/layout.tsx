export const viewport = {
  themeColor: '#fff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: 'no',
}

import { ReactNode } from 'react'

import Provider from './providers'

import { cache } from '@emotion/css';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '나주시',
  description: '나주의 모든 정보를 손안에!',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/192.png',
    apple: '/icons/192.png',
  },
}

export default function RootLayout(
  { children }: { children: ReactNode }
) {
  return (
    <html lang={'ko'}>
      <head>
        <title>나주시</title>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/192.png" />
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


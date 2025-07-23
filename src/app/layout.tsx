import { ReactNode } from 'react'

import Provider from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
}

export default function RootLayout(
  { children }: { children: ReactNode }
) {
  return (
    <html lang={'ko'}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
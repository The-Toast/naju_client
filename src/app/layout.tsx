import { ReactNode } from 'react'

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
      {children}
      </body>
    </html>
  )
}
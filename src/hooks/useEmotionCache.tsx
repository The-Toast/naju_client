import { useState } from 'react'
import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import { useServerInsertedHTML } from 'next/navigation'

export function useEmotionCache() {
  const [cache] = useState(() => {
    const c = createCache({ key: 'css', prepend: true })
    c.compat = true
    return c
  })

  const { extractCriticalToChunks } = createEmotionServer(cache)
  useServerInsertedHTML(() => {
    const chunks = extractCriticalToChunks('')
    return chunks.styles.map(style => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  })

  return cache
}
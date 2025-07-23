'use client'

import { Global, css } from '@emotion/react'

export const Styled = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  body,
  html, * {
    font-family:
        Pretendard,
        -apple-system,
        system-ui,
        sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: background-color 0.3s;
  }
`

export function GlobalStyle() {
  return <Global styles={Styled} />
}
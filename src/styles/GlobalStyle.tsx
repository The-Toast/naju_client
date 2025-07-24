'use client'

import { Global, css } from '@emotion/react'

export const Styled = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, svg {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    font: inherit;
    vertical-align: baseline;
    overflow: hidden;
  }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button,
  input,
  textarea,
  select {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    outline: none;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  textarea {
    resize: none;
  }
  
  body,
  html, * {
    font-family:
        Pretendard,
        -apple-system,
        system-ui,
        sans-serif;
    transition: background-color 0.3s;
  }
  
  body,
  html, * {
    -ms-content-zooming: none;
    -ms-touch-action: pan-x pan-y;
    touch-action: manipulation;
  }
  
  p {
    // Typography
    color: inherit;

    /* MO/Body/KR/B1_KR_Rg */
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem; /* 146.667% */
    letter-spacing: -0.02344rem;
  }
`

export function GlobalStyle() {
  return <Global styles={Styled} />
}
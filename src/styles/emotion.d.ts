import '@emotion/react'
import { LightTheme } from 'styles'

type DefaultTheme = typeof LightTheme

declare module '@emotion/react' {
  interface LightTheme extends DefaultTheme {}
}
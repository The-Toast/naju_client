import '@emotion/react'
import { LightTheme } from 'styles'

type DefaultTheme = typeof LightTheme

declare module '@emotion/react' {
  interface Theme extends DefaultTheme {}
}
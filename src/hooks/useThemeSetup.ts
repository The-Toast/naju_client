import { useState, useEffect } from 'react'
import { LightTheme, DarkTheme } from 'styles'
import { useDarkStore } from 'stores'

export function useThemeSetup() {
  const [isMounted, setIsMounted] = useState(false)
  const { isDark } = useDarkStore()
  const theme = isDark ? DarkTheme : LightTheme

  useEffect(() => setIsMounted(true), [])

  return { theme, isMounted }
}
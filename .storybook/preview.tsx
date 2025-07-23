import type { Preview } from '@storybook/nextjs-vite'
import { ThemeProvider, Global, css } from '@emotion/react'
import { GlobalStyle, LightTheme, DarkTheme } from 'styles'

export const globalTypes = {
  darkMode: {
    name: 'Dark Mode',
    description: 'Enable dark mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.darkMode === 'dark'
      const theme = isDark ? DarkTheme : LightTheme

      return (
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              html, body {
                background: ${theme.Background.BG1};
                transition: background 0.3s;
              }
            `}
          />
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      )
    },
  ],
}

export default preview
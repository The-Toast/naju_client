import { StorybookConfig } from '@storybook/nextjs-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src'),
      },
    }
    return config
  },
}

export default config
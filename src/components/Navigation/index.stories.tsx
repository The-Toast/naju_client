import Navigation from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as Meta<typeof Navigation>

type Story = StoryObj<typeof Navigation>

export const Primary: Story = {}
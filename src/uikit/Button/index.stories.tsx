import StyledButton from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

export default {
  title: 'Uikit/Button',
  component: StyledButton,
} as Meta<typeof StyledButton>

type Story = StoryObj<typeof StyledButton>

export const Primary: Story = {}
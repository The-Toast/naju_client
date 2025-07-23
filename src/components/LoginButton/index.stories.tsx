import LoginButton from '.'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
} as Meta<typeof LoginButton>

type Story = StoryObj<typeof LoginButton>

export const Primary: Story = {}
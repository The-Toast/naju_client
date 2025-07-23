import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import LoginButton from './index' // 실제 컴포넌트 경로에 맞게 조정하세요

const meta: Meta<typeof LoginButton> = {
  title: 'Components/LoginButton',
  component: LoginButton,
  tags: ['autodocs'], // Docs 자동 생성용
}
export default meta

type Story = StoryObj<typeof LoginButton>

export const Default: Story = {}
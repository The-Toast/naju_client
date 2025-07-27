'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import {
  Home,
  Calendar,
  Stamp,
  My
} from 'assets'

const navItems = [
  { icon: <Home />, label: '홈', href: '/' },
  { icon: <Calendar />, label: '캘린더', href: '/calendar' },
  { icon: <Stamp />, label: '스탬프', href: '/stamp' },
  { icon: <My />, label: '마이', href: '/profile' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Content>
      {navItems.map((item, index) => {
        const isActive = pathname === item.href

        return (
          <Item active={isActive} key={index}>
            <Link href={item.href}>
              {item.icon}
              <Text>{item.label}</Text>
            </Link>
          </Item>
        )
      })}
    </Content>
  )
}

import styled from '@emotion/styled'

export const Content = styled.div`
  // Layout
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 3.625rem;
  align-items: center;
  flex-shrink: 0;
  
  // Style
  border-top: 1px solid ${({ theme }) => theme.Black[4]};
  background: ${({ theme }) => theme.White[100]};
`

export const Item = styled.div<{ active: boolean }>`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  
  // Style
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`

export const Text = styled.p`
  color: ${({ theme }) => theme.Black[100]};
  text-align: center;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 145.455% */
  letter-spacing: -0.01719rem;
`
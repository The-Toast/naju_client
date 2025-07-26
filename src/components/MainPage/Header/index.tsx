'use client'

interface HeaderProps {
  UserName: string;
  ProfileImage: string;
}

export default function Header(
  { UserName, ProfileImage }: HeaderProps
) {
  return (
    <Content>
      <Profile
        src={ProfileImage || ''}
      />
      <Name>
        {UserName || 'Undefined'}
      </Name>
    </Content>
  )
}

import styled from '@emotion/styled'

export const Content = styled.div`
  // Layout
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const Profile = styled.img`
  // Layout
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1/1;
  
  // Style
  border-radius: 5rem;
`

export const Name = styled.p`
  // Layout
  color: ${({ theme }) => theme.Black[100]};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.125rem; /* 141.667% */
  letter-spacing: -0.0375rem;
`
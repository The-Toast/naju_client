'use client'

// Layout
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import StyledButton from 'uikit/Button'

export default function Profile() {
  const [nickname, setNickname] = useState('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(data => {
        setNickname(data.nickname || '이름 없음')
        setProfileImage(data.profileImage || null)
      })
      .catch(() => {
        setNickname('이름 없음')
        setProfileImage(null)
      })
  }, [])

  return (
    <>
      <Header>
        MY 페이지
      </Header>
      <Navigation />
      <Container>
        <Content>
          <Section>
            <UserHeader>
              {profileImage && <ProfileImage src={profileImage} alt="프로필 이미지" />}
              <UserInfo>
                <Nickname>{nickname}</Nickname>
                {editing ? (
                  <>
                    <EditInput
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                <SaveButton
                  onClick={async () => {
                    const res = await fetch('/api/user/update-nickname', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ nickname }),
                    })
                    if (res.ok) {
                      const meRes = await fetch('/api/me')
                      if (meRes.ok) {
                        const me = await meRes.json()
                        setNickname(me.nickname || '이름 없음')
                      }
                      setEditing(false)
                    }
                  }}
                >
                  저장
                </SaveButton>
                  </>
                ) : (
                  <EditButton onClick={() => setEditing(true)}>이름 수정</EditButton>
                )}
              </UserInfo>
              <ChangeImageButton as="label">
                이미지 변경
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (!file) return

                    const formData = new FormData()
                    formData.append('file', file)

                    try {
                      const res = await fetch('/api/user/upload-profile', {
                        method: 'POST',
                        body: formData,
                      })
                      const result = await res.json()
                      if (result.url) {
                        setProfileImage(result.url)
                      }
                    } catch (err) {
                      console.error('이미지 업로드 실패:', err)
                    }
                  }}
                />
              </ChangeImageButton>
            </UserHeader>

            <StampSection>
              <StampTitle>내 스탬프</StampTitle>
              <StampList>
                <StampItem>나주읍성</StampItem>
                <StampItem>국립나주박물관</StampItem>
                <StampItem>나주향교</StampItem>
              </StampList>
            </StampSection>
          </Section>
        </Content>

        <LogoutWrapper>
          <LogoutBtn>
            <StyledButton
              bg="FF4D4F"
              size={'100%'}
              onClick={() => signOut({ callbackUrl: '/auth/login' })}
              onContextMenu={async (e: React.MouseEvent) => {
                e.preventDefault()
                const confirmDelete = confirm('정말로 회원 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')
                if (confirmDelete) {
                  const res = await fetch('/api/user', { method: 'DELETE' })
                  if (res.ok) {
                    await signOut({ callbackUrl: '/auth/login' })
                  } else {
                    alert('회원 탈퇴에 실패했습니다.')
                  }
                }
              }}
            >
              로그아웃
            </StyledButton>
          </LogoutBtn>
        </LogoutWrapper>
      </Container>
    </>
  )
}

import styled from '@emotion/styled'

export const Container = styled.div`
  // Layout
  display: flex;
  width: 100vw;
  height: 100%;
  padding-top: 4.5rem;
  padding-bottom: 72px;

  // Style
  background: ${({ theme }) => theme.Background.BG1};
`

export const Content = styled.div`
  // Layout
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`

export const Section = styled.section`
  // Layout
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.25rem;
`

const Nickname = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`

const EditButton = styled.button`
  background: none;
  text-align: left;
  border: none;
  color: #0075FF;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
`

const ChangeImageButton = styled.button`
  font-size: 0.75rem;
  background: #eee;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

const StampSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`

const StampTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;
`

const StampList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StampItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`


const EditInput = styled.input`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`

const SaveButton = styled.button`
  background: #0075FF;
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;

`

const LogoutWrapper = styled.div`
  width: 100%;
  position: absolute;
  margin-bottom: 58px;
  bottom: 0;
  left: 0;
`

export const LogoutBtn = styled.div`
  padding: 1.25rem;
`
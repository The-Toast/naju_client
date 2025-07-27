'use client'

// Layout
import Header from 'components/Header'
import Navigation from 'components/Navigation'

// First Seciton
import CalendarUi from 'components/CalendarUi'

export default function Calendar() {
  return (
    <>
      <Header>
        캘린더
      </Header>
      <Navigation />
      <Container>
        <Content>
          <Section>
            <CalendarUi />
          </Section>
        </Content>
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
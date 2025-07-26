import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.Background.BG4};
  overflow: hidden;
  
  transition: 0.3s;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  cursor: pointer;
`

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.Black[100]};

  strong {
    color: #38B831;
  }
`

export const DropArea = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '500px' : '0')};
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  background: white;

  border-top: ${({ $open }) => ($open ? '1px solid #ddd' : 'none')};
`

export const StampItem = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
  color: #333;
`
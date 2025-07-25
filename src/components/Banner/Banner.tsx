'use client'

import * as S from './styled'

interface BannerProps {
  Title: string
  Description: string
  Image: string
  Number: number
  Total: number
}

export default function Banner(
  { Title, Description, Image, Number, Total }: BannerProps
) {
  return (
    <S.Container image={Image}>
      <S.Content>
        <S.TextContent>
          <S.Title>{Title}</S.Title>
          <S.Description>{Description}</S.Description>
        </S.TextContent>
        <S.DotContent>
          {[...Array(Total)].map((_, i) => (
            <S.Dot key={i} active={i === Number} />
          ))}
        </S.DotContent>
      </S.Content>
    </S.Container>
  )
}
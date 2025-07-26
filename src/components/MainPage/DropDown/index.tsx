'use client'

import { useState, useEffect } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react'
import * as S from './styled'

interface Stamp {
  id: string
  name: string
  description: string
  location: string
  category: string
  collected: boolean
}

export default function DropDown() {
  const [stamps, setStamps] = useState<Stamp[]>([])
  const [missingCount, setMissingCount] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchMissingStamps = async () => {
      try {
        const res = await fetch('/api/stamp?missing=true')
        if (!res.ok) return

        const data: Stamp[] = await res.json()
        setStamps(data)
        setMissingCount(data.length)
      } catch (err) {
        console.error('❌ 못 모은 스탬프 불러오기 실패:', err)
      }
    }

    fetchMissingStamps()
  }, [])

  return (
    <S.Container>
      <S.Header onClick={() => setOpen(prev => !prev)}>
        <S.Title>
          아직 <strong>{missingCount}곳</strong>이 남았어요.
        </S.Title>
        <CaretDownIcon size={24} />
      </S.Header>

      <S.DropArea $open={open}>
        {stamps.map(stamp => (
          <S.StampItem key={stamp.id}>
            {stamp.name} ({stamp.location})
          </S.StampItem>
        ))}
      </S.DropArea>
    </S.Container>
  )
}
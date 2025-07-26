// src/app/stamp/[category]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import CategoryPage from 'pageContainers/Stamp/CategoryPage'

export default function Page() {
  const { category } = useParams()
  const [stamps, setStamps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/stamp?category=${category}`)
      const data = await res.json()
      setStamps(data)
    }
    fetchData()
  }, [category])

  return <CategoryPage category={category as string} stamps={stamps} />
}
'use client'

import { useEffect, useState } from 'react'

export default function MeTest() {
  const [me, setMe] = useState<any>(null)

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(setMe)
  }, [])

  return (
    <pre>{JSON.stringify(me, null, 2)}</pre>
  )
}

/*
'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useRef } from 'react'

export default function LandingPage() {
  const { data: session } = useSession()
  const hasLogged = useRef(false)

  useEffect(() => {
    if (session?.user && !hasLogged.current) {
      console.log('User logged in:', {
        name: session.user.name,
        image: session.user.image,
        email: session.user.email,
        phone: session.user.phoneNumber,
      })
      hasLogged.current = true
    }
  }, [session?.user])
  return (
    <>
      Hello World
    </>
  )
}*/

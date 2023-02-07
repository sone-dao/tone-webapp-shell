import { Registration } from '@/components/admissions/Registration'
import { useLayoutContext } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const RegistrationPage: NextPage = () => {
  const { setHelmetHidden } = useLayoutContext()

  useEffect(() => {
    setHelmetHidden(true)
    return () => setHelmetHidden(false)
  })

  return (
    <>
      <Head>
        <title>Sign up - Tone [by Sone]</title>
      </Head>
      <Registration />
    </>
  )
}

export default RegistrationPage

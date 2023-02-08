import { Registration } from '@/components/admissions/Registration'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const RegistrationPage: NextPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--helmet-display', 'none')
    return () =>
      document.documentElement.style.setProperty('--helmet-display', 'flex')
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

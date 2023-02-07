import { Registration } from '@/components/admissions/Registration'
import { pub } from '@sone-dao/sone-react-utils'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const RegistrationPage: NextPage = () => {
  useEffect(() => {
    pub('__TONE_EVENTS', 'helmet.hide', true)
    return () => pub('__TONE_EVENTS', 'helmet.hide', false)
  }, [])

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

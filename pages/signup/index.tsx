import { Registration } from '@/components/admissions/Registration'
import { pub } from '@sone-dao/sone-react-utils'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const RegistrationPage: NextPage = () => {
  useEffect(() => {
    console.log('REG')
    pub('__TONE_EVENTS__', 'helmet.hide', true)
    return () => pub('__TONE_EVENTS__', 'helmet.hide', false)
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

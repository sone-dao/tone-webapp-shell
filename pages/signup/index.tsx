import { Registration } from '@/components/admissions/Registration'
import type { NextPage } from 'next'
import Head from 'next/head'

const RegistrationPage: NextPage = () => {
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

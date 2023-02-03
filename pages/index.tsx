import Placeholder from '@sone-dao/sone-react-placeholder'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Tone [by Sone]</title>
      </Head>
      <Placeholder display="Component: Home" />
    </>
  )
}

export default HomePage

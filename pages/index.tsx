import { SonePlaceholder } from '@sone-dao/sone-react-placeholder'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Tone [by Sone]</title>
      </Head>
      <div style={{height: '100%', width: '100%', border: '1px solid blue'}}>Test</div>
    </>
  )
}

export default HomePage

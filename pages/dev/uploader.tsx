import Uploader from '@sone-dao/tone-react-uploader'
import type { NextPage } from 'next'
import Head from 'next/head'

const LabelUploadPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uploader - Tone</title>
      </Head>
      <Uploader />
    </>
  )
}

export default LabelUploadPage

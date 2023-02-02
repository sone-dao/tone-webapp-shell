import Layout from '@/components/layout/Layout'
import type { AppProps } from 'next/app'
import './globals.scss'

function ToneShell({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default ToneShell

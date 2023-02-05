import Layout from '@/components/layout/Layout'
import SessionProvider from '@sone-dao/tone-react-provider-session'
import type { AppProps } from 'next/app'
import './globals.scss'

function ToneShell({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default ToneShell

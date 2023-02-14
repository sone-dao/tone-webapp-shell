import Layout from '@/components/layout/Layout'
import Analytics from '@sone-dao/tone-react-analytics'
import SessionProvider from '@sone-dao/tone-react-provider-session'
import type { AppProps } from 'next/app'
import './globals.scss'

function ToneShell({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Analytics>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Analytics>
    </SessionProvider>
  )
}

export default ToneShell

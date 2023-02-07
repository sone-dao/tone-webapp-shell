import Layout from '@/components/layout/Layout'
import SessionProvider from '@sone-dao/tone-react-provider-session'
import UtilitiesProvider from '@sone-dao/tone-react-provider-utils'
import type { AppProps } from 'next/app'
import './globals.scss'

function ToneShell({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <UtilitiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UtilitiesProvider>
    </SessionProvider>
  )
}

export default ToneShell

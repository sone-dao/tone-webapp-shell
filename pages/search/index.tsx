import { Search } from '@/components/pages/Search'
import type { NextPage } from 'next'
import Head from 'next/head'

const SearchPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search - Tone [by Sone]</title>
      </Head>
      <Search />
    </>
  )
}

export default SearchPage

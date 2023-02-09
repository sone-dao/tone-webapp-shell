import dynamic from 'next/dynamic'

const SearchProd = dynamic(() => import('tone_pages/searchProd'), {
  ssr: false,
})

interface ISearchProps {}

export const Search: React.FC<ISearchProps> = ({}) => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10 || betaHeader == true) return <HeaderBeta />
  return <SearchProd />
}

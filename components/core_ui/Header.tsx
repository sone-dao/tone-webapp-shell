import dynamic from 'next/dynamic'

interface IHeaderProps {}

const HeaderProd = dynamic(() => import('core_ui/header'), {
  ssr: false,
})

export const Header: React.FC<IHeaderProps> = () => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10) return <HeaderBeta />
  return <HeaderProd />
}

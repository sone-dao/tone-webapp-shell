import dynamic from 'next/dynamic'

const SidebarProd = dynamic(() => import('tone_core_ui/sidebarProd'), {
  ssr: false,
})

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = ({}) => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10 || betaHeader == true) return <HeaderBeta />
  return <SidebarProd />
}

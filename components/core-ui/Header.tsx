import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('core_ui/header'), {
  ssr: false,
})

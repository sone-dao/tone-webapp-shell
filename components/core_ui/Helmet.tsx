import dynamic from 'next/dynamic'

const HelmetProd = dynamic(() => import('tone_bucket/helmetProd'), {
  loading: () => <div style={{ width: '100%', height: '5rem' }} />,
  ssr: false,
})

export const Helmet: React.FC = () => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10 || betaHeader == true) return <HeaderBeta />
  return <HelmetProd />
}

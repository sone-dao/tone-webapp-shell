import dynamic from 'next/dynamic'

const UploaderProd = dynamic(() => import('tone_bucket/uploaderProd'), {
  ssr: false,
})

interface IUploaderProps {}

export const Uploader: React.FC<IUploaderProps> = ({}) => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10 || betaHeader == true) return <HeaderBeta />
  return <UploaderProd />
}

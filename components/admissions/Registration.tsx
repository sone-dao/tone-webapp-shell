import dynamic from 'next/dynamic'

const RegistrationProd = dynamic(
  () => import('tone_admissions/registrationProd'),
  {
    ssr: false,
  }
)

export const Registration: React.FC = () => {
  const rnd = Math.floor(Math.random() * 100) + 1

  //if (rnd < 10 || betaHeader == true) return <HeaderBeta />
  return <RegistrationProd />
}

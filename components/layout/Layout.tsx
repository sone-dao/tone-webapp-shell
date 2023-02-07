import { useState } from 'react'
import { Helmet } from '../core_ui/Helmet'
import styles from './Layout.module.scss'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [isHelmetHidden, setHelmetHidden] = useState<boolean>(false)

  return (
    <div className={styles.layout}>
      {!isHelmetHidden && <Helmet />}
      <main>{children}</main>
    </div>
  )
}

export default Layout

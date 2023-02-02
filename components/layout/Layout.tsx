import { Header } from '../core-ui/Header'
import styles from './Layout.module.scss'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.component}>{children}</main>
    </>
  )
}

export default Layout

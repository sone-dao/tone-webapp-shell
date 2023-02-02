import { Header } from '../core_ui/Header'
import styles from './Layout.module.scss'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.component}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout

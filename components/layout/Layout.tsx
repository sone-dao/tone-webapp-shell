import { Helmet } from '../core_ui/Helmet'
import { Sidebar } from '../core_ui/Sidebar'
import styles from './Layout.module.scss'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Helmet />
      <main>{children}</main>
    </div>
  )
}

export default Layout

import { Helmet } from '../core_ui/Helmet'
import styles from './Layout.module.scss'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.component}>
      <Helmet />
      <main>{children}</main>
    </div>
  )
}

export default Layout

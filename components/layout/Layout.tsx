import { createContext, useContext, useState } from 'react'
import { Helmet } from '../core_ui/Helmet'
import { Sidebar } from '../core_ui/Sidebar'
import styles from './Layout.module.scss'

interface ILayoutContext {
  setHelmetHidden: Function
}

const F = () => {}

const layoutContextDefaults: ILayoutContext = {
  setHelmetHidden: F,
}

const LayoutContext = createContext<ILayoutContext>(layoutContextDefaults)

export const useLayoutContext = () => useContext(LayoutContext)

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [isHelmetHidden, setHelmetHidden] = useState<boolean>(false)

  return (
    <LayoutContext.Provider value={{ setHelmetHidden }}>
      <div className={styles.layout}>
        <Sidebar />
        {!isHelmetHidden && <Helmet />}
        <main>{children}</main>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout

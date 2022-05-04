import { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'
import Header from './Header'

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout

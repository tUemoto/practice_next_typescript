import { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'
import Header from './Header'
import Meta from './Mata'

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Meta></Meta>
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

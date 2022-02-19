import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

function Layout(props) {
  return (
    <div className={styles.layout}>
        <Navbar/>
        {props.children}
    </div>
  )
}

export default Layout
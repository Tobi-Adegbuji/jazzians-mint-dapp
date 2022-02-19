import React from 'react'
import Layout from '../components/Layout'
import NftCard from '../components/NftCard'
import styles from '../styles/Mint.module.css'



function Mint() {
  return (
    <Layout>
        <div className={styles.mint__form}>
            <NftCard tilt glare/>
        </div>
    </Layout>
  )
}

export default Mint
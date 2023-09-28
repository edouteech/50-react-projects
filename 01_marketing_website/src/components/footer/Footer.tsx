import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Lamania. All rigths reserved.</div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/1.png" width={15} height={15} alt='Lama Dev Facebook' />
          <Image className={styles.icon} src="/2.png" width={15} height={15} alt='Lama Dev ' />
          <Image className={styles.icon} src="/3.png" width={15} height={15} alt='Lama Dev' />
          <Image className={styles.icon} src="/4.png" width={15} height={15} alt='Lama Dev' />
        </div>
    </div>
  )
}

export default Footer
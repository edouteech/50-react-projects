"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'


const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Portfolio", url: "/portfolio"},
    {id: 3, title: "Blog", url: "/blog"},
    {id: 4, title: "About", url: "/about"},
    {id: 5, title: "Contact", url: "/contact"},
    {id: 6, title: "Dashboard", url: "/dashboard"},
]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">Lamania</Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
            )
                )
            }
            <button  className={styles.logout} onClick={() => {console.log("logged out")}}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
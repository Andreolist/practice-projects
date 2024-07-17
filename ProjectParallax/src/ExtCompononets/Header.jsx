import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../ExtCompononets/Header.module.scss'
import logo from '../assets/dummy-logo-2b.png'

function Header() {
  return (
    <>
      <header style={styles.header}>
        <Link to='/' className={styles.homeLink}>
          <img className={styles.img} src={logo} alt='' />
        </Link>

        <nav className={styles.navigation}>
          <ul className={styles.navigationLinks}>
            <li className={styles.listItem}>
              <Link className={styles.link} to='/'>
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to='/about'>
                About
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to='/blog'>
                Notifications
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

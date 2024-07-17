import React, { useState, useEffect } from 'react'
import moon from '../../../assets/moon.png'
import nightSky from '../../../assets/nightSky.jpg'
import soil from '../../../assets/soil.png'
import sky from '../../../assets/sky.png'
import styles from '../../Home/Home.module.scss'

function Hero() {
  const [offset, setOffset] = useState(0.5)
  const handleScroll = () => setOffset(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div>
        <img className={styles.nightsky} src={nightSky} />
        <div className={styles.sticky}>
          <img
            className={styles.moon}
            src={moon}
            style={{
              minWidth: `${offset * 0.25}%`,
              transform: `translateX(${offset * 0.01}%)`,
              transition: `all 0.6s linear`,
            }}
          />
          <h1 className={styles.h1} style={{}}>
            <span className={styles.span}>
              the <br />
            </span>
            MOON
          </h1>
          <img
            className={styles.soil}
            src={soil}
            style={{
              minWidth: `${offset * 2.5}%`,
              transition: `all 0.6s linear`,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Hero

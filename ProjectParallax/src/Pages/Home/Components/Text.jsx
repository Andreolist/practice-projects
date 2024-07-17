import React, { useState, useEffect } from 'react'
import space from '../../../assets/space1.jpg'
import rocks from '../../../assets/rocks.png'
import CountdownApp from './CountdownApp'
import astronaut from '../../../assets/astronaut1.png'
import sky from '../../../assets/sky.png'
import phases from '../../../assets/moon-phases-2024.mp4'
import styles from '../../Home/Text.module.scss'

function Text() {
  const [offset, setOffset] = useState(1.2)
  const handleScroll = () => setOffset(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const targetDate = '2027-03-10T01:00:00'

  return (
    <>
      <div className={styles.divBox} style={{}}>
        <img className={styles.space} src={space} />
        <div className={styles.firstText}>
          <h1>Formation</h1>
          <p>
            Several theories about our Moon’s formation vie for dominance, but
            almost all share that point in common: near the time of the solar
            system’s formation, about 4.5 billion years ago, something ― perhaps
            a single object the size of Mars, perhaps a series of objects ―
            crashed into the young Earth and flung enough molten and vaporized
            debris into space to create the Moon.
            <br />
            <br />
            The early solar system would have been a chaotic, terrifying place.
            Debris left over from the formation of the Sun coalesced into a disk
            around the star, creating clumps that ranged in size from dust
            flecks to minor planets. Gravity drew these objects together,
            causing them to crash into each other ― violent smashups that could
            end in obliteration or new, larger objects. Those mashed-together
            objects make up the planets, moons, asteroids and other solar system
            objects we know today.
          </p>
        </div>
        <img
          className={styles.rocks}
          src={rocks}
          alt=''
          style={{
            transform: `translateY(${offset * 0.19}px) rotate(-20deg)`,
            transition: `all 0.2s linear`,
          }}
        />
      </div>
      <div className={styles.cardBox}>
        <div className={styles.card}>
          <h1>1966</h1>
          <h3>Lunar Orbiter Program</h3>
          <p>
            The United States launched the Lunar Orbiter program, which captured
            detailed photographs of the Moon's surface. This program provided
            crucial mapping data for future lunar missions, including the Apollo
            program.
          </p>
        </div>
        <div className={styles.card}>
          <h1>1969</h1>
          <h3>Apollo 11 Moon Landing</h3>
          <p>
            On July 20, 1969, NASA's Apollo 11 mission achieved the first manned
            landing on the Moon. Astronauts Neil Armstrong and Buzz Aldrin
            landed in the lunar module "Eagle" while Michael Collins orbited
            above in the command module "Columbia." Armstrong famously became
            the first person to walk on the Moon, followed by Aldrin.
          </p>
        </div>
        <div className={styles.card}>
          <h1>1971</h1>
          <h3>First Lunar Rover</h3>
          <p>
            The Apollo 15 mission, launched on July 26, 1971, introduced the
            first lunar rover to explore the Moon's surface. Astronauts David
            Scott and James Irwin used the rover to travel significant distances
            from their lunar module, enhancing exploration capabilities.
          </p>
        </div>
        <div className={styles.card}>
          <h1>1972</h1>
          <h3>Last Manned Moon Mission </h3>
          <p>
            Apollo 17, launched on December 7, 1972, marked the sixth and final
            manned lunar landing mission of NASA's Apollo program. Astronauts
            Eugene Cernan and Harrison Schmitt spent about 75 hours on the
            Moon's surface, conducting scientific experiments and exploring the
            Taurus-Littrow valley.
          </p>
        </div>
        <div className={styles.card}>
          <h1>2009</h1>
          <h3>LCROSS Impact Experiment</h3>
          <p>
            On October 9, 2009, NASA's Lunar Crater Observation and Sensing
            Satellite (LCROSS) mission intentionally impacted a spent rocket
            stage into a crater near the Moon's south pole. This impact was part
            of an experiment to search for water ice in permanently shadowed
            areas of the Moon, potentially valuable for future lunar
            exploration.
          </p>
        </div>
      </div>
      <div className={styles.missionCounter}>
        <div className={styles.counter}>
          <h1>Next Moon Landing</h1>
          <p>
            <CountdownApp targetDate={targetDate} />
          </p>
        </div>
        <div className={styles.astronaut}>
          <img
            src={astronaut}
            style={{
              transform: `rotate(${offset * 0.016}deg) translateY(${
                offset * 0.12
              }px)`,
            }}
            alt=''
          />
        </div>
      </div>
      <div className={styles.divFour}>
        <img
          className={styles.sky}
          src={sky}
          style={{
            transform: `translateY(${offset * -0.06}px) rotate(180deg)`,
          }}
          alt=''
        />
        <video src={phases} autoPlay loop></video>
      </div>
    </>
  )
}

export default Text

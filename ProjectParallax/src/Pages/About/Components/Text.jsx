import React, { useState, useEffect } from 'react'
import moon from '../../../assets/moon.png'
import styles from '../../About/About.module.scss'

function Text() {
  const [rotate, setRotation] = useState(0)
  const handleScroll = () => setRotation(window.scrollY)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <h1>Welcome to Lunar Cronicles</h1>
      <div className={styles.wrapper}>
        <img
          src={moon}
          className={styles.moon}
          style={{ transform: `rotate(${rotate * 0.05}deg)` }}
          alt=''
        />
        <div className={styles.text}>
          <p>
            At Lunar Chronicles, we are passionate about all things lunar. Our
            blog is dedicated to exploring the mysteries and wonders of the
            Moon, bringing you the latest in lunar science, space exploration,
            and cultural insights. Whether you're a seasoned astronomer, a
            budding space enthusiast, or simply curious about our nearest
            celestial neighbor, Lunar Chronicles has something for you.
          </p>
          <h3>Our mission</h3>
          <p>
            Our mission is to ignite curiosity and inspire a deeper
            understanding of the Moon. We aim to bridge the gap between
            scientific research and public interest, making complex lunar
            phenomena accessible and engaging. By sharing stories, research, and
            updates from the world of lunar exploration, we hope to foster a
            community of Moon enthusiasts who are as excited about the cosmos as
            we are.
          </p>
          <h3>What we offer</h3>
          <p>
            In-Depth Articles: Dive into detailed explorations of lunar science,
            from the Moon's formation to its potential for future colonization.
            <br />
            <br />
            Latest News: Stay updated with the latest discoveries and missions
            from space agencies around the world. <br />
            <br />
            Cultural Insights: Discover the Moon's impact on art, literature,
            mythology, and more.
            <br />
            <br />
            Community Engagement: Join our community of like-minded individuals
            to discuss and share your thoughts about the Moon.
          </p>
          <h3>Our Team</h3>
          <p>
            Lunar Chronicles is run by a dedicated team of astronomers, science
            writers, and space enthusiasts. Our contributors come from diverse
            backgrounds but share a common love for the Moon and space
            exploration. We believe in the power of knowledge and storytelling
            to inspire and educate.
          </p>
          <h3>Join Us on Our Journey</h3>
          <p>
            The Moon has been a source of wonder and inspiration for humanity
            for millennia. At Lunar Chronicles, we continue this tradition by
            bringing you closer to the Moon than ever before. Join us as we
            explore its secrets, celebrate its beauty, and imagine its future.
            <br />
            <br />
            Thank you for being a part of our lunar journey!
          </p>
        </div>
      </div>
    </>
  )
}

export default Text

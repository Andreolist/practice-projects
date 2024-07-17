import React, { useState, useEffect } from 'react'
import styles from '../../Blog/Blog.module.scss'

function Api() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = 'BeIKM7RGqUJy1lscPwaYh98bjCEnQDkVz9EwYAwT'
      const url = `https://api.nasa.gov/DONKI/notifications?startDate=2024-05-01&endDate=2024-06-08&type=all&api_key=${NASA_KEY}`

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log(apiData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchApiData()
  }, [])

  return (
    <>
      <div>
        <div className={styles.notifications}>
          <h1 className={styles.title}>Notifications from above</h1>
          <div className={styles.bip}></div>
        </div>
        {data ? (
          data.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3>Message ID: {item.messageID}</h3>
              <p className={styles.type}>Message Type: {item.messageType}</p>
              <p className={styles.message}>Message: {item.messageBody}</p>
              {/* <p>{item.startTime}</p> */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Api

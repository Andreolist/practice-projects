import React, { useState } from 'react'
import astronaut from '../../../assets/astronaut2.png'
import Modal from '../Components/Modal'
import styles from '../Contact.module.scss'

function Input() {
  const [message, setMessage] = useState(false)
  const [modal, setModal] = useState(false)

  const handleRequest = () => {
    setMessage(!message)
    setModal(true)
  }

  message ? console.log('clicked') : console.log('nada')

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <div className={styles.all}>
        <div className={styles.wrapper}>
          <div className={styles.row1}>
            <div className={styles.inside}>
              <label htmlFor='firstName'>FirstName</label>
              <input type='text' name='firstName' />
            </div>
            <div className={styles.inside}>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' />
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.inside}>
              <label htmlFor='email'>Email Address</label>
              <input type='email' name='email' />
            </div>
            <div className={styles.inside}>
              <label htmlFor='phone'>Phone Number</label>
              <input type='number' name='phone' />
            </div>
          </div>
          <div className={styles.inside}>
            <label htmlFor='message'>Your message</label>
            <textarea name='message' cols={40} rows={10} id=''></textarea>
          </div>
          <button onClick={handleRequest}>Submit</button>
          <Modal pop={modal} close={closeModal} />
        </div>
        <img src={astronaut} alt='' />
      </div>
    </>
  )
}

export default Input

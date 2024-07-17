import React, { useState } from 'react'
import styles from '../Contact.module.scss'

function Modal({ pop, close }) {
  if (!pop) {
    return null
  }

  return (
    <>
      <div className={styles.modal}>
        <button onClick={close}>X</button>
        <h1>Your Message has been sent to the Universe</h1>
        <h2>We will get back to you as soon as we are done fighting Aliens</h2>
      </div>
    </>
  )
}

export default Modal

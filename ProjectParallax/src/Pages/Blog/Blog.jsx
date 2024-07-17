import React, { useState, useEffect } from 'react'
import Header from '../../ExtCompononets/Header'
import Footer from '../../ExtCompononets/Footer'
import Api from '../../Pages/Blog/Components/Api'

function Blog() {
  return (
    <>
      <Header />
      <Api />
      <Footer />
    </>
  )
}

export default Blog

import React from 'react'
import Navbar from './Navbar'
import './Homepage.css'
import Banner from './Banner'
import Footer from './Footer'
import Body from './Body'

function Homepage() {
  return (
    <div className='homescreen'>
      <Navbar/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Homepage
import React from 'react'
import CustomNav from '../components/customNav'
import Card from '../components/card'
import Footer from '../components/footer'

export const HomePage = () => {
  return (
    <div className='page'>
      <div>
        <CustomNav />
      </div>
      <div className='container'>
        <Card />
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/" className="logo"><img src="../assets/img/logo_light_horizontal.svg" alt="" /></Link>
    </div>
  )
}

export default Footer
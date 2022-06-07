import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-500 p-3 space-x-4'>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <a href="https://www.facebook.com/">Facebook</a>
    </div>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveNavbar = () => {
    return (
        <div className='bg-gray-500 p-3 space-x-4'>
            {/* by default NavLink component receives "active" class */}
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
        </div>
    )
}

export default ActiveNavbar
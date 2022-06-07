import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveNavbar3 = () => {
    return (
        <div className='bg-gray-500 p-3 space-x-4'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/place-order" >Place order</NavLink>
            <NavLink to="/products" >Products</NavLink>
            {/* link to users page */}
            <NavLink to="/users" >Users</NavLink>
        </div>
    )
}

export default ActiveNavbar3
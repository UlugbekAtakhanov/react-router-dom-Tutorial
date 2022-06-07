import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveNavbar2 = () => {
    return (
        <div className='bg-gray-500 p-3 space-x-4'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/place-order" >Place order</NavLink>

            {/* added link to products page */}
            <NavLink to="/products" >Products</NavLink>
            
        </div>
    )
}

export default ActiveNavbar2
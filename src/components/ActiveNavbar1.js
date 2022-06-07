import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveNavbar1 = () => {
    return (
        <div className='bg-gray-500 p-3 space-x-4'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            {/* add link to PlaceOrder page */}
            <NavLink to="/place-order" >Place order</NavLink>
        </div>
    )
}

export default ActiveNavbar1
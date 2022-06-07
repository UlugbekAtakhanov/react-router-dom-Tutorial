import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users1 = () => {
    return (
        <div className='p-12'>
            <h1>
                <Link to = "/users/1">
                    User 1
                </Link>
            </h1>
            <h1>
                <Link to = "/users/2">
                    User 2
                </Link>
            </h1>
            <h1>
                <Link to = "/users/3">
                    User 3
                </Link>
            </h1>

            {/* revealing nested route */}
            <Outlet />

        </div>
    )
}

export default Users1
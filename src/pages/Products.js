import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div className='p-12'>
            <h1>Products page</h1>

            <nav className='bg-white/10 flex gap-4 mt-8 py-2 px-3 rounded-lg'>
                {/* if you write nested route's path without "slash", it will related to parent route path http://localhost:3000/products/featured */}
                <Link to="featured-products">Featured</Link>
                <Link to="new-products">New</Link>
                {/* if you write nested route's path with "slash", it will related to root url and redirects you to http://localhost:3000/featured */}
                <Link to="/featured-products">Featured</Link>
                {/* OR write as below if you want to use absolute path */}
                <Link to="/products/featured-products">Featured</Link>
                <Link to="/products/new-products">New</Link>
            </nav>

            {/* This component is using to render nested routes, nested routes will be rendered here */}
            <div className='py-2 pl-1'>
                <Outlet />
            </div>

        </div>
    )
}

export default Products
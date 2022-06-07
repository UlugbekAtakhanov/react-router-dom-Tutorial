import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <div className='p-12 flex flex-col gap-2 items-start'>
            <h1>Order confirmed</h1>

            {/* navigate back to previous page */}
            {/* <button
                onClick={() => navigate(-1)}
                className='bg-white shadow text-sky-500 font-semibold py-2 px-3 rounded-lg'
            >Go back</button> */}
            {/* OR */}
            {/* <button
                onClick={() => navigate("/place-order")}
                className='bg-white shadow text-sky-500 font-semibold py-2 px-3 rounded-lg'
            >Go back</button> */}


            {/* navigation to home page */}
            {/* <button
                onClick={() => navigate("/")}
                className='bg-white shadow text-sky-500 font-semibold py-2 px-3 rounded-lg'
            >Go Home</button> */}


        </div>
    )
}

export default OrderSummary
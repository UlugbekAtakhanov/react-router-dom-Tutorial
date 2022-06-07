import React from 'react'
import { useNavigate } from 'react-router-dom'


const PlaceOrder = () => {
    // invoke the hook
    const navigate = useNavigate()

    return (
        <div className='p-12'>
            <h1>Place order page</h1>

            {/* button for navigating to OrderSummary page */}
            {/* <button
                // navigating programmatically onClick event
                onClick={() => navigate("/order-summary")}
                className='bg-white shadow text-sky-500 font-semibold py-2 px-3 mt-4 rounded-lg'
            >Place order</button> */}

            {/* <button
                // replace: true  ===  when you press go back from /order-summary,  /place-order replaces all the history stack, in this case with Home page == "/"
                onClick={() => navigate("/order-summary", {replace: true})}
                className='bg-white shadow text-sky-500 font-semibold py-2 px-3 rounded-lg'
            >Place order</button> */}
        </div>
    )
}

export default PlaceOrder
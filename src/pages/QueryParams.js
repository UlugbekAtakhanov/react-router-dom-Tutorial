import React from 'react'
import { useSearchParams } from 'react-router-dom'


const QueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams)
    // console.log(searchParams.get("filter"))
    //it checks whether searchParams is active or not, it returns true or false
    const showActiveUsers = searchParams.get("filter") === "active"
    return (
        <div className='p-12 space-x-4'>

            <button
                onClick={() => setSearchParams({ filter: "active" })}
                className='py-2 px-3 bg-white rounded-lg text-slate-500 font-semibold capitalize'
            >active users</button>

            <button
                onClick={() => setSearchParams({})}
                className='py-2 px-3 bg-white rounded-lg text-red-500 font-semibold capitalize'
            >reset filter</button>

            <div className='mt-12'>
                {showActiveUsers ? "Showing active users" : "Showing all users"}
            </div>

        </div>
    )
}

export default QueryParams
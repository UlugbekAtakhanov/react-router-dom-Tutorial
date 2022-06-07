import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails1 = () => {
    // const params = useParams()
    // console.log(params)
    // OR descructure
    const {userId} = useParams()
    return (
        <div className='p-12'>
            Details about user {userId}
        </div>
    )
}

export default UserDetails1
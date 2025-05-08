import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {
  const logOutUser = () => {
    
    localStorage.setItem('loggedInUser', '')
    props.changeUser(null)
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello
        <br />
        <span className='text-3xl font-semibold'>username 👋</span></h1>
      <button onClick={logOutUser} className='font-medium text-white text-lg bg-red-600 px-5 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header

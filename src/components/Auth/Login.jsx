import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='rounded-xl border-2 border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent' type="email" placeholder='Enter your email' />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl outline-none bg-transparent' type="password" placeholder='Enter password' />
                    <button className='rounded-full py-3 px-5 mt-5 text-xl outline-none bg-emerald-600' type='submit'>Login</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login

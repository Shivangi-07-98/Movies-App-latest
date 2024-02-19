import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            {
                <>
                    {/* <div>
                        <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 ml-3 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Signout</button>
                    </div> */}

                    <div class='flex justify-center items-center h-screen'>
                        <div className='w-96 p-7 shadow-lg bg-white rounded-md'>
                            <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-user"></i>   Login</h1>
                            <hr className='mt-3 mb-4' />
                            <div>
                                <label for='username' className='block text-base'>Username</label>
                                <input type='text' className='mb-4 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Username...'></input>
                            </div>
                            <div>
                                <label for='password' className='block text-base'>Password</label>
                                <input type='password' className='mb-4 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...'></input>
                            </div>

                            <div className='mt-3 flex justify-between items-center'>
                                <div>
                                    <input type='checkbox' className='mr-1'></input>
                                    <label>Remember Me</label>
                                </div>
                                <div>
                                    <Link to='#' className='text-indigo-800 font-semibold'>Forgot Password?</Link>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Login</button>
                            </div>
                            <div className='mt-3 flex justify-between items-center'>
                                <div>
                                    {/* <input type='checkbox' className='mr-1'></input> */}
                                    <label>Don't have an account?</label>
                                </div>
                                <div>
                                    <Link to='/signup' className='text-indigo-800 font-semibold'>Signup</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </>
            }
        </div>
    )
}

export default Login
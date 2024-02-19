import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            {/* <div>
                <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 ml-3 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Signout</button>
            </div> */}

            <div className='flex justify-center items-center h-screen'>
                <div className='w-96 p-5 shadow-lg bg-white rounded-md'>
                    <h1 className='text-3xl block text-center font-semibold'><i className="fa-solid fa-user"></i>   Signup</h1>
                    <hr className='mt-2 mb-2'/>
                    <div>
                        <label className='block text-base'>First Name</label>
                        <input type='text' className='mb-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter First Name...' />
                    </div>
                    <div>
                        <label className='block text-base'>Last Name</label>
                        <input type='text' className='mb-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Last Name...' />
                    </div>
                    <div>
                        <label htmlFor='username' className='block text-base'>Email</label>
                        <input type='text' className='mb-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Email...' />
                    </div>
                    <div>
                        <label htmlFor='password' className='block text-base'>Password</label>
                        <input type='password' className='mb-2 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...' />
                    </div>
                    <div className='mt-5'>
                        <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold' >Signup</button>
                    </div>
                    <div className='mt-3 flex justify-between items-center'>
                        <div>
                            <label>Already have an account?</label>
                        </div>
                        <div>
                            <Link to='/login' className='text-indigo-800 font-semibold'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;

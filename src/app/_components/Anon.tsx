'use client'

import React from 'react'
import Link from 'next/link'


const Anon = () => {
  
    return (
        
        <div className='flex flex-col space-y-4 overflow-hidden'>
          <div className='bg-zinc-900 rounded-xl p-8'>
          <Link href='/sign-in'>Sign In</Link>
          </div>
  
          <div className='bg-zinc-900 rounded-xl p-8'>
          <div className='flex flex-row space-x-4 items-center place-content-between'>
          <Link href='/start-signup'>Sign Up</Link>
          </div>
          </div>
        </div>
     
    )  
}

export default Anon
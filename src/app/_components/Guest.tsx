'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SignIn from './SignIn'

const Guest = () => {
  const router = useRouter()
  
    return (
        <div className='h-full bg-zinc-950 rounded-2xl p-4'>   
        <div className='flex flex-col space-y-4 overflow-hidden'>
          <div className='bg-zinc-900 rounded-xl p-8'>
            <SignIn />
          </div>
  
          <div className='bg-zinc-900 rounded-xl p-8'>
          <div className='flex flex-row space-x-4 items-center place-content-between'>
          Sign up
          </div>
          </div>
  
        </div>
        <div className='h-96'></div>
  
        <div className='text-right text-haute-pink'>
        <ul>
          <li>
            <Link href='/'>Help & Support</Link>
          </li>
          <li>
            <Link href='/'>Send Feedback</Link>
          </li>

        </ul>
        </div>
        </div> 
    )  
}

export default Guest
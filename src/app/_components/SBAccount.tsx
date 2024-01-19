'use client'

import { Session } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'
import Caller from './Caller'
import Anon from './Anon'
import Link from 'next/link'
import SignOut from './SignOut'


export default function Sidebar({ session }: { session: Session | null}) {

    const supabase = createClientComponentClient<Database>()
   
return session ? (

  <div className='w-full h-full'>
     <div className='flex flex-col space-y-4 overflow-hidden'>
      <Caller />
    </div>
    <div className='text-right text-haute-pink'>
      <ul>
        <li>
          <Link href='/'>Account Settings</Link>
        </li>
        <li>
          <Link href='/'>Help & Support</Link>
        </li>
        <li>
          <Link href='/'>Send Feedback</Link>
        </li>
        <li>
          <SignOut />
        </li>
        </ul>
    </div>
  </div> 

) : (

  <div className='w-full h-full'>
    <div className='flex flex-col space-y-4 overflow-hidden'>
      <Anon />
    </div>
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

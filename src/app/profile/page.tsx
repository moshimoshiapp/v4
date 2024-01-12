'use client'

import Image from 'next/image'
import { SessionProvider } from 'next-auth/react';
import Profile from '../_components/Profile';
import Link from 'next/link';


export default function Page() {
  
    return (
      
      <div className='flex flex-row h-screen'>
      <SessionProvider>

      <div className='basis-4/5 py-4 pl-4 pr-2 overflow-hidden'>
        <div className='w-full h-full bg-zinc-950 rounded-2xl'>
        <div className='flex pl-8'>
            <Link href='/'>
            <div className=''>
                <Image
                    className='cursor-pointer'
                    src='/logo.svg'
                    width='200'
                    height='100'
                    alt="Moshi Moshi App Logo"
                    priority={true}
                />
            </div>
            </Link>
        </div>
        <Profile />
        </div>
        </div>


        <div className='basis-1/5 py-4 pl-2 pr-4 min-w-min overflow-hidden'>
        <div className='h-full bg-zinc-950 rounded-2xl p-4'>   
        <div className='flex flex-col space-y-4 overflow-hidden'>
        
  


          <div className='bg-zinc-900 rounded-xl p-4'>
          <div className='flex flex-row space-x-4 items-center'>
            <div className='rounded-full size-14 bg-haute-pink'></div>
            <div>Creator</div>
          </div>
          </div>
  
          <div className='bg-zinc-900 rounded-xl p-8'>
          <div className='flex flex-row space-x-4 items-center place-content-between'>
            <div>
              <div className='text-3xl'>
                $10,000
              </div>
              <div className='flex justify-start text-zinc-500'>
              <Image
                  className='size-5 fill-zinc-500'
                  src='/wallet-icon.svg'
                  width='16'
                  height='16'
                  alt="Wallet"
              />
                MoshiMoshi Wallet
              </div>
            </div>
            <div>
            
            </div>
          </div>
          </div>
  
          <div className='bg-zinc-900 rounded-xl p-8'>
          <div className='flex flex-row space-x-4 items-center place-content-between'>
            <div>Edit Creator Profile</div>
            
          </div>
          </div>
  
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
          Sign Out
          </li>
        </ul>
        </div>
        </div> 
        </div>


        
      </SessionProvider>
      </div>
      
  )
}

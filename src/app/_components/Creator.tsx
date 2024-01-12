'use client'

import Image from 'next/image'
import Link from 'next/link'

const Creator = () => {
    return (
        <div className='h-full bg-zinc-950 rounded-2xl p-4'>   
        <div className='flex flex-col space-y-4 overflow-hidden'>
          <div className='bg-zinc-900 rounded-xl p-4'>
          <div className='flex flex-row space-x-4 items-center'>
            <div className='rounded-full size-14 bg-haute-pink'></div>
            <div>Caller</div>
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
            <div>4 Following</div>
            <div>
           
            </div>
          </div>
          </div>
  
        </div>
        <div className='h-96'></div>
  
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
            <Link href='/'>Sign Out</Link>
          </li>
        </ul>
        </div>
        </div> 
    )  
}

export default Creator
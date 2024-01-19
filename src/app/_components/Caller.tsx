'use client'

import React from 'react'
import Image from 'next/image'


const Caller = () => {
    return (
       
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
                  width={16}
                  height={16}
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
        
    )  
}

export default Caller
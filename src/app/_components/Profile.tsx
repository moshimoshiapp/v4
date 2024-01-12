import React from 'react'
import Image from 'next/image'

export const Profile = () => {
  return (
    <div className='container mx-auto flex w-full p-4 justify-center items-center'>

        <div className='flex flex-col w-1/2 min-w-min h-5/6 space-y-4 p-8 bg-zinc-900 rounded-2xl'>

            <div className='flex flex-col justify-center items-center pt-8'>
                <div className='text-lg'>
                naughty_natasha
                </div>
                <div className='flex flex-row gap-x-8'>
                    <div className='flex gap-x-2'>
                        <Image
                        src='/followers.svg'
                        width={24}
                        height={24}
                        alt="Followers"
                        />
                    1.4K
                    </div>
                    <div className='flex gap-x-2'>
                        <Image
                        src='/callcount.svg'
                        width={20}
                        height={20}
                        alt="Call Count"
                        />
                    1.4K
                    </div>
                    <div className='flex gap-x-2'>
                        <Image
                        src='/rate.svg'
                        width={20}
                        height={20}
                        alt="Call Count"
                        />
                    $1.99 per min
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center p-8'>
                <div>
                <div className='rounded-full size-40 bg-zinc-800'></div>
                </div>
            </div>

            <div className='flex flex-col justify-center p-8 text-zinc-500'>
                <div>
                Tags
                </div>
            </div>

            <div className='flex flex-col justify-center p-8 text-zinc-500'>
                <div>
                Phone Call Description
                </div>
            </div>


        </div>

    </div>
  )
}

export default Profile

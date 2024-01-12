import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.svg'


export const Navbar = () => {
  return (
    <div className='w-screen flex justify-between items-center py-2 px-4'>
        <Link href='/'>
        <div className='w-100px'>
            <Image
                className='cursor-pointer'
                src={Logo}
                alt="Moshi Moshi App Logo"
                priority={true}
            />
        </div>
        </Link>
    </div>
  )
}

export default Navbar
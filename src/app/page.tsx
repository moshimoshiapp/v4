import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Sidebar from './_components/Sidebar'
import Link from 'next/link'


export default async function Page() {
  
  const supabase = createServerComponentClient({ cookies })

    return (

      <div className='flex flex-row h-screen'>
      
        <div className='basis-4/5 py-4 pl-4 pr-2 overflow-hidden'>
        <div className='w-full h-full bg-zinc-950 rounded-2xl'>
        <div className='flex pl-8'>
            <Link href='/'>
            <div>
            <Image
                    className='cursor-pointer'
                    src='/logo.svg'
                    width={200}
                    height={0}
                    alt="Moshi Moshi App Logo"
                    priority={true}
                />
            </div>
            </Link>
        </div>
        </div>
        </div>

        <div className='basis-1/5 py-4 pl-2 pr-4 min-w-min overflow-hidden'>
        <Sidebar />
        </div>
      
      </div>
      
  )
}

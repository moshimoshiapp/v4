import Image from 'next/image'
import Profile from '../_components/Profile';
import Link from 'next/link';

export default function Page() {
  
    return (
      
      <div className='flex flex-row h-screen'>
     

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
        
  
        </div>
        </div> 
        </div>


        
      
      </div>
      
  )
}

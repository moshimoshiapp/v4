import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function Page() {

  const supabase = createServerComponentClient({ cookies }) 

    return (
    
        <div className='container mx-auto flex w-full h-5/6 justify-center items-center'>
          <div className='flex flex-col space-y-4 p-8'>
            
            <div className='text-xl text-gray-400'>
            creator form goes here
            </div>

          </div>
        </div>
  
  )
}
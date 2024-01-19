import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '/var/www/moshimoshi_app/types/supabase'
import CreatorSignUp from '../../_components/CreatorSignUp'


export default async function Page() {

  const cookieStore = cookies()
  const supabase = createServerActionClient<Database>({ cookies: () => cookieStore })

    return (
    
        <div className='container mx-auto flex w-full h-5/6 justify-center items-center'>
          <div className='flex flex-col space-y-4 p-8'>
            
            <div className='text-xl text-gray-400'>
            <CreatorSignUp />
            </div>

          </div>
        </div>
  
    )
}
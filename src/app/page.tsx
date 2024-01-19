import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '/var/www/moshimoshi_app/types/supabase'
import Image from 'next/image'
import Link from 'next/link'
import SBAccount from './_components/SBAccount'


export default async function Page() {

  const cookieStore = cookies()
  const supabase = createServerActionClient<Database>({ cookies: () => cookieStore })

  const { data: { session },
   } = await supabase.auth.getSession()
  
  const { data: callers } 
  = await supabase.from("callers").select()

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
            <div>
              <pre>{JSON.stringify(callers, null, 2)}</pre>
              </div>
          </div>
        </div>

        <div className='basis-1/5 py-4 pl-2 pr-4 min-w-min overflow-hidden'>

        <div className='w-full h-full'>
            <div className='h-full bg-zinc-950 rounded-2xl p-4'>   
              <SBAccount session={session}/>
            </div> 
        </div>
            
        </div>
      
      </div>
      
  )
}

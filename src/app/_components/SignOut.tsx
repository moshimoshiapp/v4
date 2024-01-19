'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'
import { useRouter } from 'next/navigation'


export default function SignOut() {

  const supabase = createClientComponentClient<Database>()

  const router = useRouter()

  const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )

}

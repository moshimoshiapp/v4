'use client'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'

export default async function SignOut() {

    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
        await supabase.auth.signOut()
    };

  return (
    <button onClick={handleSignIn}>Sign Out</button>
  )
}

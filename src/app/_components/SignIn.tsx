'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'

export default function SignIn() {

    const [email, setEmail] = useState('enter email');

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value);
    }    

    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
      
        await supabase.auth.signInWithOtp({
            email,
            options: {
              // set this to false if you do not want the user to be automatically signed up
              shouldCreateUser: false,
              emailRedirectTo: 'http://localhost:3000',
            },
        }) 
    }; 

  return (
   <form>
    
    <input value={email} onChange={handleChange} />
    <p>{email}</p>
    <button onClick={handleSignIn}>Login</button>
    </form>
    
  )
}


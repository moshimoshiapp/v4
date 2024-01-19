'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'

export default function CreatorSignUp() {

    const [email, setEmail] = useState('')

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value);
    }    

    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
      
        await supabase.auth.signInWithOtp({
            email,
            options: {
              // set this to false if you do not want the user to be automatically signed up
              shouldCreateUser: true,
              emailRedirectTo: 'http://localhost:3000',
            },
        }) 
    }; 

  return (
   
    <div className='sm:mx-auto md:w-full sm:max-w-sm bg-zinc-950 rounded-2xl'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto md:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl leading-9 tracking-tight text-white">
                Create Creator Account
                </h2>
            </div>
            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-2">
                    <div>
                        <div className="mt-2">
                            <input
                            id="username"
                            name="username"
                            type="username"
                            autoComplete="username"
                            placeholder="Create a username"
                            required
                            className="block bg-zinc-800 w-full rounded-2xl border-0 py-3.5 indent-3 text-white shadow-sm ring-black ring-1 ring-inset placeholder:text-slate-300 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-haute-pink sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <input
                            onChange={handleChange}
                            value={email}
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email address"
                            required
                            className="block bg-zinc-800 w-full rounded-2xl border-0 py-3.5 indent-3 text-white shadow-sm ring-black ring-1 ring-inset placeholder:text-slate-300 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-haute-pink sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={handleSignIn}
                        className="mt-4 flex w-full justify-center rounded-3xl bg-haute-pink px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm focus:ring focus:ring-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none"
                        >
                        Sign up
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
    
  )
}


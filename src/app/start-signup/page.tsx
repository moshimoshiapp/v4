'use client'

import { useRouter } from 'next/navigation'


export default function Page() {

  const router = useRouter()

    return (
    
        <div className='container mx-auto flex w-full h-5/6 justify-center items-center'>
          <div className='flex flex-col space-y-4 p-8'>
            
            <div className='text-xl text-gray-400'>
            Select the type of account you want to create:
            </div>

            <div className='flex'>

              <label 
                id="caller"
                onClick={() => router.push('/start-signup/caller') }
                className='inline-flex items-center justify-between w-full p-4 md:p-16 cursor-pointer text-gray-400 bg-zinc-900 border border-zinc-800 rounded-2xl hover:text-gray-50 hover:border-haute-pink active:bg-haute-pink'
                >

              <input 
                type="radio"
                name="usertype"
                value="Caller"
                id="caller"
                className="hidden peer"
              />

              <div className="block w-3/4">
                <div className="w-full text-xl">Caller 🤙</div>
                <div className="w-full">You are here to enjoy our creator’s offerings. Tip favorite bytes. Pay per mins play. Follow favorite creatives.</div>
              </div>
              <svg className="w-5 h-5 ms-3 rtl:rotate-180 stroke-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </label>

            </div>

            <div className='flex'>

            <label 
                id="creator"
                onClick={() => router.push('/start-signup/creator') }
                className='inline-flex items-center justify-between w-full p-4 md:p-16 cursor-pointer text-gray-400 bg-zinc-900 border border-zinc-800 rounded-2xl hover:text-gray-50 hover:border-haute-pink active:bg-haute-pink'
                >
             
             <input 
                type="radio"
                name="usertype"
                value="Creator"
                id="creator"
                className="hidden peer"
              />
                                        
              <div className="block w-3/4">
                <div className="w-full text-xl">Creator ✨</div>
                <div className="w-full">Creators are 18+ over-the-phone pay-per-mins pleasure deliverers. We take 20% of the revenue incurred from each phone call.</div>
              </div>
              <svg className="w-5 h-5 ms-3 rtl:rotate-180 stroke-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </label>

            </div>

          </div>
        </div>
  
  )
}
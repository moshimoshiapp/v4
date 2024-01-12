'use client'

import { useState, ChangeEvent } from "react"



export default function Page() {
  const [usertype, setUsertype] = useState("Caller")
  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsertype(e.target.value);
  };

    return (
      
        <div className='flex w-full h-5/6 rounded-2xl justify-center items-center'>

          <div className='flex flex-col w-2/3 space-y-8'>
            
            <div className='text-2xl'>
            Select the type of account you want to create:
            </div>

            <div className='flex p-16 bg-zinc-800 rounded-2xl space-x-5'>
             
              <input 
                type="radio"
                name="usertype"
                value="Caller"
                id="caller"
                checked={usertype === "Caller"}
                onChange={onOptionChange}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label id="caller">                           
              <div className="block">
                <div className="w-full text-xl">Caller</div>
                <div className="w-full">You are here to enjoy our creator’s offerings. Tip favorite bytes. Pay per mins play. Follow favorite creatives.</div>
              </div>
              </label>

            </div>

            <div className='flex p-16 bg-zinc-800 rounded-2xl space-x-5'>

            <input 
                type="radio"
                name="usertype"
                value="Creator"
                id="creator"
                checked={usertype === "Creator"}
                onChange={onOptionChange}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

             <label id="creator">                           
              <div className="block">
                <div className="w-full text-xl">Creator</div>
                <div className="w-full">Creators are 18+ over-the-phone pay-per-mins pleasure deliverers. We take 20% of the revenue incurred from each phone call.</div>
              </div>
              </label>

         
            </div>
          </div>
        </div>
      
  )
}
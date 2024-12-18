import React from 'react'
import Image from 'next/image'

const Scheme = () => {
  return (
    <div className='h-[40rem] w-full bg-[#feebea] flex  p-12'>
        <div className='w-10/12 h-full'>
        <Image 
           src="/images/Asgaardsof1.png" alt="Asgaard Sofa" width={700} height={600} objectFit='cover' className='pl-6'
         />
        </div>
        <div className='w-2/6 h-full flex items-center justify-center flex-col mr-16 '>
            <p className='text-2xl font-semibold '>New Arrivals</p>
             <p className='text-4xl m-3 font-bold'>Asgaard Sofa</p>
             <button className="rounded-md border border-black py-2 px-4 text-center  transition-all shadow-sm   hover:shadow-lg text-black hover:text-black hover:bg-slate-800 hover:border-slate-800 focus:text-black focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-xl w-[48%] mt-6" type="button">
                    Order Now
            </button>
        </div>
    </div>
  )
}

export default Scheme





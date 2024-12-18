"use client"

import Image from 'next/image'
const Tableherocard = () => {
    return (
      <div className=' h-[35rem] w-2/5 m-8  '>
        <div className='h-3/4  m-3'>
        <Image src={"/images/squaretable.png"} alt="Logo" width={800} height={100} className='pr-12'/>
        </div>
        <div className=' w-5/5 h-28 ml-2 mr-2 pb-2 pl-6 pt-3 flex flex-col gap-4'>
         <p className='text-2xl font-bold'>Side table</p>
         <p className=' w-max h-10 text-lg border-black border-b-2'>View more</p>
        </div>
      </div>
    )
  }
  
  export default Tableherocard
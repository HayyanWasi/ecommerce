import React from 'react';
import Threecard from '../api/Threecardsi.json';
import { CiClock2 } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";

const Blog = () => {
  return (
    <div className="h-[38rem] flex flex-col justify-center items-center p-6 px-56">
      <div className="w-fit h-10 flex flex-col gap-3">
        <p className="text-4xl text-center font-semibold">Our Blogs</p>
        <p className="text-sm text-center font-light">
          Find a bright ideal to suit your taste with a great selection
        </p>
      </div>
      <div className="h-full mt-12 w-full px-5 py-3 flex items-center justify-evenly">
        {/* Card 1 */}
        <div className="w-fit h-[25rem]">
          <div className="h-[20rem] w-[20rem]">
            <img src={Threecard[0].image} alt={Threecard[0].name} />
          </div>
          <div className="my-2 flex flex-col items-center justify-center">
            <p className='font-normal'>{Threecard[0].name}</p>
            <p className='text-base text-center font-medium hover:border-b-2 border-black w-fit'>Read more</p>
            <div className='flex w-full mt-2'>
              <div className='w-3/6 flex justify-end items-center pr-5 gap-1'>
                <CiClock2 fontSize={20} />
                <p className='flex h-7 items-center'>5min</p>
              </div>
              <div className='w-3/6 flex gap-1 items-center'>
                <MdCalendarMonth fontSize={20} />
                <p >12 <sup>th</sup> Oct 2022</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="w-fit h-[25rem]">
          <div className="h-[20rem] w-[20rem]">
            <img src={Threecard[1].image} alt={Threecard[1].name} />
          </div>
          <div className="my-3 flex flex-col items-center justify-center">
            <p className='font-normal'>{Threecard[1].name}</p>
            <p className='text-xl text-center font-medium hover:border-b-2 border-black w-fit'>Read more</p>
            <div className='flex w-full mt-2'>
              <div className='w-3/6 flex justify-end items-center pr-5 gap-1'>
                <CiClock2 fontSize={20} />
                <p className='flex h-7 items-center'>5min</p>
              </div>
              <div className='w-3/6 flex gap-1 items-center'>
                <MdCalendarMonth fontSize={20} />
                <p>12 <sup>th</sup> Oct 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-fit h-[25rem]">
          <div className="h-[20rem] w-[20rem]">
            <img src={Threecard[2].image} alt={Threecard[2].name} />
          </div>
          <div className="my-3 flex flex-col items-center justify-center">
            <p className='font-normal'>{Threecard[2].name}</p>
            <p className='text-xl text-center font-medium hover:border-b-2 border-black w-fit'>Read more</p>
            <div className='flex w-full mt-2'>
              <div className='w-3/6 flex justify-end items-center pr-5 gap-1'>
                <CiClock2 fontSize={20} />
                <p className='flex h-7 items-center '>5min</p>
              </div>
              <div className='w-3/6 flex gap-1 items-center'>
                <MdCalendarMonth fontSize={20} />
                <p className=''>12 <sup>th</sup> Oct 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

"use client";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className='w-full h-[6.25rem] py-8 sm:py-5 lg:py-14 px-6  sm:px-8 lg:px-12 bg-[#fbebb5] flex items-center '>
      <div className='w-[80%] h-12 pl-48 flex gap-24 justify-center items-center txt- font-medium   '>
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline" >Shop</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
      <div className='w-[20%] h-12 p-5 flex justify-between items-center '>
        <a href="#"><TbUserExclamation fontSize={20} /> </a>
        <a href="#"><CiSearch fontSize={20} /></a>
        <a href="#"><GoHeart fontSize={20} /></a>
        <a href="#"><SlBasket fontSize={20} /></a>
      </div>
    </div>
  );
};

export default Navbar
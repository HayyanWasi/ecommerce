import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[url('/images/Group%2043.png')] bg-cover bg-center h-96 flex flex-col items-center justify-center bg-pink-100 ">
      <a href="#" className="text-5xl font-bold">Our Instagram</a>
      <p className="mt-4 font-medium">Follow our store on Instagram</p>
      <button className="my-5 w-[14%] h-[11%] rounded-full bg-pink-50 shadow-md">Follow us</button>
    </div>
  );
};

export default Banner;

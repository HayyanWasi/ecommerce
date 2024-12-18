import React from "react";

interface CardProps {
  user: string;
  price: string;
  image: string; // Add the image prop to the Card component
}

const Card: React.FC<CardProps> = ({ user, price, image }) => {
  return (
    <div className=" w-1/5  mx-8 px-4 py-4  h-[82%] ">
      <div className=" h-[70%]">
        <img src={image} alt={user} className="w-full h-full object-cover" />
      </div>
      <div className=" h-[30%] py-2 px-2">
        <p className="text-sm h-6">{user}</p>
        <p className="text-xl font-semibold py-3 leading-tight">Rs. {price}</p>
      </div>
    </div>
    
    
  );
};

export default Card;

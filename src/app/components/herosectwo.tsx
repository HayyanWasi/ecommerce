import React from 'react';
import Card from './Card';

const HeroSectTwo: React.FC = () => {
  const furnitureProducts = [
    { user: "Trenton Modular Sofa_3", price: "25,000.00", image: "/images/trentonsofa.png" },
    { user: "Granite dinning table with dining chair", price: "25,000.00", image: "/images/graniteDinningChairs.png" },
    { user: "Outdoor bar table and stool", price: "25,000.00", image: "/images/outdoorBarTableandStool.png" },
    { user: "Plain console with teak mirror ", price: "25,000.00", image: "/images/plaineconsolewithteak.png" }
  ];

  return (
    <div className="h-[40rem] w-full flex flex-col justify-center items-center  ">
      <div className=" h-[20%] w-[90%] flex flex-col gap-3 pt-5  ">
        <p className="text-4xl text-center font-semibold">Top picks for you</p>
        <p className="text-sm text-center font-light">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      <div className=" h-[58%] w-[90%] flex justify-evenly gap-4 ">
        {furnitureProducts.map((product, index) => (
          <Card key={index} user={product.user} price={product.price} image={product.image} />
        ))}
      </div>
      <p className=' hover:border-b-2 border-b-black text-xl flex items-center h-12 py-3'>view more</p>
    </div>
  );
};

export default HeroSectTwo;

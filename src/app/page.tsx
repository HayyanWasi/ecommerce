import Tableherocard from "./components/tableherocard";
import Sofaherocard from "./components/sofaherocard";
import Herosectwo from "./components/herosectwo";
import Image from "next/image";
import Scheme from "./components/Scheme";
import Blog from "./components/Blog";
import Banner from "./components/Banner";

const Homepage = () => {
  return (
    <div className="">

      <div className="flex border bg-[#FBEBB5] h-[41.4rem] bg-">

        <div className=" w-[65%]">

          <div className="flex flex-col justify-center h-full w-full items-center">
            <p className="text-6xl">Rocket single</p>
            <p className="text-start text-6xl  w-4/12 "> seater</p>
            <a href="#" className="text-2xl mt-6 border-b-2 border-black">
              Shopnow
            </a>
          </div>
        </div>
        <div className="w-[35^%]">
          <Image
            src={"/images/rocketseater1.png"}
            alt="rocket-seater"
            height={1000}
            width={800}
          />
        </div>
      </div>

      <div className="h-1/3 bg-green-50 w-full flex justify-center ">
        <Tableherocard />
        <Sofaherocard />
      </div>

      <>
        <Herosectwo />
        <Scheme/>
        <Blog/>
        <Banner/>
      </>
      
     


    </div>
  );
};

export default Homepage;

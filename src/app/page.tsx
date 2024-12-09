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


        <div className="right w-[35%] flex justify-center items-center">
          <img
            className="h-[100%] w-[100%]"
            alt="jkl"
            src="/images/rocketseater1.png"
          />
        </div>
      </div>


      <div className="main h-[35rem] w-full flex  justify-around items-center">
        <div className="left w-2/5 h-[85%]  flex flex-col">
          <div className="h-[70%] ">
            <img
              className="w-[80%] mr-8"
              src="/images/Granitesquaresidetable1.png"
              alt="kofd"
            />
          </div>


          <div className="ml-12 mt-3 flex flex-col">
            <p className="text-2xl font-semibold">Side table</p>
            <p className="border-black border-b-2 w-fit ml-4">view more</p>
          </div>
        </div>
        
        <div className="left w-2/5 h-[85%]  flex flex-col">
          <div className="h-[70%] ">
            <img
              className="w-[80%] mr-8"
              src="images\clodSofathreeseater+ottoman.png"
              alt="kofd"
            />
          </div>
          <div className="ml-12 mt-3 flex flex-col ">
            <p className="text-2xl font-semibold">Side table</p>
            <p className="border-black border-b-2 w-fit ml-4">view more</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;

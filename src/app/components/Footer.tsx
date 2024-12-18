export default function Footer() {
  return (
    <footer className=" text-gray-800 w-full h-[34rem] py-8 sm:py-10 lg:py-14 px-6 sm:px-8 lg:px-12">
      <div className="h-3/4 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-4 gap-8 bg-white">
        <div className=" flex items-center justify-center ">
         
          <p className="text-sm font-normal leading-relaxed">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-600 text-sm mb-2 ">Links</h3>
          <ul className="text-sm font-medium space-y-1 flex flex-col  gap-6 pt-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-600 text-sm mb-2 ">Help</h3>
          <ul className="text-sm font-medium space-y-1  flex flex-col  gap-6 pt-6">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-600 text-sm mb-2">Newsletter</h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2   border-black md:border-b-2 lg:border-b-2 rounded-md text-sm focus:outline-none "
            />
            <button
              type="submit"
              className="w-20 h-[2.3rem] text-black text-sm rounded-md border-b border-black md:border-b-2 lg:border-b-2 hover:bg-gray-500 font-semibold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-300 text-center text-sm font-normal leading-relaxed flex items-center py-4">
        <p>© 2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
}

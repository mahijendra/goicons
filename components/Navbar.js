import React from "react";
import Link from "next/link"



const Navbar = () => {
    return (
        <nav className=" font-sans flex items-center justify-between flex-wrap bg-gray-800 p-6 ">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-6xl tracking-tight">Govardhan Icons</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex-row-reverse">
    <div className="font-sans text-sm ">
      <a href="https://twitter.com/compose/tweet" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 divide-y divide-gray-400">
        Share on twitter
      </a>
    </div>
  </div>

     <div className="font-sans text-sm ">
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4">
        
      </a>
    </div> 
</nav>



 
 
        // <div className= "bg-gray-700 text-white ">
        //     <nav className="flex justify-between px-4 py-3">
        //        <h1>
        //            Govardhan Icons
        //        </h1>

        //        <div className="flex">
        //          <img src="/t1.png" alt="twitter-logo" className="logo"/>
        //          <Link href="https://twitter.com/compose/tweet"><a>Share on twitter</a></Link>
        //          <Link href="/" className=""><a>Looking for more classic icons? <b>Get them here -></b></a></Link>

                 
        //        </div>

               
              
            

        //     </nav>
        // </div>
    );
};

export default Navbar;

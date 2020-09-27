import React from 'react';
import Link from "next/link"


const Home = () => {
    return (
        <div className="font-sans flex items-center justify-between flex-wrap bg-gray-800 p-6 ">
           <div>
           <h1 className="pt-2 text-3xl font-medium antialiased text-yellow-300 text-opacity-75">
                Beautiful hand-crafted SVG icons
            </h1>

            <p className="py-2 text-3xl font-medium antialiased text-yellow-300 text-opacity-75">
                By Siddhu P
            </p>
           </div>
            <h1 className="flex">
            200 Icons
           </h1>


            <div className="py-0 px-10 flex-row-reverse ">
            <button className="transition duration-150 ease-in-out bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 mr-2 transform hover:scale-105">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span >Download all</span>
            </button>

            <button className="transition duration-150 ease-in-out bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-105">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                <span >View on Github</span>
            </button><br></br>

       

            

            {/* <button className="transition duration-150 ease-in-out bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2">
                <span>Github</span>
            </button> */}

        
            </div>
            
        </div>
        

    );
};

export default Home;

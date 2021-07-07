import React from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="py-2 lg:px-32 bg-transparent ">
      <div className="flex rounded-md ">
        <div className="relative flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-12 flex items-center pointer-events-none font-nunito ">
            <svg
              className="h-5 w-5 text-gray-400 bg-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="pr-8 pt-0 pl-8">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="email"
              className="form-input min-w-full p-2 bg-transparent text-gray-100 border-gray-600 border bg-opacity-gray-200 rounded-full pl-12 sm:text-sm sm:leading-10 focus:outline-none font-nunito "
              placeholder="Search all 200 Icons"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Search;

{
  /* <button className="ml-px relative inline-flex items-center px-4 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none active:bg-gray-100 active:text-gray-700 ">
            <svg className="h-4 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor`">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
            </svg>  block w-full
            <span className="ml-3 outline-none">Sort</span>
          </button> */
}

// <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
// <path
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   strokeWidth={2}
//   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// />
// </svg>

// <svg className="h-5 w-5 text-gray-400 " viewBox="0 0 20 24" fill="currentColor">
//                 <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//               </svg>




{/* <button className="ml-px relative inline-flex items-center px-4 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none active:bg-gray-100 active:text-gray-700 ">
            <svg className="h-4 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor`">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
            </svg>  block w-full
            <span className="ml-3 outline-none">Sort</span>
          </button> */  }


          // <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
// <path
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   strokeWidth={2}
//   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// />
// </svg>
      

// <svg className="h-5 w-5 text-gray-400 " viewBox="0 0 20 24" fill="currentColor">
//                 <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//               </svg>
      
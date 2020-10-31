import React from "react";



const iconsData = {

  leftArrow: 'M17.821 12.325c-3.709.645-6.966 2.37-9.771 5.175-3.012 3.012-4.779 6.545-5.3 10.6 1.767-2.944 4.417-5.594 7.95-7.95 3.533-2.356 6.183-3.239 7.95-2.65v3.3a1 1 0 001.6.8l7.933-5.95a1 1 0 000-1.6L20.25 8.1a1 1 0 00-1.6.8v2.44a1 1 0 01-.829.985z'

};

const Icons = (props) => {
  return <svg width="24" height="24" viewBox="0 0 24 24">
       <path d={iconsData[props.Icons]}></path>
  </svg>

}

// return(
//   <div className="py-10 px-40 ">
//        <div className="grid grid-cols-6 items-center justify-center gap-4">
//           {Array.from({length : 200}).map((_,index)=><Icon key={index} />)}
//        </div>
//  </div>
  
//  )
// };

// const Icon = () => (
  
//   <div className="flex p-4 justify-center items-center object-center hover:bg-teal-200">
//     <svg width="24px" height="24px" viewBox="0 0 32 32">
//       <path
//         d="M17.821 12.325c-3.709.645-6.966 2.37-9.771 5.175-3.012 3.012-4.779 6.545-5.3 10.6 1.767-2.944 4.417-5.594 7.95-7.95 3.533-2.356 6.183-3.239 7.95-2.65v3.3a1 1 0 001.6.8l7.933-5.95a1 1 0 000-1.6L20.25 8.1a1 1 0 00-1.6.8v2.44a1 1 0 01-.829.985z"
//         fill="#FFFFFF"
//         transform="translate(0) matrix(-1 0 0 1 32 0)"
//         stroke="none"
//         strokeWidth={1}
//         fillRule="evenodd"
//       />

//       <span>Arrow</span>
//     </svg>
//   </div>
// );

// const Icons = () => {
//   return (
// <div>
    

//     <div className="py-10 px-40 ">
//       <div className="grid grid-cols-6 items-center justify-center gap-4">
//         {Array.from({length : 200}).map((_,index)=><Icon key={index} />)}
//       </div>
//     </div>
//     </div>
//   );
// };

export default Icons;

 






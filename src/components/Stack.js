import React, { useState, useEffect, useRef } from 'react';
import ModalProject from './ModalProject';

function Stack({ title , data ,mode}) {
  console.log(data);
  const [scrollX, setScrollX] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const listRef = useRef();

  const[openModal,setModal] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [genre, setGenre] = useState([]);
  const [cast, setCast] = useState([]);
  const [img, setImg] = useState('');
  

  const modaldet =(project) =>{
    setName(project.name);
    setDesc(project.desc);
    setGenre(project.Genre);
    setImg(project.img);
    setCast(project.Languages);
    setModal(true);
    mode=true;
    
  }
  
  useEffect(() => {
    const handleResize = () => {
      setShowRightButton(listRef.current.clientWidth < listRef.current.scrollWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLeftClick = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
    setShowLeftButton(x !== 0);
    setShowRightButton(true);
  };

  const handleRightClick = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = listRef.current.scrollWidth;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 100; // subtracting the padding
    }
    setScrollX(x);
    setShowLeftButton(true);
    setShowRightButton(x !== (window.innerWidth - listW - 100));
  };

  return (
    <div  className="relative -mb-0">
    <div className="-mb-0">
      <div className=" md:pl-6 mb-16 lg:pl-12">
        <p className="bg-transparent text-white font-netflix text-xl lg:text-3xl">{title}</p>
        <div className="relative w-full overflow-hidden">
          {showLeftButton && (
            <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
              <button className="bg-black text-white rounded-full w-10 h-10 focus:outline-none" onClick={handleLeftClick}>
                <svg className="h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}
          {showRightButton && (
            <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
              <button className="bg-black text-white rounded-full w-10 h-10 focus:outline-none" onClick={handleRightClick}>
                <svg className="h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
            <div className="flex w-full sm:-ml-16 lg:-ml-4" style={{ transform: `translateX(${scrollX}px)` }} ref={listRef}>
              {
                data.map(project => <img alt="" onClick= {(() =>{ modaldet(project)})} className=" rounded-lg scale-50 -mr-4 lg:scale-75 lg:-mr-16 hover:scale-100 hover:z-30" src={project.img}/> )
              }  
          </div>
        </div> 
        </div>
        <ModalProject img={img} name={name} open={openModal} openFunction={setModal} desc={desc} genre={genre} cast={cast}/>
        </div>
        </div>);
}
export default Stack


// import React, { useState } from 'react';

// function Stack({ title }) {
//   const [scrollX, setScrollX] = useState(0);

//   const handleLeftClick = () => {
//     let x = scrollX + Math.round(window.innerWidth / 2);
//     if (x > 0) {
//       x = 0;
//     }
//     setScrollX(x);
//   };

//   const handleRightClick = () => {
//     let x = scrollX - Math.round(window.innerWidth / 2);
//     let listW = 3 * 240; // 3 images * 240px per image
//     if ((window.innerWidth - listW) > x) {
//       x = (window.innerWidth - listW) - 60; // subtracting the padding
//     }
//     setScrollX(x);
//   };

//   return (
//     <div className="-mb-12">
//       <div className="pl-12 mb-16">
//         <p className="bg-transparent text-white font-netflix text-xl lg:text-3xl">{title}</p>
//         <div className="relative w-full overflow-hidden">
//           <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
//             <button className="bg-black text-white rounded-full w-10 h-10 focus:outline-none" onClick={handleLeftClick}>
//               <svg className="h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
//             <button className="bg-black text-white rounded-full w-10 h-10 focus:outline-none" onClick={handleRightClick}>
//               <svg className="h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex w-full" style={{ transform: `translateX(${scrollX}px)` }}>
//             <img alt="" className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110 hover:z-30" src="ww.image.con" />
//             <img alt="" className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110 hover:z-30" src="www.image.com" />
//             <img alt="" className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110 hover:z-30" src="www.image.com" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stack;

// import React from 'react'

// function Stack({title }) {
  
//   return (
    
//     <div className="-mb-12">
//     <div className="pl-12 mb-16 ">
//       <p className=" bg-transparent text-white font-netflix text-xl lg:text-3xl ">{title}</p>
//     <div className="flex w-full overflow-hidden">
   
//     <img alt="" className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110 hover:z-30 " src="image.png"/>
    
//     <img alt="" className=" w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110  hover:z-30 " src="image.png"/>
//     <img alt="" className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110   hover:z-30 " src="image.png"/>
    
//     </div>
//     </div>
//     </div>
    
//       //  <div className="bg-transparent bg-red-400 z-30 overflow-hidden">
//       //   <p className=" bg-transparent text-white font-netflix text-3xl -mb-2">Hello</p>
//       //   <div className="bg-blue-400 bg-transparent">
       
//       //       <ul className="bg-transparent flex  -ml-20 flex-wrap md:flex-nowrap lg:ml-0 lg:overflow-x-hidden"> 
//       //           <img alt="" className=" rounded-lg scale-50 lg:scale-75  -mr-32 lg:-mr-10 hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //           <img alt="" className="rounded-lg  scale-50 lg:scale-75 -mr-32 lg:-mr-10 hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //           <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10   hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10   hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75  -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //            <img alt="" className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
//       //       </ul>
//       //   </div>
//       //  </div>
     
   
//   )
// }

// export default Stack

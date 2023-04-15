import React from 'react'


function Stack({title }) {
  return (
    
    <div className="-mb-12">
    <div className="pl-12 mb-16 ">
      <p className=" bg-transparent text-white font-netflix text-xl lg:text-3xl ">{title}</p>
    <div className="flex w-full overflow-hidden">
      
    <img className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110  " src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>
    
    <img className=" w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5 hover:scale-110  " src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>
    <img className="w-2/5 my-4 py-1 rounded-xl px-2 lg:w-1/5   " src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>
    </div>
    </div>
    </div>
    
      //  <div className="bg-transparent bg-red-400 z-30 overflow-hidden">
      //   <p className=" bg-transparent text-white font-netflix text-3xl -mb-2">Hello</p>
      //   <div className="bg-blue-400 bg-transparent">
       
      //       <ul className="bg-transparent flex  -ml-20 flex-wrap md:flex-nowrap lg:ml-0 lg:overflow-x-hidden"> 
      //           <img className=" rounded-lg scale-50 lg:scale-75  -mr-32 lg:-mr-10 hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //           <img className="rounded-lg  scale-50 lg:scale-75 -mr-32 lg:-mr-10 hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //           <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10   hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10   hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75  -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //            <img className="rounded-lg  scale-50 lg:scale-75   -mr-32 lg:-mr-10  hover:scale-100" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTS5cqaqImsyjCN7d8VHat8yHhs5wrlQA0gbrLyy6-CZM3J_2meJGfS4ovTPskFt0IzmT6CbIrbwUv4MXQtbcPjjm55WdVADiv8.webp?r=83d"/>  
      //       </ul>
      //   </div>
      //  </div>
     
   
  )
}


export default Stack

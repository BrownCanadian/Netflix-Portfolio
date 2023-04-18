import React, { useState, useEffect, useRef } from 'react';
const ModalProject = ({open, img , genre , cast , desc, name})=>{

    const[on,setOn] = useState(open);

    if(!on)return null;
    return(
        <div className="w-screen h-screen bg-transparent backdrop-blur-sm rounded-3xl fixed top-0 z-100 flex flex-col justify-center">
            <div onClick={(e)=>e.stopPropagation()} className="mx-auto w-2/3 lg:w-1/3 rounded- bg-red-300 flex flex-col">
                <div className="w-full flex flex-col">
                    <img  src={img} alt="Banner"/>
                    <div className="bg-transparent bg-gradient-to-b from-transparent via-[#141414] to-[#141414] h-24 relative -mt-24  overflow-x-hidden "></div>
                    <h1 className="absolute md:mt-56 lg:mt-40 h-1/3 w-full text-white font-netflix text-5xl ml-8 bg-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-20">{name}</h1>
                    <button className="absolute md:mt-72 lg:mt-56 flex w-36 bg-white text-black font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110"> <img className="bg-transparent pr-2" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iSGF3a2lucy1JY29uIEhhd2tpbnMtSWNvbi1TdGFuZGFyZCIgZGF0YS1uYW1lPSJQbGF5Ij48cGF0aCBkPSJNNCAyLjY5MTI3QzQgMS45MzA2NyA0LjgxNTQ3IDEuNDQ4NTEgNS40ODE5MiAxLjgxNTA2TDIyLjQwNjkgMTEuMTIzOEMyMy4wOTc3IDExLjUwMzcgMjMuMDk3NyAxMi40OTYzIDIyLjQwNjkgMTIuODc2Mkw1LjQ4MTkyIDIyLjE4NDlDNC44MTU0NiAyMi41NTE1IDQgMjIuMDY5MyA0IDIxLjMwODdWMi42OTEyN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg=="/>Github </button>
                </div>
                <div className="flex pb-10 ">
                    <div className=" px-6 pb-6 ">
                        <p className="text-white font-sans">{desc}</p>
                    </div>
                    <div className="flex flex-col justify-start w-1/3 pr-4">
                        <div className="flex flex-row flex-wrap">
                            <p className="text-white font-netflix mx-1">Cast:</p>
                            {cast.map(c => <span className="text-white font-sans font-light mx-1">{c}</span> )}
                        </div>
                        <div className="flex flex-row flex-wrap pt-4">
                            <p className="text-white font-netflix ">Genre:</p>
                            {genre.map(g => <span className="text-white font-sans font-light mx-1">{g}</span> )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
};
export default ModalProject;
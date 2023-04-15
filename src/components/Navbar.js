const Navbar = ()=>{

    
    return(
        <>
        
        <nav className="  w-full lg:fixed top-0 bg-[rgb(20,20,20)] z-[10] ">
       <div className="w-full  flex py-2 bg-[#c5454500] ">
        {/* //Todo: Add diffrent logo for sm screen */}
        <img className=" h-12 pl-2 lg:pl-12" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo Image"/>
        <ul className="flex flex-row">
            <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> Contact</li>
            <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> About </li>
            <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> Projects</li>
            <li className="mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6" >Work</li>
        </ul>
       </div></nav>
     </>)
};
export default Navbar;
import { Link } from "react-router-dom";
import ButtonMailto from "./ButtonMailTo";
const Navbar = ()=>{

    
    return(
        <>
        
        <nav className="  w-full lg:fixed top-0 bg-[rgb(20,20,20)] z-[50] ">
       <div className="w-full  flex py-2 bg-[#c5454500] ">
        {/* //Todo: Add diffrent logo for sm screen */}
        <Link to="/"><img className=" h-12 pl-2 lg:pl-12" src="https://i.imgur.com/OqBB3ZI.png" alt="Logo Image"/></Link>
        <ul className="flex flex-row">
            {/* <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> <ButtonMailto label="Contact" mailto="mailto:no-reply@example.com" /></li>
            <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> About </li>
            <li className=" mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6"> Projects</li>
            <li className="mx-2 my-auto text-sm  justify-center text-[#787878] text-bold hover:text-[#ffffff] lg:mx-6" >Work</li> */}
        </ul>
       </div></nav>
     </>)
};
export default Navbar;
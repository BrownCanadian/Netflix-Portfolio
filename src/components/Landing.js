import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="bg-[#141414] flex items-center justify-center h-screen    ">
    
    <div className="  w-screen h-1/4 justify-center align-middle  flex flex-col">

      <div className=" w-full">

        <h1 className="text-[#ffffff] my-8 flex flex-row justify-center text-2xl md:text-3xl lg:text-6xl ">
          Whos Watching
        </h1>

        <ul className="flex flex-row justify-center px-4 py-6">
          
          <li className="px-4">
            <div className="flex flex-col justify-center cursor-pointer">
              <Link to="/projects">
                <div >
                  <img alt="" className="rounded-lg w-5/6 justify-center items-center mx-auto hover:border-2 border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQF7SR467QFM7baRi8ZVxwtPaStoMd9-KZ8qZqba8Tuu8x9OWqkYvzubJwrfBQmJp0spenD2JvuyNz7H1OuY3zhTr6_hZokHwQ.png?r=6a6"></img>
                </div>
              </Link>
              <div className="text-[#808080] text-center py-6  hover:text-[#ffffff]">Portfolio</div>
            </div>
          </li>

          <li className="px-4" >
            <div className="flex flex-col justify-center">
            <Link to="https://leetcode.com/Rushaan_Chawla/">
                <div>
                  <img alt=""  className="rounded-lg w-5/6 justify-center items-center mx-auto inner-border-2 inner-border-white  hover:border-2 border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?"></img>
                </div>
              </Link>
              <div className="text-[#808080] text-center py-6  hover:text-[#ffffff]">GitHub</div>
            </div>
          </li>

          <li className="px-4">
            <div className="flex flex-col justify-center">
            <Link to="https://leetcode.com/Rushaan_Chawla/">
                <div>
                  <img alt=""  className="rounded-lg w-5/6 justify-center items-center mx-auto hover:border-2 border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrsIMMPdVENlhcMLhAEQsGSplhivXwxPolt5h1wP1bquIL83x4fkrS6we4cwNWTe1nn7exw7GDMLe-72PiRcoMIBjdjmmA.png?r=b39"></img>
                </div>
                </Link>
              <div className="text-[#808080] text-center py-6 hover:text-[#ffffff]">Linkedn</div>
            </div>
          </li>

          
        </ul>
      </div>
      <span className="justify-center text-[#808080] cursor-pointer text-center mx-auto w-1/7 py-2 px-4 text-xl my-10 border-2 border-[#808080] hover:text-white hover:border-white">Contact Us</span>
      
    </div>
  
    </div>
    </>
  );
}

export default App;

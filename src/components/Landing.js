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
                  <img className="rounded-lg w-5/6 justify-center items-center mx-auto hover:border-2 border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?"></img>
                </div>
              </Link>
              <div className="text-[#808080] text-center py-6  hover:text-[#ffffff]">About Me</div>
            </div>
          </li>

          <li className="px-4" >
            <div className="flex flex-col justify-center">
              <a>
                <div>
                  <img  className="rounded-lg w-5/6 justify-center items-center mx-auto inner-border-2 inner-border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?"></img>
                </div>
              </a>
              <div className="text-[#808080] text-center py-6  hover:text-[#ffffff]">Work History</div>
            </div>
          </li>

          <li className="px-4">
            <div className="flex flex-col justify-center">
              <a>
                <div>
                  <img  className="rounded-lg w-5/6 justify-center items-center mx-auto hover:border-2 border-white" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?"></img>
                </div>
              </a>
              <div className="text-[#808080] text-center py-6 hover:text-[#ffffff]">Projects</div>
            </div>
          </li>

          <li className="px-4">
            <div className="flex flex-col justify-center">
              <a>
                <div>
                  <img  className="rounded-lg w-5/6 justify-center items-center mx-auto" src="https://occ-0-321-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?"></img>
                </div>
              </a>
              <div className="text-[#808080] text-center py-6  hover:text-[#ffffff]">Projects</div>
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

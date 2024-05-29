import { Link } from "react-router-dom";

const BigBoard = () => {
  return (
    <div className=" relative  w-full ">
      <div className="relative w-full  z-[0] text-red-300">
        <div classname="bg-blue-300">
          <img
            alt=""
            className="w-full mt-auto lg:-mt-0 lg:-top-16 "
            src="https://i.imgur.com/SjpXstm.png"
          />
          <div className="bg-transparent bg-gradient-to-b from-transparent via-[#141414] to-[#141414] h-36 relative -mt-36  overflow-x-hidden "></div>
          <div className="bg-transparent absolute top-16 flex flex-col md:top-24 justify-left lg:top-80 lg:ml-16 xl:top-96 2xl:top-100">
            <img
              alt=""
              className="pb-2 bg-transparent w-1/3 pt-56 ml-4 md:w-1/2 md:pt-28"
              src=""
            />
            <p className="text-white ml-10 my-2 text-bold font-netflix bg-transparent">
              View my projects that come in diffrent genres
            </p>

            <div className=" bg-transparent py-2 ml-4 flex flex-row">
              <Link
                className="bg-transparent"
                to="https://drive.google.com/file/d/1Ac4lh_xRQVkRcDN8OEsssF6vmukCWEAx/view?usp=sharing"
              >
                <button className="flex bg-white text-black font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110">
                  <img
                    alt=""
                    className="bg-transparent pr-2"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iSGF3a2lucy1JY29uIEhhd2tpbnMtSWNvbi1TdGFuZGFyZCIgZGF0YS1uYW1lPSJQbGF5Ij48cGF0aCBkPSJNNCAyLjY5MTI3QzQgMS45MzA2NyA0LjgxNTQ3IDEuNDQ4NTEgNS40ODE5MiAxLjgxNTA2TDIyLjQwNjkgMTEuMTIzOEMyMy4wOTc3IDExLjUwMzcgMjMuMDk3NyAxMi40OTYzIDIyLjQwNjkgMTIuODc2Mkw1LjQ4MTkyIDIyLjE4NDlDNC44MTU0NiAyMi41NTE1IDQgMjIuMDY5MyA0IDIxLjMwODdWMi42OTEyN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg=="
                  />
                  Play{" "}
                </button>
              </Link>
              <Link
                className="bg-transparent"
                to="https://www.linkedin.com/in/rushaan-chawla/"
              >
                <button className="flex bg-[#6d6d6ebb] text-white font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0,0,256,256"
                    className="bg-transparent mr-2"
                  >
                    <g
                      fill="#faf8f8"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M12,2c-5.53333,0 -10,4.46667 -10,10c0,5.53333 4.46667,10 10,10c5.53333,0 10,-4.46667 10,-10c0,-5.53333 -4.46667,-10 -10,-10zM12,4c4.46667,0 8,3.53333 8,8c0,4.46667 -3.53333,8 -8,8c-4.46667,0 -8,-3.53333 -8,-8c0,-4.46667 3.53333,-8 8,-8zM11,8v2h2v-2zM11,12v6h2v-6z"></path>
                      </g>
                    </g>
                  </svg>
                  More Info{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigBoard;

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
              <button className="flex bg-white text-black font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110">
                <img
                  alt=""
                  className="bg-transparent pr-2"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iSGF3a2lucy1JY29uIEhhd2tpbnMtSWNvbi1TdGFuZGFyZCIgZGF0YS1uYW1lPSJQbGF5Ij48cGF0aCBkPSJNNCAyLjY5MTI3QzQgMS45MzA2NyA0LjgxNTQ3IDEuNDQ4NTEgNS40ODE5MiAxLjgxNTA2TDIyLjQwNjkgMTEuMTIzOEMyMy4wOTc3IDExLjUwMzcgMjMuMDk3NyAxMi40OTYzIDIyLjQwNjkgMTIuODc2Mkw1LjQ4MTkyIDIyLjE4NDlDNC44MTU0NiAyMi41NTE1IDQgMjIuMDY5MyA0IDIxLjMwODdWMi42OTEyN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg=="
                />
                Play{" "}
              </button>
              <button className="flex bg-[#6d6d6ebb] text-white font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110">
               
              <img alt="svgImg" bg="transparent" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTIsMmMtNS41MTEsMCAtMTAsNC40ODkgLTEwLDEwYzAsNS41MTEgNC40ODksMTAgMTAsMTBjNS41MTEsMCAxMCwtNC40ODkgMTAsLTEwYzAsLTUuNTExIC00LjQ4OSwtMTAgLTEwLC0xMHpNMTIsNGM0LjQzMDEyLDAgOCwzLjU2OTg4IDgsOGMwLDQuNDMwMTIgLTMuNTY5ODgsOCAtOCw4Yy00LjQzMDEyLDAgLTgsLTMuNTY5ODggLTgsLThjMCwtNC40MzAxMiAzLjU2OTg4LC04IDgsLTh6TTExLDd2Mmgydi0yek0xMSwxMXY2aDJ2LTZ6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
                {/* <svg
                  className=" bg-transparent rounded-full  mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Hawkins-Icon Hawkins-Icon-Standard"
                  data-name="Info"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="white"
                  ></path>
                </svg> */}
                More Info{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigBoard;

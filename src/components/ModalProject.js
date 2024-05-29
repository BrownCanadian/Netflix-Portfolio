const ModalProject = ({ open, img, genre, cast, desc, name, openFunction }) => {
  if (!open) return null;
  return (
    <div
      onClick={() => {
        openFunction(false);
      }}
      className="rounded-3xl w-screen h-screen bg-transparent backdrop-blur-sm  fixed top-0 z-100 flex flex-col justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sm:hideen md:block mx-auto md-w-2/3 lg:w-2/5 xl:w-2/5 rounded-3xl flex flex-col"
      >
        <div className="rounded-t-lg w-full flex flex-col">
          <img src={img} className="rounded-t-lg" alt="Banner" />

          <div className="flex h-1/2">
            {/* <h1 className=" md:mt-56 lg:mt-56 xl:mt-0  text-white font-netflix text-5xl ml-8 bg-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-20">{name}</h1>
                        <   button className=" md:mt-72 lg:mt-68 flex w-36 bg-white text-black font-netflix  px-6 py-2 rounded-md mx-6 lg:px-8 hover:scale-110"> <img alt="" className="bg-transparent pr-2" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iSGF3a2lucy1JY29uIEhhd2tpbnMtSWNvbi1TdGFuZGFyZCIgZGF0YS1uYW1lPSJQbGF5Ij48cGF0aCBkPSJNNCAyLjY5MTI3QzQgMS45MzA2NyA0LjgxNTQ3IDEuNDQ4NTEgNS40ODE5MiAxLjgxNTA2TDIyLjQwNjkgMTEuMTIzOEMyMy4wOTc3IDExLjUwMzcgMjMuMDk3NyAxMi40OTYzIDIyLjQwNjkgMTIuODc2Mkw1LjQ4MTkyIDIyLjE4NDlDNC44MTU0NiAyMi41NTE1IDQgMjIuMDY5MyA0IDIxLjMwODdWMi42OTEyN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg=="/>Github </button>
                  */}{" "}
          </div>
          <h1 className="pt-2  text-white font-netflix text-3xl ml-8 bg-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-20">
            {name}
          </h1>
          {/* <button className="mt-4 mb-4 flex w-36 bg-white text-black font-netflix  px-2 py-2 rounded-md mx-6 lg:px-2 hover:scale-110">
            {" "}
            <img
              alt=""
              className="bg-transparent pr-2"
              src=""
            />
            More Info
          </button> */}
        </div>
        <div className="flex items-center content-center px-6 rounded-b-lg w-4/7">
          <div className=" px-2 pt-6 justify-center pb-6 ">
            <p className="text-white font-sans">{desc}</p>
          </div>
          <div className="flex flex-col justify-start w-2/7">
            <div className="flex flex-row flex-wrap">
              <p className="text-zinc-400 text-xs font-netflix">Cast:</p>
              {cast.map((c) => (
                <span className="text-white font-netflix text-xs mx-1">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex flex-row flex-wrap pt-4 pb-4">
              <p className="text-zinc-400 text-xs font-netflix ">Genre:</p>
              {genre.map((g) => (
                <span className="text-white text-xs font-netflix mx-1">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalProject;

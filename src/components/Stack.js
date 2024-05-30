import React, { useState, useEffect, useRef } from 'react';
import ModalProject from './ModalProject';

function Stack({ title, data, mode }) {
  const [scrollX, setScrollX] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const listRef = useRef();
  const [isMounted, setIsMounted] = useState(false); // New state to track mounting

  const [openModal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [genre, setGenre] = useState([]);
  const [cast, setCast] = useState([]);
  const [img, setImg] = useState('');

  const modaldet = (project) => {
    setName(project.name);
    setDesc(project.desc);
    setGenre(project.Genre);
    setImg(project.img);
    setCast(project.Languages);
    setModal(true);
    mode = true;
  };

  const updateButtonsVisibility = () => {
    const listWidth = listRef.current.scrollWidth;
    const clientWidth = listRef.current.clientWidth;
    setShowRightButton(clientWidth <= listWidth);
    setShowLeftButton(scrollX !== 0);
  };

  useEffect(() => {
    const handleResize = () => {
      updateButtonsVisibility();
    };

    window.addEventListener('resize', handleResize);

    // Ensure calculations are done after the initial render
    setTimeout(() => {
      updateButtonsVisibility();
      setIsMounted(true); // Update state to trigger re-render
    }, 0);

    return () => window.removeEventListener('resize', handleResize);
  }, [scrollX]);

  const handleLeftClick = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightClick = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = listRef.current.scrollWidth;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 100; // subtracting the padding
    }
    setScrollX(x);
  };

  useEffect(() => {
    if (isMounted) {
      updateButtonsVisibility();
    }
  }, [isMounted]);

  return (
    <div className="relative -mb-0">
      <div className="-mb-0">
        <div className="md:pl-6 mb-16 lg:pl-12">
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
              {data.map((project) => (
                <img
                  key={project.name}
                  alt=""
                  onClick={() => {
                    modaldet(project);
                  }}
                  className="rounded-lg scale-50 -mr-4 lg:scale-75 lg:-mr-16 hover:scale-100 hover:z-30"
                  src={project.img}
                />
              ))}
            </div>
          </div>
        </div>
        <ModalProject img={img} name={name} open={openModal} openFunction={setModal} desc={desc} genre={genre} cast={cast} />
      </div>
    </div>
  );
}

export default Stack;

import { useState, useEffect } from "react";

const CardProject = ({ imgProject, nameProject, depProject,liveCode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const overlayClasses = isMobile
    ? `absolute inset-0 bg-[#8B2CF5] bg-opacity-60 flex flex-col items-center justify-center transition duration-300 ${
        isActive ? "visible opacity-100" : "invisible opacity-0"
      }`
    : `absolute inset-0 bg-[#8B2CF5] bg-opacity-60 flex flex-col items-center justify-center invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-300`;

  return (
    <div
      className="relative group shadow-md border md:border-r rounded border-gray-200 w-70 sm:w-100 h-70 flex flex-col justify-center items-center"
      onClick={() => {
        if (isMobile) setIsActive(!isActive); 
      }}
    >
      <img src={imgProject} alt="" className="w-full max-w-4xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />

      <div className={overlayClasses}>
        <h3 className="text-white text-xl font-bold mb-2">{nameProject}</h3>
        <p className="text-gray-200 text-sm px-4 text-center">{depProject}</p>

        <div className="flex flex-row justify-center absolute bottom-0 gap-10 sm:gap-20 mb-3">
          <button className="bg-[#8B2CF5] text-white font-semibold py-2 px-4 rounded cursor-pointer ease-in-out active:scale-95">
            <a href={liveCode}>live code</a>
          </button>
          <button className="border rounded p-2 font-bold">Source Code</button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

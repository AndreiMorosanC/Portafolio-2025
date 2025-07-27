const CardProject = ({ imgProject }) => {
  return (
    <div className="relative group shadow-md border md:border-r rounded border-gray-200 w-100 h-70 flex flex-col justify-center items-center">
      <img src={imgProject} alt="" className="w-70 p-6 bg-[#e6e5e523] " />
      <div className="flex flex-row justify-center gap-10 sm:gap-20 pt-3">
        <button className="bg-[#8B2CF5] text-white font-semibold py-2 px-4 rounded cursor-pointer ease-in-out  active:scale-95 ">
          live Demo
        </button>
        <button className="border rounded p-2 font-bold">Source Code</button>
      </div>

      <div className="absolute inset-0 bg-[#8B2CF5] bg-opacity-60 flex-col items-center justify-center invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 hidden sm:flex">


        <h3 className="text-white text-xl font-bold mb-2">
          Nombre del Proyecto
        </h3>
        <p className="text-gray-200 text-sm px-4 text-center">
          Breve descripción del proyecto, tecnologías y lo que aporta.
        </p>
      </div>
    </div>
  );
};

export default CardProject;

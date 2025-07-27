const Card = ({ icon, title, text, titleTecno, techList = [],imgClass }) => {


  return (
    <div className=" bg-white w-70  h-150 md:w-100 shadow-md border md:border-r rounded border-gray-200 flex flex-col items-center p-2 pt-10 text-center">
      <img src={icon} alt="" className="w-40" />
      <h1 className="font-Merriweather font-bold text-2xl">{title}</h1>
      <p className="pt-5 font-bold ">{text}</p>
      <p className="pt-15 font-bold text-xm text-[#8B2CF5]">{titleTecno}</p>
      <ul className="list-disc list-outside ml-6 text-start ">
          {techList.map((tech, index) => (
          <li className="font-Merriweather text-xm pb-2 first:pt-2" key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;    

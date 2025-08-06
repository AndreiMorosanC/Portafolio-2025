import Linkedin from "../../assets/linkedinIcon.png";
import GitHuv from "../../assets/githubIcon.svg";
import cvIcon from "../../assets/cvIcon.jpg"



const PersonalLinks = () => {
  return (
    <div className="bg-[#8B2CF5] h-20 flex  justify-center items-center">
      <ul className="flex flex-row gap-10">
        <li>
          <a href="https://www.linkedin.com/in/andrei-morosan-/">
            <img src={Linkedin} alt="" className="h-5" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AndreiMorosanC">
            <img src={GitHuv} alt="" className="h-5" />
          </a>
        </li>
        <li>
          <a
            href="../../../public/cv-portafolio-Andrei-Morosan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline"
          >
            <img src={cvIcon} alt=""  className="h-6 mb-3"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalLinks;

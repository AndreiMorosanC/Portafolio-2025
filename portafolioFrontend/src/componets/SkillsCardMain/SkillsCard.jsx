import Card from "./Card";
import devIcon from "../../assets/icon-dev.png";
import softIcon from "../../assets/softIcon.png"
const SkillsCard = () => {
  const frontendSkills = [
    "React",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML & CSS",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase"];
  const softSkills = ["Problem-solving", "Adaptability", "Self-learning"];
  
  return (
    <div className=" pt-10 md:pt-0  md:h-150 flex justify-center items-center flex-col md:flex-row relative -mt-30 z-10">
      <Card
        icon={devIcon}
        title={"Frontend"}
        text={
          "I like bringing ideas to life with code, blending structure, style, and user experience."
        }
        titleTecno={"My frontend toolbox"}
        techList={frontendSkills}
      />

      <Card 
       icon={devIcon}
        
        title={"Backend"}
        text={
          "I focus on creating solid architectures, writing maintainable code, and integrating powerful APIs."
        }
        titleTecno={"My backend toolbox"}
        techList={backendSkills}/>

      <Card
       icon={softIcon}
     
        title={"Behind the Code"}
        text={
          "I approach every project with curiosity, adaptability, and a strong sense of responsibility — always aiming to grow, communicate clearly, and deliver consistent results."
        }
        titleTecno={"Tech Stack"}
        techList={softSkills}
       />
    </div>
  );
};

export default SkillsCard;

import CardProject from "./CardProject";
import imgProject from "../../assets/project.png"


const Projects = ()=>{



    return(
        <div className="h-300 flex flex-col pt-30 items-center">

            <h1 className="font-Merriweather text-2xl">My Recent Projects</h1>

            <div className="flex justify-center gap-10 flex-col sm:flex-row pt-20">
                <CardProject 
                    imgProject={imgProject}
                />
                <CardProject
                imgProject={imgProject}/>
                <CardProject
                imgProject={imgProject}/>
            </div>

            <button className="border rounded p-2 mt-15 cursor-pointer">See more in GitHub</button>
        </div>
    )
}

export default Projects;
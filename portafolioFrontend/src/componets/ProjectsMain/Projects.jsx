import CardProject from "./CardProject";
import imgProject from "../../assets/project.png"
import MiniBlogImg from "../../assets/miniBlog-design.png"
const Projects = ()=>{



    return(
        <div className="h-300 sm:h-150 flex flex-col pt-30 items-center">

            <h1 className="font-Merriweather text-2xl">My Recent Projects</h1>

            <div className="flex justify-center gap-10 flex-col sm:flex-row pt-20">
                <CardProject 
                    imgProject={MiniBlogImg}
                    nameProject={"Mini-blog"}
                    depProject={"MiniBlog is a web app where users can easily create, edit, and manage blog posts."}
                    liveCode={"https://github.com/AndreiMorosanC/mini-blog"}
                />
                <CardProject
                imgProject={imgProject}/>
                <CardProject
                imgProject={imgProject}/>
            </div>

            <button className="border rounded p-2 mt-15 cursor-pointer"><a href="https://github.com/AndreiMorosanC?tab=repositories">See more in GitHub </a> </button>
        </div>
    )
}

export default Projects;
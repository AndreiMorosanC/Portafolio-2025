import heroImg from "../../assets/hero-devices.svg"
import MeImg from "../../assets/hero-yoIMG.png"

const Hero = ()=>{
    



    return(
        <div className=" h-screen flex justify-center ">
            <div className="p-5 sm:p-20 flex flex-col justify-between items-center">
                <div className="flex flex-col gap-15 items-center pb-10">
                    <div className="flex flex-col items-center gap-7">
                        <h1 className="font-Merriweather text-5xl">Frontend and Backend Developer</h1>
                        <p className="font-bold">I enjoy turning ideas into code while growing as a full-stack developer.</p>
                    </div>

                    <img src={MeImg} alt="" className="w-70  " />
                </div>

                <img src={heroImg} alt="" className="sm:w-full h-1/2 " />
            </div>
            
        </div>
    )
}


export default Hero;
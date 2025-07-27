import { useState } from 'react'
import NavBar from './componets/NavBarMain/NavBar'
import Hero from './componets/HeroMain/Hero'
import AboutMe from './componets/AboutMeMain/AboutMe'
import SkillsCard from './componets/SkillsCardMain/SkillsCard'
import Projects from './componets/ProjectsMain/Projects'
import ContactMe from './componets/ContactMeMain/ContactMe'

function App() {
  

  return (
    <div>
      <Hero/>
      <AboutMe/>
      <SkillsCard/>
      <Projects/>
      <ContactMe/>

    </div>
  )
}

export default App

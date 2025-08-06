import { useState } from 'react'
import NavBar from './componets/NavBarMain/NavBar'
import Hero from './componets/HeroMain/Hero'
import AboutMe from './componets/AboutMeMain/AboutMe'
import SkillsCard from './componets/SkillsCardMain/SkillsCard'
import Projects from './componets/ProjectsMain/Projects'
import ContactMe from './componets/ContactMeMain/ContactMe'
import PersonalLinks from './componets/LinksMain/PersonalLinks'


function App() {
  

  return (
    <div>
      <Hero/>
      <AboutMe/>
      <SkillsCard/>
      <Projects/>
      <ContactMe/>
      <PersonalLinks/>

    </div>
  )
}

export default App

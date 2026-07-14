import React from 'react'
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contacts from './Components/Contacts';
import "./App.css"

const App = () => {
  return (
  <div className="container">
  <h1 className='portfolio'>portfolio</h1>
  <AboutMe/>
  <Skills/>
  <Project/>
  <Contacts/>
  </div>
  )
}

export default App

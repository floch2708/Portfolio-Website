import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import { Layout } from './components/layout/layout'
import { Home } from './components/main-page/main-page'
import { About } from './components/about-page/about'
import { Contact } from './components/contact-page/contact'
import { Project } from './components/project-page/project'

export const App = () => {
  return (

    <>
      
      <Routes>

        <Route path = "/" element  = {<Home />} />
        <Route path = "/about" element  = {<About />} />
        <Route path = "/contact" element  = {<Contact />} />
        <Route path = "/project" element  = {<Project />} />


      </Routes>


    </>

  );
}



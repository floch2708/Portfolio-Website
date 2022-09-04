import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/main-page/main-page';
import { About } from './components/about-page/about';
import { Contact } from './components/contact-page/contact';
import { Project } from './components/project-page/project';
import { Navbar } from "./components/navbar";
import { Box } from "@mui/material";


export const App = () => {
  return (

    <>
      <Box>
        <Navbar/>
      </Box>
      <Routes>
        <Route path = "/" element  = {<Home />} />
        <Route path = "/about" element  = {<About />} />
        <Route path = "/contact" element  = {<Contact />} />
        <Route path = "/project" element  = {<Project />} />
      </Routes>


    </>

  );
}



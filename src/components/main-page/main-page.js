import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@mui/material"

export const Home = () => {
	return (

		<>

		<h1>Hello from Main Page</h1>


		<nav>
            <Link to="/project"><Button variant="contained">Project</Button></Link>
            <Link to="/about"><Button variant="outlined">About Me</Button></Link>
            <Link to="/Contact"><Button variant="text">Contact Me</Button></Link>
         </nav>
		</>

		)
	

}


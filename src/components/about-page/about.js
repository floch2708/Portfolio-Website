import React from 'react'
import { Link } from "react-router-dom";

export const About = () => {
	return (

		<>
		<nav>
            <Link to="/">Home </Link>
            <Link to="/project">Project </Link>
            <Link to="/Contact">Contact Me</Link>
        </nav>

		<h1>Hello from about page</h1>

		</>

		)
	

}


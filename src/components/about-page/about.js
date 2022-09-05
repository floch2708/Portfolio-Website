import React from 'react'
import { Typography, Box, Container, Button, Avatar, Toolbar, styled} from '@mui/material';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",

});

export const About = () => {
	return (

		<>
		<main>
      		<Container maxWidth="max-content" sx={{ bgcolor: "white", paddingTop: '30px', paddingBottom: '30px' }}>
        		<Box>
        			<Typography variant = "h2" align = "center" style={{ justifyContent: "center", display: "flex" }} sx = {{color: "black"}}>
        				 <Avatar sx={{ align: "center", width: 192, height: 192 }} alt="Florian Charreau" 
						src="http://bubble-entertainment.com/wp-content/uploads/2017/06/2000x1200xcropped-Flo-Bulle28w-1-2000x1200.png.pagespeed.ic.3xKh7tb9hi.webp"/> 
        			</Typography>
        			<Typography variant = "h4" align = "center" sx = {{color: "black"}} gutterBottom>
        				Florian Charreau
        			</Typography>
					<Typography variant = "h6" align = "center" sx = {{paddingTop: "20px", color: "black"}}>
						I will have finished my Bachelor of Computer Science at Concordia University by December 2022, 
						and will be looking for a job afterwards. I am deeply passionated about technology, 
						and would be interested in an AI/ML, software developer, or data related position. 
						Please visit my project page as well as my GitHub and LinkedIn profile so you can see my accomplishements.
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{ color: "black"}} gutterBottom>
						---
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{ color: "black"}} gutterBottom>
						Before the pandemic I was a full time circus performer and bubbleologist. 
						Initially, I went back to school for a Bachelor of Computer Engineering 
						because I wanted to learn how to build equipments that would have been unique for my performances. 
						However, due to COVID-19 I had to reassess my situation and decided to make a career change to be in a more 
						stable field, and this is also why I changed my degree to Computer Science.
					</Typography>
        		</Box>
      		</Container>


		</main>

		<footer>
			<Container maxWidth="max-content" sx = {{display: {xs: "none", sm: "block"}}}>
				<StyledToolbar>
					<Button startIcon = {<GitHubIcon/>} sx = {{color: "black" }}>GitHub</Button>
					<Button startIcon = {<ArticleIcon/>} sx = {{color: "black" }}>Resume</Button>
					<Button startIcon = {<LinkedInIcon/>} sx = {{color: "black" }}>LinkedIn</Button>
				</StyledToolbar>
			</Container>
			<Container maxWidth="max-content" sx = {{display: {xs: "block", sm: "none"}}}>
				<StyledToolbar>
					<Button startIcon = {<GitHubIcon/>} sx = {{color: "black" }}></Button>
					<Button startIcon = {<ArticleIcon/>} sx = {{color: "black" }}></Button>
					<Button startIcon = {<LinkedInIcon/>} sx = {{color: "black" }}></Button>
				</StyledToolbar>
			</Container>
		</footer>

		</>

		)
	

}


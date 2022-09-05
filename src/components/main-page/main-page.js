import React from 'react';
import { Typography, Box, Container, Button} from '@mui/material';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import LanguageIcon from '@mui/icons-material/Language';



export const Home = () => {
	return (

		<>
		<main>
      		<Container maxWidth="max-content" sx={{ alignItems: "center", display: {xs: "none", sm: "block"}, bgcolor: "white", paddingTop: '30px', paddingBottom: '30px' }}>
        		<Box>
        			<Typography variant = "h2" align = "center" sx = {{color: "black"}}>
        				<BubbleChartIcon  fontSize = "large"/>
        			</Typography>
        			<Typography variant = "h1" align = "center" sx = {{paddingTop: "30px", color: "black"}} gutterBottom>
        				Hello, I am Florian Charreau
        			</Typography>
					<Typography variant = "h4" align = "center" sx = {{paddingTop: "20px", color: "black"}}>
						My fields of interest are:
					</Typography>
					<Typography variant = "h5" align = "center" sx = {{paddingTop: "5px", color: "black"}} gutterBottom>
						AI/ML
					</Typography>
					<Typography variant = "h5" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Science
					</Typography>
					<Typography variant = "h5" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Analysis
					</Typography>
					<Typography variant = "h5" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Engineering 
					</Typography>
					<Typography variant = "h5" align = "center" sx = {{color: "black"}} gutterBottom>
						Software Development
					</Typography>
					
        		</Box>
      		</Container>

      		<Container maxWidth="max-content" sx={{ display: {xs: "block", sm: "none"}, bgcolor: "white", paddingTop: '30px', paddingBottom: '30px' }}>
        		<Box>
        			<Typography variant = "h2" align = "center" sx = {{color: "black"}}>
        				<BubbleChartIcon  fontSize = "large"/>
        			</Typography>
        			<Typography variant = "h4" align = "center" sx = {{paddingTop: "30px", color: "black"}} gutterBottom>
        				Hello, I am Florian Charreau
        			</Typography>
					<Typography variant = "h5" align = "center" sx = {{paddingTop: "20px", color: "black"}}>
						My fields of interest are:
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{paddingTop: "5px", color: "black"}} gutterBottom>
						AI/ML
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Science
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Analysis
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{ color: "black"}} gutterBottom>
						Data Engineering 
					</Typography>
					<Typography variant = "h6" align = "center" sx = {{color: "black"}} gutterBottom>
						Software Development
					</Typography>
					
        		</Box>
      		</Container>
		</main>
		<footer>
			<Button startIcon = {<LanguageIcon/>} sx = {{ margin: "20px", color: "black" }}>Français</Button>
		</footer>

		</>

		)
	

}


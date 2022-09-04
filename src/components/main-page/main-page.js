import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box } from '@mui/material';
import Container from '@mui/material/Container';

export const Home = () => {
	return (

		<>
		<CssBaseline />
      	<Container maxWidth="xm">
        	<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        		<Typography variant = "h1" align = "center" sx = {{bgcolor: '#cfe8fc', color: "black"}}>Hello, I am Florian Charreau</Typography>
				<Typography variant = "h6" align = "center" sx = {{bgcolor: '#cfe8fc', color: "black"}}>SoftWare Developer & AI/ML/DS </Typography>
        	</Box>
      	</Container>
		
		</>

		)
	

}


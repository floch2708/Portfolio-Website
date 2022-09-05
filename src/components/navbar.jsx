
import { AppBar, Toolbar, styled, Typography, Button, Avatar} from '@mui/material'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import { Link } from "react-router-dom";


const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const WhiteButton = styled(Button)({
	color: "white",
});


export const Navbar = () => {
	return (

		<>
			<AppBar position = "sticky" sx = {{ bgcolor: "black"}}>
				<StyledToolbar>

					<Typography variant = "h6" sx = {{display: {xs: "none", sm: "block"}}}>
						<BubbleChartIcon/>
					</Typography>

					<Typography variant = "h6" sx = {{display: {xs: "none", sm: "block"}}}>
						<Link to="/"><WhiteButton startIcon = {<HomeIcon/>}>Home</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{display: {xs: "block", sm: "none"}}}>
						<Link to="/"><WhiteButton startIcon = {<HomeIcon/>}></WhiteButton></Link>
					</Typography>

					<Typography variant = "h6" sx = {{display: {xs: "none", sm: "block"}}}>
						<Link to="/about"><WhiteButton startIcon = {<Avatar alt="Florian Charreau" 
						src="http://bubble-entertainment.com/wp-content/uploads/2017/06/2000x1200xcropped-Flo-Bulle28w-1-2000x1200.png.pagespeed.ic.3xKh7tb9hi.webp"/>}>About Me</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
					<Link to="/about"><WhiteButton><Avatar alt="Florian Charreau" 
						src="http://bubble-entertainment.com/wp-content/uploads/2017/06/2000x1200xcropped-Flo-Bulle28w-1-2000x1200.png.pagespeed.ic.3xKh7tb9hi.webp"/>
					</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "none", sm: "block"}}}>
						<Link to="/project"><WhiteButton startIcon = {<CodeIcon/>}>My Projects</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
					<Link to="/project"><WhiteButton startIcon = {<CodeIcon/>}></WhiteButton></Link>
					</Typography>

					<Typography variant = "h6" sx = {{ display: {xs: "none", sm: "block"}}}>
						<Link to="/contact"><WhiteButton startIcon = {<ContactPageIcon/>}>Contact Me</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
						<Link to="/contact"><WhiteButton startIcon = {<ContactPageIcon/>}></WhiteButton></Link>
					</Typography>
				</StyledToolbar>
			</AppBar>
		</>
		)
	
};
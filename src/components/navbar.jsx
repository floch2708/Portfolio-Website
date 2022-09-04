
import { AppBar, Toolbar, styled, Typography, Button} from '@mui/material'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Avatar from '@mui/material/Avatar';
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

					<Typography variant = "h6">
						<BubbleChartIcon/>
					</Typography>

					<Link to="/"><WhiteButton><HomeIcon/></WhiteButton></Link>

					<Typography variant = "h6" sx = {{display: {xs: "none", sm: "block"}}}>
						<Link to="/about"><WhiteButton>About Me</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
					<Link to="/about"><WhiteButton><Avatar alt="Florian Charreau" 
						src="http://bubble-entertainment.com/wp-content/uploads/2017/06/2000x1200xcropped-Flo-Bulle28w-1-2000x1200.png.pagespeed.ic.3xKh7tb9hi.webp"/>
					</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "none", sm: "block"}}}>
						<Link to="/project"><WhiteButton>My Projects</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
					<Link to="/project"><WhiteButton><CodeIcon/></WhiteButton></Link>
					</Typography>

					<Typography variant = "h6" sx = {{ display: {xs: "none", sm: "block"}}}>
						<Link to="/contact"><WhiteButton>Contact Me</WhiteButton></Link>
					</Typography>
					<Typography variant = "h6" sx = {{ display: {xs: "block", sm: "none"}}}>
						<Link to="/contact"><WhiteButton><ContactPageIcon/></WhiteButton></Link>
					</Typography>
				</StyledToolbar>
			</AppBar>
		</>
		)
	
};
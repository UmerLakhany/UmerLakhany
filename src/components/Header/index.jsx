import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Box,
	Container,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import { color } from "../../style/color";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const navItemStyle = {
	color: [color.primary],
	fontWeight: 600,
	position: "relative",
	textTransform: "capitalize",
	fontSize: { xs: "0.85rem", sm: "1rem" },
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: -2,
		left: 0,
		width: 0,
		height: "2px",
		backgroundColor: [color.primary],
		transition: "width 0.3s ease",
	},
	"&:hover::after": {
		width: "100%",
	},
};

function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleDrawer = () => setMobileOpen(!mobileOpen);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const drawer = (
		<Box
			sx={{
				width: 250,
				bgcolor: [color.lightBlack],
				height: "100%",
				px: 2,
				py: 3,
			}}
			onClick={toggleDrawer}
		>
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ScrollLink
							to={item.toLowerCase()}
							smooth
							duration={500}
							spy
							offset={-70}
							style={{ width: "100%", cursor: "pointer", padding: "12px 0" }}
						>
							<ListItemText
								primary={item}
								primaryTypographyProps={{
									color: [color.primary],
									fontWeight: 600,
									fontSize: "1rem",
									textAlign: "center",
								}}
							/>
						</ScrollLink>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<AppBar
			position="fixed"
			elevation={scrolled ? 4 : 0}
			sx={{
				transition: "all 0.4s ease",
				backgroundColor: scrolled ? color.lightBlack : "transparent",
				backdropFilter: scrolled ? "blur(10px)" : "none",
				boxShadow: scrolled ? `0 4px 20px ${color.lightBlack} )` : "none",
			}}
		>
			<Container>
				<Toolbar sx={{ py: 1, px: { xs: 1, sm: 2, md: 0 } }}>
					{/* Logo */}
					<Typography
						variant="h6"
						sx={{
							flexGrow: 1,
							fontWeight: 700,
							cursor: "pointer",
							fontSize: { xs: "1.1rem", sm: "1.4rem" },
							letterSpacing: 1,
							background: `linear-gradient(90deg,  ${color.primary}, ${color.secondary})`,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							animation: "bounce 2s infinite",
						}}
					>
						Umer Lakhany
					</Typography>

					{/* Desktop Nav */}
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{navItems.map((item) => (
							<ScrollLink
								key={item}
								to={item.toLowerCase()}
								smooth
								duration={500}
								spy
								offset={-70}
								style={{ margin: "0 10px", cursor: "pointer" }}
							>
								<Button sx={navItemStyle}>{item}</Button>
							</ScrollLink>
						))}
					</Box>

					{/* Mobile Menu Icon */}
					<IconButton
						color="inherit"
						edge="end"
						aria-label="menu"
						onClick={toggleDrawer}
						sx={{ display: { md: "none" } }}
					>
						{mobileOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
					</IconButton>

					{/* Drawer for Mobile */}
					<Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
						{drawer}
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;

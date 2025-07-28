import React from "react";
import { Box, Container, Typography, IconButton, Stack, Grid, Link, Button } from "@mui/material";
import {
	GitHub,
	LinkedIn,
	Email,
	LocationOn,
	Phone,
	Instagram,
	Facebook,
} from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import fiverrLogo from "../../assets/fiverr-logo.png";
import { motion } from "framer-motion";
import { color } from "../../style/color";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const navButtonStyle = {
	color: [color.primary],
	fontWeight: 500,
	textTransform: "none",
	fontSize: "1rem",
	px: 0,
	position: "relative",
	"&::after": {
		content: '""',
		position: "absolute",
		left: 0,
		bottom: -2,
		width: "0%",
		height: "2px",
		backgroundColor: [color.primary],
		transition: "width 0.3s ease",
	},
	"&:hover::after": {
		width: "100%",
	},
};

function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: [color.lightBlack],
				color: [color.text],
				py: 4,
			}}
		>
			<Container>
				<Grid container spacing={4} justifyContent="space-between">
					{/* Brand Info */}
					<Grid item size={{ sm: 6, xs: 12, md: 3.5 }}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								letterSpacing: 1,
								cursor: "pointer",
								fontSize: "1.3rem",
								background: `linear-gradient(90deg,  ${color.primary}, ${color.secondary})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								animation: "bounce 2s infinite",
								mb: 3,
							}}
						>
							Umer Lakhany
						</Typography>
						<Typography variant="body1" sx={{ mt: 1, color: [color.text] }}>
							I'm a{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								Web & Mobile Developer
							</Box>{" "}
							focused on creating{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								fast
							</Box>
							,{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								responsive
							</Box>
							, and{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								visually appealing
							</Box>{" "}
							digital experiences. With a{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								commitment to quality
							</Box>{" "}
							and{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								attention to detail
							</Box>
							, I transform ideas into{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								user-friendly applications
							</Box>{" "}
							that{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								elevate your brand
							</Box>{" "}
							and{" "}
							<Box component="span" sx={{ color: [color.primary], fontWeight: 500 }}>
								engage your audience
							</Box>
							.
						</Typography>
					</Grid>

					{/* Quick Links */}
					<Grid item size={{ sm: 6, xs: 12, md: 2 }}>
						<Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
							Quick Links
						</Typography>
						<Stack spacing={1}>
							{navItems.map((item) => (
								<ScrollLink
									key={item}
									to={item.toLowerCase()}
									smooth
									duration={500}
									spy
									offset={-70}
								>
									<Button sx={navButtonStyle}>{item}</Button>
								</ScrollLink>
							))}
						</Stack>
					</Grid>

					{/* Contact Me */}
					<Grid item size={{ sm: 6, xs: 12, md: 3 }}>
						<Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
							Contact Me
						</Typography>
						<Stack spacing={2}>
							<Stack direction="row" spacing={1} alignItems="center">
								<Email fontSize="small" sx={{ color: [color.primary] }} />
								<Link
									href="mailto:lakhanyumer@gmail.com"
									sx={{ color: [color.primary], fontWeight: 500 }}
									underline="hover"
								>
									lakhanyumer@gmail.com
								</Link>
							</Stack>
							<Stack direction="row" spacing={1} alignItems="center">
								<Phone fontSize="small" sx={{ color: [color.primary] }} />
								<Typography variant="body1" sx={{ color: [color.text] }}>
									+92 327 2298414
								</Typography>
							</Stack>
							<Stack direction="row" spacing={1} alignItems="center">
								<LocationOn fontSize="small" sx={{ color: [color.primary] }} />
								<Typography variant="body1" sx={{ color: [color.text] }}>
									Karachi, Pakistan
								</Typography>
							</Stack>
						</Stack>
					</Grid>

					{/* Follow Me */}
					<Grid item size={{ sm: 6, xs: 12, md: 3.5 }}>
						<Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
							Follow Me
						</Typography>
						<Stack direction="row" spacing={1}>
							{[
								{
									icon: <GitHub />,
									link: "https://github.com/UmerLakhany",
									label: "GitHub",
								},
								{
									icon: <LinkedIn />,
									link: "#",
									label: "LinkedIn",
								},
								{
									icon: <Instagram />,
									link: "#",
									label: "Instagram",
								},
								{
									icon: <Facebook />,
									link: "#",
									label: "Facebook",
								},
								{
									icon: (
										<Box
											component="img"
											src={fiverrLogo}
											alt="Fiverr"
											sx={{ width: 24, height: 24, objectFit: "contain" }}
										/>
									),
									link: "https://www.fiverr.com/s/389Ll19",
									label: "Fiverr",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.95 }}
								>
									<IconButton
										component="a"
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.label}
										sx={{
											color: [color.primary],
											transition: "0.3s",
										}}
									>
										{item.icon}
									</IconButton>
								</motion.div>
							))}
						</Stack>
					</Grid>
				</Grid>
				<Typography variant="body1" align="center" sx={{ mt: 5 }}>
					© {new Date().getFullYear()} Umer Lakhany. All rights reserved.
				</Typography>
			</Container>
		</Box>
	);
}

export default Footer;

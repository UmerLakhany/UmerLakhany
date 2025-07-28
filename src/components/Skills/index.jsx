import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import mobileapp from "../../assets/mobile-app-development.png";
import portfolioWebsite from "../../assets/portfolio-website.png";
import mernstack from "../../assets/mern-stack.png";
import { color } from "../../style/color";

const skills = [
	"JavaScript",
	"HTML",
	"CSS",
	"React",
	"Next.js",
	"Angular",
	"Node.js",
	"Express.js",
	"API integration",
	"MongoDB",
	"Firestore",
	"Firebase",
	"Database management",
	"Full stack web development",
	"MEAN stack",
	"React Native",
	"Mobile apps development",
	"Tailwind CSS",
	"Bootstrap",
	"Web hosting",
	"Server hosting",
	"Domain & hosting",
	"Portfolio website development",
	"Dashboards development",
	"Website bug fixes",
];

const skillIcons = {
	React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	"Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	"Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	"Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
	"React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
	Firestore: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
	MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	"MEAN stack": mernstack,
	HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
	CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
	"Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
	Bootstrap:
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
	JavaScript:
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
	"Website bug fixes": "https://cdn-icons-png.flaticon.com/512/595/595067.png",
	"Portfolio website development": portfolioWebsite,
	"Web hosting": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
	"Server hosting": "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
	"Domain & hosting": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
	"Dashboards development": "https://cdn-icons-png.flaticon.com/512/2620/2620936.png",
	"API integration": "https://cdn-icons-png.flaticon.com/512/5953/5953761.png",
	"Mobile apps development": mobileapp,
	"Full stack web development": "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
	"Database management": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
};

function Skills() {
	return (
		<Box id="skills" sx={{ py: 8, backgroundColor: [color.lightBlack] }}>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							fontWeight: 700,
							textAlign: "center",
							mb: 5,
							color: [color.text],
						}}
					>
						My Skills
					</Typography>
					<Grid container spacing={3} justifyContent="center">
						{skills.map((skill) => (
							<Grid item xs={6} sm={4} md={3} lg={2} key={skill}>
								<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
									<Paper
										elevation={3}
										sx={{
											p: 2,
											textAlign: "center",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											h: "100%",
											gap: 1,
											bgcolor: [color.blackish],
											color: [color.text],
										}}
									>
										{skillIcons[skill] && (
											<img
												src={skillIcons[skill]}
												alt={skill}
												style={{ width: 50, height: 50, marginBottom: 8 }}
											/>
										)}
										<Typography variant="body1" fontWeight={600}>
											{skill}
										</Typography>
									</Paper>
								</motion.div>
							</Grid>
						))}
					</Grid>
				</motion.div>
			</Container>
		</Box>
	);
}

export default Skills;

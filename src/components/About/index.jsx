import React from "react";
import { Box, Container, Typography, Grid, Chip, Stack, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
} from "@mui/lab";
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

function About() {
	return (
		<Box
			id="about"
			sx={{
				py: 10,
				backgroundColor: [color.lightBlack],
				color: [color.text],
			}}
		>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						textAlign="center"
						fontWeight="bold"
						sx={{
							mb: 5,
						}}
					>
						About Me
					</Typography>

					<Grid container spacing={4} alignItems="center">
						<Grid item xs={12} md={12}>
							<Paper elevation={3} sx={{ p: 3, bgcolor: [color.blackish] }}>
								<Typography variant="body1" sx={{ color: [color.text] }}>
									Hi, I'm a{" "}
									<Box component="span" fontWeight="bold" color={color.primary}>
										full-stack developer
									</Box>{" "}
									with a passion for building
									<Box component="span" fontWeight="bold">
										{" "}
										smooth
									</Box>
									,
									<Box component="span" fontWeight="bold">
										{" "}
										scalable
									</Box>
									, and
									<Box component="span" fontWeight="bold">
										{" "}
										visually appealing
									</Box>{" "}
									digital experiences. My journey began with
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										HTML
									</Box>{" "}
									and
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										CSS
									</Box>
									, but my curiosity quickly pushed me into advanced technologies
									like
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										React.js
									</Box>
									,
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										Next.js
									</Box>
									,
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										Node.js
									</Box>
									,
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										Firebase
									</Box>
									, and
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										MongoDB
									</Box>
									.
									<br />
									<br />I specialize in crafting{" "}
									<Box component="span" fontWeight="bold">
										responsive websites
									</Box>
									, fixing
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										tricky bugs
									</Box>
									, and turning
									<Box component="span" fontWeight="bold">
										{" "}
										complex ideas
									</Box>{" "}
									into real-world
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										web and mobile applications
									</Box>
									.
									<br />
									<br />
									Whether it's building a sleek
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										portfolio site
									</Box>
									, integrating
									<Box component="span" fontWeight="bold">
										{" "}
										powerful APIs
									</Box>
									, or deploying
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										full-stack apps
									</Box>
									, I bring
									<Box component="span" fontWeight="bold">
										{" "}
										energy
									</Box>
									,
									<Box component="span" fontWeight="bold">
										{" "}
										focus
									</Box>
									, and a
									<Box component="span" fontWeight="bold">
										{" "}
										problem-solving mindset
									</Box>{" "}
									to every project.
									<br />
									<br />I love{" "}
									<Box component="span" fontWeight="bold">
										collaborating
									</Box>{" "}
									with clients, transforming
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										visions
									</Box>{" "}
									into
									<Box component="span" fontWeight="bold">
										{" "}
										pixel-perfect products
									</Box>
									, and delivering
									<Box component="span" fontWeight="bold" color={color.primary}>
										{" "}
										value through code
									</Box>
									. Let's build something amazing together!
								</Typography>
								<Typography
									variant="subtitle2"
									sx={{ mt: 2, fontStyle: "italic", color: "#aaa" }}
								>
									– Umer Lakhany, Developer & Problem Solver 🚀
								</Typography>
							</Paper>
						</Grid>
					</Grid>

					{/* Skills Section */}
					<Box sx={{ mt: 6 }}>
						<Typography variant="h5" gutterBottom fontWeight="bold">
							My Skills
						</Typography>
						<Stack direction="row" flexWrap="wrap" gap={1}>
							{skills.map((skill, i) => (
								<Chip
									key={i}
									label={skill}
									sx={{
										bgcolor: [color.blackish],
										color: [color.primary],
										fontSize: 13,
										fontWeight: 700,
										borderRadius: "8px",
										transition: "0.3s ease",
										"&:hover": {
											bgcolor: [color.primary],
											color: [color.lightBlack],
										},
									}}
								/>
							))}
						</Stack>
					</Box>

					{/* Timeline Section */}
					<Box sx={{ mt: 8 }}>
						<Typography variant="h5" gutterBottom fontWeight="bold">
							My Journey
						</Typography>
						<Timeline position="alternate">
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.primary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Started as a Frontend Developer
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.secondary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Mastered HTML, CSS, JavaScript, and Bootstrap
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.primary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Explored React.js, Tailwind CSS, and Firebase
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.secondary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Built Dynamic Frontends and Dashboards
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.primary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Learned Node.js, Express, MongoDB & API Integration
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.secondary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Started Building Full-Stack Web & Mobile Apps
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.primary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Worked with React Native & Firebase Auth/Firestore
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.secondary] }} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Deployed Live Websites & Apps with Hosting & Domains
									</Typography>
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot sx={{ bgcolor: [color.primary] }} />
								</TimelineSeparator>
								<TimelineContent>
									<Typography sx={{ color: [color.text] }}>
										Currently working on Custom Client Projects & Scaling
									</Typography>
								</TimelineContent>
							</TimelineItem>
						</Timeline>
					</Box>

					{/* Call to Action */}
					<Box sx={{ textAlign: "center", mt: 8 }}>
						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							justifyContent="center"
						>
							<Button
								variant="outlined"
								href="#projects"
								sx={{
									px: 5,
									py: 1.8,
									borderRadius: "12px",
									fontWeight: "bold",
									color: [color.primary],
									border: `2px solid ${color.primary}`,
									"&:hover": {
										background: [color.primary],
										color: [color.lightBlack],
									},
								}}
							>
								View My Projects
							</Button>
							<Button
								variant="outlined"
								href="#contact"
								sx={{
									px: 5,
									py: 1.8,
									borderRadius: "12px",
									fontWeight: "bold",
									color: [color.primary],
									border: `2px solid ${color.primary}`,
									"&:hover": {
										background: [color.primary],
										color: [color.lightBlack],
									},
								}}
							>
								Contact Me
							</Button>
						</Stack>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}

export default About;

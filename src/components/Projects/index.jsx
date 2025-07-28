import React, { useState } from "react";
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Button,
	Grid,
	Modal,
	Backdrop,
	Fade,
	Stack,
	IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "@mui/icons-material";

import kevinGif from "../../assets/KevinCripe/kevinCripe_web_gif.gif";
import kevinImg1 from "../../assets/KevinCripe/kevinCripe_web_img.png";
import aitheraGif from "../../assets/Aithera/aithera_web_video.gif";
import aitheraImg1 from "../../assets/Aithera/aithera_web_img.png";
import amirGif from "../../assets/Amir/amir_web_gif.gif";
import amirImg1 from "../../assets/Amir/amir_web_img.png";
import eccoGif from "../../assets/EccoSphere/sokoverce_web_gif.gif";
import eccoImg1 from "../../assets/EccoSphere/Ecco-sphere_web_img_1.png";
import eccoImg2 from "../../assets/EccoSphere/Ecco-sphere_web_img_2.png";
import eccoImg3 from "../../assets/EccoSphere/Ecco-sphere_web_img_3.png";
import gameGif from "../../assets/GameViral/game_viral_web_gif.gif";
import gameImg1 from "../../assets/GameViral/game_viral_web_img.png";
import sokoverceGif from "../../assets/Sokoverce/sokoverce_web_gif.gif";
import sokoverceImg1 from "../../assets/Sokoverce/sokoverce_web_img.png";
import sokoverceImg2 from "../../assets/Sokoverce/sokoverce_web_img-2.png";
import sokoverceImg3 from "../../assets/Sokoverce/sokoverce_web_img-3.png";
import starcoinGif from "../../assets/Starcoins/sokoverce_web_gif.gif";
import starcoinImg1 from "../../assets/Starcoins/starcoins_web_img-1.png";
import starcoinImg2 from "../../assets/Starcoins/starcoins_web_img-2.png";
import starcoinImg3 from "../../assets/Starcoins/starcoins_web_img-3.png";
import starcoinImg4 from "../../assets/Starcoins/starcoins_web_img-4.png";
import starcoinImg5 from "../../assets/Starcoins/starcoins_web_img-5.png";
import multivendorGif from "../../assets/multivendor/sokoverce_web_gif.gif";
import multivendorImg1 from "../../assets/multivendor/velvet-coin_web_img-1.png";
import multivendorImg2 from "../../assets/multivendor/velvet-coin_web_img-2.png";
import multivendorImg3 from "../../assets/multivendor/velvet-coin_web_img-3.png";
import { color } from "../../style/color";

const projects = [
	{
		title: "Kevin Cripe – Motivational Speaker & Author",
		description:
			"I developed a fully custom, responsive, and animated HTML/CSS portfolio website for my client, Kevin Cripe — a motivational speaker and author with no technical background. The website not only showcases his profile and work but also includes a section where he can sell his books, which I successfully integrated with his Amazon account. To ensure smooth functionality, I also implemented a contact form with proper integration, created a custom favicon for brand identity, and guided Kevin through the entire website so he could easily understand how everything works. Additionally, I handled the hosting setup and domain integration on GoDaddy.",
		liveLink: "https://kevincripemotivationalspeaker.com",
		gif: kevinGif,
		screenshots: [kevinImg1],
	},
	{
		title: "Amir Moussous — Software Engineer & Data Analyst",
		description:
			"I designed and developed a modern, fully responsive personal portfolio website for my client, Amir Moussous, using Vite + React with a completely custom design tailored to his needs. Amir provided his CV and LinkedIn profile, and based on that information, I created a clean and professional layout that effectively showcases his skills and experience. The website features smooth animations for an engaging user experience, along with a fully functional contact form for easy communication. This project reflects both attention to detail and a strong understanding of personal branding.",
		liveLink: "https://amir-portfolio-rho.vercel.app",
		gif: amirGif,
		screenshots: [amirImg1],
	},
	{
		title: "Game Viral - Turn game characters into viral clips",
		description:
			"I developed a fully custom and modern website for my client, Cameron, using HTML and CSS. The site was designed from scratch to match the brand identity of Game Viral — a platform focused on turning game characters into viral clips. Key features include a video background in the hero section for an eye-catching first impression, and a functional contact form for user interaction. The design is clean, responsive, and optimized for both performance and visual appeal.",
		liveLink: "https://game-viral.vercel.app",
		gif: gameGif,
		screenshots: [gameImg1],
	},
	{
		title: "Sokoverse - Electronics Reseller & Refurbisher",
		description:
			"I created a 3-page modern and fully responsive website for my client, Chiyanagata, using HTML and CSS with a completely custom design. The website, Sokoverse, represents an electronics reseller and refurbisher business and was built to reflect a clean, professional, and trustworthy brand image. In addition to the custom layout, I also implemented a contact form integration to ensure smooth user interaction. The website is fully optimized for different screen sizes, providing a seamless experience across all devices. The design was provided by the client, and I transformed it into a feature-rich, interactive web application with seamless frontend-backend communication, PWA support, and a clean, modern UI. I also handled the deployment of both the frontend and backend, ensuring the app is live, stable, and accessible.",
		liveLink: "https://starcoins.vercel.app",
		gif: sokoverceGif,
		screenshots: [sokoverceImg1, sokoverceImg2, sokoverceImg3],
	},
	{
		title: "Starcoins - Long Distance Dating Web & App",
		description:
			"I developed a full-stack Progressive Web App (PWA) for my client, Sahara, using Vite + React for the frontend and Node.js with Express.js for backend API integration. The goal was to create a responsive website that also functions like a mobile app, built specifically for personal use between the client and his friends. The platform enables users to add, update, and delete ideas, organize them into custom lists, and mark favorite ideas for quick access. Users can also attach supporting links to each idea and use a 'hide idea' feature to keep certain ideas private from their partner—adding a layer of personalization and privacy.",
		liveLink: "https://kevincripemotivationalspeaker.com",
		gif: starcoinGif,
		screenshots: [starcoinImg1, starcoinImg2, starcoinImg3, starcoinImg4, starcoinImg5],
	},
	{
		title: "Ecco Sphere - Magnetic Mailbox Sign",
		description:
			"I developed a three-page business website for my client, Ivan Jocic, using Vite + React, with a strong focus on performance, responsiveness, and modern design. The client needed a platform that would be accessible globally, so I implemented a custom multilingual feature, allowing users to translate the website into their preferred language—enhancing both reach and user experience. The website was built with a fully custom design, aligned with the brand identity of Ecco Sphere, an innovative startup focused on eliminating unwanted advertising and junk mail. I also added multi-language image support, ensuring all visuals align with the selected language for a fully localized experience. The design is fully responsive, offering a seamless experience across all devices.",
		liveLink: "https://ecco-sphere.vercel.app",
		gif: eccoGif,
		screenshots: [eccoImg1, eccoImg2, eccoImg3],
	},
	{
		title: "Velvet Coin - multi-vendor e-commerce platform",
		description:
			"I redesigned six pages of a React-based e-commerce website for my client, Onomeapoe. The design was provided by the client, and I implemented it into the existing website with a focus on modern UI design and full responsiveness across all devices. The website is built for a multi-vendor e-commerce platform that enables users to browse and purchase products seamlessly. My work involved updating the layout, styling, and responsiveness to match the client’s vision while ensuring a smooth user experience.",
		liveLink: "https://multi-vendor-ecommerce-app-eosin.vercel.app",
		gif: multivendorGif,
		screenshots: [multivendorImg1, multivendorImg2, multivendorImg3],
	},
	{
		title: "Aithera Ecommerce - Online Selling Via Shopify",
		description:
			"I developed a single-page website for my client, Bunnyfans, using HTML and CSS, based on their provided design. The project, Aithera, is focused on online product selling via Shopify. My role involved converting the client’s design into a fully functional and professional webpage, ensuring responsive layout and smooth user experience. I also integrated the client’s Shopify account, connecting the products directly to the website for seamless shopping functionality.",
		liveLink: "https://aithera.vercel.app",
		gif: aitheraGif,
		screenshots: [aitheraImg1],
	},
];

function Projects() {
	const [open, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [showAllProjects, setShowAllProjects] = useState(false);

	const handleOpen = (project) => {
		setSelectedProject(project);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const toggleProjects = () => {
		setShowAllProjects((prev) => !prev);
	};

	return (
		<Box
			id="projects"
			sx={{ py: 10, backgroundColor: [color.lightBlack], color: [color.text] }}
		>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 5 }}>
						My Projects
					</Typography>

					<Grid container spacing={4}>
						<AnimatePresence initial={false}>
							{(showAllProjects ? projects : projects.slice(0, 6)).map(
								(project, idx) => (
									<Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
										<motion.div
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.98 }}
											initial={{ opacity: 0, y: 50 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: idx * 0.1 }}
										>
											<Card
												sx={{
													bgcolor: [color.blackish],
													color: [color.text],
													borderRadius: 3,
													boxShadow: 3,
													height: "100%",
													display: "flex",
													flexDirection: "column",
													transition: "transform 0.3s ease-in-out",
													"&:hover": {
														boxShadow: 6,
													},
												}}
											>
												<CardMedia
													component="img"
													height="200"
													image={project.gif}
													alt={project.title}
													sx={{
														cursor: "pointer",
														transition: "transform 0.4s ease",
														"&:hover": {
															transform: "scale(1.05)",
														},
													}}
													onClick={() => handleOpen(project)}
												/>
												<CardContent sx={{ flexGrow: 1 }}>
													<Typography
														variant="h6"
														gutterBottom
														sx={{ color: [color.primary] }}
													>
														{project.title}
													</Typography>
													<Typography
														variant="body1"
														color={color.text}
														sx={{
															mb: 2,
															display: "-webkit-box",
															overflow: "hidden",
															WebkitBoxOrient: "vertical",
															WebkitLineClamp: 3,
															textOverflow: "ellipsis",
														}}
													>
														{project.description}
													</Typography>

													<Button
														variant="contained"
														href={project.liveLink}
														target="_blank"
														rel="noopener noreferrer"
														sx={{
															px: 5,
															py: 1.8,
															borderRadius: "12px",
															fontWeight: "bold",
															color: [color.primary],
															border: `2px solid ${color.primary}`,
															bgcolor: "transparent",
															"&:hover": {
																background: [color.primary],
																color: [color.lightBlack],
															},
														}}
													>
														Live Site
													</Button>
												</CardContent>
											</Card>
										</motion.div>
									</Grid>
								)
							)}
						</AnimatePresence>
					</Grid>

					<Box mt={4} textAlign="center">
						<Button
							onClick={toggleProjects}
							sx={{
								backgroundColor: [color.primary],
								color: [color.lightBlack],
								"&:hover": {
									backgroundColor: [color.primary],
								},
								textTransform: "none",
								fontWeight: 600,
								px: 4,
								py: 1,
								borderRadius: "999px",
							}}
						>
							{showAllProjects ? "See Less" : "See More"}
						</Button>
					</Box>

					{/* Modal Popup */}
					<Modal
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{ timeout: 500 }}
					>
						<Fade in={open}>
							<Box
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									width: "90%",
									maxWidth: 900,
									bgcolor: [color.blackish],
									color: [color.text],
									borderRadius: 2,
									boxShadow: 24,
									p: 4,
									outline: "none",
									maxHeight: "90vh",
									overflowY: "auto",
								}}
							>
								<IconButton
									aria-label="close"
									onClick={handleClose}
									sx={{
										position: "absolute",
										top: 8,
										right: 8,
										color: [color.text],
										backgroundColor: [color.blackish],
										"&:hover": {
											backgroundColor: [color.lightBlack],
											color: [color.primary],
										},
									}}
								>
									<Close />
								</IconButton>
								{selectedProject && (
									<>
										<Typography
											variant="h5"
											gutterBottom
											sx={{ color: [color.primary] }}
										>
											{selectedProject.title}
										</Typography>
										<Typography variant="body1" sx={{ mb: 2 }}>
											{selectedProject.description}
										</Typography>
										<CardMedia
											component="img"
											image={selectedProject.gif}
											alt="Project GIF"
											sx={{ borderRadius: 2, mb: 3 }}
										/>
										{selectedProject.screenshots.length > 0 && (
											<Stack direction="row" spacing={2} flexWrap="wrap">
												{selectedProject.screenshots.map((img, index) => (
													<Box key={index} sx={{ width: "100%" }}>
														<CardMedia
															component="img"
															image={img}
															alt={`Screenshot ${index + 1}`}
															sx={{ borderRadius: 2, mb: 6 }}
														/>
													</Box>
												))}
											</Stack>
										)}
									</>
								)}
							</Box>
						</Fade>
					</Modal>
				</motion.div>
			</Container>
		</Box>
	);
}

export default Projects;

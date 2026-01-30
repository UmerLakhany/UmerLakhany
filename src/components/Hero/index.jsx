import React from "react";
import { Box, Container, Typography, Button, Grid, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Instagram, Facebook, KeyboardArrowDown } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import bgvideo from "../../assets/bg-video.mp4";
import profile from "../../assets/profile.jpg";
import fiverrLogo from "../../assets/fiverr-logo.png";
import { color } from "../../style/color";

function Hero() {
	return (
		<Box
			id="home"
			sx={{
				position: "relative",
				minHeight: "100vh",
				color: [color.text],
				display: "flex",
				alignItems: "center",
				overflow: "hidden",
				textAlign: "left",
			}}
		>
			{/* 🔥 Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: -1,
					filter: "brightness(0.4)",
				}}
			>
				<source src={bgvideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<Container sx={{ py: { xs: 8, sm: 10, md: 12 } }}>
				<Grid container spacing={4} alignItems="center" justifyContent="space-between">
					<Grid item size={{ xs: 12, md: 7 }}>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							<Typography
								variant="h2"
								fontWeight={800}
								sx={{
									background: `linear-gradient(90deg,  ${color.primary}, ${color.secondary})`,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									mb: 2,
									fontSize: { xs: "2.5rem", md: "3.5rem" },
								}}
							>
								Hi, I'm Umer
							</Typography>

							<Typography
								variant="h4"
								fontWeight={600}
								sx={{
									color: [color.text],
									mb: 3,
									fontSize: { xs: "1.5rem", md: "2rem" },
								}}
							>
								<Typewriter
									options={{
										strings: [
											"Expert Web & App Developer",
											"MERN | React Native | Firebase",
											"Clean, Fast & Scalable Code",
										],
										autoStart: true,
										loop: true,
										delay: 40,
										deleteSpeed: 30,
									}}
								/>
							</Typography>

							<Typography
								variant="h6"
								sx={{
									color: [color.text],
									opacity: 0.95,
									mb: 4,
									maxWidth: { xs: "100%", md: "80%" },
									fontSize: { xs: "1rem", md: "1.15rem" },
									lineHeight: 1.7,
								}}
							>
								I’m a{" "}
								<Box component="span" fontWeight="bold" color={color.primary}>
									full-stack developer
								</Box>{" "}
								who builds
								<Box component="span" fontWeight="bold">
									{" "}
									modern websites
								</Box>
								,
								<Box component="span" fontWeight="bold">
									{" "}
									mobile apps
								</Box>
								,
								<Box component="span" fontWeight="bold">
									{" "}
									dashboards
								</Box>
								,
								<Box component="span" fontWeight="bold">
									{" "}
									portfolios
								</Box>
								, and
								<Box component="span" fontWeight="bold">
									{" "}
									scalable web solutions
								</Box>
								. I specialize in
								<Box component="span" fontWeight="bold" color={color.primary}>
									{" "}
									React.js
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
									React Native
								</Box>
								. Let’s{" "}
								<Box component="span" fontWeight="bold">
									build something amazing
								</Box>{" "}
								together!
							</Typography>

							<Stack
								direction={{ xs: "column", sm: "row" }}
								spacing={2}
								mb={4}
								alignItems={{ xs: "start", sm: "center" }}
								justifyContent="start"
							>
								<motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
									<Button
										variant="contained"
										size="large"
										href="#contact"
										sx={{
											px: 4,
											py: 1.6,
											borderRadius: "12px",
											background: `linear-gradient(90deg,  ${color.primary}, ${color.secondary})`,
											color: [color.lightBlack],
											fontWeight: 700,
											textTransform: "none",
											boxShadow: "0 6px 20px rgba(0, 255, 204, 0.3)",
											transition: "all 0.35s ease",
											border: `2px solid ${color.primary}`,
											"&:hover": {
												background: "transparent",
												color: [color.primary],
												boxShadow: "none",
											},
										}}
									>
										Get in Touch
									</Button>
								</motion.div>
							</Stack>

							<Stack direction="row" spacing={2}>
								{[
									{
										icon: <GitHub fontSize="medium" />,
										link: "https://github.com/UmerLakhany",
									},
									{
										icon: <LinkedIn fontSize="medium" />,
										link: "https://www.linkedin.com/in/umer-lakhany-05a8283a9",
									},
									{
										icon: <Instagram fontSize="medium" />,
										link: "https://www.instagram.com/lakhanyxx",
									},
									{
										icon: <Facebook fontSize="medium" />,
										link: "https://www.facebook.com/umar.lakhany",
									},
									{
										icon: (
											<Box
												component="img"
												src={fiverrLogo}
												alt="Fiverr"
												sx={{
													width: 24,
													height: 24,
													objectFit: "contain",
												}}
											/>
										),
										link: "https://www.fiverr.com/s/389Ll19",
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
											sx={{
												color: [color.text],
												width: 48,
												height: 48,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{item.icon}
										</IconButton>
									</motion.div>
								))}
							</Stack>
						</motion.div>
					</Grid>

					{/* 🖼️ Right Profile Image */}
					<Grid
						item
						size={{ xs: 12, md: 5 }}
						sx={{ textAlign: "center", mt: { xs: 6, md: 0 } }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<Box
								component="img"
								src={profile}
								alt="Umer"
								sx={{
									width: { xs: 220, sm: 280, md: 320, lg: 350 },
									height: { xs: 220, sm: 280, md: 320, lg: 350 },
									borderRadius: "50%",
									objectFit: "cover",
									boxShadow: `0 15px 40px ${color.lightBlack}`,
									border: `5px solid ${color.primary}`,
								}}
							/>
						</motion.div>
					</Grid>
				</Grid>
			</Container>

			<ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-70}>
				<Box
					sx={{
						position: "absolute",
						bottom: 20,
						left: "50%",
						transform: "translateX(-50%)",
						color: [color.primary],
						cursor: "pointer",
						animation: "bounce 2s infinite",
					}}
				>
					<KeyboardArrowDown sx={{ fontSize: 40 }} />
				</Box>
			</ScrollLink>
		</Box>
	);
}

export default Hero;

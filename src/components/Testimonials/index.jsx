import React, { useState } from "react";
import { Box, Typography, Avatar, Rating, Container, Stack, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import amirmoussous from "../../assets/Clients/amirmoussous.webp";
import cameron from "../../assets/Clients/cameron.png";
import chiyanagata from "../../assets/Clients/chiyanagata.webp";
import ivan_jocic from "../../assets/Clients/ivan_jocic.png";
import kevin from "../../assets/Clients/kevincripe.png";
import onomeapoe from "../../assets/Clients/onomeapoe.webp";
import sahara from "../../assets/Clients/sahara.png";
import bunnyfans from "../../assets/Clients/bunnyfans.png";
import { color } from "../../style/color";

const testimonials = [
	{
		name: "Kevin Cripe",
		feedback:
			"Umer did a great job of creating a website. It looks professional and I am excited about using it. I do not understand anything about websites and he answered all my questions and his work exceeded my expectations.",
		avatar: kevin,
		rating: 5,
	},
	{
		name: "Ivan Jocic",
		feedback:
			"I had an amazing experience working with him on my website. He truly knows his expertise and is very professional. I'm extremely happy with the final result! He was always available to help, make changes, and ensure everything was exactly how I wanted it. What impressed me most was his dedication—he really commits to the project and handles any corrections in the best possible way. I highly recommend him.",
		avatar: ivan_jocic,
		rating: 5,
	},
	{
		name: "Chiyanagata",
		feedback:
			"He was very friendly and professional all the way ,i highly recommend .he knows his job very well and i thank home for a quick delivery",
		avatar: chiyanagata,
		rating: 5,
	},
	{
		name: "Cameron",
		feedback: "great work",
		avatar: cameron,
		rating: 5,
	},
	{
		name: "Amir Moussous",
		feedback:
			"An outstanding experience! The portfolio delivered was exceptional, with great attention to detail and creativity, I can only highly recommend. Communication was smooth throughout the project, and I truly enjoyed working together. I highly recommend him and would gladly collaborate again in the future!",
		avatar: amirmoussous,
		rating: 5,
	},
	{
		name: "Sahara",
		feedback: "Amazingly helpful!",
		avatar: sahara,
		rating: 5,
	},
	{
		name: "Bunnyfans",
		feedback: "Great work",
		avatar: bunnyfans,
		rating: 5,
	},
	{
		name: "Onomeapoe",
		feedback:
			"great job delivered. with Professionalism of work, Code expertise, Language fluency, and Delivery time. He had no reviews, at first i was skeptical... he said he just joined fiverr, and he proved himself. kudos to you bro. Will work with you again.",
		avatar: onomeapoe,
		rating: 5,
	},
];

function TruncatedFeedback({ text, maxWords = 10 }) {
	const [expanded, setExpanded] = useState(false);
	const words = text.split(" ");
	const shouldTruncate = words.length > maxWords;

	return (
		<Typography variant="body1" sx={{ color: [color.text], mt: 1, fontStyle: "italic" }}>
			“{expanded || !shouldTruncate ? text : words.slice(0, maxWords).join(" ") + "..."}”
			{shouldTruncate && (
				<Box
					component="span"
					onClick={() => setExpanded(!expanded)}
					sx={{
						color: [color.primary],
						cursor: "pointer",
						fontWeight: 500,
						marginLeft: "6px",
					}}
				>
					{expanded ? "Show Less" : "Read More"}
				</Box>
			)}
		</Typography>
	);
}

function Testimonial() {
	return (
		<Box
			id="testimonials"
			sx={{
				py: 10,
				backgroundColor: [color.lightBlack],
				color: [color.text],
			}}
		>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Typography
						variant="h4"
						align="center"
						gutterBottom
						sx={{ color: [color.text], fontWeight: 600, mb: 5 }}
					>
						What Clients Say
					</Typography>
				</motion.div>

				<Box
					sx={{
						position: "relative",
						mt: 4,
						width: "80%",
						mx: "auto",
					}}
				>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 3000 }}
						pagination={{ clickable: true }}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						modules={[Autoplay, Pagination, Navigation]}
						onTouchStart={(swiper) => {
							swiper.autoplay.stop();
							if (swiper.resumeTimeout) clearTimeout(swiper.resumeTimeout);
							swiper.resumeTimeout = setTimeout(() => {
								swiper.autoplay.start();
							}, 3000);
						}}
						style={{ paddingBottom: "30px" }}
					>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={index}>
								<motion.div
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
								>
									<Box
										sx={{
											background: [color.blackish],
											borderRadius: 4,
											p: 4,
											textAlign: "center",
											maxWidth: 600,
											mx: "auto",
											border: `1px solid ${color.primary}`,
										}}
									>
										<Avatar
											src={testimonial.avatar}
											alt={testimonial.name}
											sx={{
												width: 70,
												height: 70,
												mx: "auto",
												mb: 2,
												border: `3px solid ${color.primary}`,
											}}
										/>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: [color.primary] }}
										>
											{testimonial.name}
										</Typography>

										<TruncatedFeedback text={testimonial.feedback} />

										<Stack alignItems="center" mt={2}>
											<Rating
												value={testimonial.rating}
												readOnly
												sx={{ color: [color.gold] }}
											/>
										</Stack>
									</Box>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Arrows */}
					<IconButton
						className="swiper-button-prev"
						sx={{
							position: "absolute",
							top: "50%",
							left: -40,
							color: [color.primary],
							transform: "translateY(-50%)",
							zIndex: 10,
						}}
					>
						<ChevronLeft />
					</IconButton>
					<IconButton
						className="swiper-button-next"
						sx={{
							position: "absolute",
							top: "50%",
							right: -40,
							color: [color.primary],
							transform: "translateY(-50%)",
							zIndex: 10,
						}}
					>
						<ChevronRight />
					</IconButton>
				</Box>
			</Container>
		</Box>
	);
}

export default Testimonial;

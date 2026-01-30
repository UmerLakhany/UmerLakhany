import React, { useState } from "react";
import {
	Box,
	Container,
	Typography,
	TextField,
	Button,
	Stack,
	Paper,
	Grid,
	IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { LocationOn, Email, Phone, LinkedIn } from "@mui/icons-material";
import { color } from "../../style/color";
import { useForm } from "react-hook-form";
import { ErrorToaster, SuccessToaster } from "../Toaster";
import InputField from "../Input";
import { emailRegex } from "../../utils";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [loading, setLoading] = useState(false);

	const submitForm = async (formData) => {
		setLoading(true);
		try {
			const obj = {
				name: formData.name,
				email: formData.email,
				message: formData.message,
			};
			// Send data to Formspree endpoint
			const response = await fetch("https://formspree.io/f/mvzrwdez", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(obj),
			});

			if (response.ok) {
				SuccessToaster("Form submitted successfully");
				reset();
			} else {
				const errorData = await response.json();
				throw new Error(errorData.error || "Form submission failed");
			}
		} catch (error) {
			ErrorToaster(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box
			id="contact"
			sx={{
				pt: 5,
				pb: 10,
				backgroundColor: [color.lightBlack],
				color: [color.text],
			}}
		>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Typography
						variant="h4"
						gutterBottom
						textAlign="center"
						fontWeight="bold"
						sx={{ mb: 5 }}
					>
						I WANT TO HEAR FROM YOU
					</Typography>

					<Grid container spacing={4} pt={3}>
						{/* Contact Form */}
						<Grid item size={{ xs: 12, md: 6 }}>
							<Paper
								elevation={4}
								sx={{
									p: 4,
									borderRadius: 4,
									backdropFilter: "blur(6px)",
									backgroundColor: [color.blackish],
									boxShadow: `0 8px 20px rgba(0, 0, 0, 0.4)`,
									color: [color.text],
								}}
							>
								<Typography
									variant="h5"
									gutterBottom
									fontWeight="bold"
									textAlign="center"
									sx={{ color: [color.primary] }}
								>
									Let’s Connect
								</Typography>

								<Box component={"form"} onSubmit={handleSubmit(submitForm)}>
									<Stack spacing={3} sx={{ mt: 3 }}>
										<InputField
											name="name"
											label="Full Name"
											placeholder="Enter your Name"
											register={register}
											errors={errors}
											rules={{ required: "Please enter your Name." }}
										/>
										<InputField
											type="email"
											name="email"
											label="Email"
											placeholder="Enter your Email here"
											register={register}
											errors={errors}
											rules={{
												required: "Please enter an email.",
												pattern: {
													value: emailRegex,
													message: "Please enter a valid email.",
												},
											}}
										/>
										<InputField
											name="message"
											label="Message"
											rows={4}
											multiline
											placeholder="Enter your message"
											register={register}
											errors={errors}
											rules={{ required: "Please enter your message." }}
										/>
										<Button
											type="submit"
											variant="outlined"
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
											Send Message
										</Button>
									</Stack>
								</Box>
							</Paper>
						</Grid>

						{/* Contact Info */}
						<Grid item size={{ xs: 12, md: 6 }}>
							<Stack spacing={4} sx={{ height: "100%", pl: { md: 4 } }}>
								{[
									{ icon: <LocationOn />, label: "Karachi, Pakistan" },
									{ icon: <Phone />, label: "+92 327 2298414" },
									{ icon: <Email />, label: "lakhanyumer@gmail.com" },
									{
										icon: <LinkedIn />,
										label: "linkedin.com/in/umer-lakhany-05a8283a9",
									},
								].map((item, index) => (
									<Stack
										key={index}
										direction="row"
										alignItems="center"
										spacing={2}
										sx={{
											transition: "all 0.3s ease",
											"&:hover .iconBox": {
												transform: "scale(1.1)",
												backgroundColor: [color.primary],
											},
											"&:hover .label": {
												color: [color.primary],
											},
										}}
									>
										<Box
											className="iconBox"
											sx={{
												backgroundColor: [color.primary],
												color: [color.lightBlack],
												p: 1.2,
												borderRadius: "12px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												transition: "all 0.3s ease",
												boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
											}}
										>
											{item.icon}
										</Box>
										<Typography
											className="label"
											sx={{
												fontSize: "1.1rem",
												fontWeight: 500,
												transition: "color 0.3s ease",
											}}
										>
											{item.label}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Grid>
					</Grid>
				</motion.div>
			</Container>
		</Box>
	);
}

export default Contact;

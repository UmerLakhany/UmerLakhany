import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { color } from "./style/color";

function App() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Header />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
			<Zoom in={visible}>
				<Fab
					onClick={scrollToTop}
					size="medium"
					sx={{
						position: "fixed",
						bottom: 24,
						right: 24,
						bgcolor: [color.primary],
						color: [color.text],
						boxShadow: 4,
						"&:hover": {
							bgcolor: [color.primary],
						},
					}}
					aria-label="scroll to top"
				>
					<KeyboardArrowUp />
				</Fab>
			</Zoom>
		</>
	);
}

export default App;

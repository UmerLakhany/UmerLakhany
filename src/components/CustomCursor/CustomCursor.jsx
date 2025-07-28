import React, { useEffect, useState } from "react";
import { color } from "../../style/color";

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const addMouseListeners = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", addMouseListeners);
		return () => window.removeEventListener("mousemove", addMouseListeners);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "25px",
				height: "25px",
				border: `2px solid ${color.primary}`,
				borderRadius: "50%",
				transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
				pointerEvents: "none",
				zIndex: 9999,
				transition: "transform 0.05s ease-out",
				backgroundColor: `${color.secondary}20`,
				backdropFilter: "blur(2px)",
			}}
		/>
	);
};

export default CustomCursor;

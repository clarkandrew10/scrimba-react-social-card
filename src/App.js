import React from "react";
import Info from "./components/info";
import About from "./components/about";
import Interests from "./components/interests";
import SocialBar from "./components/social-bar";

export default function App() {
	return (
		<main>
			<div className="social-card">
				<Info />
				<About />
				<Interests />
				<SocialBar />
			</div>
		</main>
	);
}

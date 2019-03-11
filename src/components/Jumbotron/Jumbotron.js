//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Memory Game</h1>
		<h2>Click on images to earn points. Don't click on the same image more than  once!</h2>
	</header>
);

export default Jumbotron;
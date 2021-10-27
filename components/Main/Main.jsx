import React from "react";
import Introduction from "./Introduction/Introduction";
import TechStack from "./TechStack";
import Contact from "./Contact";

function Main() {
	return (
		<div className='text-white bg-black min-h-screen w-screen overflow-hidden max-w-screen'>
			<Introduction />
			<TechStack />
			<Contact />
			<script
				src='https://s.pageclip.co/v1/pageclip.js'
				charset='utf-8'
			></script>
		</div>
	);
}

export default Main;

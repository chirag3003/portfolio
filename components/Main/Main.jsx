import React from "react";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
function Main() {
	return (
		<div className='text-white bg-black min-h-screen w-screen overflow-hidden max-w-screen'>
			<Introduction />
			<TechStack />
		</div>
	);
}

export default Main;

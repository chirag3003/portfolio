import React from "react";

function HeaderLink({ href, text }) {
	return (
		<a
			href={href}
			className='text-gray-300 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium'
		>
			{text}
		</a>
	);
}

export default HeaderLink;

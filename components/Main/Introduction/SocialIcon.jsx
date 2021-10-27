import React from "react";

function SocialIcon({ href, src, alt }) {
	return (
		<div className='bg-primary p-2 shadow-md icon mx-2 bg h-10 w-10 rounded-full'>
			<a rel='noopener noreferrer' target='_blank' href={href}>
				<img className='w-full h-full' src={src} alt={alt} />
			</a>
		</div>
	);
}

export default SocialIcon;

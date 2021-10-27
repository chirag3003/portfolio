import React from "react";

function SectionImage({ src, alt }) {
	return (
		<div className='z-10 block image min-h-2/4 sm:w-2/4'>
			<img
				className='max-h-full max-w-full h-full w-5/6 mx-auto'
				src={src}
				alt={alt}
			/>
		</div>
	);
}

export default SectionImage;

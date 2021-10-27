import React from "react";

function SectionImage({ src, alt }) {
	return (
		<div className='z-10 block image h-2/4 sm:min-h-2/4 sm:h-auto sm:w-2/4 p-2'>
			<img
				className='max-h-full max-w-full h-auto  w-auto mx-auto'
				src={src}
				alt={alt}
			/>
		</div>
	);
}

export default SectionImage;

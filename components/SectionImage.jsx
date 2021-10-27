import React from "react";

function SectionImage({ src, alt }) {
	return (
		<div className='z-10 mt-2 flex items-center justify-center  image h-2/4 md:w-1/2 sm:min-h-2/4 sm:h-auto sm:w-full p-2 '>
			<img src={src} alt={alt} />
		</div>
	);
}

export default SectionImage;

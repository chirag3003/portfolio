import React from "react";
import SectionImage from "components/SectionImage";
import { TechStacks } from "Config";

function TechStack() {
	return (
		<section
			id='tech-stack'
			className=' p-5 sm:p-20  h-screen w-screen flex-col sm:flex-row-reverse sm:pl-2'
		>
			<div className='text sm:w-2/4 se'>
				<p className='text-6xl font-bold'>
					My <span className='color-primary'>Tech Stack</span>
				</p>
				<div className='logos mt-5 flex flex-wrap'>
					{TechStacks.map(({ name, logo }) => {
						return (
							<div
								key={name}
								className='logo hover-scale flex mt-4 flex-col justify-center items-center m-3 w-20 h-20'
							>
								<img
									src={logo}
									alt={name}
									className='h-full w-full'
								/>
								<p className='name text-sm'>{name}</p>
							</div>
						);
					})}
				</div>
			</div>
			<SectionImage
				className='sm:w-2/4'
				src={"/static/programmer1.svg"}
				alt='tech-stack'
			/>
		</section>
	);
}

export default TechStack;

import React from "react";
import SectionImage from "components/SectionImage";
import { TechStacks } from "Config";

function TechStack() {
	return (
		<section
			id='tech-stack'
			className=' p-5 sm:p-20  pb-10 w-screen flex-col sm:flex-row-reverse sm:pl-2'
		>
			<div className='text z-10 sm:w-2/4 se'>
				<p className='text-4xl sm:text-6xl font-bold'>
					My <span className='color-primary'>Tech Stack</span>
				</p>
				<div className='logos justify-evenly  mt-5 flex flex-wrap'>
					{TechStacks.map(({ name, logo }) => {
						return (
							<div
								key={name}
								className='logo hover-scale  flex mt-4 flex-col justify-center items-center m-5 w-16 h-16  '
							>
								<img
									src={logo}
									alt={name}
									className='h-full w-full'
								/>
								<p className='name text-xs'>{name}</p>
							</div>
						);
					})}
				</div>
			</div>
			<SectionImage
				hidden={true}
				src={"/static/programmer1.svg"}
				alt='tech-stack'
			/>
			<div className='wave absolute w-full bottom-0 left-0'>
				<img src='/static/waves/wave.svg' alt='wave' />
			</div>
		</section>
	);
}

export default TechStack;

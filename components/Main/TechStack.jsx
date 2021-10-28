import React from "react";
import SectionImage from "components/SectionImage";
import Fade from "react-reveal/Fade";
import { TechStacks } from "Config";

function TechStack() {
	return (
		<Fade bottom>
			<section
				id='tech-stack'
				className=' p-5 sm:p-20  pb-10 w-screen flex-col lg:flex-row-reverse sm:pl-2'
			>
				<div className='text z-10 lg:w-2/4 se lg:pl-8'>
					<p className='ml-1 text-4xl lg:text-6xl font-bold'>
						My <span className='color-primary'>Tech Stack</span>
					</p>
					<div className='logos justify-evenly mb-4  mt-5 flex flex-wrap'>
						{TechStacks.map(({ name, logo }) => {
							return (
								<div
									key={name}
									className='logo hover-scale  flex mt-4 flex-col justify-center items-center  lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4   '
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
					<img src='/static/waves/wave3.svg' alt='wave' />
				</div>
			</section>
		</Fade>
	);
}

export default TechStack;

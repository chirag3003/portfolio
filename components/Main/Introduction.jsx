import React from "react";
import { Introduction as config } from "Config";
import blob from "./blob1.svg";
import SocialIcon from "./SocialIcon";
import SectionImage from "components/SectionImage";

function Introduction() {
	const heading = `I'm ${config.name}`.split("");
	return (
		<section className='p-5 pt-24 sm:p-20 sm:pt-40 h-screen w-screen flex-col sm:flex-row'>
			<div className='blob -left-96 -bottom-96 sm:-left-56 sm:-bottom-72 h-5/6 sm:h-full sm:w-2/5'>
				<img
					src={blob.src}
					alt='blob'
					className='max-h-full h-full w-full max-w-full'
				/>
			</div>
			<div className='z-10 text h-2/4 w-full sm:h-auto sm:w-2/4'>
				<div
					style={{
						fontWeight: "700",
					}}
					className='heading  text-4xl sm:text-6xl  flex  '
				>
					<div className='sm:block'>
						<span style={{ color: "var(--primary-color)" }}>
							Hi,&nbsp;
						</span>
					</div>
					<div className='flex'>
						{heading.map((letter, index) => {
							if (letter == " ") {
								return (
									<div key={index}>
										<span>&nbsp;</span>
									</div>
								);
							}
							return (
								<div key={index} className='special-text'>
									<span>{letter}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className=' mt-2 text-lg  sm:text-2xl  short-description font-semibold '>
					<h1>{config.shortDescription} </h1>
				</div>
				<div className='mt-5 pr-3 description '>
					<p className='text-base sm:text-lg  '>
						{config.description}
					</p>
				</div>
				<div className='flex social mt-3'>
					<div className='icons'></div>
					<SocialIcon
						href='https://github.com/chirag3003'
						src='/static/github.svg'
						alt='Github'
					/>
					<SocialIcon
						href='https://www.instagram.com/chiragbhalotia/'
						src='/static/instagram.svg'
						alt='Instagram'
					/>
					<SocialIcon
						href='mailto:chiragbhalotia0412@gmail.com'
						src='/static/mail.svg'
						alt='Email'
					/>

					<button className='text-black bg-primary outline-none p-2 rounded-md sm:mx-6 px-3 mx-2 sm:px-4 bg-opacity-20'>
						Get In Touch
					</button>
				</div>
			</div>
			{/* <div className='z-10 block image min-h-2/4 sm:w-2/4'>
				<img
					className='max-h-full max-w-full h-full w-5/6 mx-auto'
					src='static/programmer2.svg'
					alt='programmer'
				/>
			</div> */}
			<SectionImage />
		</section>
	);
}

export default Introduction;

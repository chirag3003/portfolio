import React, { useEffect } from "react";
import { Introduction as config, Social } from "Config";
import blob from "./blob1.svg";
import SocialIcon from "components/SocialIcon";
import SectionImage from "components/SectionImage";
import HeadShake from "react-reveal/HeadShake";

function Introduction() {
	const heading = ["I'm", ...config.name];
	// window.onscroll = () => {
	// 	console.log(window.scrollY / 10);
	// 	// document.querySelector("#blob1").style.transform = `rotate(${
	// 	// 	window.scrollY / 100
	// 	// }deg)`;
	// };
	useEffect(() => {
		window.onscroll = () => {
			console.log(window.scrollY / 10);
			document.querySelector(
				"#blob1"
			).style.transform = `rotate(${window.scrollY}deg)`;
		};
	}, []);
	return (
		<HeadShake>
			<section
				id='introduction'
				className='p-5 pt-24 sm:p-20 sm:pt-40 lg:h-screen w-screen flex-col lg:flex-row'
			>
				<div
					id='blob1'
					className='blob -left-80 -bottom-60 sm:-left-56 sm:-bottom-72 h-4/6 w-3/6 lg:h-full lg:w-2/5'
				>
					<img
						src={blob.src}
						alt='blob'
						className='max-h-full h-full w-full max-w-full'
					/>
				</div>
				<div className='z-10 text h-2/4 w-full lg:h-auto lg:w-3/5'>
					<div
						style={{
							fontWeight: "700",
						}}
						className='heading  text-4xl lg:text-6xl  flex  '
					>
						<div className='lg:block'>
							<span style={{ color: "var(--primary-color)" }}>
								Hi,&nbsp;
							</span>
						</div>
						<div className='flex flex-wrap	'>
							{heading.map((word, index) => {
								return (
									<div key={index} className='word flex'>
										{word.split("").map((letter, index) => {
											return (
												<div
													key={index}
													className='special-text'
												>
													<span>{letter}</span>
												</div>
											);
										})}
										<div key={index}>
											<span>&nbsp;</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className=' mt-2 text-lg  sm:text-2xl  short-description font-semibold '>
						<h1>{config.shortDescription} </h1>
					</div>
					<div className='mt-5 pr-3 description '>
						<p className='text-xs sm:text-lg  '>
							{config.description}
						</p>
					</div>
					<div className='flex flex-col sm:flex-row social mt-3'>
						<div className='icons mb-2  flex'>
							{Social.map((social) => (
								<SocialIcon key={social.name} {...social} />
							))}
						</div>

						<button
							href='#contact'
							className=' text-black bg-primary outline-none p-2 rounded-md sm:mx-6 px-3 mx-2 sm:px-4 bg-opacity-20'
						>
							<a href='#contact'>Get In Touch</a>
						</button>
					</div>
				</div>
				<SectionImage src='static/programmer2.svg' alt='Programmer' />
			</section>
		</HeadShake>
	);
}

export default Introduction;

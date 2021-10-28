import SocialIcon from "components/SocialIcon";
import React from "react";
import { Social } from "Config";

function Contact() {
	return (
		<section
			id='contact'
			className=' p-5 sm:p-20 min-h-screen  pb-10 w-screen flex-col'
		>
			<p className='text-4xl lg:text-6xl font-bold mb-5'>Contact Me</p>
			<div className='content flex flex-col lg:flex-row  '>
				<div className='social lg:px-3 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-pink  w-full lg:w-1/2 '>
					<div className='socials'>
						{Social.map((social) => {
							return (
								<a
									rel='noopener noreferrer'
									target='_blank'
									href={social.href}
								>
									<div className='social bg-indigo flex p-2 rounded-md mb-5 items-center'>
										<SocialIcon {...social} />
										<div className='ml-2 name'>
											<p className='text-lg'>
												{social.name}
											</p>
										</div>
									</div>
								</a>
							);
						})}
					</div>
				</div>
				<div className='form w-full lg:w-1/2 py-4 lg:p-3 lg:py-0 '>
					<form
						action='https://send.pageclip.co/qWWKy6mVCzORrH2361bGnzBgidZAxv8G/contact-form'
						class='pageclip-form'
						method='post'
						className='flex flex-col'
					>
						<input
							required
							type='text'
							name='name'
							className='w-full bg-indigo border-none p-3  mb-3 text-lg rounded'
							placeholder='Name'
						/>
						<input
							required
							type='email'
							name='email'
							className='w-full bg-indigo border-none p-3  my-3 text-lg rounded'
							placeholder='Email'
						/>
						<textarea
							required
							name='message'
							id='message'
							className='w-full bg-indigo border-none p-2  my-3 text-lg rounded'
							cols='30'
							rows='8'
						></textarea>

						<button
							className='w-full text-black bg-primary outline-none p-2 rounded-md px-3 mt-3 sm:px-4 bg-opacity-20'
							type='submit'
						>
							<span>Send</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;

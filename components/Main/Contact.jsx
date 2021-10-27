import React from "react";

function Contact() {
	return (
		<section
			id='contact'
			className=' p-5 sm:p-20 min-h-screen  pb-10 w-screen flex-col lg:flex-row  sm:pl-2'
		>
			<div className='social flex flex-col w-full lg:w-1/2 '></div>
			<div className='form w-full lg:w-1/2'>
				<form
					action='https://send.pageclip.co/qWWKy6mVCzORrH2361bGnzBgidZAxv8G/contact-form'
					class='pageclip-form'
					method='post'
					className='flex flex-col'
				>
					<input
						type='email'
						name='email'
						className='w-full bg-transparent'
						value='roscoe@example.com'
					/>
					<input
						type='text'
						name='subject'
						className='w-full bg-transparent'
						value='A contact subject'
					/>

					<button type='submit' class='pageclip-form__submit'>
						<span>Send</span>
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;

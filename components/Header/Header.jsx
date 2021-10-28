import React from "react";
import HeaderLink from "./HeaderLink";

function Header() {
	return (
		<nav className='bg-indigo shadow-lg fixed w-screen top-0 left-0 z-50'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='flex-1 flex items-center justify-between '>
						<a
							href={"#"}
							className=' text-3xl text-white px-3 py-2 rounded-md  font-medium'
						>
							{"<"} Chirag {"/>"}
						</a>
						<div className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4'>
								{/* <a
									href='#'
									className='bg-purple-900 text-white px-3 py-2 rounded-md text-sm font-medium'
									aria-current='page'
								>
									Dashboard
								</a> */}

								<HeaderLink
									href={"#tech-stack"}
									text={"Tech Stack"}
								/>
								<HeaderLink
									href={"#contact"}
									text={"Contact"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;

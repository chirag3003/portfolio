import Head from "next/head";
//custom components
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Script from "next/script";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Chirag Bhalotia | Full Stack Developer</title>
				<meta
					name='description'
					content="Chirag Bhalotia's Website | A Student and a Full Stack Developer"
				/>
				<link rel='icon' href='/favicon.png' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Header />

			<Main></Main>
			<Script
				src='https://s.pageclip.co/v1/pageclip.js'
				charset='utf-8'
			></Script>
			{/* <footer className={""}></footer> */}
		</div>
	);
}

import React from 'react';
import mptLogo from '../assets/images/mplogo.png';
import contactUsImage from '../assets/images/contactUs.jpg';
import Footer from './Footer';

const ContactUs = () => {
	return (
		<>
			<div className="w-screen aspect-auto flex mt-16">
				<section className="w-[45%]  bg-[#484848] flex flex-col justify-around items-center text-white text-center ">
					<h1 className="text-6xl youth-brush-light">Contact Us</h1>
					<p className="text-lg mont-light">
						Join into our newsletter for personal updates on Madhya
						Pradesh .
					</p>
					<input
						className="hover:outline-none focus:outline-none bg-transparent  border-b-2 border-white text-white mont-extra-light text-xl"
						placeholder="enter email id"
					/>

					<button className="bg-transparent border-2 border-white rounded-lg px-4 py-2 poppins-regular text-2xl">
						SUBSCRIBE
					</button>
					<div className="">
						<img src={mptLogo} />
					</div>
				</section>
				<section className="w-[55%]">
					<img className="w-full h-full" src={contactUsImage} />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ContactUs;

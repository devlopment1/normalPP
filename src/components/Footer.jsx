import React from 'react';

const Footer = () => {
	let quickLinksArr = [
		'Booking Rules',
		'Cancellation Policy',
		' Privacy Policy',
		'Contact Us',
		'FAQs',
		'EMC Contract',
	];

	let quickLinksArr2 = [
		'Booking through MPOnline',
		'Madhya Pradesh Tourism Board',
		'General Sales Agents',
		'Institutions',
		'Jungle Safari Booking (Forest Department)',
	];

	let helpArr = [
		'Tourist Helpline (Toll Free): 1800 233 7777 Timing: (10 AM t0 6PM) ',
		'(Sunday holiday, Saturday and other holiday Half Day)',
		'Email : mpthelpline@mpstdc.com',
	];
	let address = [
		'HEAD OFFICE - BHOPAL',
		'Business Development & Marketing',
		'        Paryatan Bhawan, Bhadbhada Road,',
		' Bhopal -462003',
		'TEL: 0755-4027132/ 163',
		'FAX: 0755-2779476, 2774289',
	];

	return (
		<>
			<div className="w-screen  mx-auto bg-white  text-gray-3 flex flex-row  flex-wrap justify-start pl-12 gap-y-8 py-12">
				<div className="flex flex-col items-start flex-grow mont-medium ">
					<h1 className="text-3xl mb-4 mont-bold ">Quick Links</h1>

					<div className="flex flex-row  gap-x-16	 ">
						<section className="flex-grow">
							<div className=" flex flex-col flex-wrap gap-y-2">
								{quickLinksArr.map((link) => {
									return <p className="       ">{link}</p>;
								})}
							</div>
						</section>
						<section className="flex-grow">
							<div className=" flex flex-col flex-wrap gap-y-2">
								{quickLinksArr2.map((link) => {
									return <p className="       ">{link}</p>;
								})}
							</div>
						</section>
					</div>
				</div>
				<section className="flex-grow">
					<h1 className="text-3xl mb-4  mont-bold  ">
						Help & Support
					</h1>
					<div className=" flex flex-col flex-wrap mont-regular ">
						{helpArr.map((item) => {
							return <p className="  ">{item}</p>;
						})}
					</div>
				</section>
				<section className="flex-grow">
					<h1 className="text-3xl mb-4  mont-bold ">Address</h1>
					<div className=" flex flex-col flex-wrap  mont-regular  ">
						{address.map((item) => {
							return <p className="  ">{item}</p>;
						})}
					</div>
				</section>

				<div className="w-1/2 xl:ml-auto">
					<h1 className="text-4xl  border-b-2 border-gray-700">
						FOLLOW US
					</h1>
					<div className="flex gap-x-3 mt-4">
						{/* <img src="https://img.icons8.com/material-outlined/48/000000/pinterest--v1.png" />
						<img src="https://img.icons8.com/material-outlined/48/000000/twitter--v1.png" />
						<img src="https://img.icons8.com/sf-ultralight/50/000000/twitter-circled.png" />
						<img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" /> */}
						<img
							src="https://img.icons8.com/48/000000/pinterest.png"
							className="w-[2rem] h-[2rem] "
							alt="logo"
						/>
						<img
							src="https://img.icons8.com/48/000000/facebook-new.png"
							className="w-[2rem] h-[2rem] "
							alt="logo"
						/>
						<img
							src="https://img.icons8.com/000000/48/000000/instagram-new.png"
							className="w-[2rem] h-[2rem] "
							alt="logo"
						/>
						<img
							src="https://img.icons8.com/48/000000/twitter.png"
							className="w-[2rem] h-[2rem] "
							alt="logo"
						/>
						<img
							src="https://img.icons8.com/48/000000/youtube-play.png"
							className="w-[2rem] h-[2rem] "
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

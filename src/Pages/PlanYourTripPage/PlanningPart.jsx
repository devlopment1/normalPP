import React from 'react';

const PlanningPart = () => {
	let destinationsList = [
		'Amarkantak',
		'Bhopal',
		'Indore',
		' Panna',
		'Kanha',
		' Jabalpur',
		' Gwalior',
		' Bandhavgarh',
	];

	let experiencesList = [
		'wildlife',
		' Spiritual',
		' Heritage',
		'Adventure',
	];

	let companionsList = ['Family', ' Couple', ' Friends', ' Solo'];
	return (
		<>
			<div className="my-8 ml-16">
				<h1 className=" text-6xl text-red youth-brush-light">
					Start Planning
				</h1>
			</div>
			<h1 className=" text-2xl poppins-mediumtext-4xl text-gray-2 mb-8 poppins-medium text-center">
				TELL US ABOUT YOUR TRIP IDEA
			</h1>
			<div className="w-[50vw] m-auto progress-container ">
				<div className="progress" id="progress">
					{' '}
				</div>
				<div className="circle  active"></div>
				<div className="circle "></div>
				<div className="circle "></div>
			</div>
			<div className="w-[50vw] text-gray-2  m-auto flex flex-row text-xl poppins-regular justify-between ">
				<span>Destinations</span>
				<span>Experiences</span>

				<span>Budget</span>
			</div>
			<div className="w-screen bg-[#f4f4f4] flex flex-col items-center gap-y-8 py-8 mt-8">
				<h1 className=" text-2xl poppins-medium text-gray-2">
					DO YOU HAVE A DESTINATION ON YOUR MIND?
				</h1>
				<div className="flex flex-row text-gray-2 text-xl poppins-regular gap-x-12 ">
					<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
						Yes!
					</button>
					<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
						No, not yet!
					</button>
				</div>
				<h1 className=" text-2xl poppins-medium text-gray-2">
					WHERE WOULD YOU LIKE TO GO?
				</h1>
				<div className="md:w-screen xl:w-1/2 flex flex-row justify-center flex-wrap text-gray-2 text-xl poppins-regular gap-x-12 gap-y-12 ">
					{destinationsList.map((destination) => {
						return (
							<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
								{destination}
							</button>
						);
					})}
				</div>
				<h1 className=" text-2xl poppins-medium text-gray-2">
					WHAT EXPERIENCE YOU WOULD LIKE TO EXPLORE?
				</h1>
				<div className="md:w-screen xl:w-1/2 flex flex-row justify-center flex-wrap text-gray-2 text-xl poppins-regular gap-x-12 gap-y-12 ">
					{experiencesList.map((experience) => {
						return (
							<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
								{experience}
							</button>
						);
					})}
				</div>
				<h1 className=" text-2xl poppins-medium text-gray-2">
					TELL US ABOUT YOUR TRIP COMPANIONS ?
				</h1>
				<div className="md:w-screen xl:w-1/2 flex flex-row justify-center flex-wrap text-gray-2 text-xl poppins-regular gap-x-12 gap-y-12 ">
					{companionsList.map((companion) => {
						return (
							<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
								{companion}
							</button>
						);
					})}
				</div>
				<h1 className=" text-2xl poppins-medium text-gray-2">
					DO YOU HAVE ANY BUDGET? |
				</h1>
				<div className="flex flex-row text-gray-2 text-xl poppins-regular gap-x-12  ">
					<div className="bg-white flex flex-row justify-center items-center border-[1px] border-gray-2 h-12 w-48">
						<span>UPTO</span>
						<input className="w-[50%] self-start bg-transparent border-b-[1px] border-gray-2 focus:outline-none" />
					</div>
					<button className="bg-white border-[1px] border-gray-2 h-12 w-48">
						Not Sure!
					</button>
				</div>
				<span className="w-1/2 border-b-2-[1px] border-gray-2"></span>
				<button className="bg-gray-2 border-0 h-12 w-48 text-xl poppins-regular text-white">
					NEXT
				</button>
				<button className="bg-red text-xl mont-medium text-white px-4 py-2 ">
					VIEW PACKAGES
				</button>
			</div>
			<div className="w-screen bg-gray-2 flex flex-col items-center gap-y-12 py-12 mb-12">
				<h1 className=" text-5xl youth-brush-light text-white">
					Talk to our Experts!
				</h1>
				<button className="bg-red text-xl mont-medium text-white px-4 py-2 ">
					REQUEST FOR A CALL BACK
				</button>
			</div>
		</>
	);
};

export default PlanningPart;

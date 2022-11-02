import React from 'react';
import accommodations1bg1 from '../../assets/images/accommodationBg1.png';
import accommodations1bg2 from '../../assets/images/AccommodationBg2.png';
import AccommodationCard from '../../components/AccommodationCard';
import BgSlider from '../../components/BgSlider';

const AccommodationPage = () => {
	let accommodationTypes = [
		'All',
		' Resort ',
		'Hotel',
		' Residencies',
		' Highway',
		' Retreats',
	];

	return (
		<>
			<div className="w-screen aspect-auto relative">
				<BgSlider />
				<div className="w-full flex justify-center absolute  bottom-[-1.75rem] z-20">
					<input
						type="date"
						className=" bg-white border-[1px] border-[#bd1b1b] border-r-0 py-3 px-4 focus:outline-none placeholder:mont-medium text-xl"
						placeholder="Check in - Check out"
					/>
					<div className="flex justify-center ">
						<select className=" bg-white border-[1px] border-red py-3  focus:outline-none mont-medium text-xl  px-24">
							<option value="1">City/ Property Name/ Location</option>
						</select>
					</div>
					<button className=" bg-red text-white  mont-medium text-lg py-3 px-4">
						BOOK NOW
					</button>
				</div>
			</div>

			<div className="my-8 ml-16">
				<span className="text-8xl text-red youth-brush-light">
					Accommodation
				</span>
			</div>
			<div className=" mx-16">
				<div className=" flex flex-start gap-x-16">
					{accommodationTypes.map((type) => {
						return (
							<span className="text-2xl mont-medium text-gray-3">
								{type}
							</span>
						);
					})}
				</div>
				<div className=" grid grid-cols-2 gap-4 mt-16">
					<AccommodationCard />
					<AccommodationCard />
					<AccommodationCard />
					<AccommodationCard />
					<AccommodationCard />
				</div>
			</div>
		</>
	);
};

export default AccommodationPage;

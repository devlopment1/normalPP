import React from 'react';
import cardImage from '../assets/images/AccommodationBg2.png';

const AccommodationCard = () => {
	return (
		<div className="grid grid-cols-2 p-4 border-[1px] border-[#bd1b1b] gap-x-2">
			<div className="col-span-1 aspect-auto">
				<img className="w-full h-full" src={cardImage} />
			</div>
			<div className="col-span-1 aspect-auto flex flex-col justify-between pt-16 poppins-regular ">
				<h1 className="poppins-semi-bold text-gray-2 text-xl">
					HOTEL
				</h1>
				<p className="text-red  text-xl">
					MPT Holiday Homes, Amarkantak
				</p>
				<p className=" text-gray-2">2299-2990/ Night</p>
				<ul className="m-0 p-0 flex flex-row flex-wrap text-sm text-gray-2 list-disc list-inside gap-x-4">
					<li>wifi</li>
					<li>1 double bed</li>
					<li>1 bathroom</li>
					<li>In-room dining</li>
				</ul>
				<div className="">
					<button className=" bg-[#bd1b1b] text-white poppins-regular py-2  px-16">
						BOOK
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccommodationCard;

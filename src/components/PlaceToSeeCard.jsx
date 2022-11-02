import React from 'react';

const PlaceToSeeCard = () => {
	return (
		<div className="bg-white  flex flex-col justify-between w-[30vw] h-[45vh] pl-12 pr-24 py-12">
			<h1 className="mont-medium text-gray-3 text-2xl">
				Places to See..
			</h1>
			<span className="text-5xl youth-brush-light text-red pt-2 ">
				Temple 40
			</span>
			<span className="text-gray-3 mont-medium text-lg py-4">
				Temple 40, one of the handful of free- standing temples in
				India, has artefacts from three separate eras, the first being
				the Maurya Period, when Ashoka's father Bindusar built the
				temple.
			</span>
			<a className="text-red mont-regular text-xl">Read more</a>
		</div>
	);
};

export default PlaceToSeeCard;

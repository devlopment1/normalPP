import React from 'react';
import riverRafting from '../assets/images/River Rafting.png';

const GuestStoryCard = () => {
	return (
		<div className=" bg-cream  md:w-[70vw]  xl:w-[50vw] h-[45vh] flex  ">
			<div className="text-center flex items-center p-16 w-[50%]">
				<span className="text-2xl ">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever sincethels00s.
				</span>
			</div>
			<div className="w-[50%]">
				<img className="w-full h-full" src={riverRafting} />
			</div>
		</div>
	);
};

export default GuestStoryCard;

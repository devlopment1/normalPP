import React from 'react';
import bhopalImg from '../../assets/images/08 Man Museum (1).png';
import riverRafting from '../../assets/images/River Rafting.png';
import indore from '../../assets/images/Rajwada.png';
import Explore5Tiger from '../../assets/images/BANDHAVGARH-03.png';

import Explore5Trishul from '../../assets/images/Mahadeo Hill.png';
import Explore5Dance from '../../assets/images/KHAJURAHO-07.png';
import Explore5SingleBuck from '../../assets/images/Group 262.png';
import Explore5YantraMandir from '../../assets/images/Shriyantra Mandir (1).png';
import Explore5Rajwada from '../../assets/images/Rajwada.png';
import Explore5BirlaMandir from '../../assets/images/09 Birla Mandir (1) (1).png';
import Explore5multiBuck from '../../assets/images/BANDHAVGARH-05.png';
import BhopalMap from '../../assets/images/Group 3913@2x.png';

import GuestStoryCard from '../../components/GuestStoryCard';
import ImageCarousel from '../../components/ImageCarousel';
import GuestStoryCardCarousel from '../../components/GuestStoriesCarousel';
import { useNavigate } from 'react-router-dom';

const DestinationPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="w-screen aspect-auto relative">
				<img className="w-full h-full" src={bhopalImg} />
				<div className="w-full flex justify-center absolute  bottom-[-1.75rem] z-20">
					<div className="flex justify-center ">
						<select className=" bg-white border-[1px] border-red py-3  focus:outline-none mont-medium text-xl  px-24">
							<option value="1">City/ Property Name/ Location</option>
						</select>
					</div>

					<button
						className=" bg-red text-white  mont-medium text-lg py-3 px-4"
						onClick={() => navigate('/specific-destination')}
					>
						SEARCH
					</button>
				</div>

				<div className="flex flex-col absolute left-8 bottom-8 z-500">
					<span className="text-4xl">BHOPAL</span>
					<img src={BhopalMap} />
				</div>
			</div>

			<div className="my-8 ml-16">
				<span className="text-8xl text-red youth-brush-light">
					Popular places
				</span>
			</div>
			<div className="mx-16 ">
				<ImageCarousel />
			</div>
			<div className=" bg-[#FFF2DA] mb-8 pb-16">
				<div className="  text-center ">
					<p className="text-8xl text-red youth-brush-light">
						E<span className="text-gray-2">xplore</span>
					</p>
				</div>
				<div className="w-screen h-[100vh] flex  ">
					<div className="basis-1/4 flex flex-col ">
						<div className="h-[35%]   relative m-2">
							<img className="h-full w-full" src={Explore5Tiger} />
						</div>
						<div className="h-[65%] relative mx-2 mb-2 ">
							<img className="h-full w-full" src={Explore5Trishul} />
						</div>
					</div>
					<div className="basis-1/4 felx flex-col ">
						<div className="h-[65%] relative m-2 ">
							<img className="h-full w-full" src={Explore5Dance} />
						</div>
						<div className="h-[35%] relative m-2 ">
							<img
								className="h-full w-full"
								src={Explore5SingleBuck}
							/>
						</div>
					</div>
					<div className="basis-1/4 felx flex-col  ">
						<div className="h-[50%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5YantraMandir}
							/>
						</div>
						<div className="h-[50%]  relative m-2">
							<img className="h-full w-full" src={Explore5Rajwada} />
						</div>
					</div>
					<div className="basis-1/4 felx flex-col  ">
						<div className="h-[65%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5BirlaMandir}
							/>
						</div>
						<div className="h-[35%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5multiBuck}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-8 text-center">
				<span className="text-8xl text-red youth-brush-light">
					Guest Stories
				</span>
			</div>
			<div className="mx-16 ">
				<GuestStoryCardCarousel />
			</div>
		</>
	);
};

export default DestinationPage;

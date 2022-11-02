import React from 'react';
import Stupa from '../../assets/images/The Great Stupa.png';
import AccommodationCard from '../../components/AccommodationCard';
import AccommodationCarousel from '../../components/AccommodationCarousel';
import PlaceToSeeCard from '../../components/PlaceToSeeCard';

const SpecificDestinationPage = () => {
	return (
		<>
			<div className="w-screen h-screen">
				<img className="w-full h-full" src={Stupa} />
				<div className="w-full flex justify-center absolute  bottom-[-1.5rem] z-20">
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

			<div className="mt-16 mx-16	 grid grid-cols-5  ">
				<div className="col-span-1 grid grid-cols-2 my-auto">
					<span className="border-b-2 border-gray-4"></span>
					<span className="border-b-2 border-red"></span>
				</div>

				<div className="col-span-3 text-center">
					<span className="mont-medium text-dark text-lg">
						Atrip to Sanchi will revive the wonder you experienced as
						a child when listening to Ashoka's stories. Sanchi is a
						library of the beauty of Buddhist art and ancient
						architecture. The Mahastupa really bears the designation
						of "World Heritage Site" from UNESCO.
					</span>
				</div>
				<div className="col-span-1 grid grid-cols-2 my-auto">
					<span className="border-b-2 border-red"></span>
					<span className="border-b-2 border-gray-4"></span>
				</div>
			</div>
			<div className="my-8 ml-16 ">
				<span className="text-8xl text-red youth-brush-light">
					Accommodation
				</span>
			</div>
			<div className="mx-16 ">
				<AccommodationCarousel />
			</div>
			<div className="bg-light-pink w-screen h-screen relative my-4">
				<div className="absolute left-12 bottom-12 z-10">
					<PlaceToSeeCard />
				</div>
				<div className="absolute w-[70vw] h-[80vh] top-0 right-12 z-20">
					<img className="w-full h-full" src={Stupa} />
				</div>
			</div>

			<div className="mb-4 ml-16 ">
				<span className="text-4xl mont-medium text-red">
					Fact Check before visiting Sanchi
				</span>
			</div>
			<div className="mb-16 ml-16 ">
				<span className="text-xl text-dark mont-regular">
					The Complex is open from 6:30 am to 6:30 pm every day.
					However, the museum inside the complex is closed for
					visitors on Fridays. The entry fee to the Monument complex
					is Rs. 30 for Indians and Rs 500 for foreign tourists.
				</span>
			</div>
		</>
	);
};

export default SpecificDestinationPage;

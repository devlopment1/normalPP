import React from 'react';
import Explore1KhajurahoTempleStart from '../../assets/images/KHAJURAHO-10.png';
import Explore1Tiger from '../../assets/images/S2-WS20-04 (DSC_4573).png';
import Explore1HillWater from '../../assets/images/MARBLES THAT FIRE YOUR IMAGINATION.png';
import Explore1MaheshwarTemple from '../../assets/images/MAHESHWAR.png';
import Explore2Img1 from '../../assets/images/ORCHHA-05.jpg';
import Explore2Img2 from '../../assets/images/Picture2.jpg';
import Explore2Img3 from '../../assets/images/BHOPAL.png';
import Explore3Tiger from '../../assets/images/BANDHAVGARH-04-1.png';
import Explore3Owl from '../../assets/images/Panna.jpg';
import Explore3Chital from '../../assets/images/BANDHAVGARH-03.jpg';
import Explore5Tiger from '../../assets/images/BANDHAVGARH-03.png';

import Explore5Trishul from '../../assets/images/Mahadeo Hill.png';
import Explore5Dance from '../../assets/images/KHAJURAHO-07.png';
import Explore5SingleBuck from '../../assets/images/Group 262.png';
import Explore5YantraMandir from '../../assets/images/Shriyantra Mandir (1).png';
import Explore5Rajwada from '../../assets/images/Rajwada.png';
import Explore5BirlaMandir from '../../assets/images/09 Birla Mandir (1) (1).png';
import Explore5multiBuck from '../../assets/images/BANDHAVGARH-05.png';
import Explore5TopLion from '../../assets/images/lion.svg';
import Explore5TopSadesee from '../../assets/images/30-sawasdee.svg';
import Explore5TopTemple from '../../assets/images/temple (2) (1).svg';
import Explore5Topdeer from '../../assets/images/deer.svg';
import Explore5TopCathedrel from '../../assets/images/cathedral.svg';
import mpMap from '../../assets/images/madhya-pradesh-outline-map@2x.png';

// import Carousel from 'carousel-react-rcdev';

import ContactUs from '../../components/ContactUs';
import ImageCarousel from '../../components/ImageCarousel';
import ImageCarousel2 from '../../components/ImageCarousel2';

const ExplorePage = () => {
	let explore1Images = [
		{
			id: 1,
			img: Explore1KhajurahoTempleStart,
		},
		{
			id: 2,
			img: Explore1Tiger,
		},
		{
			id: 3,
			img: Explore1HillWater,
		},
		{
			id: 4,
			img: Explore1MaheshwarTemple,
		},
	];
	let explore3Items = {
		Expolore: [
			'Wildlife',
			'Heritage',
			'Spiritual Yatra',
			'Adventure',
			'Local Flavours',
			'Private Rentals',
		],
	};
	return (
		<>
			<div className="flex flex-row aspect-auto relative  ">
				{explore1Images.map((item) => {
					return (
						<div className="basis-1/4 h-[100%]" key={item.id}>
							<img
								className="w-full h-full contrast-75"
								src={item.img}
							/>
						</div>
					);
				})}
				<div className=" absolute w-full h-full top-0 left-0 flex justify-center items-center z-10">
					<h1 className="md:text-5xl lg:text-6xl xl:text-9xl font-bold text-white opacity-50 bebas-neue-regular">
						EXPLORE
					</h1>
				</div>
				<div className="w-1/2 flex absolute left-1/4 bottom-0 z-20">
					<input
						className="w-[70%] bg-white border-[1px] border-[#bd1b1b] py-3 px-4 focus:outline-none poppins-light-italic text-gray-2"
						placeholder="Search for Destinations, Packages, Experiences here..."
					/>
					<button className="w-[30%] bg-[#bd1b1b] text-white py-3 mont-medium text-lg">
						SEARCH
					</button>
				</div>
			</div>
			<div className="my-8 ml-8">
				<span className="text-8xl text-red youth-brush-light">
					Attractions
				</span>
			</div>
			<div className="mx-16 as">
				<ImageCarousel />
			</div>
			{/* <Carousel max-width={'100vw'}>
				<img
					className="basis-1/3 h-[50vh]"
					src={Explore2Img1}
					alt="imagem"
					title="imagem"
				/>
				<img
					className="basis-1/3 h-[50vh]"
					src={Explore2Img3}
					alt="imagem"
					title="imagem"
				/>
				<img
					className="basis-1/3 h-[50vh]"
					src={Explore2Img2}
					alt="imagem"
					title="imagem"
				/>
				<img
					className="basis-1/3 h-[50vh]"
					src={Explore2Img3}
					alt="imagem"
					title="imagem"
				/>
				<img
					className="basis-1/3 h-[50vh]"
					src={Explore2Img1}
					alt="imagem"
					title="imagem"
				/>
			</Carousel> */}

			{/* <Carousel className="w-[33vw] h-[50vh] flex flex-col mx-auto ">
				<div>
					<img src={Explore2Img1} />
				</div>
				<div>
					<img src={Explore2Img2} />
				</div>
				<div>
					<img src={Explore2Img3} />
				</div>
			</Carousel> */}
			<div className="mt-16 w-screen aspect-auto flex flex-row">
				<div className="w-[35%]  bg-[#BD1B1B] text-white  p-8">
					<div className="flex flex-col">
						<div className="flex flex-row justify-between items-center ">
							<p className="text-8xl mb-8 youth-brush-light">
								Explore
							</p>
							{/* <img className="w-[50%	] h-full" src={mpMap} /> */}
						</div>
						<span className="border-b-2 border-white"></span>
					</div>
					{explore3Items.Expolore.map((item) => {
						return (
							<div className="mt-16 ml-12 mont-medium">
								<span className="text-2xl font-medium">{item}</span>
							</div>
						);
					})}
				</div>
				<div className="w-[35%]  border-x border-white">
					<img src={Explore3Tiger} className="h-full" />
				</div>
				<div className="w-[30%] grid grid-row-2">
					<div className=" border-b border-white">
						<img src={Explore3Owl} className="h-full" />
					</div>
					<div className="">
						<img src={Explore3Chital} className="h-full" />
					</div>
				</div>
			</div>
			<div className="my-16 ml-16">
				<span className="text-8xl text-red youth-brush-light">
					Unexplored side of MP
				</span>
			</div>
			<div className="mx-16">
				<ImageCarousel2 />
			</div>

			{/* <Carousel className="w-[33vw] h-[50vh] flex flex-col mx-auto ">
				<div>
					<img src={Explore2Img1} />
				</div>
				<div>
					<img src={Explore2Img2} />
				</div>
				<div>
					<img src={Explore2Img3} />
				</div>
			</Carousel> */}
			<div className=" bg-[#FFF2DA] mb-16">
				<div className="py-16 pl-16 ">
					<span className="text-8xl text-red youth-brush-light">
						Explore Other Interests
					</span>
				</div>
				<div className="w-screen h-[100vh] flex  ">
					<div className="basis-1/4 flex flex-col ">
						<div className="h-[35%]   relative m-2">
							<img className="h-full w-full" src={Explore5Tiger} />
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopLion} />
							</div>
						</div>
						<div className="h-[65%] relative mx-2 mb-2 ">
							<img className="h-full w-full" src={Explore5Trishul} />
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopTemple} />
							</div>
						</div>
					</div>
					<div className="basis-1/4 felx flex-col ">
						<div className="h-[65%] relative m-2 ">
							<img className="h-full w-full" src={Explore5Dance} />
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopSadesee} />
							</div>
						</div>
						<div className="h-[35%] relative m-2 ">
							<img
								className="h-full w-full"
								src={Explore5SingleBuck}
							/>
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5Topdeer} />
							</div>
						</div>
					</div>
					<div className="basis-1/4 felx flex-col  ">
						<div className="h-[50%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5YantraMandir}
							/>
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopTemple} />
							</div>
						</div>
						<div className="h-[50%]  relative m-2">
							<img className="h-full w-full" src={Explore5Rajwada} />
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopCathedrel} />
							</div>
						</div>
					</div>
					<div className="basis-1/4 felx flex-col  ">
						<div className="h-[65%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5BirlaMandir}
							/>
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5TopTemple} />
							</div>
						</div>
						<div className="h-[35%] relative m-2">
							<img
								className="h-full w-full"
								src={Explore5multiBuck}
							/>
							<div className="absolute z-10 bg-black opacity-50  w-full h-full top-0 left-0 flex justify-center items-center  ">
								<img src={Explore5Topdeer} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExplorePage;

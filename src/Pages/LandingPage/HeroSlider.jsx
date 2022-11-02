import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const slides = [
	'../src/assets/images/one.jpg',
	'../src/assets/images/KANHA.png',
	'../src/assets/images/Patalkot.png',
];

export default function HeroSlider() {
	const [index, set] = useState(0);

	const transitions = useTransition(index, {
		key: index,
		from: { opacity: 0.8 },
		enter: { opacity: 0.8 },
		leave: { opacity: 1 },
		config: { duration: 3000 },
		onRest: (_a, _b, item) => {
			if (index === item) {
				set((state) => (state + 1) % slides.length);
			}
		},
		exitBeforeEnter: true,
	});
	return (
		<div className="flex fill center w-screen h-screen  ">
			{transitions((style, i) => (
				<>
					<animated.div
						className="w-full h-full backdrop-saturate-200 bg-center bg-white/50 relative  bg-no-repeat"
						style={{
							...style,
							backgroundImage: `url(${slides[i]})`,
						}}
					/>
					<div
						className="pl-8 absolute top-0 left-[-0.3px] 
           h-[100vh] w-[50vw] opacity-2 poly glass-masking z-10"
					></div>
					<div className=" w-full h-full  flex flex-col justify-center  absolute z-20 pl-16">
						<p className="text-white text-4xl mont-medium">
							Majestic
						</p>
						<div class="  .mask1... ">
							<span class="bg-clip-text text-8xl bebas-neue-regular something">
								MADHYA PRADESH
							</span>
						</div>
						<div>
							<button class="rounded-md bg-red text-white px-10 py-2 text-lg w-max-content">
								EXPLORE
							</button>
						</div>
						<div className="mt-8">
							<p className="mont-medium break-all text-white text-lg  ">
								Welcome to the{' '}
								<span className="mont-medium text-red">
									Heart of India
								</span>
								, home to all religions'{' '}
							</p>
							<p className="mont-medium break-all text-white text-lg ">
								cultural and spiritual heritage. Innumerable
							</p>
							<p className="mont-medium break-all text-white text-lg ">
								monuments, intricately carved temples, stupas, forts,
							</p>
							<p className="mont-medium break-all text-white text-lg ">
								palaces await you all over the State.
							</p>
						</div>
					</div>
				</>
			))}
		</div>
	);
}

import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import accommodations1bg1 from '../assets/images/accommodationBg1.png';
import accommodations1bg2 from '../assets/images/AccommodationBg2.png';

const slides = [
	'../src/assets/images/accommodationBg1.png',

	'../src/assets/images/Patalkot.png',
];

const BgSlider = () => {
	const [index, set] = useState(0);

	const transitions = useTransition(index, {
		key: index,
		from: { opacity: 0.8 },
		enter: { opacity: 1 },
		leave: { opacity: 0.8 },
		config: { duration: 2000 },
		onRest: (_a, _b, item) => {
			if (index === item) {
				set((state) => (state + 1) % slides.length);
			}
		},
		exitBeforeEnter: true,
	});
	return (
		<div className=" fill center w-screen h-screen border-2 border-blue">
			{transitions((style, i) => (
				<>
					<animated.div
						className=" h-full bg-center bg-no-repeat object-cover"
						style={{
							...style,
							backgroundImage: `url(${slides[i]})`,
						}}
					/>
					{/* <animated.div
            className='px-[5%] absolute top-0 left-[-0.3px] backdrop-saturate-50
           bg-white/30 h-[100vh] w-[50vw]  poly'
          >
            <div className='mt-[30%]'>
              <p className='text-white text-4xl'>Majestic</p>
              <div class='text-5xl font-extrabold ...'>
                <span class='bg-clip-text '>
                  MADHYA PRADE<span className='text-white'>SH</span>
                </span>
              </div>
              <button class='rounded-full bg-red text-white px-4 py-2 text-lg'>
                Explore
              </button>
              <div className='px-2'>
                <p className='break-all text-white text-lg mt-3 '>
                  Welcome to the{' '}
                  <span className='text-red'>Heart of India</span>, home to all
                  religions'{' '}
                </p>
                <p className='break-all text-white text-lg mt-3 '>
                  cultural and spiritual heritage. Innumerable
                </p>
                <p className='break-all text-white text-lg mt-3 '>
                  monuments, intricately carved temples, stupas, forts,
                </p>
                <p className='break-all text-white text-lg mt-3 '>
                  palaces await you all over the State.
                </p>
              </div>
            </div>
          </animated.div> */}
				</>
			))}
		</div>
	);
};

export default BgSlider;

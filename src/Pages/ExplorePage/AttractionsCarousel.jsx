import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import attractions1Orcha from '../../assets/images/ORCHHA-05.jpg';
import attractions1Stupa from '../../assets/images/Picture2.jpg';
import attractions1SunriseLake from '../../assets/images/BHOPAL.png';

const data = [
	{
		id: 0,
		img: attractions1Orcha,
	},
	{
		id: 1,
		img: attractions1Stupa,
	},
	{
		id: 2,
		img: attractions1SunriseLake,
	},
	{
		id: 3,
		img: attractions1Orcha,
	},
	{
		id: 4,
		img: attractions1Stupa,
	},
	{
		id: 5,
		img: attractions1SunriseLake,
	},
];

const AttractionsCarousel = () => {
	const [active, setActive] = useState([0, 1, 2]);

	const transitions = useTransition([...active], {
		from: { opacity: 0, display: 'none' },
		enter: { opacity: 1, display: 'block' },
		leave: { opacity: 0, display: 'none' },
		item: (item) => item,
	});

	const moveNext = React.useCallback(() => {
		if (active[2] !== 5)
			setActive((current) => [
				...current.slice(1, 3),
				current[2] + 1,
			]);
		else setActive([0, 1, 2]);
	}, [active]);

	const movePrev = React.useCallback(() => {
		if (active[0] !== 0)
			setActive((current) => [
				current[0] - 1,
				...current.slice(0, 2),
			]);
		else setActive([3, 4, 5]);
	}, [active]);

	return (
		<div className="  flex justify-around items-center p-12">
			<button onClick={movePrev}>prev</button>
			<div className="container flex flex-row justify-between">
				{transitions((style, item) => (
					<animated.div>
						<img src={data[item]?.img} className="w-[30vw] h[40vh]" />
					</animated.div>
				))}
			</div>
			<button onClick={moveNext}>next</button>
		</div>
	);
};

export default AttractionsCarousel;

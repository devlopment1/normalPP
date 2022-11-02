import React from 'react';
import ImageCarousel2 from '../../../components/ImageCarousel2';

const UnExplore = () => {
	return (
		<>
			<div className="my-16 ml-16">
				<span className="text-8xl text-red youth-brush-light">
					Unexplored side of MP
				</span>
			</div>
			<div className="mx-16">
				<ImageCarousel2 />
			</div>
		</>
	);
};

export default UnExplore;

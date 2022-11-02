import React, { useState } from 'react';
import river from '../assets/images/River Rafting.jpg';
import dolphin from '../assets/images/DOLPHIN.jpg';
import fort from '../assets/images/BHOJPUR-01-1.jpg';
import temple from '../assets/images/BHEDAGHAT-01-1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Slider from 'react-slick';
import {
	BsArrowLeftCircle,
	BsArrowRightCircle,
} from 'react-icons/bs';
import { slickNext, slickPrev } from 'react-slick';
import GuestStoryCard from './GuestStoryCard';

const GuestStoryCardCarousel = () => {
	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoPlaySpeed: 5000,
	// };
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 2000,
	};

	const cardFunc = () => {
		return <GuestStoryCard />;
	};

	const data = [
		{
			id: 1,
			component: cardFunc(),
		},
		{
			id: 2,
			component: cardFunc(),
		},
		{
			id: 3,
			component: cardFunc(),
		},
		{
			id: 4,
			component: cardFunc(),
		},
	];
	return (
		<div className="">
			<Slider {...settings} className="pl-8">
				{data.map((item) => (
					<div key={item} className=" px-8  ">
						{item.component}
					</div>
				))}
			</Slider>
		</div>
	);
};

export default GuestStoryCardCarousel;

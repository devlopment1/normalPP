import React, { useState } from 'react';
import river from '../assets/images/River Rafting.jpg';
import dolphin from '../assets/images/DOLPHIN.jpg';
import fort from '../assets/images/BHOJPUR-01-1.jpg';
import temple from '../assets/images/BHEDAGHAT-01-1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Slider from 'react-slick';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { slickNext, slickPrev } from 'react-slick';

const ImageCarousel2 = () => {
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
    dots: true,
    dotsClass: 'button__bar',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
  };

  const data = [
    {
      id: 1,
      img: river,
      alt: 'river',
    },
    {
      id: 2,
      img: dolphin,
      alt: 'dolphin',
    },
    {
      id: 3,
      img: fort,
      alt: 'fort',
    },
    {
      id: 4,
      img: temple,
      alt: 'temple',
    },
  ];

  return (
    <div className=''>
      <Slider {...settings} className='pl-8'>
        {data.map((item) => (
          <div key={item} className='h-[35vh] px-8 flex flex-col '>
            <img className='w-full h-full rounded-3xl' src={item.img} />
            <p className='text-2xl mont-semi-bold text-red my-2'>
              RIVER RAFTING IN ORCHHA
            </p>
            <div className='flex flex-row text-gray-2 items-center gap-x-4 mont-regular '>
              <p className='text-lg'>Read more</p>
              <AiOutlineArrowRight className='text-2xl' />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel2;

import React, { useState } from 'react';
import river from '../assets/images/River Rafting.jpg';
import dolphin from '../assets/images/DOLPHIN.jpg';
import fort from '../assets/images/BHOJPUR-01-1.jpg';
import temple from '../assets/images/BHEDAGHAT-01-1.jpg';
import Slider from 'react-slick';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { slickNext, slickPrev } from 'react-slick';

const ImageCarousel = () => {
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
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <div key={item} className='md:h-[40vh] xl:h-[50vh]  relative px-2'>
            <img className='w-full h-full ' src={item.img} />
            <div className='absolute  bottom-0 w-full left-0  px-3 py-2  '>
              <div className=' transbox py-2 px-4 text-white flex justify-between items-center'>
                <p className='mont-regular text-lg'>
                  Indulge in sound and light show of Orchha
                </p>
                <AiOutlineArrowRight className='text-3xl' />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

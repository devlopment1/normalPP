import React from 'react';
import climb from '../../../assets/images/climb.jpg';
import ujjan from '../../../assets/images/ujjan.jpg';
import fest from '../../../assets/images/fest.jpg';

import { HiArrowNarrowRight } from 'react-icons/hi';
import Slider, { slickNext, slickPrev } from 'react-slick';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

const data = [
  {
    id: '1',
    alt: 'climb',
    img: climb,
    name: 'PACHMARHI CLIMBING CHALLENGE',
  },
  {
    id: '2',
    alt: ujjan,
    img: '../src/assets/images/ujjan.jpg',
    name: 'CORRIDOR LAUNCH BY PM MODI',
  },
  {
    id: '3',
    alt: fest,
    img: '../src/assets/images/fest.jpg',
    name: 'BHOPAL LITERATURE AND ART FESTIVAL',
  },
  {
    id: '4',
    alt: 'climb',
    img: climb,
    name: 'PACHMARHI CLIMBING CHALLENGE',
  },
];

const Prev = () => {
  return (
    <div className='relative'>
      <MdArrowBackIos
        className='transbox text-white text-4xl absolute z-10 left-3 top-[190px] cursor-pointer'
        onClick={() => slickPrev()}
      />
    </div>
  );
};
const Next = () => {
  return (
    <>
      <MdArrowForwardIos
        className='transbox text-white text-4xl absolute z-20 right-4 top-[190px] cursor-pointer'
        onClick={() => slickNext()}
      />
    </>
  );
};

const ArticleSectionPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    prevArrow: <Prev className='' />,
    nextArrow: <Next />,
  };

  return (
    <div className='mt-10 mx-10'>
      <div className='mb-8 ml-16'>
        <span className='text-8xl text-red youth-brush-light'>
          Upcoming Events
        </span>
      </div>

      <Slider {...settings} className='pl-8'>
        {data.map((item) => (
          <div key={item} className='md:h-[40vh] xl:h-[50vh]  relative px-2 '>
            <img className='w-[50vw] h-[50vh]' src={item.img} />
            <div className='absolute  bottom-0 w-full left-0  px-3 py-2  '>
              <div className=' transbox py-2 px-4 text-white flex justify-between items-center'>
                <p className='mont-regular text-lg'>
                  Indulge in sound and light show of Orchha
                </p>
                <AiOutlineArrowRight className='text-3xl' />
              </div>
            </div>
            <p className='text-2xl mont-semi text-red my-2 text-truncate'>
              {item.name}
            </p>
            <div className='flex flex-row text-gray-2 items-center gap-x-4 mont-regular '>
              <p className='mont-regular text-xl text-red '> Know More</p>
              <HiArrowNarrowRight className='text-5xl text-red ' />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSectionPage;

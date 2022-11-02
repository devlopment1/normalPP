import React from 'react';
import river from '../../../assets/images/River Rafting.jpg';
import temple from '../../../assets/images/Pateleshwar Mahadev Temple.jpg';
import deer from '../../../assets/images/Barasingha.jpg';
import food from '../../../assets/images/istockphoto-1093257580-1024x1024.jpg';

const Discover = () => {
  return (
    <div className='md:grid grid-cols-2 gap-x-8 mx-8 my-16 mt-5'>
      <div className='grid grid-rows-12 gap-y-8'>
        <div className='row-span-2 w-full px-5'>
          <p className='text-dark mont-italic lg:text-5xl md:text-4xl sm:text-sm '>
            Discover{' '}
            <span className='text-red youth-brush-light md:text-6xl sm:text-sm  '>
              Heart Of India
            </span>
          </p>
        </div>
        <div className='row-span-5'>
          <div class='relative w-full aspect-auto shadow-lg '>
            <img
              class='w-full h-full rounded-3xl '
              src={river}
              alt='Sunset in the mountains'
            />

            <div class='absolute bottom-0 left-0 px-10 rounded-lg w-full backdrop-blur-sm bg-white/0'>
              <h2 class='mb-3 text-5xl opacity-70  tracking-tight text-white youth-brush-light'>
                Adventure
              </h2>
            </div>
          </div>
        </div>
        <div className='row-span-5'>
          <div class='relative w-full aspect-auto rounded-lg shadow-lg '>
            <img
              class='w-full h-full rounded-3xl'
              src={deer}
              alt='Sunset in the mountains'
            />

            <div class='absolute bottom-0 left-0 px-10 rounded-lg w-full backdrop-blur-sm bg-white/0'>
              <h2 class='mb-3 text-5xl opacity-70  tracking-tight text-white youth-brush-light'>
                Wildlife
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='md:grid grid-rows-2 gap-y-8'>
        <div class='relative w-full aspect-auto rounded-lg shadow-lg '>
          <img
            class='w-full h-full rounded-3xl'
            src={temple}
            alt='Sunset in the mountains'
          />

          <div class='absolute bottom-0 left-0 px-10 rounded-lg w-full backdrop-blur-sm bg-white/0'>
            <h2 class='mb-3 text-5xl opacity-70  tracking-tight text-white youth-brush-light'>
              Culture
            </h2>
          </div>
        </div>
        <div class='relative w-full aspect-auto rounded-lg shadow-lg '>
          <img
            class='w-full h-full rounded-3xl'
            src={food}
            alt='Sunset in the mountains'
          />

          <div class='absolute bottom-0 left-0 px-10 rounded-lg w-full backdrop-blur-sm bg-white/0'>
            <h2 class='mb-3 text-5xl opacity-70  tracking-tight text-white youth-brush-light'>
              Food
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

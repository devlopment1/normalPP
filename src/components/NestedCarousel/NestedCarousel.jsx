import React from 'react';
import BHIMBETKA from '../../assets/images/BHIMBETKA-07-1.jpg';
import InsideCarousel from './InsideCarousel';
import Button from 'react-bootstrap/Button';

const NestedCarousel = () => {
  return (
    <div className='bg-slate-300 h-[110vh] relative '>
      <h1 className=' text-6xl text-red youth-brush-light my-16 ml-16'>
        Our Top Packages
      </h1>

      <div className=''>
        <img
          src={BHIMBETKA}
          className='opacity-10 absolute h-[100vh] w-[100vw]'
        />
      </div>
      <div className='container relative mx-auto mt-10'>
        <div className='card h-[65vh] w-[30vw] mt-[100px] absolute top-10 left-[37vw] z-10 '>
          <div className='p-1'>
            <Button variant='danger float-right '>
              <span className='text-danger p-1'> 3 NIGHTS </span>
            </Button>
          </div>
          <h5 className='text-center text-danger mt-2 mont-medium text-lg'>
            JYOTARLING DARSHAN
          </h5>
          <div
            className='mt-3 container px-20
          '
          >
            <p className='text-center leading-10 text-gray-100 mont-regular text-sm '>
              Several destinations in Madhya Pradesh offer the opportunity to be
              completely immersed in them, and the best way to do it is with a
              short Heritage Walk. Indulge yourself in the local culture,
              flavors, and architecture, and take a trip back in time with your
              local guide.
            </p>
          </div>
          <>
            <ul className='d-flex justify-center space-x-3 mt-3'>
              <li className='text-red mont-medium  text-md'>.INDORE</li>
              <li className='text-red mont-medium  text-md'>.UJJAIN</li>
              <li className='text-red mont-medium  text-md'>.OMKARSESHWAR</li>
            </ul>
            <ul className='d-flex justify-center space-x-3'>
              <li className='text-red mont-medium  text-md'>.MAHESHWAR</li>
              <li className='text-red mont-medium  text-md'>.MANDU</li>
              <li className='text-red mont-medium  text-md'>.INDORE</li>
            </ul>
          </>
          <div className='border border-light p-3 mb-4'>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-danger  px-16'
                style={{ background: 'red' }}
              >
                <span className='mont-regular'>BOOK</span>
              </button>
            </div>
          </div>
        </div>
        <div className='absolute z-10'>
          <InsideCarousel />
        </div>
      </div>
    </div>
  );
};

export default NestedCarousel;

import React from 'react';
import BHIMBETKA from '../../../assets/images/BHIMBETKA-07-1.jpg';
import MainChildCarousel from './MainChildCarousel';
import Button from 'react-bootstrap/Button';

const MainImageCarousel = () => {
  return (
    <div className='bg-slate-300 h-[110vh] relative '>
      <div className='p-10'>
        <h1>Our Top Packages</h1>
      </div>

      <div className=''>
        <img
          src={BHIMBETKA}
          className='opacity-10 absolute h-[100vh] w-[100vw]'
        />
      </div>
      <div className='container relative mx-auto mt-10 '>
        <div className='card h-[50vh] w-[30vw] mt-[100px] absolute top-10 left-[37vw] z-10 px-10'>
          <div className='p-1'>
            <Button variant='danger float-right '>
              <span className='text-danger p-1'> 3 NIGHTS </span>
            </Button>
          </div>
          <h5 className='text-center text-danger mt-10'>JYOTARLING DARSHAN</h5>
          <div
            className='mt-3 container px-[80px]
          '
          >
            <p className='text-center leading-7 text-gray-400'>
              Several destinations in Madhya Pradesh offer the opportunity to be
              completely immersed in them, and the best way to do it is with a
              short Heritage Walk. Indulge yourself in the local culture,
              flavors, and architecture, and take a trip back in time with your
              local guide.
            </p>
          </div>
          <>
            <ul className='d-flex justify-center space-x-3'>
              <li className='text-red'>.INDORE</li>
              <li className='text-red'>.UJJAIN</li>
              <li className='text-red'>.OMKARSESHWAR</li>
            </ul>
            <ul className='d-flex justify-center space-x-3'>
              <li className='text-red'>.MAHESHWAR</li>
              <li className='text-red'>.MANDU</li>
              <li className='text-red'>.INDORE</li>
            </ul>
          </>
          <div class='border border-light p-3 mb-4'>
            <div class='text-center'>
              <button
                type='button'
                class='btn btn-danger'
                style={{ background: 'red' }}
              >
                Book
              </button>
            </div>
          </div>
        </div>
        <div className='absolute z-10'>
          <MainChildCarousel />
        </div>
      </div>
    </div>
  );
};

export default MainImageCarousel;

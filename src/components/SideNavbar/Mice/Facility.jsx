import React from 'react';
import facility from '../../../assets/images/IMG_2055@2x.png';
import Carvan from './Carvan';
import Carvan2 from './Carvan2';

const Facility = () => {
  return (
    <div className=''>
      <div className='aspect-auto'>
        <img src={facility} alt='...' className='' />
      </div>

      <div className=''>
        <h1 className=' text-6xl text-red youth-brush-light my-16 ml-16'>
          Facilities
        </h1>
        <>
          <Carvan2 />
        </>
        <div className='mt-[5%]'>
          <Carvan />
        </div>
        <div className='mt-[5%]'>
          <Carvan2 />
        </div>
        <div className='mt-[5%]'>
          <Carvan />
        </div>
      </div>
    </div>
  );
};

export default Facility;

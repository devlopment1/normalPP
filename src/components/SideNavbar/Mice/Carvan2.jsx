import React from 'react';
import van from '../../../assets/images/IMG_2055@2x.png';
import facility from '../../../assets/images/Screenshot 2022-09-12 155232.png';
import building from '../../../assets/images/pic (1).jpg';
import lab from '../../../assets/images/2_05_25_59_Khajuraho_1_H@@IGHT_276_W@@IDTH_600.jpg';

const Carvan2 = () => {
  return (
    <div className='relative bg-[#BD1B1B26] h-[80vh]'>
      <div className='card bg-white w-[35vw] h-[60vh]  top-[15%] mx-[5%]'>
        <div className='mt-10'>
          <h4 className=' text-center text-4xl text-[#4B4B4B]'>
            Explore MP in Caravan
          </h4>
          <h1 className='text-[#BD1B1BAB] text-6xl text-center'>CARVAN</h1>
          <p className='text-center px-[20%]'>
            Caravan Tourism, is and innovative transport initiative taken by
            Madhya Pradesh Tourism to let the travelers have a comfortable
            journey while enjoying the enchanting landscapes of the State. To
            offer a unique travelling experience to the tourist, Caravans are
            specially designed vehicles for the excitement seeker. We have two
            types of Caravans - Luxury and Deluxe to suit your requirement.
          </p>
        </div>
        <div class='border border-light p-4 mb-4 '>
          <div class='text-center p-3'>
            <button
              type='button'
              class='btn btn-danger'
              style={{ background: '#BD1B1B' }}
            >
              Packages
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={van}
          alt='...'
          className='w-[60vw] h-[60vh] absolute left-[35%] top-[5%] '
        />
      </div>
    </div>
  );
};

export default Carvan2;

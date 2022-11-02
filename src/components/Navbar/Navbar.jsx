import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import BackgroundSkelton from '../../Pages/LandingPage/ArticlePages/BackgroundSkelton';
import logo from '../../assets/images/mplogo.png';
import { Link, useNavigate } from 'react-router-dom';
import OffCanvas from './OffCanvas';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-screen flex md:flex-row justify-between item-center  px-16 fixed top-0 opacity-100 z-[1000] '>
      <img
        src={logo}
        className='lg:w-[5%] cursor-pointer md:w-[5%] md:h-[5%] md:mt-3 sm:w-[5%] sm:h-[5%] sm:mt-3 '
        onClick={() => navigate('/home')}
      />

      <ul className=' flex md:flex-row md:gap-x-12 md:py-4'>
        <Link
          to='/explore'
          className=' text-white text-2xl hover:text-indigo-200 '
        >
          EXPLORE
        </Link>
        <Link
          to='/plan-your-trip'
          className=' text-white text-2xl hover:text-indigo-200 '
        >
          PLAN YOUR TRIP
        </Link>
        <Link
          to='/destinations'
          className=' text-white text-2xl hover:text-indigo-200 '
        >
          DESTINATION
        </Link>
        <Link
          to='/accommodation'
          className=' text-white text-2xl hover:text-indigo-200 '
        >
          ACCOMMODATIONS
        </Link>

        <Link className=' text-white text-2xl hover:text-indigo-200 '>
          LOGIN
        </Link>
        <OffCanvas />
      </ul>
    </div>
  );
};

export default Navbar;

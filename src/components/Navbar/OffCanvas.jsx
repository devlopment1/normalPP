import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import BackgroundSkelton from '../../Pages/LandingPage/ArticlePages/BackgroundSkelton';
import logo from '../../assets/images/mplogo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className=' text-white text-2xl hover:text-indigo-200 mt-[10px]'>
        <GiHamburgerMenu
          className='cursor-pointer'
          size={20}
          onClick={handleShow}
        />
      </Link>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className='w-100 bg-red text-white'
        ariaControls='offcanvasRight'
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <span className='hidden'>Offcanvas</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='position relative'>
          <ul className='text-right mt-[50px] px-4 flex flex-col'>
            <Link>
              {' '}
              <AiOutlineCloseCircle
                size={30}
                onClick={handleClose}
                className='position absolute left-[95%] top-[0%] cursor-pointer'
              />
            </Link>
            <Link className='mb-[30px] text-white'>WELLNESS TOURISM</Link>
            <Link className='mb-[30px] text-white'>OFFERS & DISCOUNTS</Link>
            <Link
              to='facilities'
              className='mb-[30px] text-white'
              onClick={handleClose}
            >
              MICE & OTHER FACILITIES
            </Link>
            <Link
              to='institutions'
              className='mb-[30px] text-white'
              onClick={handleClose}
            >
              INSTITUTIONS
            </Link>
            <Link className='mb-[30px] text-white'>ORDERS & CIRCULARS</Link>
            <Link
              to='tenders'
              className='mb-[30px] text-white '
              onClick={handleClose}
            >
              TENDERS
            </Link>
            <Link className='mb-[30px] text-white'>CAREERS</Link>
            <Link className='mb-[30px] text-white'>CONTACT US</Link>
          </ul>
          <main className='position-absolute top-0 left-[5%] '>
            <BackgroundSkelton className='' />
          </main>
          <main className='position-absolute top-0 left-[50%] '>
            <BackgroundSkelton />
          </main>
          <main className='position-absolute top-[60%] left-[20%] '>
            <BackgroundSkelton />
          </main>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

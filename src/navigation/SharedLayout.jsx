import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <div className=''>
      <Navbar className='' />

      <main>
        <Outlet />
      </main>
      <ContactUs />
    </div>
  );
};

export default SharedLayout;

import React, { Component } from 'react';
import Slider from 'react-slick';
import river from '../../assets/images/River Rafting.jpg';
import dolphin from '../../assets/images/DOLPHIN.jpg';
import fort from '../../assets/images/BHOJPUR-01-1.jpg';
import maheswar from '../../assets/images/MAHESHWAR.png';

export default class InsideCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: 'button__bar',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      arrows: false,
      autoplaySpeed: 2000,
    };
    return (
      <div className='w-[43vw] mt-10 px-16 z-10'>
        <Slider {...settings}>
          <div>
            <img className='w-full h-[55vh]' src={maheswar} />
          </div>
          <div>
            <img className='w-100' src={dolphin} />
          </div>
          <div>
            <img className='w-100' src={fort} />
          </div>
        </Slider>
      </div>
    );
  }
}

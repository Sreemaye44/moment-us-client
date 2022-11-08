import React from 'react';
import banner from '../../../src/assets/photo-1591604466107-ec97de577aff.avif';
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item carousel-img relative w-full">
          <img src={banner} className="w-full h-fit" alt='' />
          <div className="absolute text-center justify-between transform -translate-y-1/2 right-24 top-1/4"> 
            <h1 className='text-5xl font-extrabold text-black'>Make Your Wedding</h1><br/>
            <h1 className='text-5xl font-extrabold text-black'>A Wonderful Story</h1>
           
           <button className='btn m-7'>discover</button>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React from 'react';
import banner1 from '../../../src/assets/photo-1591604466107-ec97de577aff.avif';
import banner2 from '../../../src/assets/photo-1497387674890-4ecd2af62493.avif';

const Banner = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full object-fill h-cover rounded-lg mt-3 mb-10" alt='' />
        <div className="absolute text-center justify-between transform -translate-y-1/2 right-16 top-1/3"> 
          <h1 className='text-5xl font-extrabold text-black'>Make Your Wedding</h1><br/>
          <h1 className='text-5xl font-extrabold text-black'>A Wonderful Story!</h1>
         
         <button className='btn m-7 text-white'>discover</button>
         <button className='btn btn-outline m-7'>Learn More</button>
        </div>
      </div> 
    </div>
    );
};

export default Banner;
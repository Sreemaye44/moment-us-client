import React from 'react';
import photo from '../../../src/assets/photo-1625492922105-5914617fd869.avif';
import photo2 from '../../../src/assets/photo-1593106584374-89259e7efb8b.avif';

const FAQ = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <img src={photo2} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div className='mr-10'>
            <h1 className="text-3xl font-bold my-5 text-teal-600">Why Choose US?</h1>
            <h2 className='font-semibold text-xl'>Professional Photographer </h2>
            <p className="py-3">I have taken a degree professionally from foreign photograpjic society.So, you can get very professional service.</p>
            <h2 className='font-semibold text-xl'>Experienced Photographer </h2>
            <p className="py-3">More than 1000 event has been cleared by moment use, so no compromise with expeience..</p>
            <h2 className='font-semibold text-xl'>Support 24/7 </h2>
            <p className="py-3">For the day you here me, I will give you my 24 hours for your service</p>
            <button className="btn btn-primary my-5">Contact us</button>
          </div>
        </div>
      </div>
    );
};

export default FAQ;
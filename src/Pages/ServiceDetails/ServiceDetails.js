import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const {user}=useContext(AuthContext);

    const service=useLoaderData();
    const {serviceName, image, rating, _id, description, price}=service;
    
    return (
       <div className='mt-5 flex'>
         <div className="card card-compact w-2/5 bg-base-100 shadow-xl">
  <figure> <PhotoProvider>
      <PhotoView src={service.image}>
        <img src={service.image} className="h-96 w-full" alt="" />
      </PhotoView>
    </PhotoProvider></figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    <p className='text-xl mt-2'>rating: {rating}</p>
   <p className='text-xl mt-2'>Price: {price}</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        <Review key={service._id}
        service={service}
        ></Review>
       </div>
        
    );
};

export default ServiceDetails;
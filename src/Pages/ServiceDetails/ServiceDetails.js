import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const {user}=useContext(AuthContext);

    const service=useLoaderData();
    const {serviceName, image, rating, _id, description, price}=service;
    
    return (
       <div>
         <div>
           <h2> AI portion e specific service er details thakbe like {serviceName}</h2>
        </div>
        <Review key={service._id}
        service={service}
        ></Review>
       </div>
        
    );
};

export default ServiceDetails;
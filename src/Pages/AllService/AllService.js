import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const AllService = () => {
    const allService=useLoaderData();
   
    return (
       <div className='w-1/2 mx-auto'>
        <h2 className='text-center font-bold mb-3 text-teal-600 text-3xl p'>Our Services</h2>
        {
            allService.map(service=>
            <div className="card  bg-base-100 shadow-xl my-5 border-2 hover:border-t-4">
  <figure>
  <PhotoProvider>
      <PhotoView src={service.image}>
        <img src={service.image} className="h-96 w-96 border-large" alt="" />
      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-4xl font-semibold">{service.serviceName}!</h2>
    <div>
    <p className='text-center text- p-1'>{service.description}.</p>
    </div>
    <div className="card-actions justify-between ">
    
  <div> <p className='text-xl'> Rating: {service.rating}</p> </div>
   
   <div> <p className='text-xl'> Price: ${service.price}</p></div>
 
    <div><Link to={`/serviceDetails/${service._id}`}><button className='btn btn-outline'>Details</button></Link></div>
    </div>
  </div>
</div>
        )
        }
        </div>
   
        
    );
        

};

export default AllService;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceArea = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services?total=3')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data);        
        })
    },[])

    return (
        <div className='w-9/11 mx-auto'>
        <h2 className='text-center font-bold mb-3 text-teal-600 text-4xl p-5'>Our Services</h2>
        {
            services.map(service=>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5 border-2 hover:border-t-4">
  <figure>
  <PhotoProvider>
      <PhotoView src={service.image}>
        <img src={service.image} className="h-52 w-96" alt="" />
      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-4xl font-semibold">{service.serviceName}!</h2>
    <div>
    <p className='text-center text- p-1'>{service.description.slice(0,100)}.</p>
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
       <div className='text-center'><Link to='/allService'><button className='btn bg-teal-600 text-white text-xl'>See all</button></Link></div>
        </div>
   
        
    );
};

export default ServiceArea;
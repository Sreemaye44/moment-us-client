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
        <h2 className='text-center m-10 text-3xl'>What we offer</h2>
        {
            services.map(service=>
                <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
  <PhotoProvider>
      <PhotoView src={service.image}>
        <img src={service.image} className="h-48 w-48" alt="" />
      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.serviceName}!</h2>
    <p>{service.description}.</p>
    <div className="card-actions justify-end">
    <Link to={`/serviceDetails/${service._id}`}><button className='btn'>Details</button></Link>
    </div>
  </div>
</div>
        )
        }
        <Link to='/allService'><button className='btn'>SEE ALL</button></Link>
        </div>
   
        
    );
};

export default ServiceArea;
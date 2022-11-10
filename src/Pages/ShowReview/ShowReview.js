import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const ShowReview = ({service}) => {
    const [showReview,setShowReview]=useState([]);
    useTitle('Reviews');
    useEffect(()=>{
        fetch(`https://moment-us-server.vercel.app/review?service=${service._id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setShowReview(data);
        });

    },[service._id])
    return (
        <div>

        
            {!showReview.length ? "no review to show":
            showReview.map(sr=>
            <div>
                
                    <div className='flex gap-4 py-3'>
          <div className="avatar ">
  <div className="w-6 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src={sr?.userImage} alt="" />
    
  </div>
</div>
          <h3 className='text'>{sr.userName}</h3>
          </div>
          <div className='flex'>
            <p className='px-10'>Rating: {sr.rating}</p>

            <p>{sr.creationDate}</p>
          </div>
          <p className='px-10 py-3'>{sr.message}</p>

            </div>)}
            
        </div>
    );
};

export default ShowReview;
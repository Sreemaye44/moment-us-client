import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import userDefault from '../../../src/assets/user-default.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Review = ({service}) => {
  const [newReview, setNewReview]=useState({});
  const [showReview,setShowReview]=useState([]);
    const {user}=useContext(AuthContext);
    const {serviceName,_id}=service;
    useEffect(()=>{
      fetch(`https://moment-us-server.vercel.app/review?service=${service._id}`)
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          setShowReview(data);
      });

  },[service._id,newReview]);

    const handleReview=event=>{
        event.preventDefault();
        const form=event.target;
        const message =form.message.value;
        const rating =form.rating.value;
        const review={
            service:_id,
            serviceName,
            rating,
            message,
            userName:user.displayName,
            userImage: user.photoURL,
            email: user.email,

        }
        fetch('https://moment-us-server.vercel.app/review', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_CENTER
    });
      form.reset();
      setNewReview(review);

    }})
  .catch(er=>console.error(er))

    }

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric",hour:"2-digit",minute:"2-digit"}
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

 
    return (
        <div className=' mx-auto p-5'>
        <form onSubmit={handleReview}>
          <h2 className='text-l
          '>Add a review: </h2>
          <div className='flex gap-4 py-5'>
          <div className="avatar ">
  <div className="w-6 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL ? user?.photoURL: userDefault} alt="" />
    
  </div>
</div>
          <h3 className='text'>{user?.displayName}</h3>
          </div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         </div>
         <div className>
         <input type="number" name="rating" className="textarea textarea-bordered my-2 w-full" placeholder="Your rating" required></input>
         <textarea name="message" className="textarea textarea-bordered h-6 w-full" placeholder="Your review" required></textarea>
         </div>
         {
            user?.email?
            <div className='flex justify-end'><input className='btn bg-teal-600 text-white' type="submit" value="Post" /></div>
            :
            <>
           
            <p className='text-xl text-red-500' >To post a review Please <Link to='/login'><button className='btn bg-teal-600 text-white'>Login</button></Link></p>
            </>
         }
         
          </form>
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
            <p className='text-slate-400'>{formatDate(sr.creationDate)}</p>
            </div>
          <div className='flex'>
          <p className='px-10 pb-2'>{sr.message}</p>
            
          </div>
         

            </div>)}
            
        </div>
        </div>
        

    );
};

export default Review;
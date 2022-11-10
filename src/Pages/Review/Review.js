import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userDefault from '../../../src/assets/user-default.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';

const Review = ({service}) => {
    const {user}=useContext(AuthContext);
    const {serviceName, image, rating, _id, description, price}=service;
    
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
      alert('review posted successfully')
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))

    }

 
    return (
        <div className='w-1/2 mx-auto'>
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
          <ShowReview key={_id}
          service={service}></ShowReview>
        </div>
        

    );
};

export default Review;
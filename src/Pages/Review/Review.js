import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';
import userDefault from '../../../src/assets/user-default.png'
import { Link } from 'react-router-dom';

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
            email: user.email
        }
        fetch('http://localhost:5000/review', {
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
         <div className='flex'>
         <input type="number" name="rating" placeholder="Rate our service" className="input input-bordered max-w-xs" />
         <textarea name="message" className="textarea textarea-bordered h-4 my-2 w-full" placeholder="Your review" required></textarea>
         </div>
         {
            user?.email?
            <input className='btn btn-error' type="submit" value="Post" />
            :
            <>
           
            <p>To post a review Please <Link to='/login'><button className='btn'>Login</button></Link></p>
            </>
         }
         
          </form>
          <ShowReview key={_id}
          service={service}></ShowReview>
        </div>
        

    );
};

export default Review;
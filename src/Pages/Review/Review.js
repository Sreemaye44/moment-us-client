import React, { useContext } from 'react';
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
            rating,
            message,
            userName:user.displayName,
            userImage: user.photoURL
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
        <div>
        <form onSubmit={handleReview}>
          <h2 className='text-4xl'>Your review: </h2>
          <div className="avatar">
  <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} alt="" />
  </div>
</div>
          <h3>{user?.displayName}</h3>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         </div>
         <input type="number" name="rating" placeholder="Rate our service" className="input input-bordered w-full max-w-xs" />
         <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
         <input className='btn btn-error' type="submit" value="Post" />
          </form>
          <ShowReview key={_id}
          service={service}></ShowReview>
        </div>
        

    );
};

export default Review;
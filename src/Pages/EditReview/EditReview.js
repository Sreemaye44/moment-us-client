import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const EditReview = () => {
    const {user}=useContext(AuthContext);
    useTitle('update review');
   const review=useLoaderData();
   console.log(review);

    const handleReviewUpdate=(e)=>{
        e.preventDefault();
        const message=e.target.message.value;
        const updatedReview = {
            message : message
        }

        fetch(`https://moment-us-server.vercel.app/myReview/${review._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.modifiedCount>0){
            alert('user updated')
        }
        console.log(data);
        e.target.reset();
       })
       .catch(error => console.log(error))

    }
    return (
        <div>
        
            <form onSubmit={handleReviewUpdate}>
            <p className='m-3'>Update Your Review: </p>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message" defaultValue={review.message}></textarea>
            <div className='flex justify-end'><button className='btn m-2 bg-teal-600 text-white' type="submit">UPDATE REVIEW</button></div>
            </form>
       
       
            
        </div>
    );
};

export default EditReview;
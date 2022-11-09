import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const EditReview = () => {
    const {user}=useContext(AuthContext);
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
           console.log(data)
            setReview(data);
        });

    },[user?.email])

    const handleReviewUpdate=(e)=>{
        e.preventDefault();
        const message=e.target.message.value;
        const updatedReview = {
            message : message
        }

        fetch(`http://localhost:5000/myReview/${review[0]._id}`,{
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
        {
            review.map(rvw=>
            <form onSubmit={handleReviewUpdate}>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message" defaultValue={rvw.message}></textarea>
            <button type="submit">UPDATE REVIEW</button>
            </form>
            )
        }
       
            
        </div>
    );
};

export default EditReview;
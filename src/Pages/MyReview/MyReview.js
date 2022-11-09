import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReview = () => {
    const [myReview,setMyReview]=useState([]);
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyReview(data);
        });

    },[user?.email])

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure,you want to cancel the order?');
        if(proceed){
            fetch(`http://localhost:5000/myReview/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('deleted Successfully');
                    const remaining=myReview.filter(rvw=>rvw._id!==id);
                    setMyReview(remaining);
                }
            })
        }
    }

    return (
        <div>
            {
                myReview.map(review=><>
                    <div className='flex'>
                        <h2>{review.serviceName}</h2>
                        <img src={user?.photoURL} alt="" srcset="" />
                        <button className='btn'>edit</button>
                        <button onClick={()=>handleDelete(review._id)}  className='btn'>Delete
                        
                        
                        </button>
                    </div>
                    <div>
                        <p>Review: {review.message}</p>
                        <p>ratings: {review.rating}</p>
                    </div>
                </>)
            }
        </div>
    );
};

export default MyReview;
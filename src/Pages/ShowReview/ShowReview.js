import React, { useEffect, useState } from 'react';

const ShowReview = ({service}) => {
    const [showReview,setShowReview]=useState([]);
    console.log(service)
    useEffect(()=>{
        fetch(`http://localhost:5000/review?service=${service._id}`)
        .then(res=>res.json())
        .then(data=>{
            setShowReview(data);
        });

    },[service._id])
    return (
        <div>
        
            {showReview.rating}
        </div>
    );
};

export default ShowReview;
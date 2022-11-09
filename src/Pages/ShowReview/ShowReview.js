import React, { useEffect, useState } from 'react';

const ShowReview = ({service}) => {
    const [showReview,setShowReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review?service=${service._id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setShowReview(data);
        });

    },[service._id])
    return (
        <div>
        
            {!showReview.length ? "no review to show":showReview.length}
            
        </div>
    );
};

export default ShowReview;
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import swal from 'sweetalert';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const MyReview = () => {
    useTitle('my review');
    const [myReview,setMyReview]=useState([]);
    const {user,logout}=useContext(AuthContext);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://moment-us-server.vercel.app/myReview?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('moment-token')}`
            }
        })
        .then(res=>{
            if(res.status===401 || res.status===403){
               return logout();
            }
            return res.json()})
        .then(data=>{
            console.log(data);
            setMyReview(data);
            setLoading(false)
        });

    },[user?.email,logout])

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure,you want to cancel the order?');
        if(proceed){
            fetch(`https://moment-us-server.vercel.app/myReview/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    toast.success('Success Delete !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    const remaining=myReview.filter(rvw=>rvw._id!==id);
                    setMyReview(remaining);
                    
                }
            })
        }
    }

    return (
        <div className='grid grid-cols-2 gap-5 p-5'>
            { (loading)? <div class="flex">
    <div class="relative">
       
        <div class="w-12 h-12 rounded-full absolute
    border border-solid border-gray-200"></div>

        
        <div class="w-12 h-12 rounded-full animate-spin absolute
    border border-solid border-yellow-500 border-t-transparent"></div>
    </div>
</div> : (myReview.length<0)? "No Review to show":
                myReview.map(review=><>
                    <div className=' bg-slate-300  p-5'>
                    <div className='flex gap-4 py-3 bg-slate-300'>
          <div className="avatar ">
  <div className="w-6 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src={review?.userImage} alt="" />
    
  </div>
</div>
          <h3 className='text'>{review.userName}</h3>
          <div className='flex gap-5'>
                       <Link to={`/editReview/${review._id}`}><button className='block'><FaEdit></FaEdit></button></Link>
                        <button onClick={()=>handleDelete(review._id)}  className><FaTrash></FaTrash></button>
                       </div>
          </div>
          <div className='flex'>
            <p className='px-10'>Rating: {review.rating}</p>

            <p>{review.creationDate.substring(0,1).split('T').join(' ')}</p>
            
          </div>
          <p className='px-10 py-3'>{review.message}</p>
          <p className='text-teal-700 font-semibold'>{review.serviceName}</p>
                     
                    </div>
                </>)
            }
        </div>
    );
};

export default MyReview;
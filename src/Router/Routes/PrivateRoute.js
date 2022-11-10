import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
    return <div class="flex">
    <div class="relative">
       
        <div class="w-12 h-12 rounded-full absolute
    border border-solid border-gray-200"></div>

        
        <div class="w-12 h-12 rounded-full animate-spin absolute
    border border-solid border-yellow-500 border-t-transparent"></div>
    </div>
</div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
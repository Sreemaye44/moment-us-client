import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logout}= useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then()
    .catch()
  }
  const menuItems= <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
       { 
        user?.email? 
        <>
        <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
        <li className='font-semibold'>
        <button onClick={handleLogout} className='btn bg-teal-600 text-white'>Logout</button></li>
        </>
        :
        <li className='font-semibold '><Link to='/login' className=' btn bg-teal-600 text-white'>Login</Link></li>
        }
       
        
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className='text-3xl text-teal-600 font-bold'>MOMENT US</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?.email?
    <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={user?.photoURL} alt=""/>
  </div>
</div>:
    <Link to='/signup' className="btn bg-teal-600 text-white">Signup</Link>
  }
    
  </div>
</div>

    )
};

export default Header;
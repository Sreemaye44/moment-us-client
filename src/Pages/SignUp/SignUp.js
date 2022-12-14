import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const SignUp = () => {
    const{createUser, updateUserProfile} =useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();
    useTitle('signup');
    const handleSignUp=event=>{
        event.preventDefault();
        setLoading(true);
        const form= event.target;
        const email=form.email.value
        const password=form.password.value;
        const username=form.username.value;
        const photoUrl=form.photoUrl.value;
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          handleUpdateUserProfile(username,photoUrl);
          setLoading(false)
          swal("Successfully Sign Up!!", "success");
          navigate('/');
          

        })
        .catch(err=>{
          setLoading(false);
          console.error(err);
        })

    }

    const handleUpdateUserProfile=(name,photoURL)=>{
      const profile={
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.error(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      {
          loading ? 
          <div class="flex">
              <div class="relative">
                <div class="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
                <div class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-yellow-500 border-t-transparent"></div>
              </div>
          </div> 
          : ""
        }
        <form onSubmit={handleSignUp}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="username" placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photoUrl" placeholder="photoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className='btn bg-teal-600 text-white' type="submit" value="Sign Up" />
        </div>
        </form>
      </div>
    </div>
  </div>
    );
};

export default SignUp;
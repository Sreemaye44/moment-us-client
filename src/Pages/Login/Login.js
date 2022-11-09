import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const {login,providerLogin}=useContext(AuthContext);
    useTitle('Login');
 
    const googleProvider=new GoogleAuthProvider()
    const navigate=useNavigate();
    const location=useLocation();
  const from=location.state?.from?.pathname || '/';
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email, password)
        .then(result=>{
            const user=result.user;
            const currentUser={
                  email: user.email
            // form.reset();
            // navigate(from,{replace:true})
            // swal("Successfully Logged in!!", "success");
            }
            fetch('http://localhost:5000/jwt',{
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>
              {console.log(data);
                localStorage.setItem('moment-token',data.token);
                 form.reset();
            navigate(from,{replace:true})
             swal("Successfully Logged in!!", "success");

              }); 
              })
        .catch(err=>{
            console.error(err)
        
        })
    }
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
          .then(result=>{
            const user=result.user;
            const currentUser={
                  email: user.email
            // form.reset();
            // navigate(from,{replace:true})
            // swal("Successfully Logged in!!", "success");
            }
            fetch('http://localhost:5000/jwt',{
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>
              {console.log(data);
                localStorage.setItem('moment-token',data.token);
            navigate(from,{replace:true})
             swal("Successfully Logged in!!", "success");

              }); 
              })
        .catch(err=>{
            console.error(err)
        
        })
}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className='btn btn-error mb-5' type="submit" value="Login" />
        
        </div>
        </form>
        <button onClick={handleGoogleSignIn} className='btn btn-error'><FaGoogle></FaGoogle>oogle</button>
      </div>
    </div>
  </div>
</div>
    )
};

export default Login;
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const {login,providerLogin}=useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    useTitle('Login');
 
    const googleProvider=new GoogleAuthProvider()
    const navigate=useNavigate();
    const location=useLocation();
  const from=location.state?.from?.pathname || '/';
    const handleLogin=event=>{
        event.preventDefault();
        setLoading(true)
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
            fetch('https://moment-us-server.vercel.app/jwt',{
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>
              { setLoading(false)
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
      setLoading(true)
        providerLogin(googleProvider)
          .then(result=>{
            const user=result.user;
            const currentUser={
                  email: user.email
            // form.reset();
            // navigate(from,{replace:true})
            // swal("Successfully Logged in!!", "success");
            }
            fetch('https://moment-us-server.vercel.app/jwt',{
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>
              {setLoading(false)
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
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
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
        <input className='btn bg-teal-600 text-white mb-5' type="submit" value="Login" />
        
        </div>
        </form>
        <button onClick={handleGoogleSignIn} className='btn bg-teal-600 text-white'><FaGoogle></FaGoogle>oogle</button>
      </div>
    </div>
  </div>
    )
};

export default Login;
import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {Link , useLocation, useNavigate} from 'react-router-dom'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import './Login.css'
import auth from '../../_firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken'
const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const provider = new GoogleAuthProvider();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user || Guser)
      const Navigate = useNavigate()
      const location = useLocation()
      let from = location.state?.from?.pathname || "/";
      let Error;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
  
        signInWithEmailAndPassword(data.email,data.password)
        console.log(data.email , data.password)
    };
    if(Gloading || loading){
        return <Loading></Loading>
    }
    if(Gerror || error){
        Error=<p className='text-danger'>{Gerror?.message || error?.message}</p>
    }
    if(token){
      Navigate(from , {replace:true})
    }

    const googleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then(result =>{
          Navigate('/home')
      })
      .catch(error =>{
        alert(error.message)
      })
  }
    
    return (
        <div className='LogIn hero min-h-screen '>
    <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  login-from">
    <h1 className='text-3xl mx-auto text-primary'>Log In</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered login-from" {...register("email", { required: true })}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered login-from text-white" {...register("password", { required: true })}  />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <p className='text-white'><small className="login-from">New to Dental Clinic? <Link to='/signup' className='link login-from'>Create an account</Link></small> </p>
        <input type="submit" value="Log In" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
        <p className="text-white">{Error}</p>
      </div>
      <p className='text-white'>---------------------------or---------------------------</p>
      <button onClick={googleSignIn} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mb-5">Continue With Google</button>
      </form>
      </div>
    );
};

export default Login;
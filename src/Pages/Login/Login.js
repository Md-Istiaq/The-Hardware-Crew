import React from 'react';
import {Link , useLocation, useNavigate} from 'react-router-dom'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import './Login.css'
import auth from '../../_firebase.init';
import Loading from '../Shared/Loading';
const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const Navigate = useNavigate()
      const location = useLocation()
      let from = location.state?.from?.pathname || "/";
      let Error;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        signInWithEmailAndPassword(data.email,data.password)
        console.log(data.email , data.password)
    };
    if(Gloading || loading){
        return <Loading></Loading>
    }
    if(Gerror || error){
        Error=<p className='text-danger'>{Gerror?.message || error?.message}</p>
    }
    return (
        <div className='LogIn hero min-h-screen bg-base-200'>
    <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 LogIn-filed">
    <h1 className='text-3xl mx-auto text-primary'>Log In</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered LogIn-filed" {...register("email", { required: true })}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered LogIn-filed" {...register("password", { required: true })}  />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <p><small>New to Dental Clinic? <Link to='/signup' className='link hover:text-primary'>Create an account</Link></small> </p>
        <input type="submit" value="Log In" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
        {Error}
      </div>
      <p>---------------------------or---------------------------</p>
      <button onClick={() => signInWithGoogle()} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mb-5">Continue With Google</button>
      </form>
      </div>
    );
};

export default Login;
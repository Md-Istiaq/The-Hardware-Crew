import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword ,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'
import { async } from '@firebase/util';
import Loading from '../Shared/Loading';
import {toast} from 'react-toastify'
import useToken from '../../hooks/useToken'
const SignUp = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [token] = useToken(user || Guser)
      const Navigate = useNavigate()
      const [updateProfile, updating, Uerror] = useUpdateProfile(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data =>{ 
        console.log(data)
       await createUserWithEmailAndPassword(data.email,data.password)
       await updateProfile(data.name)
    };
    if(Gloading || loading){
        return <Loading></Loading>
    }
    if(Gerror || error){
        toast.error(Gerror || error)
    }
    if(user || Guser){
      Navigate('/home')
    }
    return (
        <div className='LogIn hero min-h-screen bg-base-200'>
    <form onSubmit={handleSubmit(onSubmit)} class="login-from card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 LogIn-filed">
    <h1 className='text-3xl mx-auto text-primary'>Register</h1>
      <div class="card-body">
      <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="Enter you Name" class="input input-bordered login-from" {...register("name", { required: true })}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered login-from " {...register("email", { required: true })}  />
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
        <p className='text-white'><small>Already have an account? <Link to='/login' className='link  login-from'>Go to login</Link></small> </p>
        <input type="submit" value="Sign Up" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
      </div>
      <p className='text-white'>---------------------------or---------------------------</p>
      <button onClick={() => signInWithGoogle()} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mb-5">Continue With Google</button>
      </form>
      </div>
    );
};

export default SignUp;
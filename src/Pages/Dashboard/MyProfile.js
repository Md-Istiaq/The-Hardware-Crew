import React  from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../_firebase.init'
const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit ,formState: { errors }} = useForm();
    console.log(user)

    const onSubmit = data => {
        const url = 'https://dry-shelf-78411.herokuapp.com/profile'
        fetch(url ,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            toast.success("Profile updated")
        })
        console.log(data)
    }
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-col-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Share about yourself to us.</h1>
      <p class="py-6">there is a from above/below . please give all the information and write yourself so that we can know you more.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl w-full">
    <h1 className='text-3xl mx-auto text-primary'>Add your profile</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Name</span>
          </label>
          <input type="text" value={user.displayName} placeholder="name" class="input input-bordered login-from" {...register("name")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">E-mail</span>
          </label>
          <input type="text" value={user.email} placeholder="e-mail" class="input input-bordered login-from" {...register("email")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Education</span>
          </label>
          <input type="text"   placeholder="Education" class="input input-bordered login-from " {...register("education")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Location</span>
          </label>
          <textarea type="text" placeholder="Location" class="input input-bordered login-from" {...register("location")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Phone</span>
          </label>
          <textarea type="text" placeholder="Phone" class="input input-bordered login-from" {...register("phone")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Linkedin Profile</span>
          </label>
          <textarea type="text" placeholder="Linkedin profile" class="input input-bordered login-from" {...register("linkedin")}  />
        </div>
        <input type="submit" value="Add your profile" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
      </div>
      </form>
  </div>
</div>
    );
};

export default MyProfile;
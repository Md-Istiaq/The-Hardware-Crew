import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const Addreview = () => {
    const { register, handleSubmit ,formState: { errors }} = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/review'
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
            toast.success("Review added")
        })
        console.log(data)
    }
    return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-col-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl w-full">
    <h1 className='text-3xl mx-auto text-primary'>Place your order</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered login-from" {...register("name")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Image url</span>
          </label>
          <input type="text" placeholder="image url" class="input input-bordered login-from" {...register("img")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Rating</span>
          </label>
          <input type="text"   placeholder="ratings" class="input input-bordered login-from " {...register("ratings")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Review</span>
          </label>
          <textarea type="text" placeholder="review" class="input input-bordered login-from" {...register("review")}  />
        </div>
        <input type="submit" value="Add review" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
      </div>
      </form>
  </div>
</div>
    );
};

export default Addreview;
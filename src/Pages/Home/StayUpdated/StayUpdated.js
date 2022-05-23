import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import { ToastContainer, toast } from 'react-toastify';
import './StayUpdated.css'
const StayUpdated = () => {
    const handleButton = () =>{
        toast("Thanks for connecting with us")
    }
    return (
        <div class="hero min-h-screen bg-white stay-update">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold text-white">Stay Connected with us</h1>
              <p class="py-6 text-white">We always care for our customer. we want then to stay  updated about latest technology.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text ">Email</span>
                  </label>
                  <input type="text" placeholder="email" class="text -white  input input-bordered input-filed" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text ">Password</span>
                  </label>
                  <input type="text" placeholder="password"  class="input input-bordered input-filed" />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button onClick={handleButton} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Get updated</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default StayUpdated;
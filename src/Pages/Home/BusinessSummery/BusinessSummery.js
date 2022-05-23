import React from 'react';
import './BusinessSummery.css'
import Recharts from './Recharts';
const BusinessSummery = () => {
    return (
        <div>
            <div class="hero min-h-screen buisness-summary">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Your most trusted Partner</h1>
                  <h1 class="text-2xl font-bold text-accent">Our services , revenew , feedbacks</h1>
                  <div className='flex flex-row'>
                      <div className="m-10 mr-10 ml-10  ">
                          <img src="https://cdn-icons-png.flaticon.com/128/4149/4149883.png" alt="" className='' />
                          <h1 className='text-5xl text-accent text-left'>324+</h1>
                          <p className='text-left  text-2xl'>happy Customer</p>
                      </div>
                      <div className=" m-10 mr-10 ml-10 ">
                          <img src="https://cdn-icons-png.flaticon.com/128/817/817729.png" alt="" className='' />
                          <h1 className='text-5xl text-accent text-left'>143M+</h1>
                          <p className='text-left text-2xl'>Revenue</p>
                      </div>
                      <div className=" m-10 mr-10 ml-10 ">
                          <img src="https://cdn-icons-png.flaticon.com/512/2554/2554256.png" alt="" className='' />
                          <h1 className='text-5xl text-accent text-left'>13k+</h1>
                          <p className='text-left text-2xl'>Review</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <Recharts></Recharts>
        </div>
    );
};

export default BusinessSummery;
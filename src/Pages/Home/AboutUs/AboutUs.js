import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton'
const AboutUs = () => {
    return (
        <div>
            <h1 className='text-4xl mt-5 text-primary'>About Us</h1>
       <div class="hero min-h-screen bg-white">
          <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.pinimg.com/736x/ba/af/74/baaf747f7baefcf6f57477ba511d4966.jpg" class="max-w-sm rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold">Got a solid product? We inform our customer about it existence</h1>
            <p class="py-6">Ever heard about manufacturer company which provide a great product or service,amazing value and yet somehow got shutdown simply because no one knew about it.<br/>That's exactly the problem we solve.if we have a hot product people had to knew about it.</p>
            <PrimaryButton>Keep Updated</PrimaryButton>
          </div>
        </div>
       </div>
        </div>
    );
};

export default AboutUs;
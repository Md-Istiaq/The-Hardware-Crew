import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import './MyPortfolio.css'
const MyPortfolio = () => {
        return (
            <div>
                <div class="hero min-h-screen portfolio">
                  <div class="hero-content text-center">
                    <div class="max-w-md">
                      <h1 class="text-5xl font-bold text-white">Hi there. My self Istiaq. A curious Programmer & a web developer.</h1>
                      <h1 class="text-2xl font-bold text-white">my mail:- www.mdistiaq102@outlook.com</h1>
                      <p class="py-6 text-white">i am a student of Bsc. I am doing my bachlor on computer science at university of science & technology , chittagong.I have complete my HSC from BAPZA public school & collage & SSC from mariam ashram high school.</p>
                    </div>
                  </div>
                </div>
                <div class="hero min-h-screen BG">
                    <h1 className="text-3xl text-accent">live site of some of my little projects given below(click on the text)</h1>
                    <a className='mt-[100px] text-2xl ' target="_blank" rel='' href="https://velvety-mooncake-f17d78.netlify.app">Tech Mania</a>
                    <a className='mt-[150px] text-2xl ' target="_blank" href="https://photographer-camera-house.netlify.app">Photographer camera house</a>
                    <a className='mt-[200px] text-2xl ' target="_blank" href="https://velvety-mooncake-f17d78.netlify.app">Tech Mania</a>
                </div>
            </div>
        );
};

export default MyPortfolio;
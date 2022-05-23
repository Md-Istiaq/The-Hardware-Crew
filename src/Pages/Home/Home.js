import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Parts from './Parts/Parts';
import StayUpdated from './StayUpdated/StayUpdated';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <AboutUs></AboutUs>
           <StayUpdated></StayUpdated>
           <Footer></Footer>
        </div>
    );
};

export default Home;
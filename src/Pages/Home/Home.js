import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Footer from './Footer/Footer';
import Parts from './Parts/Parts';
import Review from './Review/Review';
import StayUpdated from './StayUpdated/StayUpdated';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <AboutUs></AboutUs>
           <StayUpdated></StayUpdated>
           <Review></Review>
           <BusinessSummery></BusinessSummery>
           <Footer></Footer>
        </div>
    );
};

export default Home;
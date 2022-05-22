import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <Footer></Footer>
        </div>
    );
};

export default Home;
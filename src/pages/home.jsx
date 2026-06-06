import React from 'react';
import Landing from '../components/landing';
import Features from '../components/features';
import Banner from '../components/banner';
import Choose from '../components/choose';
import Testimonials from '../components/testimonials';
import Download from '../components/download';

const Home = () => {
    return (
        <>
       <Landing />
        <Features/>
        <Banner />
        <Choose />
        <Testimonials />
        <Download/>
        </>
    );
}

export default Home;

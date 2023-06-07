import React from 'react';
import HomeBanner from './HomeBanner';
import OrderOnline from './OrderOnline';
import Intro from './Intro';

const Homepage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <Intro></Intro>
        </div>
    );
};

export default Homepage;
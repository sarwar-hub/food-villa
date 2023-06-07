import React from 'react';
import HomeBanner from './HomeBanner';
import OrderOnline from './OrderOnline';
import Intro from './Intro';
import TrandingMenu from './TrandingMenu';

const Homepage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <Intro></Intro>
            <TrandingMenu></TrandingMenu>
        </div>
    );
};

export default Homepage;
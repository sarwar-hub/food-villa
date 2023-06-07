import React from 'react';
import HomeBanner from './HomeBanner';
import OrderOnline from './OrderOnline';
import Intro from './Intro';
import TrandingMenu from './TrandingMenu';
import FeaturedItem from './FeaturedItem';

const Homepage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <Intro></Intro>
            <TrandingMenu></TrandingMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Homepage;
import React from 'react';
import HomeBanner from './HomeBanner';
import OrderOnline from './OrderOnline';
import Intro from './Intro';
import TrandingMenu from './TrandingMenu';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';

const Homepage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <Intro></Intro>
            <TrandingMenu></TrandingMenu>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Homepage;
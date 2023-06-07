import React from 'react';
import HomeBanner from './HomeBanner';
import OrderOnline from './OrderOnline';
import Intro from './Intro';
import TrandingMenu from './TrandingMenu';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Food Villa</title>
            </Helmet>
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
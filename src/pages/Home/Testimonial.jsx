import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// react icon
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mx-10 mb-20'>
            <SectionTitle
                heading={'Testimonial'}
                subHeading={'What our clients says'}
            ></SectionTitle>

            {/* slider */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center gap-5 mx-20'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <FaQuoteLeft className='text-dark text-7xl'></FaQuoteLeft>

                            <p className='text-gray text-center'>{review.details}</p>
                            <p className='text-sec text-xl uppercase '>{review.name}</p>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;
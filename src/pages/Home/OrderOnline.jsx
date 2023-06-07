import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle';

const OrderOnline = () => {
    return (
        <div className='mb-20 md:mx-10'>
            <SectionTitle
                subHeading={"11:00am to 11:00pm"}
                heading={"Order online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                  
                    <img className='w-full z-40' src={slide1} alt="" />
                    <div className='bg-dark z-50'>
                        <h3 className=' md:text-xl uppercase text-light font-semibold bg-dark/30 drop-shadow-xl text-center -mt-16 pb-5 pt-4 '>Salad</h3>
                    </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  
                    <img className='w-full z-40' src={slide2} alt="" />
                    <div className='bg-dark z-50'>
                        <h3 className=' md:text-xl uppercase text-light font-semibold bg-dark/30 drop-shadow-xl text-center -mt-16 pb-5 pt-4 '>Pizza</h3>
                    </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  
                    <img className='w-full z-40' src={slide3} alt="" />
                    <div className='bg-dark z-50'>
                        <h3 className=' md:text-xl uppercase text-light font-semibold bg-dark/30 drop-shadow-xl text-center -mt-16 pb-5 pt-4 '>Soup</h3>
                    </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  
                    <img className='w-full z-40' src={slide4} alt="" />
                    <div className='bg-dark z-50'>
                        <h3 className=' md:text-xl uppercase text-light font-semibold bg-dark/30 drop-shadow-xl text-center -mt-16 pb-5 pt-4 '>Dessert</h3>
                    </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  
                    <img className='w-full z-40' src={slide5} alt="" />
                    <div className='bg-dark z-50'>
                        <h3 className=' md:text-xl uppercase text-light font-semibold bg-dark/30 drop-shadow-xl text-center -mt-16 pb-5 pt-4 '>Salad</h3>
                    </div>
                  
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderOnline;
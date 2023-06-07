import React from 'react';
import cover from '../../assets/home/chef-service.jpg'

const Intro = () => {
    return (
        <div className='mx-10 relative mb-20'>
            <img className='w-full object-cover ' src={cover} alt="" />
            <div className='bg-dark/40 p-20 w-8/12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl uppercase mb-5 text-light font-semibold'>Food villa</h2>
                <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolores? Dolor deleniti ex labore at beatae voluptatum architecto laudantium sed, modi earum illo qui dolorem eveniet possimus! Quae, pariatur nostrum.</p>
            </div>
        </div>
    );
};

export default Intro;
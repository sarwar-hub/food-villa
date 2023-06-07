import React from 'react';
import featuredItem from '../../assets/home/featured.jpg';
import SectionTitle from '../../components/SectionTitle';

const FeaturedItem = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredItem})` }} className='mb-20'>
            <div className='bg-dark/70 pt-10'>
                <div className='text-light'>
                    <SectionTitle
                        heading={'Featured item'}
                        subHeading={'Check it out'}
                    ></SectionTitle>
                </div>
                <div className='md:flex items-center gap-10 p-20'>
                    <div>
                        <img className='' src={featuredItem} alt="featured item image" />
                    </div>
                    <div className='text-light space-y-5'>
                        <h4 className='text-lg'>May 20, 2023</h4>
                        <h3 className='text-xl uppercase'>Where can I get some?</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis delectus consectetur esse sunt nihil veniam facilis distinctio rem laboriosam sapiente tempora fuga, commodi dolorem, eaque aperiam sequi nostrum minima?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
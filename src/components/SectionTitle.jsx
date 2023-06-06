import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='my-5 text-center w-3/12 mx-auto'>
            <p className='text-sec mb-3'>__ {subHeading} __</p>
            <h2 className='text-2xl text-dark uppercase border-y-2 border-gray py-3'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;
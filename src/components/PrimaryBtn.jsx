import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className='rounded-xl border-b-2 px-5 p-2 text-dark transition hover:bg-dark/20'>{children}</button>
    );
};

export default PrimaryBtn;
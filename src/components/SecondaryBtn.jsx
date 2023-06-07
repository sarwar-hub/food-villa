import React from 'react';

const SecondaryBtn = ({children}) => {
    return (
        <button className='rounded-xl border-b-2 px-5 p-2 text-light transition hover:bg-light/20'>{children}</button>
    );
};

export default SecondaryBtn;
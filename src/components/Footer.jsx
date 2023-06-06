import React from 'react';

const Footer = () => {
    return (
        <div className='text-light'>
            <div className='md:flex'>
                <div className='w-full bg-[#1F2937] text-center p-5'>
                    <h3 className='text-xl font-semibold uppercase mb-4'>Contact Us</h3>
                    <p>232 Park Road, CA</p>
                    <p>contact@foodvilla.com</p>
                    <p>+623 999 000</p>
                </div>
                <div className='w-full bg-[#111827] text-center p-5'>
                    <h3 className='text-xl font-semibold uppercase mb-4'>Follow Us</h3>
                    <p>Join us on social media</p>
                    <div>
                        f i t
                    </div>
                </div>
                
            </div>
            <div className='bg-dark text-center'>
                <p className='text-sm'>Copyright 2023 © Food Villa | All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
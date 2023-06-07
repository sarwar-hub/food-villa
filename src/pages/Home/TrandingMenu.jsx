import React, { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem';
import SectionTitle from '../../components/SectionTitle';

const TrandingMenu = () => {
    const [trandings, setTrandings] = useState([]);
    console.log(trandings);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const trandingItems = data.filter(item => item.isTranding === true);
                setTrandings(trandingItems);
            })
    }, [])

    return (
        <div className='md:mx-10 mb-20'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Tranding menu"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8'>

                {
                    trandings.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            {/* button */}
            <div className='flex justify-center my-5'>
                <button className='rounded-xl border-b-2 px-5 p-2 text-dark transition hover:bg-dark/20'>View Full Menu</button>
            </div>
        </div>
    );
};

export default TrandingMenu;
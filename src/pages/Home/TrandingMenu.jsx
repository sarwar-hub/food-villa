import React, { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem';
import SectionTitle from '../../components/SectionTitle';
import SecondaryBtn from '../../components/SecondaryBtn';
import PrimaryBtn from '../../components/PrimaryBtn';

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
                <PrimaryBtn>View Full Menu</PrimaryBtn>            
            </div>
        </div>
    );
};

export default TrandingMenu;
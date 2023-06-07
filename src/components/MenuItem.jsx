import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;

    return (
        <div>
            <div className='flex gap-5 items-center'>
                <img className='w-20 h-20 object-cover rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' src={image} alt="recipe image" />
                <div>
                    <h3 className='text-lg text-dark uppercase'>{name}</h3>
                    <p className='text-sm text-gray'>{recipe}</p>
                </div>
                <span className='text-sec font-semibold'>${price}</span>
            </div>
        </div>
    );
};

export default MenuItem;
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300  mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700 '>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>

            <h5 className='text-3xl font-bold my-4 text-center'>
                {price.name}
            </h5>
            <p className=' underline text-2xl text-white font-bold'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold w-full text-center py-2 mt-auto rounded-md '>Buy Now</button>
        </div>
    );
};

export default PriceCard;
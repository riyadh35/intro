import React from 'react';
import pic from '../../image/Star 1.svg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse mx-12">
                <img src={pic} alt='' className="max-w-lg mb-10" />
                <div className='mx-12'>
                    <h1 className="text-4xl  text-black font-bold">Track your fertility <br /> hormones at home, <br /> in 5 minutes.</h1>
                    <p className="py-6 text-black">Get accurate results of Estrogen, LH and Progesterone with Inito, the all-in-one, FDA-registered fertility <br /> monitor.</p>
                    <button style={{
                        background: '#1F94AA'
                    }} className="btn border-none text-white rounded-full mt-3 w-40">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import avatar from '../../image/avatar.png'

const FouthHome = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-left lg:text-left">
                    {/*  */}
                    <h1 className='text-3xl mr-10 w-full text-black font-bold'>“Inito is all that you need to <br /> give you the <span className='text-decoration-style'>best</span> chance of <br /> conception."</h1>
                    <div className='flex'>
                        <div className="avatar mt-14">
                            <div className="w-16 rounded-full">
                                <img src={avatar} alt='' />
                            </div>
                        </div>
                        <div className='mt-16 ml-3 text-black'>
                            <h1 className='font-bold'>Dr. Rachel Wagner</h1>
                            <p>MD</p>
                        </div>
                    </div>
                </div>


                <div style={{ background: '#AEAAE8' }} className="ml-4 w-full max-w-lg max-h-lg text-black p-4 rounded-3xl">
                    {/*  */}
                    <h1 className='text-3xl w-full  font-bold'>Why measure Progesterone?</h1>
                    <h2 className='my-3'><span className='font-semibold'>Anovulation</span> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.</h2>
                    <h3>A sure way to confirm ovulation is a rise in <span className='font-semibold'>Progesterone level</span> after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.</h3>
                </div>
            </div>
        </div>
    );
};

export default FouthHome;
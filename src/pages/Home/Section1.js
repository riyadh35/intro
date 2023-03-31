import React from 'react';
import section1img from '../../image/Frame 127.png'
import apps from '../../image/Frame 128.png'
import imgml from '../../image/1.png'
import Btn from '../shared/Btn';

const Section1 = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold ml-40 text-black'>Why Inito is the smarter way to get pregnant</h1>
            {/* first section */}
            <div className="hero min-h-screen text-black -mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={section1img} alt='' className="max-w-sm " />
                    <div className='ml-28'>
                        <h1 className="text-3xl font-bold">Adapts to your <span>unique</span> <br /> irregular cycle</h1>
                        <p className="py-3">Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.</p>
                        <p className='my-6'>Studies show that Pdg levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
                        <Btn></Btn>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className="hero min-h-screen text-black -mt-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={apps} alt='' className="max-w-sm" />
                    <div className='mr-28'>
                        <h1 className="text-3xl font-bold">Inito <span className='text-decoration-style'>tracks</span> everything <br /> so you don't have to</h1>
                        <p className="py-3">The Inito Fertility Monitor comes with a free easy-to-use App, <br /> so you can track your fertile days with ease and know exactly <br /> when you ovulate.</p>
                        <p className='my-6'>Our App notifies you for everything:</p>
                        <p>• Your fertility levels</p>
                        <p>• When to test on the right days</p>
                        <p>• When you've successfully ovulated</p>
                        <p className='mb-3'>• And when to roll into bed!</p>
                        <Btn></Btn>
                    </div>
                </div>
            </div>
            {/* third section */}
            <div className="hero min-h-screen text-black -mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={imgml} alt='' className="max-w-sm " />
                    <div className='ml-28'>
                        <h1 className="text-3xl font-bold">Get charts and actual <br />
                            values of your <span className='text-decoration-style'>hormones</span></h1>
                        <p className="py-3">Most ovulation kits have a set value or a threshold, making <br /> them likely to give a false read if your hormones fall outside <br />     the average range.</p>
                        <p className='my-6'>Every woman is unique, especially with a condition like PCOS <br /> or Thyroid which can influence hormone levels. Inito measures <br /> real values of your hormones to personalize results to the <br /> unique you.</p>
                        <Btn></Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
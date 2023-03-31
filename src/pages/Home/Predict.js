import React from 'react';
import mobile from '../../image/Frame 60.png'
import Btn from '../shared/Btn';
import pahar from '../../image/Frame 77.png'

const Predict = () => {
    return (
        <div>
            <div className="hero max-h-screen w-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={mobile} className="max-w-md" />
                    <div>
                        <h1 className="text-5xl text-black font-bold">Predict and confirm <br /> your ovulation with <br /> actual data</h1>
                        <p className="py-6 text-black">Unlike most ovulation tests that only give you "yes/no" <br /> results, Inito provides real numerical values of your <br /> fertility hormones.</p>
                        <p className="py-6 text-black"> If you have irregular cycles, actual data is necessary to <br /> know exactly when you ovulate, and when is the best  time to try to conceive.</p>
                        <Btn></Btn>
                    </div>
                </div>
            </div>
            <div style={{ background: '#AEAAE8' }} className="hero max-h-screen w-full mb-10 pt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={pahar} className="max-w-md mr-36" />
                    <div>
                        <h1 className="text-5xl text-black font-bold">Never <span className='text-decoration-style'>miss</span> a day <br /> again with Inito</h1>
                        <p className="py-6 text-black">Inito tracks up to <span className='font-semibold'>6 fertile days</span> and confirms ovulation <br /> by measuring all 3 hormones in just 5 minutes:</p>
                        <div className='text-black my-3'>
                            <p className='flex font-normal '><span className='badge badge-info badge-sm mt-1 mr-2' ></span>Estrogen, which rises 3-4 days before ovulation</p>


                            <p className='flex font-normal '><span className='badge badge-success badge-sm mt-1 mr-2' ></span>LH, which surges 24-36 hours before ovulation</p>

                            <p className='flex font-normal '><span className='badge badge-primary badge-sm mt-1 mr-2' ></span>Progesterone (PdG), which rises after ovulation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Predict;
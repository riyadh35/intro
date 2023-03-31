import React from 'react';
import Btn from '../shared/Btn';
import img1 from '../../image/ezgif 1.png'
import img2 from '../../image/ezgif 2.png'
import img3 from '../../image/ezgif 3.png'
import img4 from '../../image/ezgif 4.png'

const Lav = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row text-black">
                <div>
                    <h1 className='text-3xl font-bold '>Your own fertility lab at <br /> your <span className='text-decoration-style'>fingertips</span></h1>
                    <p className='py-4'>Easy-to-read fertility diagnostic results directly on your <br /> iPhone, in just 5 minutes.</p>
                    <Btn></Btn>
                    <p className='py-4'>* The Inito Fertility Monitor currently supports iPhone 7 and <br /> up. Android phones are not supported at the moment.</p>
                </div>
                <div className='grid grid-cols-2 gap-4 ml-10'>

                    {/* 1 */}
                    <div className="card card-compact w-72">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex'>
                                {/* <h1 style={{ backgroundColor: '#EEEEF5' }} className='flex w-3 font-bold h-8  p-5 rounded-full justify-items-center pb-2'>1</h1> */}
                                <h1 style={{ backgroundColor: '#EEEEF5' }} className='btn btn-circle btn-outline text-black font-bold h-8'>1</h1>
                                <p className='font-semibold ml-3 mt-1'>Dip the test strip in <br /> urine for 15 seconds.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="card card-compact w-72">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex'>
                                {/* <h1 style={{ backgroundColor: '#EEEEF5' }} className='flex w-3 font-bold h-8  p-5 rounded-full justify-items-center pb-2'>1</h1> */}
                                <h1 style={{ backgroundColor: '#EEEEF5' }} className='btn btn-circle btn-outline text-black font-bold h-8'>2</h1>
                                <p className='font-semibold ml-3 mt-1'>Attach the Inito Fertility <br /> Monitor to your iPhone*.</p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="card card-compact w-72">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex'>
                                {/* <h1 style={{ backgroundColor: '#EEEEF5' }} className='flex w-3 font-bold h-8  p-5 rounded-full justify-items-center pb-2'>1</h1> */}
                                <h1 style={{ backgroundColor: '#EEEEF5' }} className='btn btn-circle btn-outline text-black font-bold h-8'>3</h1>
                                <p className='font-semibold ml-3 mt-1'>Insert the test strip into the <br /> Inito Fertility Monitor.</p>
                            </div>
                        </div>
                    </div>
                    {/* /4 */}
                    <div className="card card-compact w-72">
                        <figure><img src={img4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex'>
                                {/* <h1 style={{ backgroundColor: '#EEEEF5' }} className='flex w-3 font-bold h-8  p-5 rounded-full justify-items-center pb-2'>1</h1> */}
                                <h1 style={{ backgroundColor: '#EEEEF5' }} className='btn btn-circle btn-outline text-black font-bold h-8'>4</h1>
                                <p className='font-semibold ml-3 mt-1'>Get personalized results <br /> on our App in 5 minutes.</p>
                            </div>
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </div>
    );
};

export default Lav;
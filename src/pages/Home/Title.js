import React from 'react';
import theweek from '../../image/the week.png'
import entrepenuer from '../../image/enterpre.png'
import bloomberg from '../../image/blom.png'
import flords from '../../image/fordas.png'
import washington from '../../image/was.png'

const Title = () => {
    return (
        <div className='title-color py-3 ml-10'>
            <h1 className='text-center text-xl font-bold'>AS SEEN ON</h1>
            <div className='grid grid-cols-5 align-middle mt-10 mb-10'>
                <img className=' w-24' src={theweek} alt="" />
                <img className=' w-32' src={entrepenuer} alt="" />
                <img className=' w-36' src={bloomberg} alt="" />
                <img className=' w-20' src={flords} alt="" />
                <img className=' w-48' src={washington} alt="" />
            </div>
        </div>
    );
};

export default Title;
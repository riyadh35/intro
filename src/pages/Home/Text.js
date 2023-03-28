import React from 'react';

const text = () => {
    return (
        <div className='pt-32 text-center text-black'>
            <h2 className='text-4xl font-bold text-black mb-3'>Not all ovulation tests are created <span className='text-decoration-style'>
                equal</span></h2>
            <p>Most ovulation tests predict your fertile days by tracking Estrogen and <br /> Luteinizing Hormone (LH), but fail to measure the hormone that actually <br /> confirms your ovulation and supports pregnancy: <span className='font-bold'>Progesterone.</span></p>
            <div className='py-20'>
                <h2 className='text-4xl font-bold text-black mb-3'>What makes <span className='text-decoration-style'>Inito</span> different?</h2>
                <p>Inito is the only fertility monitor that measures all <span className='font-bold text-black'>3 hormones</span> on a <br /> single test strip, showing you a full picture of your cycles with results <br /> unique to your body.</p>
            </div>
        </div>
    );
};

export default text;
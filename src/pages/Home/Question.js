import React from 'react';

const Question = () => {
    return (
        <div className='flex my-auto text-black mb-10'>
            <div className='m-28 my-auto'>
                <h1 className='text-3xl font-bold pl-30'>Your <span className='text-decoration-style'>top</span> questions, <br /> answered</h1>

            </div>
            <div className='ml-28'>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        What results does Inito give?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito <br /> also shows you the charts and actual values of all 3 hormones.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        Do I need to use a test strip for each hormone?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Yes! We Do. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        How many test strips are required per cycle?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito <br /> also shows you the charts and actual values of all 3 hormones.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        Will inito work if I have pcos?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito <br /> also shows you the charts and actual values of all 3 hormones.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        Do medications affect the results?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito <br /> also shows you the charts and actual values of all 3 hormones.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#e5e5e5' }} tabIndex={0} className="collapse collapse-plus border rounded-box m-3">
                    <div className="collapse-title text-xl font-medium">
                        How accurate is Inito?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}> Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito <br /> also shows you the charts and actual values of all 3 hormones.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
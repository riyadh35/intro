import React from 'react';

const Question = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex text-black">
                <h1 className="text-5xl font-bold">Your top questions, answered</h1>
                <div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Question;
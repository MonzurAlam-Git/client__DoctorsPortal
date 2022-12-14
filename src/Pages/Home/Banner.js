import React from 'react';
import chair from "../../assets/images/chair.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div className='bg-banner'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mx-5'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-bold uppercase bg-gradient-to-r from-cyan-500 to-cyan-800">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
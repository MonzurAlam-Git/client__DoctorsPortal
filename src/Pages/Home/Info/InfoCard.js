import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div>
            <div className="card  bg-base-content text-base-100 lg:card-side shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;
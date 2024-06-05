// MetamaskPayment.jsx

import React from 'react';

const MetamaskPayment = () => {
    const onMainButtonClick = () => {
        // Main button click logic
    };

    return (
        <div className="payment-container">
            <div className="payment-content">
                <div className="second-payment">
                    <h2>Metamask Wallet</h2>
                    <div className="button-container">
                        <div className="payment-2">
                            <button onClick={onMainButtonClick}>Main Transaction Button</button>
                            {/* Metamask button */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetamaskPayment;

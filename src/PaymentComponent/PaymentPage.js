import React, { useEffect, useState, useRef } from 'react';
import '../CSS/Paymentether.css';
import Qrimage from '../images/qr.jpg';

function PaymentPage() {
    const [countdownTime, setCountdownTime] = useState(2400); // 40 minutes in seconds
    const [etherPrice, setEtherPrice] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState(null);
    const timerInterval = useRef(null);

    useEffect(() => {
        timerInterval.current = setInterval(() => {
            updateCountdown();
        }, 1000);

        const script = document.createElement('script');
        script.src = 'https://cdn.rawgit.com/pierregoutheraud/metamask-transaction-button/6ebebf41/build/static/js/mtb.js';
        script.async = true;
        document.body.appendChild(script);

        fetchEtherPrice();

        const redirectTimeout = setTimeout(() => {
            window.location.href = 'http://localhost:3000/Destinations';
        }, 120000);
        

        return () => {
            clearInterval(timerInterval.current);
            clearTimeout(redirectTimeout);
        };
    }, []);

    useEffect(() => {
        const metamaskButton = document.querySelector('.metamask-button');
        if (metamaskButton && paymentAmount) {
            metamaskButton.setAttribute('amount', paymentAmount.toFixed(4));
        }
    }, [paymentAmount]);

    const updateCountdown = () => {
        setCountdownTime(prevTime => {
            if (prevTime > 0) {
                return prevTime - 1;
            } else {
                clearInterval(timerInterval.current);
                return prevTime;
            }
        });
    };

    const fetchEtherPrice = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
            const data = await response.json();
            setEtherPrice(data.ethereum.inr);
            const rupeesToEther = 10000 / data.ethereum.inr;
            setPaymentAmount(rupeesToEther);
        } catch (error) {
            console.error('Failed to fetch Ether price:', error);
        }
    };

    const onMainButtonClick = async () => {
        if (etherPrice !== null) {
            const rupeesToEther = 10000 / etherPrice;
            alert(`You need to pay ${rupeesToEther.toFixed(4)} ether and amount copied to clipboard`);
            navigator.clipboard.writeText(rupeesToEther.toFixed(4))
                .then(() => {
                    console.log('Copied to clipboard:', rupeesToEther.toFixed(4));
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                });
            window.open('https://portfolio.metamask.io/send');
            const metamaskButton = document.querySelector('.metamask-button');
            if (metamaskButton) {
                metamaskButton.setAttribute('amount', rupeesToEther.toFixed(4));
            }
        }
    };

    const cancelButtonHandler = () => {
        window.location.href = 'http://localhost:3000/Destinations/';
        console.log('Order canceled');
    };
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="payment-wrapper">
            <div className="payment-container">
                <div className="payment-content">
                    <div className="payment-header">
                        <h1>Payment</h1>
                        <div className="countdown-container">
                            <p className="countdown" id="countdown">Holding Time: {formatTime(countdownTime)}</p>
                        </div>
                    </div>
                    <div className="payment-info">
                        <p className="p1"><b>Transfer Funds now!</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Amount: {paymentAmount ? paymentAmount.toFixed(4) : 'Loading...'} ETH
                            (Mainnet)<br /></p>
                        <p className="p2">Transfer funds to the wallet address below within the next 40 minutes to complete your
                            reservation.</p>

                        <div className="sub-box">
                            <div className="qr-code-container">
                                <img src={Qrimage} alt="QR Code" className="qr-code" />
                            </div>
                            <div className="network-address">
                                <p>Network: MAINNET<br /><br /></p>
                                <p>Address: <br />0x89E5b28c2F5Ff26b38F7a3Fa8Dee249352397424</p>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="payment-1-buttons">
                                <button id="cancel-btn" className="cancel-order-button" onClick={cancelButtonHandler}>Cancel order</button>
                                <a href="https://testnet.snowtrace.io/tx/0x6cf6cecbf4ad1474c6d9efa1205f066ebf9f3473142f7ad829e28833fb18258b" className="summary-button" target="_blank" rel="noopener noreferrer">Go to booking summary</a>
                            </div>
                        </div>
                    </div>
                    <div className="status-message-container">
                        <p className="status-message"></p>
                        <p className="error-message"></p>
                    </div>
                </div>
            </div>

            <span className="or-text"><b>OR</b></span>

            <div className="payment-container">
                <div className="payment-content">
                    <div className="second-payment">
                        <h2> Metamask Wallet</h2>
                        <div className="button-container">
                            <div className="payment-2">
                                <button onClick={onMainButtonClick}>Main Transaction Button</button>
                                <div className="metamask-button" address="0x89E5b28c2F5Ff26b38F7a3Fa8Dee249352397424" amount="0.005"
                                    success-callback="onSuccess" error-callback="onError"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;

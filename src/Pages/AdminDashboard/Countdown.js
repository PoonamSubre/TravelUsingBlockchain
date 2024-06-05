// Countdown.jsx

import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [countdownTime, setCountdownTime] = useState(1704);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setCountdownTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className="countdown-container">
            <p className="countdown">Holding Time: {formatTime(countdownTime)}</p>
        </div>
    );
};

const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Countdown;

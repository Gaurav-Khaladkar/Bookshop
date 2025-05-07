// SplashScreen component
import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onSplashEnd }) => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
            if (onSplashEnd) onSplashEnd();
        }, 3000); // Adjust the time (in milliseconds) as needed

        return () => clearTimeout(timer); // Cleanup the timer
    }, [onSplashEnd]);

    if (!showSplash) return null;

    return (
        <div className="d-flex flex-column min-vh-100">
            <img src="/aappa-icon.webp" alt="Splash" className="splash-image" />
        </div>
    );
};

export default SplashScreen;

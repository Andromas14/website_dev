import React, { useState, useEffect } from 'react';
import './TitleHeader.css';

const TitleHeader = () => {
    const [Stick, setStick] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setStick(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`large-header ${Stick ? 'stick' : ''}`}>
            ./Andrew-Maslo-Porfolio//
        </div>
    );
};

export default TitleHeader;

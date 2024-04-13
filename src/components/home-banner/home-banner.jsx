import React from 'react';
import banner from '../../assets/champagne.webp';

function HomeBanner() {
    return (
        <header className="banner-container">
            <img className="banner-image" src={banner} alt="banner" />
            <div className="banner-text">
                <p className="presentation">Organisateur de Bachelor et Bachelorette party depuis 2071</p>
            </div>
        </header>
    );
}

export default HomeBanner;

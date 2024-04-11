import React from 'react';
import banner from '../../assets/champagne.webp';
 
function HomeBanner() {
    return (
        <header>
                <img className="banner" src={banner} alt="banner" />
        </header>     
    )
}

export default HomeBanner
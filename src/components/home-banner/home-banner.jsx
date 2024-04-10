import React from 'react';
import banner from '../../assets/champagne.webp';
 
function HomeBanner() {
    return (
        <header>
                <a href="/"><img className="banner" src={banner} alt="banner" /></a>
        </header>     
    )
}

export default HomeBanner
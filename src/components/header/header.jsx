import React from 'react';
import logo from '../../assets/logo-am.webp';
 
function Header() {
    return (
        <header>
                <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        </header>     
    )
}

export default Header
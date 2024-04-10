import { Link } from 'react-router-dom';
import React from 'react';
 
function Menu() {
    return (
        <header>
            <nav>
                <span class="menu font-text">
                    <Link to="/evjf">EVJF</Link>
                    <Link to="/evg">EVG</Link>
                </span>
            </nav>
        </header>     
    )
}

export default Menu
import { Link } from 'react-router-dom';
import React from 'react';
import '../../assets/css/App.css'
 
function Menu() {
    return (
        <header>
            <nav>
                <span className="menu font-text">
                    <Link to="/evjf" className="card-evjf">EVJF</Link>
                    <Link to="/evg" className="card-evg">EVG</Link>
                </span>
            </nav>
        </header>     
    )
}

export default Menu
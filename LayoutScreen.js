import React from 'react';
import {Link} from 'react-router-dom';

function LayoutScreen() {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link> 
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="contact">ContactScreen</Link>
                    </li>
                </ul>
        </nav>
     );
}

export default LayoutScreen;
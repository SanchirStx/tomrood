import React from 'react';
import './Homescreen.css';
import {Link} from 'react-router-dom';

function HomeScreen() {
    return ( 
        <div className='Hcontainer'>

            <div className='menu'>
                <h1>SPECULAR</h1>
                <div className='mini'>
                <a className='a' href='home'>HOME</a>
                <a className='a' href='home'>DEMOS</a>
                <a className='a' href='home'>PAGES</a>
                <a className='a' href='home'>PORTFOLIO</a>
                <a className='a' href='home'>BLOG</a>
                <a className='a' href='home'>ELEMENTS</a>
                <a className='a' href='home'>SHOP</a>
                </div>
            </div>
                    <div className='main'>
                        <h1 className='extra'>EXTRA FLEXIBLE AND UNIQUE DESIGN</h1>
                        <h3 className='code'>Codeless has been quietly but consistenly building a power house port folio of web site design and markting success.</h3>
                        <h3 className='we'>We have cheerfully and expertly designed.</h3>
                        <div className='btn'>
                            <button className='take'>TAKE TOUR</button>
                            <button className='now'>PURCHASE NOW</button>
                        </div>
                    </div>
        </div>  
     );
}

export default HomeScreen;


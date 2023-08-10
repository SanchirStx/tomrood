import React from 'react';
import './ContactScreen.css';
import {Link} from 'react-router-dom';

function ContactScreen() {
    return ( 
        <div className='Ccontainer'>
            <div className='body'>
                <div className='left'>
                    <img className='icon' src='https://cdn-icons-png.flaticon.com/512/4470/4470631.png'></img>
                    <h2 className='text'> <p>If you have question or just want to get in touch, use the from below. We look forward to hearing from you </p></h2>
                </div>
                <div className='rigth'>
                    <h1>Contact Us</h1>
                    <input className='name' type='text' placeholder='Your Name'></input>
                    <input className='name' type='text' placeholder='User Email'></input>
                    <input className='message' type='text' placeholder='Message'></input>
                    <button className='send'>
                        <h2>Send</h2>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default ContactScreen;
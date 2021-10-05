import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="d-flex justify-content-md-between bg-dark foot">
        <div className = "">
            <h1>Learner School</h1>
            <small className="">Your Learning Mate</small>
        </div>

            <div>
                <h3>Contact Us</h3>
                <h6>012345678910</h6>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing({ onButtonClick }) {
    const handleButtonClick = () => {
        onButtonClick();
    };

    return (
        <>
            <div className='pricing-page'>
                <div className='pricing-container'>
                    <h1 className='pricing-header'>
                        PRICING
                    </h1>
                    <ul>
                        <li>

                        </li>

                    </ul>

                    <div className='pricing-deals-one'>
                        <h2>BASIC</h2>
                        <h1 className='price-one'>
                            $49.99/mo
                        </h1>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                            <li>Four</li>
                        </ul>
                    </div>
                    <div className='pricing-deals-two'>
                        <h2>Pro</h2>
                        <h1 className='price-two'>
                            $79.99/mo
                        </h1>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                            <li>Four</li>
                        </ul>
                        <p>
                            <Link to="/pricing" className="trial-button" onClick={handleButtonClick}>Start-Trial</Link>
                            <Link to="/pricing" className="week-free-button" onClick={handleButtonClick}>1-Week Access</Link>

                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Pricing

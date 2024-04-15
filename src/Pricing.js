import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
import Loader from './Loader';
import PriceAccordion from './Accordion';

function Pricing({ onButtonClick }) {
    const [isLoading, setIsLoading] = useState(true); // Initially set to true to show loader

    const handleButtonClick = () => {
        onButtonClick();
    };

    useEffect(() => {
        // Simulate loading delay (remove this in your actual code)
        const timeout = setTimeout(() => {
            setIsLoading(false); // Set loading to false when loading is done
        }, 1000); // 2000 milliseconds (2 seconds) delay for demonstration

        return () => clearTimeout(timeout); // Cleanup function to clear timeout
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='pricing-page'>
                    <h1 className='pricing-header'>Pricing</h1>
                    <div className='pricing-container'>
                        <div className='pricing-deals'>
                            <h2 className='free-header'>FREE</h2>
                            <ul className='free-list'>
                                <li>✔ Team Schedules</li>
                                <li>✔ Team Messaging</li>
                                <li>✔ Document Sharing</li>
                                <li>✔ Secure & Private</li>
                            </ul>
                        </div>
                        <div className='pricing-deals-two'>
                            <h2>BASIC</h2>
                            <h1 className='price-two'>
                                $39.99/mo
                            </h1>
                            <ul className='basic-list'>
                                <li>✔ High-Level Analytics</li>
                                <li>✔ Mobile Access</li>
                                <li>✔ Injury Report Tracking</li>
                                <li>✔ Individual Player Analytics</li>
                                <li>✔ Season Summaries</li>
                                <li>✔ Google Calendar Link</li>
                            </ul>
                            <p>
                                <Link to="/pricing" className="trial-button" onClick={handleButtonClick}>Start Trial</Link>
                                <Link to="/pricing" className="buy-now-one" onClick={handleButtonClick}>BUY NOW</Link>
                                <Link to="/pricing" className="buy-now-two" onClick={handleButtonClick}>BUY NOW</Link>

                            </p>
                        </div>
                        <div className='pricing-deals-three'>
                            <h2>PRO</h2>
                            <h1 className='price-three'>
                                $59.99/mo
                            </h1>
                            <ul className='pro-list'>
                                <li>✔ Advanced Analytics</li>
                                <li>✔ Video Analysis</li>
                                <li>✔ Customizable Training Programs</li>
                                <li>✔ Recruiting and Scouting Tools</li>
                                <li>✔ Custom Branding and White Labeling</li>
                                <li>✔ Priority Support and Dedicated Account Manager</li>
                            </ul>
                            <Link to="/pricing" className="buy-now-three" onClick={handleButtonClick}>BUY NOW</Link>
                        </div>
                    </div>
                    <div className='features-container'>
                        <PriceAccordion />
                    </div>
                </div>
            )}
        </>
    );
}

export default Pricing;

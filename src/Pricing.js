import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
import arrowDownPNG from './assets/arrow-down.png'; // Import your PNG image file
import arrowUpPNG from './assets/arrow-up.png';

function Pricing({ onButtonClick }) {
    const handleButtonClick = () => {
        onButtonClick();
    };

    const handleScrollDown = () => {
        const windowHeight = window.innerHeight;
        window.scrollTo({
            top: windowHeight * 1.00,
            behavior: 'smooth',
        });
    };

    const handleScrollUp = () => { // Define handleScrollUp function
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className='pricing-page'>
                <div className='pricing-container'>
                    <div className="floating-arrow-up" onClick={handleScrollUp}>
                        <img src={arrowUpPNG} alt="Arrow up" className="arrow-up-img" />
                    </div>
                    <div className="floating-arrow-down" onClick={handleScrollDown}>
                        <img src={arrowDownPNG} alt="Arrow down" className="arrow-down-img" />
                    </div>
                    <h1 className='pricing-header'>
                        PRICING
                    </h1>
                    <div className='pricing-deals-one'>
                        <h2>FREE</h2>
                        <h1 className='price-one'>
                        </h1>
                        <ul>
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
                        <ul>
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
                        <ul>
                            <li>✔ Advanced Analytics</li>
                            <li>✔ Video Analysis</li>
                            <li>✔ Customizable Training Programs</li>
                            <li>✔ Recruiting and Scouting Tools</li>
                            <li>✔ Custom Branding and White Labeling</li>
                            <li>✔ Priority Support and Dedicated Account Manager</li>
                        </ul>
                        <Link to="/pricing" className="buy-now-three" onClick={handleButtonClick}>BUY NOW</Link>
                    </div>
                    <div className='features-container'>
                        <ul className='features-text'>
                            <li>
                                <h3>Advanced Analytics</h3>
                                Access to comprehensive statistics and analytics tools for in-depth performance analysis.
                                Customizable dashboards and reports to track team and player progress over time.
                            </li>
                            <li>
                                <h3>Player Performance Tracking</h3>
                                Individual player performance tracking, including key metrics such as goals scored, assists, tackles, etc.
                                Integration with wearable devices for real-time monitoring of player fitness and health data.
                            </li>
                            <li>
                                <h3>Customizable Training Programs</h3>
                                Ability to create and customize training programs tailored to the team's specific needs and goals.
                                Access to expert coaching resources and drills designed by professional trainers.
                            </li>
                            <li>
                                <h3>Video Analysis</h3>
                                Integration with video analysis tools for reviewing game footage and analyzing player movements and tactics.
                                Drawing tools and annotations for highlighting key moments and strategies.
                            </li>
                            <li>
                                <h3>Recruiting and Scouting Tools</h3>
                                Tools for scouting and recruiting new talent, including player databases, scouting reports, and contact management features.
                                Integration with recruiting platforms and services for broader reach and exposure.
                            </li>
                            <li>
                                <h3>Team Communication and Collaboration</h3>
                                Enhanced communication features, such as team-wide messaging, group chat, and announcement broadcasting.
                                Collaboration tools for sharing documents, game plans, and strategy materials securely within the team.
                            </li>
                            <li>
                                <h3>Custom Branding and White Labeling</h3>
                                Option for custom branding and white labeling of the app with the team's logo, colors, and branding elements.
                                Ability to remove all references to the app's parent company for a fully branded experience.
                            </li>
                            <li>
                                <h3>Priority Support and Dedicated Account Manager</h3>
                                Priority customer support with dedicated account managers for personalized assistance and troubleshooting.
                                Guaranteed response times and priority access to new features and updates.
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;

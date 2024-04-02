import React from 'react';
import './Home.css';
import ScrollingBar from './ScrollingBar';
import Navbar from './Navbar';
import googleScore from './assets/google_review.png';
import yelpScore from './assets/yelp_review.png';

const Home = () => {
    return (
        <div className='home-container'>
                <div className='about'>
                    <h1>Save Time With The #1 Team Management App</h1>
                    <p>
                        We make life easier for coaches, parents and club/league administrators by bringing everything into an all-in-one team management solution. Get your team up and running faster with our stress-reducing and time-saving features.
                    </p>
                </div>
                <div className="landing-reviews">
                    <img src={googleScore} alt="Google Review" className="review-image" />
                    <img src={yelpScore} alt="Yelp Review" className="review-image" />
                </div>
            <div className='scroll-container'>
                <ScrollingBar />
            </div>
        </div>
    );
};

export default Home;

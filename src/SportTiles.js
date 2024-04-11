import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SportTiles.css'; // Importing the CSS file for styling

const BaseballTile = [{ name: 'Baseball' }];
const FootballTile = [{ name: 'Football' }];
const SoccerTile = [{ name: 'Soccer' }];
const IceHockeyTile = [{ name: 'Ice Hockey' }];
const BasketballTile = [{ name: 'Basketball' }];
const TennisTile = [{ name: 'Tennis' }];

const SportTiles = () => {
  return (
    <div className='sports-tiles-parent'>
      <div className='baseball-box'>
        <Link to="/sports/baseball" className="baseball-tile-container">
          {BaseballTile.map((baseballTile, index) => (
            <div key={index} className="baseball-tile">
              <div className="baseball-name">
                {baseballTile.name}
              </div>
            </div>
          ))}
        </Link>
      </div>

      <div className="football-box">
        <Link to="/sports/football" className="football-tile-container">
          {FootballTile.map((footballTile, index) => (
            <div key={index} className="football-tile">
              <div className="football-name">{footballTile.name}<p>(Coming Soon)</p></div>
            </div>
          ))}
        </Link>
      </div>

      <div className="soccer-box">
        <Link to="/sports/soccer" className="soccer-tile-container">
          {SoccerTile.map((soccerTile, index) => (
            <div key={index} className="soccer-tile">
              <div className="soccer-name">{soccerTile.name}</div>
            </div>
          ))}
        </Link>
      </div>

      <div className="ice-hockey-box">
        <Link to="/sports/icehockey" className="ice-hockey-tile-container">
          {IceHockeyTile.map((iceHockeyTile, index) => (
            <div key={index} className="ice-hockey-tile">
              <div className="ice-hockey-name">{iceHockeyTile.name}</div>
            </div>
          ))}
        </Link>
      </div>

      <div className="basketball-box">
        <Link to="/sports/basketball" className="basketball-tile-container">
          {BasketballTile.map((basketballTile, index) => (
            <div key={index} className="basketball-tile">
              <div className="basketball-name">{basketballTile.name}</div>
            </div>
          ))}
        </Link>
      </div>

      <div className="tennis-box">
        <Link to="/sports/tennis" className="tennis-tile-container">
          {TennisTile.map((tennisTile, index) => (
            <div key={index} className="tennis-tile">
              <div className="tennis-name">{tennisTile.name}<p>(Coming Soon)</p></div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default SportTiles;

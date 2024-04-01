import React from 'react';
import './SportTiles.css'; // Importing the CSS file for styling

const BaseballTile = [{ name: 'Baseball'}]
const FootballTile = [{ name: 'Football'}]
const SoccerTile = [{ name: 'Soccer'}]
const IceHockeyTile = [{ name: 'Ice Hockey'}]
const BasketballTile = [{ name: 'Basketball'}]
const TennisTile = [{ name: 'Tennis'}];

const SportTiles = () => {
  return (
    <div className='sports-tiles-parent'>
      <div className="baseball-tile-container">
        {BaseballTile.map((BaseballTile, index) => (
          <div key={index} className="baseball-tile">
            <div className="baseball-name">{BaseballTile.name}</div>
          </div>
        ))}
      </div>
      <div className="football-tile-container">
        {FootballTile.map((FootballTile, index) => (
          <div key={index} className="football-tile">
            <div className="football-name">{FootballTile.name}</div>
          </div>
        ))}
      </div>
      <div className="soccer-tile-container">
        {SoccerTile.map((SoccerTile, index) => (
          <div key={index} className="soccer-tile">
            <div className="soccer-name">{SoccerTile.name}</div>
          </div>
        ))}
      </div>
      <div className="ice-hockey-tile-container">
        {IceHockeyTile.map((IceHockeyTile, index) => (
          <div key={index} className="ice-hockey-tile">
            <div className="ice-hockey-name">{IceHockeyTile.name}</div>
          </div>
        ))}
      </div>
      <div className="basketball-tile-container">
        {BasketballTile.map((BasketballTile, index) => (
          <div key={index} className="basketball-tile">
            <div className="basketball-name">{BasketballTile.name}</div>
          </div>
        ))}
      </div>
      <div className="tennis-tile-container">
        {TennisTile.map((TennisTile, index) => (
          <div key={index} className="tennis-tile">
            <div className="tennis-name">{TennisTile.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportTiles;
import React from 'react';
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
        <div className="baseball-tile-container">
          {BaseballTile.map((baseballTile, index) => (
            <div key={index} className="baseball-tile">
              <div className="baseball-name">
                {baseballTile.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="football-box">
        <div className="football-tile-container">
          {FootballTile.map((footballTile, index) => (
            <div key={index} className="football-tile">
              <div className="football-name">{footballTile.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="soccer-box">
        <div className="soccer-tile-container">
          {SoccerTile.map((soccerTile, index) => (
            <div key={index} className="soccer-tile">
              <div className="soccer-name">{soccerTile.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ice-hockey-box">
        <div className="ice-hockey-tile-container">
          {IceHockeyTile.map((iceHockeyTile, index) => (
            <div key={index} className="ice-hockey-tile">
              <div className="ice-hockey-name">{iceHockeyTile.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="basketball-box">
        <div className="basketball-tile-container">
          {BasketballTile.map((basketballTile, index) => (
            <div key={index} className="basketball-tile">
              <div className="basketball-name">{basketballTile.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tennis-box">
        <div className="tennis-tile-container">
          {TennisTile.map((tennisTile, index) => (
            <div key={index} className="tennis-tile">
              <div className="tennis-name">{tennisTile.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportTiles;

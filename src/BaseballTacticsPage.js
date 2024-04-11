import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GameSituationController from './GameSituationController';
import BaseballField from './BaseballField';
import Base from './Base';
import team1Icon from './assets/team1.png';
import team2Icon from './assets/team2.png';

const BaseballTacticsPage = () => {
    const [basePlayers, setBasePlayers] = useState({
        '1st Base': false,
        '2nd Base': false,
        '3rd Base': false,
        'Home Plate': false,
    });

    const handlePlayerDrop = (playerId, baseId) => {
        setBasePlayers(prevState => ({
            ...prevState,
            [baseId]: true, // Now simply marking the base as having a player
        }));
    };

    // Optional: Function to clear players from bases
    const clearBase = (baseId) => {
        setBasePlayers(prevState => ({
            ...prevState,
            [baseId]: false,
        }));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <img src={team1Icon} alt="Team 1" style={{ display: 'flex',  position: 'relative', top: '80vh', left: '27vw' }} />
                <img src={team2Icon} alt="Team 2" style={{ display: 'flex',  position: 'relative', top: '80vh', left: '57vw' }} />
            </div>
            <GameSituationController />
            <div style={{ display: 'flex', justifyContent: 'center', position: '', height: '400px' }}>
                {/* Vertical alignment for Home and 2nd Base */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '19vh', position: 'absolute', top: '75vh', left: '47vw' }}>
                    <Base id="2nd Base" onDropPlayer={handlePlayerDrop} hasPlayer={basePlayers['2nd Base']}>2nd Base</Base>
                    <Base id="Home Plate" onDropPlayer={handlePlayerDrop} hasPlayer={basePlayers['Home Plate']}>Home</Base>
                </div>
                {/* Horizontal alignment for 1st and 3rd Base */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '42vh', position: 'absolute', top: '84vh', left: '34vw', zIndex:'9999' }}>
                    <Base id="3rd Base" onDropPlayer={handlePlayerDrop} hasPlayer={basePlayers['3rd Base']}>3rd Base</Base>
                    <Base id="1st Base" onDropPlayer={handlePlayerDrop} hasPlayer={basePlayers['1st Base']}>1st Base</Base>
                </div>
            </div>
            <BaseballField players={[]} />
        </DndProvider>
    );
};

export default BaseballTacticsPage;

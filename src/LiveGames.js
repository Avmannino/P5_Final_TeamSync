import React from 'react';
import ReactDOM from 'react-dom';
import './LiveGames.css';


import { Badge, Button } from 'rsuite';

const LiveGames = () => (
    <>
        <div className='live-games'>
            <Badge content="🟢 LIVE">
                <Button>Team A @ Team B</Button>
            </Badge>

            <Badge content="🟢 LIVE">
                <Button>Team 1 @ Team 2</Button>
            </Badge>

            <Badge content="🟢 LIVE">
                <Button>Team A vs. Team B</Button>
            </Badge>

            <Badge content="04/19 @ 7pm">
                <Button>Team 1  vs. Team 2</Button>
            </Badge>
        </div>
    </>
);

export default LiveGames;
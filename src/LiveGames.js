import React from 'react';
import ReactDOM from 'react-dom';
import './LiveGames.css';


import { Badge, Button } from 'rsuite';

const LiveGames = () => (
    <>
        <div className='live-games'>
            <Badge content="🟢 LIVE">
                <Button>Sharks @ Dragons</Button>
            </Badge>

            <Badge content="🟢 LIVE">
                <Button>Vipers @ Wolves</Button>
            </Badge>

            <Badge content="🟢 LIVE">
                <Button>Hawks vs. Bears</Button>
            </Badge>

            <Badge content="04/19 @ 7pm">
                <Button>Llamas vs. Hawks</Button>
            </Badge>
        </div>
    </>
);

export default LiveGames;
import React, { useEffect, useRef, useSt } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './HighCharts.css'; // Ensure this CSS file contains the necessary styling for dark mode
import gullPlayer from './assets/gulls_p1.png';
import gullPlayer2 from './assets/gulls_p2.png';

// import PatternFill from 'highcharts/modules/pattern-fill';

// Mock Data for the components
const iceCardData = [
    { title: 'Player to Watch', value: "Brett Byrd", unit: '#91 | Left Wing', description: '5 Goals  7 Assists' },
    { title: 'Opponent to Watch', value: 8, unit: 'micrograms', description: 'dose' },
    { title: 'Iron', value: 10, unit: 'micrograms', description: 'dose' },
    { title: 'Iron', value: 10, unit: 'micrograms', description: 'dose' },
];

const iceTableData = [
    { player: '1', gp: "", goals: "", assists: "", points: "" },
    { player: '2', gp: "", goals: "", assists: "", points: "" },
    { player: '3', gp: "", goals: "", assists: "", points: "" },
    { player: '4', gp: "", goals: "", assists: "", points: "" },
    { player: '5', gp: "", goals: "", assists: "", points: "" },
    { player: '6', gp: "", goals: "", assists: "", points: "" },
]

const IceDash = () => {
    return (
        <div className="ice-dashboard-container">
            <div className="ice-card-container">
                <div className="ice-card">
                    <img src={gullPlayer} alt="Image 1" />
                    <h2>{iceCardData[0].title}</h2>
                    <div className="value">{iceCardData[0].value}</div>
                    <div className="unit">{iceCardData[0].unit}</div>
                    <div className="description">{iceCardData[0].description}</div>
                </div>
                <div className="ice-card">
                    <img src={gullPlayer2} alt="Image 2" />
                    <h2>{iceCardData[1].title}</h2>
                    <div className="value">{iceCardData[1].value}</div>
                    <div className="unit">{iceCardData[1].unit}</div>
                    <div className="description">{iceCardData[1].description}</div>
                </div>
            </div>
            <div className="ice-chart-container">
                <div className="ice-table-container" style={{ position: 'absolute', bottom: '15vh', right:'58vw'}}>
                    {/* <table style={{height: 450, width: 800, boxShadow: '0px 8px 16px 0px #d1d1d133'}}>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:'#00115e'}}>Player</th>
                                <th style={{backgroundColor:'#00115e'}}>GP</th>
                                <th style={{backgroundColor:'#00115e'}}>Goals</th>
                                <th style={{backgroundColor:'#00115e'}}>Assists</th>
                                <th style={{backgroundColor:'#00115e'}}>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {iceTableData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.player}</td>
                                    <td>{item.gp}</td>
                                    <td>{item.goals}</td>
                                    <td>{item.assists}</td>
                                    <td>{item.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
            </div>
            <div className="ice-vertical-card">
            </div>
        </div>
    );
}

export default IceDash;
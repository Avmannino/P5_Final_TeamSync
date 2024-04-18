import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './HighCharts.css'; // Ensure this CSS file contains the necessary styling for dark mode
import backgroundImage from './assets/strikezone.png';
import Coach from'./assets/coach.png';
import { AgPickerField } from 'ag-grid-community';
// import PatternFill from 'highcharts/modules/pattern-fill';

// Mock Data for the components
const cardData = [
    { title: 'Welcome back, Coach', value: 'April 18th, 2024', unit: '', description: '2 New Messages! 📥' },
    { title: "'24-'25 Record:", value: "W:35-L:12", unit: '', description: 'Llamas have won 8 of the last 10!' },
    { title: 'Standings:', value: "1st - West Division", unit: '2nd - Bears: 3.5 GB', description: 'as of 04/18/24 3:00PM EST' },
    { title: 'Today:', value: "Practice @ 4pm PST Team Dinner @ 7pm PST", unit: '', description: '' },
];

const barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255, 255, 255, 0)' // Set background to transparent
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Nutrient Comparison',
        style: {
            color: '#e0e0e0'
        }
    },
    xAxis: {
        categories: ['Beef Liver', 'Lamb Liver', 'Cod Liver Oil', 'Mackerel', 'Tuna'],
        labels: {
            style: {
                color: '#e0e0e0'
            }
        }
    },
    yAxis: {
        gridLineColor: '#606063',
        title: {
            text: 'Amount (mcg)',
            style: {
                color: '#e0e0e0'
            }
        },
        labels: {
            style: {
                color: '#e0e0e0'
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#e0e0e0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#e0e0e0'
            }
        }
    },
    series: [{
        name: ':',
        data: [6421, 2122, 1350, 388, 214],
        color: '#2ecc71' // Example color, change as needed
    }, {
        name: 'Iron',
        data: [6.5, 6.5, 0.9, 1, 0.6],
        color: '#3498db' // Example color, change as needed
    },
    {
        name: 'Vitamin b',
        data: [6421, 2122, 1350, 388, 214],
        color: '#2ecc71' // Example color, change as needed
    }]
};

const lineChartOptions = {
    chart: {
        type: 'spline',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        events: {
            load: function () {
                const series1 = this.series[0]; // First series
                const series2 = this.series[1]; // Second series
                const series3 = this.series[2]; // Third series
                const series4 = this.series[3]; // Fourth series, new series for range 65-75
                let counter = 1; // Initialize counter to start at 1
                setInterval(() => {
                    const y1 = 85 + Math.random() * 16; // Random value between 70 and 100 for first series
                    const y2 = 70 + Math.random() * 10; // Random value between 70 and 80 for second series
                    const y3 = 77 + Math.random() * 8;  // Random value between 77 and 85 for third series
                    const y4 = 65 + Math.random() * 10; // Random value between 65 and 75 for fourth series

                    const randomSeriesIndex = Math.floor(Math.random() * 4); // Randomly select a series index from 0 to 3

                    if (randomSeriesIndex === 0 && series1 && series1.data) {
                        series1.addPoint([counter, y1], true, false);
                        this.setTitle(null, { text: `Last Pitch: ${y1.toFixed(2)} MPH - Fastball` });
                    } else if (randomSeriesIndex === 1 && series2 && series2.data) {
                        series2.addPoint([counter, y2], true, false);
                        this.setTitle(null, { text: `Last Pitch: ${y2.toFixed(2)} MPH - Curveball` });
                    } else if (randomSeriesIndex === 2 && series3 && series3.data) {
                        series3.addPoint([counter, y3], true, false);
                        this.setTitle(null, { text: `Last Pitch: ${y3.toFixed(2)} MPH - Slider` });
                    } else if (series4 && series4.data) {
                        series4.addPoint([counter, y4], true, false);
                        this.setTitle(null, { text: `Last Pitch: ${y4.toFixed(2)} MPH - Changeup` });
                    }

                    counter += 1; // Increment counter
                }, 2000);
            }
        }
    },
    time: {
        useUTC: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: '',
        style: {
            color: '#e0e0e0'
        }
    },
    subtitle: {
        text: 'Last Pitch: N/A', // Initial subtitle text
        style: {
            color: '#e0e0e0'
        }
    },
    xAxis: {
        type: 'linear',
        title: {
            text: 'Pitch Count',
            style: {
                color: '#e0e0e0'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Pitch Velocity (mph)',
            style: {
                color: '#e0e0e0'
            }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: true, // Enable legend to distinguish between series
        itemStyle: {
            color: '#FFFFFF' // Set the legend labels to white
        }
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Fastball',
        color: '#FF0000', // Set the color of the Fastball series to red
        data: [] // Starts with an empty dataset for the first series
    }, {
        name: 'Curveball',
        color: '#00FF00',
        data: [] // Starts with an empty dataset for the second series
    }, {
        name: 'Slider',
        color: '#0400FF',
        data: [] // Starts with an empty dataset for the third series
    }, {
        name: 'Changeup',
        color: '#FBFF00',
        data: [] // Starts with an empty dataset for the fourth series
    }]
};




// Mock function to generate random pitches more closely grouped near the center
function generateMockPitches(numberOfPitches) {
    const pitches = [];
    for (let i = 0; i < numberOfPitches; i++) {
        // Generate a random x and y within a much narrower part of the typical strike zone
        // Random x centered around 0 with a much smaller spread
        const x = (Math.random() - 0.1) * 0.01; // Now generates values more closely around 0 (-0.05 to 0.05)
        // Random y centered around 2.5 (middle of the 1 to 4 range) with a smaller spread
        const y = 0.5 + (Math.random() - 0.5) * 0.1; // Now generates values more closely around 2.5 (2.45 to 2.55)
        pitches.push([x, y]);
    }
    return pitches;
}

// Generate 7 mock pitches for demonstration
const mockPitches = generateMockPitches(7);


const baseballChartOptions = {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        backgroundColor: null // Ensuring transparency for the background
    },
    title: {
        text: 'Baseball Pitch Visualizer',
        style: {
            color: '#e0e0e0'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        title: {
            text: 'Width of Strike Zone',
            style: {
                color: '#e0e0e0'
            }
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        gridLineWidth: 0,  // Removing grid lines
        minorGridLineWidth: 0,  // Removing minor grid lines
        lineColor: 'transparent'  // Make the axis line transparent
    },
    yAxis: {
        title: {
            text: 'Height of Strike Zone',
            style: {
                color: '#e0e0e0'
            }
        },
        gridLineWidth: 0,  // Removing grid lines
        minorGridLineWidth: 0,  // Removing minor grid lines
        lineColor: 'transparent'  // Make the axis line transparent
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                symbol: 'circle',
                markerColor: "red"
            }
        }
    },
    series: [{
        name: 'Pitch',
        color: 'rgba(255, 0, 0, 0.9)',
        data: mockPitches // Use the mock pitches data generated earlier
    }]
};

const baseballTableData = [];


const Dash = () => {
    const lineChartRef = useRef(null); 
    const [pitchers, setPitchers] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null); // State to hold the selected year
    const [filteredPitchers, setFilteredPitchers] = useState([]); // State to hold filtered pitchers

    useEffect(() => {
        // Fetch 
        fetch('http://127.0.0.1:5555/pitchers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setPitchers(data);
                setFilteredPitchers(data); // Initialize filtered pitchers with all data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Filter pitchers based on selected year
    useEffect(() => {
        if (selectedYear) {
            const filtered = pitchers.filter(pitcher => pitcher.year === selectedYear);
            setFilteredPitchers(filtered);
        } else {
            setFilteredPitchers(pitchers);
        }
    }, [selectedYear, pitchers]);


    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="graph-container">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={lineChartOptions}
                    />
                </div>
                <div className="chart-with-background">
                    <img src={backgroundImage} alt="Background" className="chart-background-image" />
                    <HighchartsReact
                        className="HighchartsReact"
                        highcharts={Highcharts}
                        options={baseballChartOptions}
                    />
                </div>
            </div>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <div key={index} className="base-card">
                        <h2>{card.title}</h2>
                        <div className="value">{card.value}</div>
                        <div className="unit">{card.unit}</div>
                        <div className="description">{card.description}</div>
                    </div>
                ))}
            </div>
            <div className="chart-container">
            <img src={Coach} alt="coach" className="coach-icon" />
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>ERA</th>
                                <th>Games Started</th>
                                <th>Innings</th>
                                <th>Strikeouts</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pitchers.map((pitcher, index) => (
                                <tr key={index}>
                                    <td>{pitcher.name}</td>
                                    <td>{pitcher.age}</td>
                                    <td>{pitcher.wins}</td>
                                    <td>{pitcher.losses}</td>
                                    <td>{pitcher.era}</td>
                                    <td>{pitcher.games_started}</td>
                                    <td>{pitcher.innings_pitched}</td>
                                    <td>{pitcher.strikeouts}</td>
                                    <td>{pitcher.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="vertical-card">
            </div>
        </div>
    );
}

export default Dash;
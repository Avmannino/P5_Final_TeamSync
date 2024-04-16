import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './HighCharts.css'; // Ensure this CSS file contains the necessary styling for dark mode
import backgroundImage from './assets/strikezone.png';
// import PatternFill from 'highcharts/modules/pattern-fill';




// Mock Data for the components
const cardData = [
    { title: 'Vitamin A', value: 900, unit: 'micrograms', description: 'daily recommended dose' },
    { title: 'Iron', value: 8, unit: 'micrograms', description: 'daily recommended dose' },
    { title: 'Iron', value: 10, unit: 'micrograms', description: 'daily recommended dose' },
    { title: 'Iron', value: 10, unit: 'micrograms', description: 'daily recommended dose' },
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
        name: 'Vitamin A',
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

const tableData = [
    { team: 'Dimmsdale Dragons', record: "37-24", gb: "-", last: "6-4", streak: "W2" },
    { team: 'Vienna Vipers', record: "33-30", gb: "5.0", last: "3-7", streak: "W2" },
    { team: 'Las Vegas Llamas', record: "33-31", gb: "7.0", last: "6-4", streak: "W3" },
    { team: 'Binghamton Bears', record: "30-33", gb: "9.0", last: "5-5", streak: "L2" },
    { team: 'Simmsbury Sharks', record: "30-33", gb: "9.0", last: "4-6", streak: "L1" },
    { team: 'Warren Wolves', record: "28-37", gb: "11.0", last: "5-5", streak: "L3" },
    { team: 'Bradentown Buffalo', record: "27-39", gb: "13.0", last: "2-8", streak: "L5" }
];

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




// The Dashboard Component
const Dash = () => {
    const lineChartRef = useRef(null); // A ref to store the interval id

    useEffect(() => {
        // Generate the data once when the component mounts
        const mockPitches = generateMockPitches(10);
        // Update the baseballChartOptions with the new data
        baseballChartOptions.series[0].data = mockPitches;

    }, []);


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
                    <div key={index} className="card">
                        <h2>{card.title}</h2>
                        <div className="value">{card.value}</div>
                        <div className="unit">{card.unit}</div>
                        <div className="description">{card.description}</div>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Record</th>
                                <th>GB</th>
                                <th>Last 10</th>
                                <th>Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.team}</td>
                                    <td>{item.record}</td>
                                    <td>{item.gb}</td>
                                    <td>{item.last}</td>
                                    <td>{item.streak}</td>
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
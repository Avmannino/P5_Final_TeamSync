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
    { team: 'Dimmsdale Dragons', record: "37-24", gb: "-", last: 6 - 4, streak: "W2" },
    { team: 'Vienna Vipers', record: "33-30", gb: "5.0", last: 3 - 7, streak: "W2" },
    { team: 'Las Vegas Llamas', record: "33-31", gb: "7.0", last: 6 - 4, streak: "W3" },
    { team: 'Binghamton Bears', record: "30-33", gb: "9.0", last: 5 - 5, streak: "L2" },
    { team: 'Simmsbury Sharks', record: "30-33", gb: "9.0", last: 4 - 6, streak: "L1" },
    { team: 'Warren Wolves', record: "28-37", gb: "11.0", last: 5 - 5, streak: "L3" },
    { team: 'Bradentown Buffalo', record: "27-39", gb: "13.0", last: 2 - 8, streak: "L5" }
];

const lineChartOptions = {
    chart: {
        type: 'spline',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        events: {
            load: function () {
                // Set up the updating of the chart each second
                const series = this.series[0];
                setInterval(() => {
                    const x = (new Date()).getTime(), // current time
                        y = Math.random(); // random value
                    if (series && series.data) { // Make sure series and series.data are defined
                        series.addPoint([x, y], true, true);
                    }
                }, 1000);
            }
        }
    },
    time: {
        useUTC: false
    },
    title: {
        text: '',
        style: {
            color: '#e0e0e0'
        }
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        labels: {
            style: {
                color: '#e0e0e0'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Value',
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
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            let data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
};

// Mock function to generate random pitches
function generateMockPitches(numberOfPitches) {
    const pitches = [];
    for (let i = 0; i < numberOfPitches; i++) {
        // Generate a random x and y within a typical strike zone
        const x = (Math.random() - 0.5) * 2; // random value between -1 and 1
        const y = 1 + Math.random() * 3;     // random value between 1 and 4
        pitches.push([x, y]);
    }
    return pitches;
}

// Generate 10 mock pitches for demonstration
const mockPitches = generateMockPitches(10);

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
        // Since we're updating the options directly, you may need to force an update in the component
        // However, keep in mind that directly mutating the options is not the best practice in React.
        // You would normally use useState and update state, causing the component to re-render with new props.
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
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './BaseballCharts.css';

const BaseballCharts = () => {
  const [sparklineData] = useState([
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
  ]);

  const randomizeArray = (arg) => {
    let array = arg.slice();
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const generateChartOptions = (name, data, color) => ({
    chart: {
      id: name,
      group: 'sparklines',
      type: 'area',
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: name,
      data: randomizeArray(data)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime',
    },
    colors: [color], // Change the color here
    title: {
      text: '$424,652',
      offsetX: 30,
      style: {
        fontSize: '20px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    subtitle: {
      text: name,
      offsetX: 30,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title'
      }
    }
  });

  const ApexRadarChart = () => {
    const [series] = useState([
      {
        name: 'Gerrit Cole',
        data: [80, 50, 30, 40, 100, 20],
        color: '#a22820'
      },
      {
        name: 'Marcus Stroman',
        data: [20, 30, 40, 80, 20, 80],
        color: '#13eaff'
      },
      {
        name: 'Nestor Cortes',
        data: [44, 76, 78, 13, 43, 10],
        color: '#7d3688'
      }
    ]);

    const [options] = useState({
      chart: {
        height: 550,
        color: 'white',
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: 'Pitch-Type Variability (1 Start-Each)'
      },
      stroke: {
        width: 2.5
      },
      fill: {
        opacity: 0.5
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['4-Seam FB', 'Curve', 'Slider', 'Splitter', '2- Seam FB', 'Changeup']
      },
      legend: {
        fontSize: '16px', // Set the font size for legend labels
        labels: {
          colors: '#FFFFFF' // Set the color for legend labels
        }
      }
    });

    return (
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={400}
      />
    );
  };

  return (
    <div className='dashboard-charts'>
      <div className="line-graph">
        <Panel header="Net Income Revenue" className="custom-panel">
          <ReactApexChart
            options={generateChartOptions("Sales", sparklineData, '#FF000080')}
            series={[{ data: sparklineData }]}
            type="area"
            height={250}
          />
        </Panel>
      </div>
      <div className="radar-chart">
        <Panel header="">
          <ApexRadarChart />
        </Panel>
      </div>
    </div>
  );
};

export default BaseballCharts;

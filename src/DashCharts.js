import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import './DashCharts.css';

const DashboardCharts = () => {
  const [sparklineData] = useState([
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
  ]);
  const [colorPalette] = useState([
    '#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'
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
    colors: [color],
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
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }
    ]);

    const [options] = useState({
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: 'Radar Chart - Multi Series'
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['4-Seam FB', 'Curve', 'Slider', 'Splitter', '2- Seam FB', 'Changeup']
      }
    });

    return (
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={450}
      />
    );
  };

  const generateData = (count, yrange) => {
    var series = [];
    for (var i = 0; i < count; i++) {
      const x = 'w' + (i + 1).toString();
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  };

  const heatmapSeries = [{
    name: 'Metric1',
    data: generateData(18, { min: 0, max: 90 })
  }, {
    name: 'Metric2',
    data: generateData(18, { min: 0, max: 90 })
  }, {
    name: 'Metric3',
    data: generateData(18, { min: 0, max: 90 })
  }];

  return (
    <div className='dashboard-charts'>
      <div className="line-graph">
        <Panel bordered header="Sales">
          <ReactApexChart
            options={generateChartOptions("Sales", sparklineData, colorPalette[0])}
            series={[{ data: sparklineData }]}
            type="area"
            height={250}
          />
        </Panel>
      </div>
      <div className="radar-chart">
        <Panel bordered header="Profits">
          <ApexRadarChart />
        </Panel>
      </div>
      <div className="heat-map">
        <Panel bordered header="Heatmap">
          <ReactApexChart
            options={{
              chart: {
                height: 50,
                type: 'heatmap',
              },
              plotOptions: {
                heatmap: {
                  shadeIntensity: 10.5,
                  radius: 0,
                  useSeriesColors: false,
                },
              },
              colors: ["#008FFB"],
              dataLabels: {
                enabled: false
              },
              series: heatmapSeries,
              title: {
                text: "HeatMap Chart"
              },
            }}
            series={heatmapSeries}
            type="heatmap"
            height={30}
          />
        </Panel>
      </div>
      <div className="progress-bar">
        <Panel bordered header="Daily Steps">
          <ReactApexChart
            options={{
              chart: {
                type: 'bar',
                height: 149,
                sparkline: { enabled: true },
             
                background: 'transparent',
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              colors: ['#008b8b'],
              dataLabels: {
                enabled: false,
              },
              series: [
                {
                  data: [80],
                },
              ],
              xaxis: {
                categories: ['Progress'],
              },
            }}
            series={[{ data: [80] }]}
            type="bar"
            height={30}
          />
        </Panel>
      </div>
    </div>
  );
};

export default DashboardCharts;

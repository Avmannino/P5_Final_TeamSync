import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DashboardCharts = () => {
  // State for sparkline data and color palette
  const [sparklineData] = useState([
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
  ]);
  const [colorPalette] = useState([
    '#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'
  ]);

  // Function to randomize array (used in generating series data)
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

  // Function to generate chart options dynamically
  const generateChartOptions = (name, data, color) => ({
    chart: {
      id: name,
      group: 'sparklines',
      type: 'area',
      height: 160,
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
        fontSize: '24px',
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

  // Heatmap options
  const heatmapOptions = {
    chart: {
      type: 'heatmap',
      height: 350,
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'Heatmap Chart Example',
      align: 'left'
    },
  };

  // Helper function to generate data for heatmap
  const generateData = (count, yrange) => {
    let series = [];
    for (let i = 0; i < count; i++) {
      const x = 'w' + (i + 1).toString();
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  };

  // Heatmap series data
  const heatmapSeries = Array.from({ length: 9 }, (_, index) => ({
    name: `Metric ${index + 1}`,
    data: generateData(18, { min: 0, max: 90 })
  }));

  // Progress bar options
  const progressBarOptions = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#17ead9"],
    stroke: {
      width: 0
    },
    series: [{
      name: "Process 2",
      data: [80]
    }],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 2"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "80%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 2"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: false,
        gradientToColors: ["#6078ea"]
      }
    }
  };

  return (
    <div>
      <ReactApexChart
        options={generateChartOptions("Sales", sparklineData, colorPalette[0])}
        series={[{ data: randomizeArray(sparklineData) }]}
        type="area"
        height={160}
      />
      <ReactApexChart
        options={generateChartOptions("Profits", sparklineData, colorPalette[2])}
        series={[{ data: randomizeArray(sparklineData) }]}
        type="area"
        height={160}
      />
      <ReactApexChart
        options={heatmapOptions}
        series={heatmapSeries}
        type="heatmap"
        height={350}
      />
      <ReactApexChart
        options={progressBarOptions}
        series={[{ data: [80] }]}
        type="bar"
        height={70} 
      />
    </div>
  );
};

export default DashboardCharts;

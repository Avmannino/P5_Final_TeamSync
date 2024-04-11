import React from "react";
import { Panel } from 'rsuite';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ['Ramsey', 'McDonaugh', 'Velasquez', 'Green', 'Peterson', 'Johnson'],
  datasets: [
    {
      label: 'Team Leaders - Home Runs',
      data: [37, 31, 29, 15, 7, 6],
      backgroundColor: [
        '#410069',
        '#410069',
        '#410069',
        '#410069',
        '#410069',
        '#410069',
      ],
      borderColor: [
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
      ],
      borderWidth: 2,
      borderRadius: 2,
    },
  ],
};

function BarGraph() {
  return (
    <Panel bordered header="Team Leaders - Home Runs" boxShadow="base" borderRadius="15px"
      style={{
        padding: '60px',
        height: '400px', // Adjust the height here
        width: '650px', // Adjust the width here
        marginTop: '0px',
        fontSize: '18px',
        position: 'relative',
        top:'15.5vh',
        left: '-14.5vw',
        overflow: 'hidden' // Ensure the chart fits within the panel
      }}>
      <Bar data={barData} options={{ maintainAspectRatio: true }} />
    </Panel>
  );
}


export default BarGraph;

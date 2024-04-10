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
      borderRadius: 3,
    },
  ],
};

function BarGraph() {
  return (
    <Panel bordered header="Team Leaders - Home Runs" boxShadow="base" borderRadius="15px"
      style={{
        padding: '20px',
        height: '400px', // Adjust the height here
        width: '600px', // Adjust the width here
        marginTop: '10px',
        fontSize: '55px',
        position: 'relative',
        overflow: 'hidden' // Ensure the chart fits within the panel
      }}>
      <Bar data={barData} options={{ maintainAspectRatio: true }} />
    </Panel>
  );
}


export default BarGraph;

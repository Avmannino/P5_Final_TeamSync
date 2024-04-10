import React from "react";
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
import { Box } from '@chakra-ui/react';

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
    <Box boxShadow="base" borderRadius="15px" p={5} h="auto" w="100%" marginLeft="auto" marginRight="auto" marginTop="20px">
      <Bar data={barData} options={{ maintainAspectRatio: false }} />
    </Box>
  );
}

export default BarGraph;

// src/components/PieChartReact.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DataProps {
  [key: string]: {
    population: number;
  };
}

export default function PieChartReact({ data }: { data: DataProps }) {
  const labels = Object.keys(data);
  const populations = labels.map(label => data[label].population);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Population',
        data: populations,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#C9CBCF', '#76D7C4',
          '#F1948A', '#85C1E9',
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Population by Governorate',
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
}

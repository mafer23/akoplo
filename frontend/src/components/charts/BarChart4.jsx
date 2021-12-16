import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      // position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Objetivos de reciclaje',
    },
  },
};

const labels = ['Generado', 'Recolectado', 'Transformado', 'Eliminado'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Meta',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      backgroundColor: 'rgba(91, 188, 69, 0.5)',
    },
    {
      label: 'Alcance',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Data2() {
  return <Bar options={options} data={data} />;
}

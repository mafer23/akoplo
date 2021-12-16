import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ['Recogida', 'Transferencia', 'Clasificación', 'Valoración'],
    datasets: [
      {
        label: 'Cadena de reciclaje',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81]
      }
    ]
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true
  };
  return (
    <div className="BarChart" style={{width: '50%', height: '300px'}}>
      {/* <h2>Etapas</h2> */}
        <Bar data={data} options={options} />
    </div>
  );
  // return <div>Bar Chart</div>
} 

export default BarChart;
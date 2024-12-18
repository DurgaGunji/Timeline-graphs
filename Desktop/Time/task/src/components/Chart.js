import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import './Chart.css';
// Register chart components and plugins
Chart.register(...registerables, ChartDataLabels);

const TimelineChart = () => {
  // Data for the chart
  const data = {
    labels: ["20-12-2024", "22-12-2024", "25-12-2024", "29-12-2024"], // Dates
    datasets: [
      {
        label: "Blood Pressure",
        data: [120, 118, 115, 120], // Blood Pressure values
        backgroundColor: "#2d96e5",
        borderWidth: 1,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Pulse",
        data: [72, 72, 72, 72], // Pulse values
        backgroundColor: "#d3e25a",
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Heart Rate",
        data: [75, 75, 75, 75], // Heart Rate values
        backgroundColor: "#3edcf8",
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Weight",
        data: [70, 70, 70, 69], // Weight values
        backgroundColor: "#9e54f3",
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Temperature",
        data: [36.5, 36.5, 36.5, 36.5], // Temperature values
        backgroundColor: "#e7992f",
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,  // Adjusts the width of the circle in the legend
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        // text: "Timeline",
        font: {
          size: 18,
        },
      },
      datalabels: {
        anchor: "end", // Position at the top of each bar
        align: "end",
        formatter: (value, context) => {
          const labels = ["BP", "bpm", "bpm", "kg", "°C"];
          return `${value} ${labels[context.datasetIndex] || ""}`; // Fixed string interpolation
        },
        font: {
          size: 10,
        },
        color: "#cac9c6",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          font: {
            size: 15,      // Font size for the labels
            weight: 'bold', // Make the font bold
          },
          color: '#ababab',  // Set the color of the labels to black
        },
      },
      y: {
        beginAtZero: true,
        max: 140, // Max value for y-axis
        grid: {
          display: true, // Ensure horizontal grid lines are displayed
          color: "rgba(0, 0, 0, 0.1)", // Light gray color for the grid lines
          borderDash: [5, 5], // Dashed lines (5px dash, 5px gap)
          lineWidth: 1, // Line width for grid lines
          drawBorder: false,  // Do not draw a border for the y-axis itself
          drawOnChartArea: true,  // Draw grid lines on the chart area (not just the border)
        },
        ticks: {
          stepSize: 20,
          font: { 
            size: 15,
            weight: 'bold',
          },
          color: '#ababab', 
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Timeline</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TimelineChart;

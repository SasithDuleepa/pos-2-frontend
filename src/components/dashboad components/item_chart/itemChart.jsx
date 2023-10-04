import React from 'react';
import './itemchart.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ItemChart() {
    //get items
    const[stock,setstock] = useState([])
    const getStock = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/all`);
        console.log(res.data)
        if(res.data.status === 200 ){
            setstock(res.data.data)
        }        
    }
    useEffect(()=>{
        getStock();
    },[])


    
const dataPoints = stock.map((item) => ({
    label: item.stock_item,
    y: item.current_qty,
  }));
  CanvasJS.addColorSet("customColorSet", [
    "#4CAF50", // Green
    "#FFC107", // Amber
    "#2196F3", // Blue
    "#FF5722", // Deep Orange
    "#9C27B0", // Purple

    // "linear-gradient(to bottom, rgba(76, 175, 80, 1), rgba(76, 175, 80, 0))", // Green gradient
    // "linear-gradient(to bottom, rgba(255, 193, 7, 1), rgba(255, 193, 7, 0))", // Amber gradient
    // "linear-gradient(to bottom, rgba(33, 150, 243, 1), rgba(33, 150, 243, 0))", // Blue gradient
    // "linear-gradient(to bottom, rgba(255, 87, 34, 1), rgba(255, 87, 34, 0))", // Deep Orange gradient
    // "linear-gradient(to bottom, rgba(156, 39, 176, 1), rgba(156, 39, 176, 0))", // Purple gradient
  ]);


  




  
  const options = {
    animationEnabled: true, 
      animationDuration: 2000,
    theme: "dark2",    // "light1", "dark1", "dark2"
    backgroundColor: "#333",
    colorSet: "customColorSet",
    title: {
      text: "Available Stock",
      fontColor: "white",
    },
    axisX: {
      // title: "X-Axis Label",
      titleFontColor: "white", // Text color of the X-axis title.
      labelFontColor: "white", // Text color of X-axis labels.
      lineColor: "white", // Color of X-axis lines.
      tickColor: "white", // Color of X-axis ticks (grid lines).
      // gridColor: "transparent",
    },
    axisY: {
      // title: "Y-Axis Label",
      titleFontColor: "white", // Text color of the Y-axis title.
      labelFontColor: "white", // Text color of Y-axis labels.
      lineColor: "white", // Color of Y-axis lines.
      tickColor: "white", // Color of Y-axis ticks (grid lines).
      gridColor: "transparent",
    },
    data: [
      {
        type: "column",
        dataPoints: dataPoints,
        // color:"rgba(255,12,32,0.5)",
       
      },
    ],
  };
  
  return (
    <div className='itemchart'>
        <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const DashBoard = () => {
    const [chart,setchart]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setchart(data))
    },[])
    return (
       <nav className='chart'>
            <div>
             <AreaChart width={500} height={400} data={chart}>
            <Area dataKey='investment' stroke="magenta" ></Area>
            <Area dataKey='revenue' stroke="red" ></Area>
            <XAxis dataKey='month' ></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <defs></defs>
            </AreaChart>
        </div>
        <div>
            <BarChart width={500} height={400} data={chart}>
                <Bar dataKey='investment' fill='green'></Bar>
                <Bar dataKey='revenue' fill='red'></Bar>
                <XAxis stroke="red"></XAxis>
                <YAxis stroke="magenta"></YAxis>
                <Tooltip></Tooltip>
                <defs></defs>
                <Legend></Legend>
            </BarChart>
        </div>
       </nav>
    );
};

export default DashBoard;
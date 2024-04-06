import React from 'react'
import './Dashboard.css';
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import LineChart from "./LineChart";

const Baseball = () => {
    return (
        <div className='sports-page'>
            <div className='sports-container'>
                <Sidebar />
                <Dashboard />
                <LineChart />
            </div>
        </div>
    )
}

export default Baseball;

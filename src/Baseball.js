import React from 'react'
import './Dashboard.css';
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Baseball = () => {
    return (
        <div className='sports-page'>
            <div className='sports-container'>
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}

export default Baseball;

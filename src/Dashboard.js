import React from 'react';
// Importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Dashboard.css'; 
import DashboardCharts from './DashCharts'; 
import Sidebar from './Sidenav';
import TopDashNav from './DashNav';
import BarGraph from './BarGraph';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashCalendar from './Calendar'; 

const Dashboard = () => {
    return (
        <div className="wrapper">
            <div className="content-area">
               
                    <div className='side-bar'>
                        <Sidebar />
                        <Routes>
                            <Route path="/sports/calendar" element={DashCalendar} />
                        </Routes>
                    </div>
               
                <div className='top-nav'>
                    <TopDashNav />
                </div>
                <div className="container-fluid">
                    <div className="main">
                        <div className="row sparkboxes mt-4 mb-4">
                            <DashboardCharts /> 
                        </div>
                        <div className='bar-chart'>
                            <BarGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

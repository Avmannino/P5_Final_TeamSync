import React from 'react';
// Importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Dashboard.css';
import DashboardCharts from './DashCharts';
import Sidebar from './Sidenav';
// import TopDashNav from './DashNav';
import BarGraph from './BarGraph';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashCalendar from './Calendar';
import NavSide from './NavSide';
import DashTimeline from './Timeline';
import Navbar from './Navbar';
import TimeDrawer from './Drawer';
import TeamCard from './TeamCard';
import ContourMap from './CountourChart';
import Dash from './HighCharts';
// import DashDrawer from './Drawer';



const Dashboard = () => {
    return (
            <div className="wrapper">
                <div className="content-area">
                    {/* <ContourMap /> */}
                    <TimeDrawer />
                    <div className='side-bar'>
                        <Sidebar />
                        <Routes>
                            <Route path="/sports/calendar" element={DashCalendar} />
                        </Routes>
                    </div>
                    <div className='user-card'>
                    
                    </div>

                    <div className="navbar-frame">
                        <Navbar />
                    </div>
                    <div className="container-fluid">
                        <div className="main">
                            <TeamCard />
                            <Dash />
                          
                            <div className="row sparkboxes mt-4 mb-4">
                                <DashboardCharts />
                                {/* <DashTimeline /> */}
                            </div>
                            <div className='bar-chart'>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;

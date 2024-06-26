import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Dashboard.css';
import Sidebar from './SidebarBase';
// import TopDashNav from './DashNav';
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

                <div className='user-card'>

                </div>
                

                <div className="navbar-frame">
                    <Navbar />
                </div>
                <div className="container-fluid">
                    <div className="main">
                        <Dash />
                        <div className="row sparkboxes mt-4 mb-4">

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

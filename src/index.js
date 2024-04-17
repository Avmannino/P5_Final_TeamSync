import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, BrowserRouter, Link as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sports from "./Sports";
import Pricing from "./Pricing";
import Social from "./Social";
import LandingPage from "./LandingPage";
import Baseball from "./Baseball";
import IceHockey from "./IceHockey";
import Soccer from "./Soccer";
import Football from "./Football";
import Basketball from "./Basketball";
import Tennis from "./Tennis";
import DashCalendar from "./Calendar";
import SportsTable from "./SportsTable";
import BaseballField from "./BaseballField";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import IceRink from "./IceRink";
import HockeyLines from "./HockeyLines";
// import VideoPage from "./pages/VideoPage";
import Login from "./Login";
import IceInjuries from "./IceInjuries";
import BaseInjuries from "./BaseInjuries";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/sports",
        element: <Sports />
      },
      {
        path: "/sports/baseball/*",
        element: <Baseball />
      },
      {
        path: "/sports/baseball/calendar",
        element: <DashCalendar />
      },
      {
        path: "/sports/baseball/starting",
        element: <SportsTable />
      },
      {
        path: "/sports/baseball/tactics",
        element: <BaseballField />
      },
      {
        path: "/sports/baseball/injuries",
        element: <BaseInjuries />
      },
      {
        path: "/sports/football",
        element: <Football />
      },
      {
        path: "/sports/soccer",
        element: <Soccer />
      },
      {
        path: "/sports/icehockey",
        element: <IceHockey />
      },
      {
        path: "/sports/icehockey/lines",
        element: <HockeyLines />
      },
      {
        path: "/sports/icehockey/calendar",
        element: <DashCalendar />
      },
      {
        path: "/sports/icehockey/tactics",
        element: <IceRink />
      },
      {
        path: "/sports/icehockey/injuries",
        element: <IceInjuries />
      },
      {
        path: "/sports/icehockey/reels",
        element: <Social />
      },
      {
        path: "/sports/basketball",
        element: <Basketball />
      },
      {
        path: "/sports/tennis",
        element: <Tennis />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/motion",
        element: <Social />
      },
      {
        path: "/log-in",
        element: <Login />
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
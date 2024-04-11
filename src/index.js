import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
        path: "/sports/baseball",
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
        path: "/sports/football",
        element: <Football/>
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
        path: "/social",
        element: <Social />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
import React from 'react'
import SideBar from './SideBar'
import {Grid,Typography} from '@mui/material'
import Grievance from './Grievance';
import { useState } from "react";
import Home from './Home';
function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("home");

  const switchToHome = () => {
    setActiveComponent("home");
  };

  const switchToStatistics = () => {
    setActiveComponent("grievance");
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar 
            activeComponent={activeComponent}
            onHomeClick={switchToHome}
            onStatisticsClick={switchToStatistics}
          />
        </Grid>
        <Grid item xs={9}>
          {activeComponent === "home" ? <Home /> : <Grievance />}
        </Grid>
      </Grid>
     
    </div>
  
  )
}

export default Dashboard
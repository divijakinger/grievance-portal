import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
// import {  signOut } from "firebase/auth";
// import { auth } from "../../Firebase";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
export default function IconMenu({ activeComponent,onHomeClick, onStatisticsClick }) {

  const handleMenuItemClick = (event, index) => {
    if (index === 0) {
      onHomeClick(); 
    } else if (index === 1) {
      onStatisticsClick(); 
    }
    console.log("activeComponent:", activeComponent);
    console.log("index:", index);
  };
  return (
    <Paper
      sx={{
        width: 300,
        borderRadius: "20px",
        maxWidth: "100%",
        fontWeight:'bold',
        backgroundColor: "#FFF",
        color: "#498b30",
        padding: "1rem",
        margin: "1rem",
        height:700,
      }}
    >
      <h2 style={{color:'#498b30'}}>Grievance Portal.</h2>
      <MenuList>
        <MenuItem
          selected={activeComponent === "home"}
          onClick={(event) => handleMenuItemClick(event, 0)}
          style={{
            backgroundColor: activeComponent === "home" ? "#D9d9d9" : "transparent",
            borderRadius: "10px",
          }}
        >
          <ListItemIcon>
            <HomeOutlinedIcon fontSize="large" style={{ color: "#498b30" }} />
          </ListItemIcon>
          <ListItemText style={{fontColor: "#498b30",fontWeight:'bold'}}>Home</ListItemText>
        </MenuItem>
        <MenuItem
          selected={activeComponent === "grievance"}
          onClick={(event) => handleMenuItemClick(event, 1)}
          style={{
            backgroundColor: activeComponent === "grievance" ? "#D9d9d9" : "transparent",
            borderRadius: "10px",
          }}
        >
          <ListItemIcon>
            <SearchIcon fontSize="large" style={{ color: "#498b30" }} />
          </ListItemIcon>
          <ListItemText style={{fontColor: "#498b30",fontWeight:'bold'}}> Grievance</ListItemText>
        </MenuItem>
        <MenuItem
          selected={activeComponent === "logout"}
          // onClick={handleLogout}
          style={{
            backgroundColor: activeComponent === "logout" ? '#D9d9d9' : 'transparent',
            borderRadius: '10px',
          }}

        >
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="large" style={{
              color: '#498b30'
            }} />
          </ListItemIcon>
          <ListItemText style={{fontWeight:'bold' ,color:'#498b30'}}>Logout</ListItemText>
          
        </MenuItem>
      </MenuList>
    </Paper>
  );
}


import React from 'react'
import Dashboard from './Dashboard'
import BasicTable  from './BasicTable'
import {Typography,CardContent,Card,Grid,TextField, Link} from "@mui/material"
import EventCard from './EventCard'
import { FormControl,InputLabel,Input,FormHelperText ,MenuItem ,Select} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SideBar from './SideBar'
function Status() {
  return (
    <>
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
        <div style={{
        alignItems: "center",
        margin: '0px',
        width: '100%',
      }}>
              <h1 style={{paddingRight:'10px',paddingLeft:'10px',backgroundColor:'#FFF',marginRight:'10px',borderRadius:'10px',paddingTop:'10px',paddingBottom:'10px',display:'inline-block'}}>Resolved</h1>
              <div style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginLeft: "10px",
                marginRight:'10px',
              }}>
                <div
                style={{
                  overflowY: 'auto',
                  paddingTop:10,
                }}
              >
              <FormControl fullWidth>
                <InputLabel   id="demo-simple-select-label">Stat</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={nullValue}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}><Link to='/status/resolved'>Resolved</Link></MenuItem>
                    <MenuItem value={20}><Link onClick={e=>e.preventDefault()}>In Progress</Link></MenuItem>
                    <MenuItem value={30}><Link onClick={e=>e.preventDefault()}>Not Resolved</Link></MenuItem>               
                </Select>
                </FormControl>

              </div>
              </div>


              <div
              style={{
                paddingRight: '10px',
                paddingLeft: '10px',
                paddingTop:'10px'
              }}
              >
                <BasicTable />
              </div> 
    </div>
        </Grid>
      </Grid>
     
    </div>
    
    </>
  )
}

export default Status
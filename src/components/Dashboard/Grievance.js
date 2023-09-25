import React from 'react'
import Dashboard from './Dashboard'
import { Typography, CardContent, Card, Grid, TextField, Link } from "@mui/material"
import EventCard from './EventCard'
import { FormControl, InputLabel, Input, FormHelperText, MenuItem, Select } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Status from './Status'
import { useNavigate } from 'react-router-dom';


function Grievance() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/status')

  }
  return (

    <>
      <Grid container spacing={2} style={{
        paddingRight: '30px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        marginBottom: '10px',
      }}>
        <Grid item xs={12} sm={12}>
          <div
            style={{
              height: '300px',
              overflowY: 'auto',
            }}
          >
            <Card style={{
              height: 300,
            }}>
              <CardContent style={{paddingRight:'10px',paddingLeft:'10px',paddingTop:'40px'}}>
                <Typography variant="h5" sx={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  fontWeight: 'bold',
                  display: 'flex ',
                  justifyContent: 'center',
                  color:'#498b30',
                }}>
                  Enter Grievance Number
                </Typography>

                <div
                  style={{
                    display: 'flex ',
                    justifyContent: 'center',
                    height: '300px',
                    overflowY: 'auto',
                  }}
                >

                  <TextField sx={{
                    paddingTop: 3,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                    fullWidth
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue=""
                    variant="filled"
                    size="large"
                  />

                </div>

              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
      <br />


      <Grid container spacing={2} style={{
        paddingRight: '30px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
      }}>

        <Grid item xs={12} sm={12}>

          <Card style={{
            height: '300px',
          }}>
            <CardContent style={{paddingRight:'10px',paddingLeft:'10px',paddingTop:'40px'}}>
              {/* <div style ={{ fontWeight: 'bold',
                display:'flex ',
                justifyContent:'center',
                }}>
                <GTranslateIcon fontSize='large'/>
              </div> */}
              <Typography variant="h5" sx={{
                paddingTop:'20px',
                fontWeight: 'bold',
                display: 'flex ',
                justifyContent: 'center',
                color:"#498b30",
              }}>
                Find by Status
              </Typography>
              <div
                style={{
                  height: '300px',
                  overflowY: 'auto',
                  paddingTop: 10,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Stat</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={nullValue}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10} onClick={handleClick}>Resolved</MenuItem>
                    <MenuItem value={20} onClick={handleClick}>In Progress</MenuItem>
                    <MenuItem value={30} onClick={handleClick}>Not Resolved</MenuItem>
                  </Select>
                </FormControl>

              </div>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Grievance
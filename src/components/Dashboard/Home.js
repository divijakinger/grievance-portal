import React from 'react'
import Dashboard from './Dashboard'
import {Typography,CardContent,Card,Grid} from "@mui/material"
import EventCard from './EventCard'
import Status from './Status'
import Query from './Query'
import BarChart from './Statistics/BarChart'
import DoughnutChart from './Statistics/PieChart'
import PendingActionsIcon from '@mui/icons-material/PendingActions';

// import Slider from './Swiper'
function Home() {
  return (
    // <Status/>
    // <Query/>
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: '0px',
        width: '100%',
      }}>
              <h1 style={{color:"#498b30"}}>Dashboard</h1>
              <h2 style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginLeft: "10px",
               color:"#498b30"
              }}>Latest Queries</h2>
              <Grid container spacing={2} style={{
                paddingRight: '30px',
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                textAlign: 'start',
              }}>
                <Grid item xs={12} sm={3}>
                    <EventCard 
                    status="Pending"
                    val="23"
                    icon={<PendingActionsIcon/>}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <EventCard
                    status="Resolved"
                    val="32"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <EventCard
                    status="Rejected"
                    val="25"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <EventCard
                    status="Hold"
                    val="5"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{
                paddingRight: '30px',
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                textAlign: 'start',
              }}>
                <Grid item xs={12} sm={6}>

                  <Card>
                    <CardContent>
                      <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                      }}>
                        Grievance Distribution
                      </Typography>
                      <div
                        style={{
                          height: '500px', 
                          overflowY: 'auto',
                        }}
                      >
                      <DoughnutChart />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>

                  <Card>
                    <CardContent>
                      <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                      }}>
                      Department Distribution
                      </Typography>
                      <div
                        style={{
                          height: '500px', 
                          overflowY: 'auto',
                        }}
                      >
                        <DoughnutChart/>
                      
                      </div>

                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{
                paddingRight: '30px',
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                textAlign: 'start',
              }}>
              <Grid item xs={12} sm={12}>
                <div
                    style={{
                      height: '500px', 
                      overflowY: 'auto',
                    }}
                  >
                  <Card>
                    <CardContent>
                      <Typography variant="h5" sx={{
                        fontWeight: 'bold',
                      }}>
                        Language Distribution
                      </Typography>
                      <div
                        style={{
                          height: '400px', 
                          overflowY: 'auto',
                        }}
                      >
                        <BarChart
                            style={{
                                width: '100%',
                            }}
                        />
                      </div>
                      
                    </CardContent>
                  </Card>
                  </div>
              </Grid> 
            </Grid>
    </div>
  )
}

export default Home


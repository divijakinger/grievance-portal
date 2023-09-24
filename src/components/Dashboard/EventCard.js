import React from 'react';
import { Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const EventCard = ({ status, val }) => {
  let iconToRender;

  switch (status) {
    case 'Pending':
      iconToRender = <TimelapseIcon fontSize='large' style={{color:"#05A0FC" ,paddingtop: '10px', }} />;
      break;
    case 'Resolved':
      iconToRender = <CheckCircleIcon fontSize='large' style={{color:"#34B53A" ,paddingtop: '10px', }}/>;
      break;
    case 'Hold':
      iconToRender = <PauseCircleOutlineIcon fontSize='large' style={{color:"#4238F2" ,paddingtop: '10px', }}/>;
      break;
    case 'Rejected':
      iconToRender = <CancelIcon fontSize='large' style={{color:"#F55F56" ,paddingtop: '10px', }}/>;
      break;
    default:
      iconToRender = <ApartmentIcon/>; // Render nothing if status doesn't match any of the cases
  }
  return (
    <Card sx={{ padding: '1rem', width: 200, height: 100, backgroundColor: '#fff', boxShadow: '0', margin: '5px', borderRadius: '20px', fontColor: "#498b30" }}>
      <CardContent style={{
        margin: '0',
        paddingTop: '0',
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'left',
        fontFamily: 'Martian Mono',
      }}>
        <Grid container spacing={2} style={{
          // paddingRight: '30px',
          // marginTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          textAlign: 'start',
        }}>
          <Grid item xs={12} sm={3} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '30px',
          }}>
            {iconToRender}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" style={{
              fontSize: '1.5rem',
              paddingBottom: '10px',
              fontWeight: '1rem',
              fontFamily: 'monospace'
            }}>
              <h2 style={{ fontSize: "1.5rem", color: "#498b30", fontWeight: "bold" }}>{status}</h2>
              <p style={{fontSize:"1.5rem",fontWeight:"bold", display: 'inline', paddingBottom: 10 }}>{val}</p>
            </Typography>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventCard;

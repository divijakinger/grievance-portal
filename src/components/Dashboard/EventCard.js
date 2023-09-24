import React from 'react';
import { Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const EventCard = ({ status, val }) => {
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
          <Grid item xs={12} sm={3}>
            <PendingActionsIcon fontSize='large' style={{color:"#498b30" ,paddingtop: '10px', }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" style={{
              fontSize: '1.2rem',
              paddingBottom: '10px',
              fontWeight: '1rem',
              fontFamily: 'monospace'
            }}>
              <h2 style={{ fontSize: "1.2rem", color: "#498b30", fontWeight: "bold" }}>{status}</h2>
              <p style={{fontSize:"1.5rem",fontWeight:"bold", display: 'inline', paddingBottom: 10 }}>{val}</p>
            </Typography>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventCard;

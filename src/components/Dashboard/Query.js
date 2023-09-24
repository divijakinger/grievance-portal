import React from 'react'
import {Typography,CardContent,Card,Grid,TextField, Link} from "@mui/material"
import SideBar from './SideBar'
function Query() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar 
          />
        </Grid>
        <Grid item xs={9}>

        <div style={{
        margin: '0px',
        width: '100%',
      }}>
        <Grid container spacing={2} style={{
        paddingRight: '20px',
        paddingTop:0,
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        backgroundColor:'#d9d9d9',
        borderRadius:'15px',
        marginRight:'20px',

      }}>
        <Grid item xs={12} sm={7} style={{paddingTop:5,}}>
            <h2>Title Of Query</h2>
        </Grid>
        <Grid item xs={12} sm={5} style={{paddingTop:5,}}>
            <h2>Grievance No:FSH131</h2>
        </Grid>
      </Grid>
      <hr />
        <Grid container spacing={2} style={{
        paddingRight: '30px',
        paddingTop:0,
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        borderRadius:'15px'
      }}>
        <Grid item xs={12} sm={7} style={{paddingTop:5,}}>
            <h3>Department of Finance</h3>
        </Grid>
        <Grid item xs={12} sm={5} style={{paddingTop:5,}}>
            <h3>Language:Bengali</h3>
        </Grid>
      </Grid>
      <hr />
        <Grid container spacing={2} style={{
        paddingRight: '30px',
        paddingTop:0,
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        borderRadius:'15px'
      }}>
        <Grid item xs={12} sm={7} style={{paddingTop:0,}}>
            <h3>Name : Shubh Joshi</h3>
        </Grid>
      </Grid>
      <hr />
      <div container spacing={0} style={{
        paddingRight: '30px',
        paddingTop:0,
        // marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        borderRadius:'15px'
      }}>
        <h3>Contact : +91-87792-16164</h3>
      </div>
      <hr />
      <div container spacing={0} style={{
        paddingRight: '30px',
        paddingTop:0,
        // marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        borderRadius:'15px'
      }}>
        <h3>Address:Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
      </div>
      <hr />
      <div container spacing={0} style={{
        paddingRight: '30px',
        paddingTop:0,
        marginTop: '15px',
        marginRight:'20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        backgroundColor:'#fff',
        borderRadius:'15px',
        paddingLeft:'30px',
      }} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus cumque qui autem est consectetur tempore modi earum iste repellat, nulla voluptatibus rem eaque reprehenderit. Vitae possimus cum maiores in, unde sint minus ipsa! Dolorem tempora a dolore, nostrum magnam architecto nam ipsam odit unde deserunt eum accusantium exercitationem cumque modi fugiat blanditiis autem corrupti tenetur maiores odio impedit! Saepe temporibus atque esse necessitatibus, impedit delectus odit? Exercitationem excepturi sequi, vel voluptatum veniam explicabo, illo enim nemo tenetur numquam quod suscipit asperiores. Iure minima numquam, id fuga laborum ipsam quaerat ducimus nostrum in maiores deserunt doloremque ad. Incidunt, minus ex?</p>
      </div>
    </div>
        </Grid>
      </Grid>
     
    </div>

  )
}

export default Query
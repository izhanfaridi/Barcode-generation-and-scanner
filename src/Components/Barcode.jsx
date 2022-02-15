import React, { useEffect, useState } from 'react';
import { useBarcode } from 'react-barcodes';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import uokLogo from '../imgs/UOK.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles=makeStyles({
  box:{
    width:"30%",
    marginTop:"5px",
    marginLeft:"10px"
  },

  img:{
    width:"40vh",
    height:"20vh",
  },

  heading:{
    marginTop:"-1vh"
  },
  paper:{
    width:"45%",
    marginLeft:"30px"
  },

  content:{
    marginTop:"-15px"
  }
})

const Barcode = () => {

  const StudentRecord = useSelector(state => state.Student.studentData)
  const classes = useStyles();

      const  {inputRef}  = useBarcode({
        value: StudentRecord,
        options: {
          text: StudentRecord.name ? StudentRecord.name : " ",
          background: '#1B7D00',
        }
      });

  return (
    <>
      {/* <Box className={classes.box} sx={{ flexGrow: 1 }}> */}
      <Paper elevation={6} className={classes.paper}>
        <Grid container spacing={0} direction="column" justifyContent="center" alignItems="stretch">
          <Grid item xs={12}>
            <Item elevation={0}>
              <img className={classes.img} src={uokLogo}></img>
              <h3 className={classes.heading}>Student Card</h3>
              <hr/>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item className={classes.content} elevation={0}>
              <h4>Name: {StudentRecord.name}</h4>
              <h4>Seat No: {StudentRecord.seatNo}</h4>
              <h4>Enrollment No: {StudentRecord.enroll}</h4>
              <h4>Group (CS/SE): {StudentRecord.group}</h4>
              <hr/>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0}><img ref={inputRef} /></Item>
          </Grid>
        </Grid>
      </Paper>  
      {/* </Box> */}
    </>
  );
}

export default Barcode
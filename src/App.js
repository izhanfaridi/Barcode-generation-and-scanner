import React from "react";
import GetData from "./Components/GetData";
import Barcode from './Components/Barcode'
import Scanner from './Components/Scanner'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
  appBar:{
    backgroundColor: 'green',
    height:40,
  },

  logo:{
    textAlign:'center',
  },

  boxFlex:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
  },

  inner:{
    marginright:"10px"
  }
})

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <>
      <AppBar className={classes.appBar} position="static"> 
        <Container maxWidth="xl">
          <Typography
            className={classes.logo}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Barcode Generator
          </Typography>
        </Container>
      </AppBar>


      {value === 0 ?
        <>
          <Box className={classes.boxFlex}>
            <GetData/>
            <Barcode />
          </Box>
        </>
        :
        <>
          <Scanner />
        </>
      }
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Generate Info" icon={<AddBoxIcon />} />
          <BottomNavigationAction label="Scan Card" icon={<QrCodeScannerIcon />} />
        </BottomNavigation>
      </Paper>

    </>
  );
}

export default App;
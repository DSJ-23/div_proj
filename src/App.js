import './App.css';
import React from "react";
import Boiler from './components/Boiler';
import useStyles from './components/styles/placeholder';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item container>
          <Header></Header>
        </Grid>
        <Grid item container>
          <Grid item xs={2}> </Grid>

          <Grid item xs={12} sm={8}> 
            <Content></Content>
          </Grid>


          <Grid item xs={2}></Grid>
        </Grid>  
      </Grid>
    </React.Fragment>
  );
}

export default App;


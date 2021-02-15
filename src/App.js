import './App.css';
import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    textAlign: 'center',
    color: 'red'
  }
})

function App() {

  const classes = useStyles();

  let button_bool = false;

  return (
    <React.Fragment>
      <Typography className={classes.helloThereStyle} variant="h1" color="primary">Hello there</Typography>
      <div className="center_flex">
        <Button className="button_center" disabled={button_bool} fullWidth={false} color="secondary" variant="outlined">This is a button</Button>
      </div>
    </React.Fragment>
  );
}

export default App;


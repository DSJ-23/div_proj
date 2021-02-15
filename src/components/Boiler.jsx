import React from 'react';
import { Button, Typography } from "@material-ui/core";
import useStyles from './styles/placeholder';

const Boiler = () => {

    const classes = useStyles();

    let button_bool = false;

    let red = true;

    let typ_class = () => {
        return red ? classes.helloThereStyle : classes.second
    }


    return (
        <React.Fragment>
            <Typography className={typ_class()} variant="h1" color="primary">Hello there</Typography>
            <div className={classes.center_flex}>
                <Button className="button_center" disabled={button_bool} fullWidth={false} color="secondary" variant="outlined">This is a button</Button>
            </div>
        </React.Fragment>
    )
}

export default Boiler;
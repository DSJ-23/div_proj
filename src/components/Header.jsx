import React, { Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import useStyles from './styles/placeholder';
import { Grid } from '@material-ui/core';

const Header = () => {

    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static">
                <Grid item container>
                    <Grid item xs={11}> <Typography className="margin_typography"> Daniel Silva</Typography></Grid>
                    <Grid item xs={1}> 
                        <div className="center_flex box snowflake">
                            <AcUnitRoundedIcon ></AcUnitRoundedIcon> 
                        </div>
                    </Grid>
                </Grid>    
            </AppBar>
        </Fragment>
    )
}

export default Header;
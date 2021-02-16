import React, { Fragment } from 'react';
import CoffeCard from './CoffeCard';
import { Grid } from '@material-ui/core';
import list from './Constants';

const Content = () => {

    const getCard = (coffeobj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard {...coffeobj}></CoffeCard>
            </Grid>
        )
    };


    return (
        <Fragment>
            <Grid container spacing={2}>
                {list.map(obj => (getCard(obj)))}
            </Grid>
        </Fragment>
    )
}

export default Content;


import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/CoffeStyles';
import CardHeader from "@material-ui/core/CardHeader";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const CoffeCard = ({ avatarUrl, title, subtitle, description, imageUrl }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Card className={classes.root}>

                <CardHeader
                    avatar={<Avatar src={avatarUrl} aria-label="recipe" className={classes.avatar}></Avatar>}
                    action={<IconButton aria-label="settings"><ShareIcon></ShareIcon></IconButton>}
                    title={title} subheader={subtitle}/>

                <CardMedia style={{ height: "150px" }} image={imageUrl} />

                <CardContent>
                    <Typography variant="body2" component="p"> {description} </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">BUY NOW</Button>
                    <Button size="small">OFFER</Button>
                </CardActions>
            </Card>
        </Fragment>
    )
};

export default CoffeCard;
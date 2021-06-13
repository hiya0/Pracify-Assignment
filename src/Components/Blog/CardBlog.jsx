import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      maxWidth: "20em",
      textAlign: "center",
      borderRadius: 20
    },
    media: {
      height: "20em",
    },
    head: {
        color : "#00dbd0",
        fontWeight: "400",
        fontSize: "20px"
    },
    text: {
        lineHeight: "1.5em",
        maxWidth: "90%"
    },
    link: {
        backgroundColor: "transparent",
        padding: '1em 7em',
        '&:hover': {
            textDecoration: 'underline #374b5c',
            textUnderlinePosition: 'under'
        }
    }
  });

export const CardBlog = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={props.imgSrc}
            />
            <CardContent>
            <p className={classes.head}>{props.head}</p>
            <p className={classes.text}>{props.content}</p>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <a className={classes.link}>Read More</a>
        </CardActions>
    </Card>
    )
}

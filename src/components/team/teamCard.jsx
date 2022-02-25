import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import background from "assets/blobs.svg";
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import { colors } from '../../theme';


const useStyles = makeStyles((theme) => ({
    root: {
        // flex: 1,
        // display: 'flex',
        // [theme.breakpoints.up('sm')]: {
        //     flexDirection: 'column',
        minHeight: '300px',
        // }
    },
    cardActions: {


    },

    background: {
        backgroundImage: `url(${background})`,
    },

    media: {
        height: "160px",
    },
    // content: {
    //     height: "300px",
    //     alignContent: 'top',
    //     alignItems: 'top',
    // },
}));

export default function TeamCard(props) {
    const classes = useStyles();
    const data = props.item;

    return (

        <Card className={`${classes.root} ${classes.background}`}>
            <CardActionArea className={`${classes.content}`}>
                <CardMedia
                    className={`${classes.media}`}
                    image={data.photo}
                    title={data.name}
                />

                <CardContent >
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.name}: {data.position}<br />

                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardActions}>
                <a href={'https://twitter.com/' + data.twitter} target='_twitter' > <TwitterIcon className="twitterIcon" fontSize='large' /></a>
                <a href={'https://t.me/' + data.telegram} target='_telegram' > <TelegramIcon color='secondary' fontSize='large' /></a>
                <a href={'https://www.reddit.com/r/' + data.reddit} target='_reddit' > <RedditIcon color='error' fontSize='large' /></a>
            </CardActions>

        </Card>
    );
}

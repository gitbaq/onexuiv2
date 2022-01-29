import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,

} from '@material-ui/core';
import { colors } from '../../theme'
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';



const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '15px',
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    card: {
        flex: '1',
        height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        cursor: 'pointer',
        borderRadius: '0px',
        border: '1px solid primary',
        borderColor: colors.harmonyGradient,
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            height: '50px',
            minWidth: '20%',
            minHeight: '50px',
        }
    },

    title: {
        padding: '24px 0 12px 0',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px'
        }
    },
    subTitle: {
        padding: '0 0 12px 0',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px'
        }
    },
    icon: {
        fontSize: '60px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '100px',
        }
    },
    link: {
        textDecoration: 'none'
    }
}));

export default function Socials() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={`${classes.card}`} >
                Let's start a conversation:
                <a href='https://twitter.com/OneXToken' target='_twitter' > <TwitterIcon className="twitterIcon" fontSize='large' /></a>
                <a href='https://t.me/OnexMainTG' target='_telegram' > <TelegramIcon color='secondary' fontSize='large' /></a>
                <a href='https://www.reddit.com/r/OneXTokenHRC/' target='_reddit' > <RedditIcon color='error' fontSize='large' /></a>




            </Card>
        </div>
    )
}

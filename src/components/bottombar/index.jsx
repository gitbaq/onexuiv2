import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { colors } from '../../theme';
import onexcoin from '../../assets/OneXCoin.svg';
import Socials from '../socials';
import background from "./blobs.svg";





const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '15px',
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '200px',
        // backgroundColor: 'blue',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    columns: {
        // marginTop: '15px',
        flex: 1,
        display: 'flex',
        width: '100%',
        // justifyContent: 'flex-end',
        // alignItems: 'right',
        flexDirection: 'column',
        // backgroundColor: 'green',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    rows: {
        flex: 1,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },

    link: {
        textDecoration: 'none',
        padding: '0 0 5px 0',
        color: colors.black,
        '&:hover': {
            textDecoration: 'underline',
            color: colors.twitter
        },
    },
    background: {
        backgroundImage: `url(${background})`,
    }
}));

export default function BottomBar() {
    const classes = useStyles();

    return (

        <Grid container className={`${classes.root} ${classes.background}`} spacing={0} style={{
            background: 'linear-gradientx(30deg, rgba(69, 214, 202,0.1)20%, rgba(40,185,216, 0.1) 60%,  rgba(86,234,190, 0.1)100%)',
            marginTop: '1px',
            minHeight: '200px',
        }}>
            <Grid item xs={12} sm={12} className={`${classes.columns}`}>
                <Box sm={12}>
                    <Socials />
                </Box>
                <Divider variant="middle" />
            </Grid>
            <Grid container className={`${classes.rows}`} spacing={1} >
                <Grid item xs={12} sm={3} >
                    <Box className={`${classes.columns}`}>
                        {/* <img alt='OneX logo' src={onexcoin} className="logo" style={{ width: '200px' }} /> */}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Box className={`${classes.columns}`}>
                        <img alt='OneX logo' src={onexcoin} className="logo" style={{ width: '200px' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Divider orientation="vertical" />
                    <Box className={`${classes.columns}`}>
                        <a href='/home' target='_twitter' className={classes.link}>Home</a>
                        <a href='/calculator' target='_twitter' className={classes.link}>Calculator</a>
                        <a href='/whitepaper' target='_twitter' className={classes.link}>Whitepaper</a>
                        <a href='swap' target='_twitter' className={classes.link}>Swap BabyHarmony to OneX</a>
                        <a href='/faq' target='_twitter' className={classes.link}>Frequently Asked Questions</a>
                        <a href='https://twitter.com/OneXToken' target='_twitter' className={classes.link}>Team</a>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
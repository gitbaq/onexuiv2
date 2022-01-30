import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PageHeader from "../pageHeader";
// import { palette } from '@material-ui/system';
// import { positions } from '@material-ui/system';




const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    card: {
        flex: '1',
        height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '5px',
        // border: '1px solid',
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            padding: '25px',

            // height: '100vh',
            // minWidth: '20%',
            // minHeight: '50vh',
        }
    },


    title: {
        padding: '24px 0 12px 0',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px',
            padding: '20px'

        }
    },
    subTitle: {
        padding: '0 0 12px 0',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px',
            padding: '20px'

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

export default function Whitepaper() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <PageHeader title="OneX Whitepaper" subtitle="OneX: Amplified rewards in $ONE! " />
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} justifyContent="center">
                    <Box sm="8">
                        <Typography className={`${classes.title} title`}>
                            Token: OneX<br />
                            Chain: Harmony<br />
                            Launch Date: TBD<br />
                            Launch Time: TBD<br />
                            Contract Address: TBD<br />
                            Premise: Rewards in Harmony $ONE<br />
                        </Typography>

                        <Typography className={`${classes.subTitle} subtitle`}>

                            Concept<br />

                            The OneX team is proud to present a new concept in crypto. How do you create sustainable and constantly-growing rewards?

                            <br />PAMP - A unique way to manage assets and increase rewards for holders

                            <br />
                            <br />Harmony Grant
                            <br />OneX has been awarded a $50K USD grant from Harmony Protocol.  This grant will be used to establish initial liquidity and other expenses involved with launching and maintaining the project.  This also gives the team a direct line of communication to the Harmony team for assistance with technical issues to ensure a successful launch and bright future for OneX.
                            <br />
                            <br />Tokenomics

                            <br />10%- Total Taxes on all transactions


                            <br />
                            <br />Anti-Whale &amp; Bot features

                            <br />Max wallet- 2%
                            <br />Max transaction- 0.5% (could be lower during launch)
                            <br />Cool down period- 60 minutes
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

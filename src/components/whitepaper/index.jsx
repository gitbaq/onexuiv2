import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
} from '@material-ui/core';
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
    content: {
        [theme.breakpoints.up('sm')]: {
            padding: '15px'

        }

    },


    title: {
        fontSize: '16px',
        fontWeight: "bold",
        padding: '12px 0 6px 0',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px',
            padding: '15px'

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
    heading: {
        fontSize: '18px',
        fontWeight: "bold",
        [theme.breakpoints.up('sm')]: {

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
            <PageHeader title="OneX Whitepaper (Full Version of Whitepaper will be released at launch)" subtitle="OneX: Amplified rewards in $ONE! " />
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} justifyContent="center" className={classes.content}>
                    <Box sm="8">
                        <Typography className={`${classes.title} title`}>
                            Token: OneX<br />
                            Chain: Harmony<br />
                            Launch Date: TBD<br />
                            Launch Time: TBD<br />
                            Contract Address: TBD<br />
                            Premise: Rewards in Harmony $ONE<br />
                        </Typography>

                        <Typography className={`${classes.subTitle} subTitle`}>

                            <div className={classes.heading}>Concept</div>

                            The OneX team is proud to present a new concept in crypto. How do you create sustainable and constantly-growing rewards?

                            <br />PAMP - A unique way to manage assets and increase rewards for holders

                            <br /><br />
                            <div className={classes.heading}>Harmony Grant</div>
                            OneX has been awarded a $50K USD grant from Harmony Protocol.  This grant will be used to establish initial liquidity and other expenses involved with launching and maintaining the project.  This also gives the team a direct line of communication to the Harmony team for assistance with technical issues to ensure a successful launch and bright future for OneX.
                            <br />
                            <br /><div className={classes.heading}>Tokenomics</div>

                            10%- Total Taxes on all transactions
                            <br />Invested to maximize rewards for holders


                            <br />
                            <br /><div className={classes.heading}>Anti-Whale &amp; Bot features</div>

                            Max wallet- 2%
                            <br />Max transaction- 0.5% (could be lower during launch)
                            <br />Cool down period- 60 minutes
                            <br />
                            <br /><div className={classes.heading}>Method of Rewards Generation</div>

                            A portion of collected taxes is invested by OneX Investment Team for optimal yield.
                            Earnings will be harvested periodically. This gives the pool more time to generate higher APY by compounding throughout the month, thus amplifying rewards.

                            <br />
                            <br /><div className={classes.heading}>Core Beliefs</div>

                            The OneX team consists of community members from the previous BabyHarmony (BSC) project that took over when the founding team departed with a desire to save their investment and build something bigger and better. Every aspect of OneX has been constructed with what we, as investors, want in a project to develop wealth through long-term holdings.  OneX is effectively a wish list of the best features of projects we have seen compiled into one.  By building OneX from the perspective of an investor, not as dev's looking to make money off a launch then move on to another project, we believe the project will be successful and beneficial to holders in the long-term.  With our innovative method of rewards generation, the longer we hold, the more we gain.
                            <br />
                            <br /><div className={classes.heading}>Community</div>

                            As the team was founded by members of the BabyHarmony community, we place a strong emphasis on community involvement.  Important decisions are decided by the community by votes, and the team carries out the wishes of the community.  A true DAO voting system is planned at some point in the future. The team is committed to maintaining active, transparent and honest communication with the community.
                            <br />
                            <br /><div className={classes.heading}>Security</div>


                            The OneX team is internally doxxed and may consider other options in the future.  A multisig Gnosis safe wallet with a majority consensus is used for interaction with the Harmony team for distribution of the grant funds. Investment pools will be intensively analyzed by the team before a decision is made to stake in it.  The highest level of care possible will be taken by the team to ensure the safety of the pooled assets.

                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

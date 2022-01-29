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

export default function Whitepaper() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <PageHeader title="OneX Whitepaper" subtitle="OneX: Amplified rewards in $ONE! " />

            <Card className={`${classes.card}`}>

                {/* <AttachMoneyIcon className={`${classes.icon} icon`} />
                <Typography variant={'h3'} className={`${classes.title} title`}>OneX</Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>OneX: Amplify your $ONE!</Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>By holding OneX, you own a share of a staking pool, constantly working and silently growing in the background to generate financial freedom through sustainable passive income.
                </Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>Anti-Whale & Bot features

                    Max wallet- 2%
                    Max transaction- 0.5% (0.25% at launch until stable)
                    Cool down period- 60 minutes
                </Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>Earnings will be harvested monthly.  This gives the pool more time to generate higher APY by compounding throughout the month, thus amplifying rewards. </Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>OneX has been constructed with what we, as investors, want in a project to develop wealth through long-term holdings.  OneX is effectively a wish list of the best features of projects we have seen compiled into one</Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>Token: OneX
                    Chain: Harmony
                    Launch Date: TBD
                    Launch Time: TBD
                    Contract Address: TBD
                    Premise: Rewards in Harmony $ONE
                </Typography> */}
                <Grid container spacing={1} >
                    {/* <Grid item xs={12} sm={4} >
                        <Box bgcolor="primary.main" color="primary.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <Box bgcolor="success.main" color="success.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>

                </Grid> 
                <Grid container spacing={1}>
                     <Grid item xs={12} sm={4} >
                        <Box bgcolor="primary.main" color="primary.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box bgcolor="success.main" color="success.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid> */}
                    <Grid item xs={12} sm={12} justifyContent="center">
                        <Box sm="8">
                            <Typography className={`${classes.title} title`}>

                                Token: OneX
                                Chain: Harmony
                                Launch Date: TBD
                                Launch Time: TBD
                                Contract Address: TBD
                                Premise: Rewards in Harmony $ONE
                            </Typography>

                            <Typography className={`${classes.subTitle} subtitle`}>

                                Concept

                                The OneX team is proud to present a new concept in crypto. How do you create sustainable and constantly-growing rewards? You PAMP it!  By holding OneX, you own a share of a staking pool, constantly working and silently growing in the background to generate financial freedom through sustainable passive income.

                                PAMP = Pooled Asset Managed Portfolio


                                Harmony Grant
                                OneX has been awarded a $50K USD grant from Harmony Protocol.  This grant will be used to establish initial liquidity and other expenses involved with launching and maintaining the project.  This also gives the team a direct line of communication to the Harmony team for assistance with technical issues to ensure a successful launch and bright future for OneX.

                                Tokenomics

                                10%- Total Taxes on all transactions
                                8%- Investment fund
                                1%- liquidity
                                1%- Expenses &amp; Marketing


                                Anti-Whale &amp; Bot features

                                Max wallet- 2%
                                Max transaction- 0.5% (0.25% at launch until stable)
                                Cool down period- 60 minutes

                                Method of Rewards Generation

                                8% of each transaction is placed into a staking pool that is managed by the OneX Investment Manager for optimal yield.  Only well known, reliable, and respected pools with a proven history of security and results will be considered.  The Investment Manager will place assets into one or more pools, monitor the performance and relocate funds to other pools based upon performance to achieve the best possible yield.

                                Earnings will be harvested monthly.  This gives the pool more time to generate higher APY by compounding throughout the month, thus amplifying rewards.

                                At harvest, 1/3 of the earnings will be reinvested into the pool and 2/3 converted to $ONE and distributed to holders proportionally to OneX holdings. By reinvesting 1/3, we are able to generate growth of the fund by this action alone, leading to sustainable, constantly-growing rewards completely unaffected by volume!  Of course, the 8% transaction tax designated to the investment fund will also be added, leading to faster growth of the fund during periods of high volume, such as we expect at launch.  These additions then compound indefinitely through reinvestment for as long as OneX exists!

                                This model also brings an intrinsic value to the token that the open market should not allow it to fall below, as ownership of OneX is also ownership of a share of the pool proportional to your holdings.  Imagine holding a 2% (max wallet) share of a fund that could potentially be in the millions of dollars in the future, benefiting from the constantly-growing earnings.

                                Core Beliefs

                                The OneX team consists of community members from the previous BabyHarmony (BSC) project that took over when the founding team departed with a desire to save their investment and build something bigger and better. Every aspect of OneX has been constructed with what we, as investors, want in a project to develop wealth through long-term holdings.  OneX is effectively a wish list of the best features of projects we have seen compiled into one.  By building OneX from the perspective of an investor, not as opportunists looking to make money off a launch and move on to another project, we believe the project will be successful and beneficial to holders in the long-term.  With our innovative method of rewards generation, the longer we hold, the more we gain.

                                Community

                                As the team was founded by members of the BabyHarmony community, we place a strong emphasis on community involvement.  Important decisions are decided by the community by votes, and the team carries out the wishes of the community.  A true DAO voting system is planned at some point in the future. The team is committed to maintaining active, transparent and honest communication with the community.

                                Security


                                The OneX team is internally doxxed and may consider other options in the future.  A multisig Gnosis safe wallet with a majority consensus is used for interaction with the Harmony team for distribution of the grant funds. Investment pools will be intensively analyzed by the team before a decision is made to stake in it.  The highest level of care possible will be taken by the team to ensure the safety of the pooled assets.
                                OneX: Amplify your $ONE!


                            </Typography>
                        </Box>
                    </Grid>

                </Grid>

            </Card>

        </div>
    )
}

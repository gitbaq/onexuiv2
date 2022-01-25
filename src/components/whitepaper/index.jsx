import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
} from '@material-ui/core';
import { colors } from '../../theme'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { palette } from '@material-ui/system';
import { positions } from '@material-ui/system';




const useStyles = makeStyles(theme => ({
    root: {
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
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
            minWidth: '20%',
            minHeight: '50vh',
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

            <Card className={`${classes.card}`} bgcolor="error.main">

                <AttachMoneyIcon className={`${classes.icon} icon`} />
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
                </Typography>
                <Grid container spacing={1} xs={12} sm={8}>
                    <Grid item xs={12} sm={4} >
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
                <Grid container spacing={1} sm="8">
                    <Grid item xs={12} sm={4} >
                        <Box bgcolor="primary.main" color="primary.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box bgcolor="success.main" color="success.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box bgcolor="success.main" color="success.contrastText"  >
                            <Typography variant={'h6'} className={`${classes.subTitle} title`}>Team</Typography>
                        </Box>
                    </Grid>

                </Grid>

            </Card>

        </div>
    )
}

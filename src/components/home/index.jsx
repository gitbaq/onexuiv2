import React/*, { useState, useEffect }*/ from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Typography } from '@material-ui/core';
import { colors } from '../../theme'

// import Store from "../../stores";



// import {
//     GET_BALANCES_PERPETUAL_RETURNED
// } from '../../constants'
import Carousel from '../carousel';

// const store = Store.store
// const emitter = Store.emitter



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
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        minHeight: '100vh',
        paddingBottom: '10px',


        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            heightx: '100vh',
            minWidth: '20%',

        }
    },
    rowCard: {
        flexDirection: 'row',
    },

    gradient: {
        backgroundColor: colors.grad,

    },
    content: {
        justifyContent: 'space-around',
        flex: '1',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        paddingBottom: '10px',


        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            minWidth: '20%',

        }

    }


}));


export default function Home() {
    const classes = useStyles();
    // const [token, setToken] = useState(0)
    // const [tokenBalance, setTokenBalance] = useState(0)

    // useEffect(() => {
    //     const getBalancesReturned = () => {
    //         const tokens = store.getStore('tokens')
    //         setToken(tokens[0])
    //         setTokenBalance((tokens && tokens.length >= 1) ? tokens[0].balance : 0)
    //     }

    //     emitter.on(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);

    //     return () => {
    //         emitter.removeListener(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);
    //     }
    // }, [])


    return (

        <div className={classes.root}>

            <Card className={`${classes.card} ${classes.gradient}`}>
                <Carousel></Carousel>
                <div className={`${classes.content} `}>

                    <Typography variant="h5" className={`${classes.title} title`}>HOLD $OneX and earn in $ONE</Typography>
                    <Typography variant="h3" className={`${classes.title} title`}>Revolutionary Auto-staking Rewards</Typography>
                    <Typography variant="h2" className={`${classes.title} title`}>OneX - Amplified Rewards on Harmony ONE</Typography>

                    <div className={`${classes.rowCard} `}>
                        <Button variant="outlined" color="secondary" href="https://viperswap.one/#/swap" target="_viperswap">
                            Buy on Viperswap
                        </Button>
                        <Button variant="outlined" color="secondary" href="https://www.dextools.io/app/bsc/pair-explorer/" target="_dextools">
                            Chart on Dextools
                        </Button>
                    </div>
                </div>

                <div>
                </div>
            </Card>
        </div>

    );
}

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Typography } from '@material-ui/core';
import Store from "../../stores";
// import { colors } from '../../theme'

// import ColoredLoader from '../loader/coloredLoader'
// import Snackbar from '../snackbar'



import {
    GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'
import Carousel from '../carousel';

const store = Store.store
const emitter = Store.emitter



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
        // height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
            minWidth: '20%',
            // minHeight: '50vh',
        }
    },


}));


export default function Home() {
    const classes = useStyles();
    // const [snackbarMessage, setSnackbarMessage] = useState(null)
    // const [snackbarType, setSnackbarType] = useState(null)
    // const [loading, setLoading] = useState(false)

    // const renderSnackbar = () => {
    //     return <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
    // }

    const [token, setToken] = useState(0)
    const [tokenBalance, setTokenBalance] = useState(0)

    useEffect(() => {
        const getBalancesReturned = () => {
            const tokens = store.getStore('tokens')
            setToken(tokens[0])
            setTokenBalance((tokens && tokens.length >= 1) ? tokens[0].balance : 0)
        }

        emitter.on(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);

        return () => {
            emitter.removeListener(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);
        }
    }, [])


    return (

        <div className={classes.root}>

            <Card className={`${classes.card}`} >
                <Carousel></Carousel>
                <Typography variant={'h1'} className={`${classes.title} title`}>OneX TOKEN</Typography>
                <Typography variant="h4">REVOLUTIONARY AUTO-STAKING REWARDS</Typography>
                <Typography variant="h6">HOLD $OneX AND EARN PASSIVE INCOME PAID IN $ONE</Typography>
                <Typography variant="h4" align="center" className={`${classes.title} title`}>Current Holdings : {tokenBalance}</Typography>

                <Typography variant="h4" align="center" className={`${classes.title} title`}>Contract : {token.address}</Typography>
                <div>
                    <Button variant="outlined" color="secondary" href="https://viperswap.one/#/swap" target="_viperswap">
                        Buy on Viperswap
                    </Button>
                    <Button variant="outlined" color="secondary" href="https://www.dextools.io/app/bsc/pair-explorer/" target="_dextools">
                        Chart on Dextools
                    </Button>
                </div>
            </Card>
            {/* {loading && <ColoredLoader />}
            {snackbarMessage && renderSnackbar()} */}
        </div>

    );
}

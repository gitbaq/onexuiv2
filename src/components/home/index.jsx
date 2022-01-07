import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import Store from "../../stores";



import {
    GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'

const store = Store.store
const emitter = Store.emitter

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        minWidth: '100vw',
        minHeight: 'inherit',
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(16),
            // height: theme.spacing(16),
        },
        // background: '#ffff00'
    }
}));

export default function Home() {
    const classes = useStyles();
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
        // <div  >
        <Paper elevation={2} className={classes.root}>
            <Typography variant="h1" color="primary">OneX TOKEN</Typography>
            <Typography variant="h4">REVOLUTIONARY AUTO-STAKING REWARDS</Typography>
            <Typography variant="h6">HOLD $OneX AND EARN PASSIVE INCOME PAID IN $ONE</Typography>
            <Typography variant="h4" align="center" color="secondary">Contract : {token.address}</Typography>

            <Button variant="contained" color="primary" href="https://viperswap.one/#/swap" target="_viperswap">
                Buy on Viperswap
            </Button>
            <Button variant="contained" color="primary" href="https://www.dextools.io/app/bsc/pair-explorer/" target="_dextools">
                Chart on Dextools
            </Button>


        </Paper>

        // </div>
    );
}

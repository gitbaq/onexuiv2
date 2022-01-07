import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import {
    GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'

import Store from "../../stores";
const store = Store.store
const emitter = Store.emitter

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        minWidth: '100vw',
        // minHeight: '100vh',
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(16),
            // height: theme.spacing(16),
        },
    },
}));



export default function Calculator() {
    const classes = useStyles();
    const [tokenBalance, setTokenBalance] = useState(0)
    const [token, setToken] = useState(0)

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
        <div className={classes.root} >
            <Paper elevation={2}>
                <Typography variant="h4">You Have {tokenBalance} {token.name}s</Typography>
            </Paper>
        </div>
    );
}

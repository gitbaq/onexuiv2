import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { colors } from '../../theme';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
    GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'
import PageHeader from '../pageHeader'

import Store from "../../stores";
const store = Store.store
const emitter = Store.emitter



const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    card: {
        flex: '1',
        height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        // transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            // height: '100vh',
            // minWidth: '20%',
            flexDirection: 'column',

            // minHeight: '90vh',
        }
    },
    paper: {
        height: 300,
        width: 300,
        background: colors.white,
        borderRadius: 25,
        padding: 10,
    },


}));



export default function Calculator() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const [tokenBalance, setTokenBalance] = useState(0)
    const [token, setToken] = useState(0)
    const [assetValue, setAssetsValue] = useState(0);




    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const calc = (event) => {
        let myTokenBalance = tokenBalance == 0 || tokenBalance == null ? 1 : tokenBalance;
        setAssetsValue(myTokenBalance * 12);
    };


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
            <PageHeader title='Calculator' subtitle={"You Have " + tokenBalance + " " + token.name + " " + value} />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={5}>
                        <Grid item>
                            <Paper className={classes.paper} >

                                <TextField
                                    id="currPrice"
                                    label="Current Price"
                                    placeholder="Enter Current Price"
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} >
                                <TextField

                                    id="currHoldings"
                                    label="Current OneX Holdings"
                                    placeholder="Enter Current Holdings"
                                    variant="outlined"
                                    defaultValue={tokenBalance}
                                />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} >
                                <TextField

                                    id="result"
                                    label="Current Value"
                                    placeholder="Total Value will appear here"
                                    variant="outlined"
                                    value={assetValue}
                                />
                                <Button variant="outlined" color="secondary" onClick={calc}>Calculate</Button>

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>



        </div>
    );
}

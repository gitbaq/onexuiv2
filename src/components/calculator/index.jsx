import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Card,
    Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
    GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'

import Store from "../../stores";
import { colors } from '../../theme'
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
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
            minWidth: '20%',
            minHeight: '90vh',
        }
    },
    gradient: {
        backgroundColor: colors.white,
        '& .title': {
            color: colors.black,
        },
        '& .icon': {
            color: colors.white
        },
    },
    green: {
        backgroundColor: colors.white,
        '&:hover': {
            '& .title': {
                color: colors.white,
            },
            '& .icon': {
                color: colors.white
            }
        },
        '& .title': {
            color: colors.compoundGreen,
        },
        '& .icon': {
            color: colors.compoundGreen
        },
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



export default function Calculator() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [tokenBalance, setTokenBalance] = useState(0)
    const [token, setToken] = useState(0)
    const [assetValue, setAssetsValue] = useState(0);




    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const calc = (event) => {
        // tokenBalance = tokenBalance == 0 || tokenBalance == null ? 0 : tokenBalance;
        setAssetsValue(tokenBalance * 12);
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
            <Card className={`${classes.card} ${classes.gradient}`} >
                <Typography variant={'h3'} className={`${classes.title} title`}>You Have {tokenBalance} {token.name}s</Typography>
                {/* <Typography variant={'h6'} className={`${classes.subTitle} title`}>(Whitepaper    )</Typography> */}
                <form className={classes.root} noValidate autoComplete="off">


                    {/* <div> */}

                    <TextField
                        id="currPrice"
                        label="Current Price"
                        placeholder="Enter Current Price"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField

                        id="currHoldings"
                        label="Current OneX Holdings"
                        placeholder="Enter Current Holdings"
                        variant="outlined"
                        defaultValue={tokenBalance}
                    />


                    {/* </div>
                    <div> */}


                    <TextField

                        id="result"
                        label="Current Value"
                        placeholder="Total Value will appear here"
                        variant="outlined"
                        value={assetValue}
                    />
                    <Button variant="outlined" color="secondary" onClick={calc}>Calculate</Button>

                    {/* </div> */}
                </form>

            </Card>

        </div>
    );
}

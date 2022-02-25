import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import PageHeader from "../pageHeader";
import colors from "../../theme";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

import abi from "abi/onexv2.json";
import { getParsedCommandLineOfConfigFile } from "typescript";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        minHeight: 'calc(100vh - 400px)'
    },
    paper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        // height: "100%",
        // width: "100vh",
        padding: '10px'
    },
    control: {
        padding: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },



}));

const Web3 = require('web3');
const HMY_RPC_URL = 'https://api.s0.b.hmny.io';
const web3 = new Web3(HMY_RPC_URL);
const address = "0xFc1637C7217B698385f20e8DD6a19Be9Fd8d62E2";
const token = "0xaD6aEDb6d8DfA2BB8BB158a21a4d0fdaB535F5e8";
const expenseWallet = '0xBF0CA9449b9698e5593b585d591370F81a4a726f'; //gitbaq ONE Wallet
const liquidityWallet = '0xAD62fCcCc74283186f4572B8f8EE271B189565fA'; //gitbaq ONE Wallet
const stakingWallet = '0x1BfC2d760e6B75AA626f00177C96CfC84f353D7E'; //harmony2 ONE Wallet

const contract = new web3.eth.Contract(abi, token);

async function swap() {
    try {
        const response = await 'Hello';
        console.log('Response: ' + response);
    } catch (error) {
        console.log('Error');
    }
}

function getAddress(fullAddress) {
    return (fullAddress.slice(0, 4) + "..." + fullAddress.slice(-4));
}

async function fetchTokenBalance(balAddress) {
    try {
        await contract.methods.balanceOf(balAddress).call();

    }
    catch (error) {
        console.log("Error Fetching Token Balance: " + error);
    }

};


export default function TokenSwap() {
    const classes = useStyles();
    const fetchBalance = async (balAddress, key) => {
        const response = await web3.eth.getBalance(balAddress);
        switch (key) {
            case 'expense':
                setExpenseBalance(response / 1e18);
                break;
            case 'liquidity':
                setLiquidityBalance(response / 1e18);
                break;
            case 'staking':
                setStakingBalance(response / 1e18);
                break;
            default:
                setBalance(response / 1e18);

        }
    };

    const [balance, setBalance] = React.useState(0);
    const [expenseBalance, setExpenseBalance] = React.useState(0);
    const [liquidityBalance, setLiquidityBalance] = React.useState(0);
    const [stakingBalance, setStakingBalance] = React.useState(0);
    const [newData, setNewData] = useState('...');
    const [pair, setPair] = useState('...');


    fetchBalance(expenseWallet, 'expense');
    fetchBalance(liquidityWallet, 'liquidity');
    fetchBalance(address, 'balance');
    fetchBalance(stakingWallet, 'staking');

    const getData = (event) => {
        let error;
        try {
            console.log("Calling: Balance");
            contract.methods.balanceOf(address).call((err, result) => {
                error = err ? err : setNewData(result / 1e18);


            })
        } catch {
            console.log("Something Wrong Happened..." + error)
        }

    };



    const getPair = (event) => {
        try {
            contract.methods["pair"]().call((err, result) => {
                setPair(result)
            })
        } catch (err) {
            console.log("Something Wrong Happened..." + err)
        }
    };

    getData();

    return (
        <Grid container className={classes.root} spacing={2}>
            <PageHeader title='Swap' subtitle="Token Swap" />
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={8} >
                        <Paper className={`${classes.paper}`} elevation={3} >


                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle onClick={getPair()} />
                                    </Grid>
                                    <Grid item>
                                        Pair Address (on Viperswap): {getAddress(pair)}
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="onexValue" label="OneX" value={newData} variant="outlined" /> Max: {newData}
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="harmonyValue" label="ONE" value={balance} variant="outlined" /> Max: {balance}
                                    </Grid>
                                </Grid>
                            </div>


                            <Button className={classes.button} variant="contained" color="secondary" onClick={swap}>Swap</Button>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={3}>Balances<hr />
                            Connected Wallet: {getAddress(address)}<br />
                            ** OneX in Wallet = {newData}<br />
                            ** ONE in Wallet {JSON.stringify(balance, null, "  ")} < hr />

                            Expense Wallet<br />
                            ** ONE: {JSON.stringify(expenseBalance, null, "  ")}
                            <br />
                            ** OneX: <hr />
                            Liquidity Wallet<br />
                            ** ONE: {JSON.stringify(liquidityBalance, null, "  ")}
                            <br />
                            ** OneX: <hr />
                            Staking Wallet<br />ONE: {JSON.stringify(stakingBalance, null, "  ")}<br />
                            ** OneX:<br />
                            <Button className={classes.button} variant="contained" color="secondary" >Get Balance</Button>
                            <br />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
        // </div>
    )
}

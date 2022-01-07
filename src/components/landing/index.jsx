import React from "react";
import './landing.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Store from "../../stores";



const Web3 = require('web3');
const BN = require('bn.js');
const HMY_PRIVATE_KEY = '0x538d8410151d9d37b739107657d7af1c7206364b590dda0dca8f80a2a4631890';
const HMY_RPC_URL = 'https://api.s0.b.hmny.io';
const web3 = new Web3(HMY_RPC_URL);
const store = Store.store




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },

}));

export default function Landing() {
    const classes = useStyles();
    const [lastBlockNumber, setLastBlockNumber] = React.useState({});
    const [block, setBlock] = React.useState({});
    const [balance, setBalance] = React.useState({});
    const [expenseBalance, setExpenseBalance] = React.useState({});
    const [liquidityBalance, setLiquidityBalance] = React.useState({});
    const [stakingBalance, setStakingBalance] = React.useState({});

    const fetchOnline = async () => {
        const response = await web3.eth.getBlockNumber();
        setLastBlockNumber(response);

    };

    const fetchBlock = async () => {
        const response = await web3.eth.getBlock(lastBlockNumber);
        setBlock(response);
    };

    const fetchBalance = async (balAddress, key) => {
        // let mkey = key == '' || key == null ? key = 'default' : key;
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





    // show.addEventListener("click", showValue);


    const fetchTransfer = async (from, to, amount) => {
        const gasPrice = new BN(await web3.eth.getGasPrice()).mul(new BN(1));
        const gasLimit = 6721900;
        const result = await web3.eth
            .sendTransaction({ from, to, amount, gasPrice, gasLimit })
            .on('error', console.error);

        console.log(`Send tx: ${result.transactionHash} result: `, result.status);

        const toBalance = await web3.eth.getBalance(to);
        console.log('To account balance: ', toBalance / 1e18);
    };

    fetchOnline();
    let hmyMasterAccount = web3.eth.accounts.privateKeyToAccount(HMY_PRIVATE_KEY);
    let expenseWallet = '0xBF0CA9449b9698e5593b585d591370F81a4a726f'; //gitbaq ONE Wallet
    let liquidityWallet = '0xAD62fCcCc74283186f4572B8f8EE271B189565fA'; //gitbaq ONE Wallet
    let stakingWallet = '0x1BfC2d760e6B75AA626f00177C96CfC84f353D7E'; //harmony2 ONE Wallet
    let oneXContractAddress = '0x87eE560e9035d13b6290e197cBc853FD4FBeF37D';
    web3.eth.accounts.wallet.add(hmyMasterAccount);
    // web3.eth.defaultAccount = hmyMasterAccount.address
    web3.eth.defaultAccount = oneXContractAddress;

    // const myAddress = web3.eth.defaultAccount;
    const myAddress = hmyMasterAccount.address;

    fetchBalance(myAddress);
    fetchBalance(expenseWallet, 'expense');
    fetchBalance(liquidityWallet, 'liquidity');

    fetchBalance(stakingWallet, 'staking');
    fetchTransfer(myAddress, expenseWallet, 1 * 1e18)

    // fetchBalance(liquidityWallet);
    // fetchBalance(stakingWallet);


    return (
        // <div style={{ padding: '5px' }}>
        //     <Paper elevation={2}>
        //         <h1>OneX Contract</h1>
        //         <div style={{ padding: '10px' }}>
        //             <p>Last Block Number = {JSON.stringify(lastBlockNumber, null, "  ")}</p>
        //             <pre>Last Block Details = {JSON.stringify(block.hash, null, "  ")}</pre>
        //             <pre>Default Account Address = {JSON.stringify(myAddress, null, "  ")}</pre>
        //             <pre>Default Account Balance = {JSON.stringify(balance, null, "  ")}</pre>
        //             <pre>Expense Account Balance = {JSON.stringify(expenseBalance, null, "  ")}</pre>
        //             <pre>Liquidity Account Balance = {JSON.stringify(liquidityBalance, null, "  ")}</pre>
        //             <pre>Staking Account Balance = {JSON.stringify(stakingBalance, null, "  ")}</pre>
        //             <pre>OneX Contract Address = {JSON.stringify(oneXContractAddress, null, "  ")}</pre>


        //             {/* <button onClick={fetchOnline}>Fetch Data Online (async/await)</button> */}
        //             <button onClick={fetchBlock}>Fetch Block</button>
        //             {/* <button id="showtoken" onClick={showValue}>Show token</button> */}

        //         </div></Paper>
        // </div>
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><h1>OneX Contract</h1><h4>Contract Address = {JSON.stringify(oneXContractAddress, null, "  ")}</h4></Paper>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Paper className={classes.paper}><h4>Last Block Details</h4><h6>Block Number: {JSON.stringify(lastBlockNumber, null, "  ")}</h6>
                            <h6>Block Address = {JSON.stringify(block.hash, null, "  ")}
                                &nbsp;<Button variant="contained" color="primary" onClick={fetchBlock}>Fetch Block</Button></h6>
                        </Paper>
                    </Grid> */}
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            Last Block Details
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            Block Number: {JSON.stringify(lastBlockNumber, null, "  ")}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Block Address = {JSON.stringify(block.hash, null, "  ")}
                            &nbsp;<Button variant="contained" color="primary" onClick={fetchBlock}>Fetch Block</Button></Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            Default Account Details
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            Address = {JSON.stringify(myAddress, null, "  ")}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Balance = {JSON.stringify(balance, null, "  ")}</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            Wallet Balances
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            Expense = {JSON.stringify(expenseBalance, null, "  ")}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Liquidity = {JSON.stringify(liquidityBalance, null, "  ")}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Staking = {JSON.stringify(stakingBalance, null, "  ")}</Paper>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );

}





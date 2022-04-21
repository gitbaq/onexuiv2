import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import PageHeader from "../pageHeader";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';


import abi from "abi/OneMaxv2.json";
import MetamaskConnect from '../metamask';
import { getAddress } from "../../constants/utility";
// import { BN } from "bn.js";

import {
    TOKEN_ADDRESS
} from '../../constants'
import DataTable from "./dataTable";


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
// const token = "0xaD6aEDb6d8DfA2BB8BB158a21a4d0fdaB535F5e8";
const token = TOKEN_ADDRESS;
const expenseWallet = '0xBF0CA9449b9698e5593b585d591370F81a4a726f'; //gitbaq ONE Wallet
const liquidityWallet = '0xAD62fCcCc74283186f4572B8f8EE271B189565fA'; //gitbaq ONE Wallet
const stakingWallet = '0x1BfC2d760e6B75AA626f00177C96CfC84f353D7E'; //harmony2 ONE Wallet

const contract = new web3.eth.Contract(abi, token);




export default function TokenSwap(props) {
    const classes = useStyles();




    const fetchBalance = async (balAddress, key) => {
        const response = await web3.eth.getBalance(balAddress);
        const addrBalance = await contract.methods.balanceOf(balAddress).call();

        rows.push(createData(key, addrBalance / 1e18, response / 1e18));

        // switch (key) {
        //     case 'expense':
        //         setExpenseBalance(response / 1e18);
        //         break;
        //     case 'liquidity':
        //         setLiquidityBalance(response / 1e18);
        //         break;
        //     case 'staking':
        //         setStakingBalance(response / 1e18);
        //         break;
        //     default:
        //         setBalance(response / 1e18);


        // }
    };

    const [balance, setBalance] = React.useState(0);
    const [expenseBalance, setExpenseBalance] = React.useState(0);
    const [liquidityBalance, setLiquidityBalance] = React.useState(0);
    const [stakingBalance, setStakingBalance] = React.useState(0);
    const [newData, setNewData] = useState(0);
    const [pair, setPair] = useState('...');
    const [ethAddress, setEthAddress] = useState();
    const [rst, setRst] = useState('...');
    let ethAddress1;

    function setEthAddress1(addr) {
        ethAddress1 = addr;
    }




    fetchBalance(expenseWallet, 'expense');
    fetchBalance(liquidityWallet, 'liquidity');
    fetchBalance(stakingWallet, 'staking');

    async function getData(addr) {
        let error;
        try {
            console.log("Calling: Balance");
            contract.methods.balanceOf(addr).call((err, result) => {
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

    async function onMMConnect(walletAddress) {
        console.log("Data Received is: " + walletAddress)
        ethAddress1 = walletAddress;
        setEthAddress(ethAddress1);

        if (ethAddress1 && ethAddress1.length > 10) {
            console.log("ethAddress Here is: " + ethAddress1);

            await getData(ethAddress1);
            fetchBalance(ethAddress1, 'balance');

        }
        else {
            console.log("ethAddress in TokenSwap: " + ethAddress);
        }
    }

    async function dataReceived(data) {
        console.log('Here: ' + data);
        await onMMConnect(data);
    }

    function distributeRewards() {
        setRst('Processing Dividend...')

        console.log('');
        contract.methods.processDividend().call({ from: ethAddress })
            .then(function (result) {
                setRst(JSON.stringify(result))
                // debugger;
                console.log(result);
            });
    }

    async function sellOneMax() {
      console.log("Selling " + newData + " OneMax from " + ethAddress);
      // contract.methods.swapOneMaxToOne(newData)
      try {
        let error = "";
        // contract.methods.swapOneMaxToOne(newData).call((err, result) => {
        //     error = err ? setResult("Error = " + JSON.stringify(err)) : setResult("Result = " + JSON.stringify(result));
        //     console.log('Error: ' + err);
        // })
        console.log("newData" + newData + " ethAddress " + ethAddress);
        setRst("...");

        contract.methods
          .swapOneMaxToOne(newData)
          .call({ from: ethAddress })
          .then(function (result) {
            setRst(JSON.stringify(result));
            console.log(result);
          });
      } catch (error) {
        console.log("Error in Swap OneMaxToOne " + error);
      }
    }

    const handleChange = (event) => {
        setNewData(event.target.value);
    }

    const handleChangeOne = (event) => {
        setBalance(event.target.value);
    }
    getPair();

    function createData(name, OneMax, one) {
      return { name, OneMax, one };
    }

    // const rows = [
    //     createData('Connected', 159, 6.0),
    //     // createData('Expense', 237, 9.0),
    //     // createData('Staking', 262, 16.0),
    //     // createData('Liquidity', 305, 3.7),
    // ];

    const [rows, setRows] = React.useState([]);
    function resetData() {
        setRows(new Array());
    }

    return (
      <Grid container className={classes.root} spacing={2}>
        <PageHeader
          title='Swap'
          subtitle={"Token Swap " + getAddress(ethAddress)}
        />
        <form className={classes.root}>
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={2}>
              <Grid item xs={6}>
                <Paper className={`${classes.paper}`} elevation={3}>
                  <div>
                    <MetamaskConnect onConnect={dataReceived} />
                  </div>

                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                      {/* <Grid item>
                                            <AccountCircle onClick={getPair()} />
                                        </Grid> */}
                      <Grid item>
                        Pair Address (on Viperswap): {getAddress(pair)}
                      </Grid>
                    </Grid>
                  </div>

                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item>
                        <div>
                          <TextField
                            name='tokenBalance'
                            label='OneMax'
                            variant='outlined'
                            value={newData}
                            onChange={handleChange}
                          />{" "}
                          Max: {newData}
                        </div>
                      </Grid>
                      <Grid item>
                        <Button
                          className={classes.button}
                          id='oneTokens'
                          variant='contained'
                          color='primary'
                          onClick={sellOneMax}
                        >
                          Sell OneMax
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems='flex-end'>
                      <Grid item>Result = {rst}</Grid>
                    </Grid>
                  </div>
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                      <Grid item>{/* <AccountCircle /> */}</Grid>
                      {/* <Grid item>
                                            <div>
                                                <TextField name="ethBalance" label="ONE" value={balance} variant="outlined" onChange={handleChangeOne} /> Max: {balance}</div>
                                        </Grid> */}
                      <Grid item>
                        <Button
                          className={classes.button}
                          variant='contained'
                          color='secondary'
                          onClick={distributeRewards}
                        >
                          Distribute Rewards
                        </Button>
                      </Grid>
                    </Grid>
                  </div>

                  {/* <Button className={classes.button} variant="contained" color="secondary" onClick={swap}>Swap</Button> */}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='secondary'
                  onClick={resetData}
                >
                  Clear Logs
                </Button>
                <DataTable
                  timestamp={new Date().toLocaleString("en-US")}
                  rows={rows}
                />

                {/* <Paper className={classes.paper} elevation={3}>Balances<hr />
                                Connected Wallet: {getAddress(address)}<br />
                                ** OneMax in Wallet = {newData}<br />
                                ** ONE in Wallet {JSON.stringify(balance, null, "  ")} < hr />

                                Expense Wallet<br />
                                ** ONE: {JSON.stringify(expenseBalance, null, "  ")}
                                <br />
                                ** OneMax: <hr />
                                Liquidity Wallet<br />
                                ** ONE: {JSON.stringify(liquidityBalance, null, "  ")}
                                <br />
                                ** OneMax: <hr />
                                Staking Wallet<br />ONE: {JSON.stringify(stakingBalance, null, "  ")}<br />
                                ** OneMax:<br />
                                <Button className={classes.button} variant="contained" color="secondary" onClick={getData}>Get Balance</Button>
                                <br />
                            </Paper> */}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      // </div>
    );
}

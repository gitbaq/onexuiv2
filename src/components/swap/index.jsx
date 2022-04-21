import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
} from '@material-ui/core';
import PageHeader from "../pageHeader";
import abi from "abi/ERC20.json";
import Store from "../../stores";



const Web3 = require('web3');
// const BN = require('bn.js');

// const HMY_RPC_URL = 'https://api.s0.b.hmny.io';
const BINANCE_RPC_URL = 'https://bsc-dataseed1.binance.org:443'
const web3 = new Web3(BINANCE_RPC_URL);
// const address = "0xFc1637C7217B698385f20e8DD6a19Be9Fd8d62E2";
// const address = "0xa63aAEd8E2e95f59DbBcF05C8e1c8B581c955479";
// const token = "0xaD6aEDb6d8DfA2BB8BB158a21a4d0fdaB535F5e8";
const token = "0x2ab6ed0eef712006082c9cf583a6d12676d8f4cb"



const contract = new web3.eth.Contract(abi, token);

const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const addr = "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf";

const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);


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
}));



export default function Swap() {
    const classes = useStyles();

    const [newData, setNewData] = useState('...');

    const getData = (event) => {
        let error;
        const store = Store.store
        const account = store.getStore('account');
        const address = account.address;
        try {
            console.log("Calling: Balance");
            contract.methods.balanceOf(address).call((err, result) => { error = err ? err : setNewData(result / 1e18) })
        } catch {
            console.log("Something Wrong Happened..." + error)
        }

    };

    const [btcUsdt, setBtcUsdt] = useState('...');

    const getBTCUSDTData = (event) => {
        let error;
        try {
            // console.log("Calling: getBTCUSDTData");
            priceFeed.methods.latestRoundData().call()
                .then((roundData) => {
                    // Do something with roundData
                    setBtcUsdt(JSON.stringify(roundData.answer / 1e8));
                    console.log("Latest Round Data", roundData)
                });

        } catch {
            console.log("Something Wrong Happened..." + error)
        }

    };




    return (
      <div className={classes.root}>
        <PageHeader
          title='Swap BabyHarmony to OneMax'
          subtitle={
            "Baby Harmony Balance = " + newData + " BTC/USDT = " + btcUsdt
          }
        />
        <Card className={`${classes.card}`}>
          <div>
            {
              <Button
                className={classes.button}
                variant='contained'
                color='secondary'
                onClick={getData}
              >
                Get BBH Balance
              </Button>
            }
            <Button
              variant='contained'
              color='primary'
              onClick={getBTCUSDTData}
            >
              Get BTC/USDT Rate
            </Button>
            {/* <Button variant="outlined" color="secondary">Connect OneMax Wallet</Button> */}
          </div>
        </Card>
      </div>
    );
}

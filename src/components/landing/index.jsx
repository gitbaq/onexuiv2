import React from "react";
import './landing.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Store from "../../stores";
import {
    Card,
    Typography,
} from '@material-ui/core';

import { colors } from '../../theme'

const Web3 = require('web3');
const BN = require('bn.js');

const HMY_RPC_URL = 'https://api.s0.b.hmny.io';
const web3 = new Web3(HMY_RPC_URL);
const store = Store.store



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
        height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
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
    gradient: {
        backgroundColor: '#00AEE9',

        '& .title': {
            color: colors.white,
        },
        '& .icon': {
            color: colors.white,
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

export default function Landing() {
    const classes = useStyles();
    console.log('>> ' + store);



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
    let expenseWallet = '0xBF0CA9449b9698e5593b585d591370F81a4a726f'; //gitbaq ONE Wallet
    let liquidityWallet = '0xAD62fCcCc74283186f4572B8f8EE271B189565fA'; //gitbaq ONE Wallet
    let stakingWallet = '0x1BfC2d760e6B75AA626f00177C96CfC84f353D7E'; //harmony2 ONE Wallet
    let oneXContractAddress = '0x53b8955956DE9Df02C10477d3231F78c7b7Db423';
    // web3.eth.defaultAccount = hmyMasterAccount.address
    web3.eth.defaultAccount = oneXContractAddress;

    const myAddress = web3.eth.defaultAccount;

    fetchBalance(myAddress);
    fetchBalance(expenseWallet, 'expense');
    fetchBalance(liquidityWallet, 'liquidity');

    fetchBalance(stakingWallet, 'staking');
    fetchTransfer(myAddress, expenseWallet, 1 * 1e18)

    // fetchBalance(liquidityWallet);
    // fetchBalance(stakingWallet);


    return (

        <div className={classes.root}>
            <Card className={`${classes.card} ${classes.gradient}`} >
                <Typography variant={'h3'} className={`${classes.title} title`}>OneX Contract</Typography>
                <Typography variant={'h5'} className={`${classes.title} subTitle`}>Contract Address = {JSON.stringify(oneXContractAddress, null, "  ")}</Typography>
                <Typography variant={'h4'} className={`${classes.title} title`}>Last Block Details</Typography>
                <Typography variant={'h6'} className={`${classes.title} subTitle`}>
                    Block Number: {JSON.stringify(lastBlockNumber, null, "  ")}
                    <br />
                    Block Address = {JSON.stringify(block.hash, null, "  ")}
                    <br />
                    <Button variant="contained" color="primary" onClick={fetchBlock}>Fetch Block</Button></Typography>
                <Typography variant={'h4'} className={`${classes.title} title`}>Default Account Details</Typography>
                <Typography variant={'h6'} className={`${classes.title} subTitle`}>
                    Address = {JSON.stringify(myAddress, null, "  ")}
                    <br />
                    Balance = {JSON.stringify(balance, null, "  ")}</Typography>
                <Typography variant={'h4'} className={`${classes.title} title`}>Wallet Balances</Typography>
                <Typography variant={'h6'} className={`${classes.title} subTitle`}>
                    Expense = {JSON.stringify(expenseBalance, null, "  ")}
                    <br />
                    Liquidity = {JSON.stringify(liquidityBalance, null, "  ")}
                    <br />
                    Staking = {JSON.stringify(stakingBalance, null, "  ")}</Typography>
            </Card>

        </div>
    );

}





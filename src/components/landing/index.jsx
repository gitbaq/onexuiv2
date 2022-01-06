import { Paper } from "@material-ui/core";
import React from "react";
import './landing.css';



const Web3 = require('web3');
const BN = require('bn.js');
const HMY_PRIVATE_KEY = '0x538d8410151d9d37b739107657d7af1c7206364b590dda0dca8f80a2a4631890';
const HMY_RPC_URL = 'https://api.s0.b.hmny.io';
const web3 = new Web3(HMY_RPC_URL);






export default function Landing() {
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
        <div style={{ padding: '5px' }}>
            <Paper elevation={2}>
                <h1>OneX Contract</h1>
                <div style={{ padding: '10px' }}>
                    <p>Last Block Number = {JSON.stringify(lastBlockNumber, null, "  ")}</p>
                    <pre>Last Block Details = {JSON.stringify(block.hash, null, "  ")}</pre>
                    <pre>Default Account Address = {JSON.stringify(myAddress, null, "  ")}</pre>
                    <pre>Default Account Balance = {JSON.stringify(balance, null, "  ")}</pre>
                    <pre>Expense Account Balance = {JSON.stringify(expenseBalance, null, "  ")}</pre>
                    <pre>Liquidity Account Balance = {JSON.stringify(liquidityBalance, null, "  ")}</pre>
                    <pre>Staking Account Balance = {JSON.stringify(stakingBalance, null, "  ")}</pre>
                    <pre>OneX Contract Address = {JSON.stringify(oneXContractAddress, null, "  ")}</pre>


                    {/* <button onClick={fetchOnline}>Fetch Data Online (async/await)</button> */}
                    <button onClick={fetchBlock}>Fetch Block</button>
                    {/* <button id="showtoken" onClick={showValue}>Show token</button> */}

                </div></Paper>
        </div>
    );

}





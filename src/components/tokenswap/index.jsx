import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import PageHeader from "../pageHeader";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Store from "../../stores";
import { colors } from '../../theme';
import Snackbar from '../snackbar';
import ColoredLoader from '../loader/coloredLoader';

import { WalletConnectionError } from '../../constants'


import abi from "abi/onexv2.json";
import MetamaskConnect from '../metamask';
import { getAddress } from "../../constants/utility";
import { BN } from "bn.js";

import {
    TOKEN_ADDRESS,
    HMY_TESTNET_URL,
} from '../../constants'
import DataTable from "./dataTable";

const store = Store.store
let tParams = { receiver: '', amount: 0 };
let swapParams = { swapAmount: 0 };

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        minHeight: 'calc(100vh - 400px)',
        backgroundColor: colors.gray,
        padding: "20px",
    },
    paper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: colors.white,
        borderRadius: '5px',
    },
    controlT: {
        minWidth: "49%"
    },

    controlB: {
        minWidth: "49%"
    },
    margin: {
        margin: theme.spacing(1),
    },
    container: {
        flexGrow: 1,
        display: 'flex',
        width: "100%",
        border: "1px solid white",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        border: '1px solid ' + colors.harmonyGradient,
    },
    gridItem: {
        flexGrow: 1,
        display: 'flex',
        width: "inherit",
        justifyContent: 'flex-end',
        alignContent: 'center',
    }


}));



const Web3 = require('web3');
const HMY_RPC_URL = HMY_TESTNET_URL;
const web3 = new Web3(HMY_RPC_URL);
const token = TOKEN_ADDRESS;
const expenseWallet = '0xBF0CA9449b9698e5593b585d591370F81a4a726f'; //gitbaq ONE Wallet
const liquidityWallet = '0xAD62fCcCc74283186f4572B8f8EE271B189565fA'; //gitbaq ONE Wallet
const stakingWallet = '0x1BfC2d760e6B75AA626f00177C96CfC84f353D7E'; //harmony2 ONE Wallet
let ethersProvider;




export default function TokenSwap(props) {
    const classes = useStyles();
    // const [ethAddress, setEthAddress] = useState();
    const [newData, setNewData] = useState(0);
    const [pair, setPair] = useState('...');
    const [newAddress, setNewAddress] = useState();
    const [rst, setRst] = useState('...');
    const [balance, setBalance] = useState(0);

    const [snackbarMessage, setSnackbarMessage] = useState(null)
    const [snackbarType, setSnackbarType] = useState(null)
    const [loading, setLoading] = useState(false)

    const renderSnackbar = () => {
        return <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
    }

    const hmy = store.getStore('hmy')

    const contract = new web3.eth.Contract(abi, token);
    let oneXV2Contract = hmy.client.contracts.createContract(require('abi/onexv2.json'), token)


    const fetchBalance = async (balAddress, key) => {
        console.log('Fetching Balance for ' + key + " -- " + balAddress);
        // if (!balAddress || balAddress === undefined || balAddress === null || balAddress.length < 30) {
        //     return;
        // }
        const response = await web3.eth.getBalance(balAddress);
        const addrBalance = await contract.methods.balanceOf(balAddress).call();

        rows.push(createData(key, addrBalance / 1e18, response / 1e18));
    };

    // const [expenseBalance, setExpenseBalance] = React.useState(0);
    // const [liquidityBalance, setLiquidityBalance] = React.useState(0);
    // const [stakingBalance, setStakingBalance] = React.useState(0);





    async function updateBalances() {
        rows.push(createData(new Date().toLocaleString('en-US')))
        fetchBalance(expenseWallet, 'expense');
        fetchBalance(liquidityWallet, 'liquidity');
        fetchBalance(stakingWallet, 'staking');
        fetchBalance('0xfc1637c7217b698385f20e8dd6a19be9fd8d62e2', 'connected');
    }




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
        console.log(walletAddress);
        // ethAddress1 = walletAddress;
        await setNewAddress("" + walletAddress);
        console.log(newAddress);

        if (walletAddress && walletAddress.length > 30) {
            console.log("ethAddress Here is: " + walletAddress);

            getPair();
            await updateBalances();
            await getData(walletAddress)
        }
        else {
            console.log("ethAddress in TokenSwap: " + newAddress);
        }
    }

    // async function transferTo() {
    //     const addressForToken = await oneXV2Contract.address;
    //     console.log(addressForToken);
    //     try {
    //         await oneXV2Contract.methods.transfer(
    //             '0x811c47ff288a7ac54a9682fc183c244b44d35640',
    //             '150000000000000000000000000'
    //         ).call({ from: '0xfc1637c7217b698385f20e8dd6a19be9fd8d62e2' }).then(function (result) {
    //             console.log('result = ' + result);
    //             setRst(result)
    //         });
    //     } catch (error) {
    //         console.log('Error in transfer: ' + JSON.stringify(error))
    //         setRst(JSON.stringify(error));
    //     }
    //     console.log('Ending transfer...');

    // };

    async function dataReceived(data) {
        console.log('Data Received Here: ' + data);

        await onMMConnect(data);
    }

    // function distributeRewards() {
    //     setRst('Processing Dividend...')

    //     console.log('');
    //     contract.methods.processDividend().call({ from: newAddress })
    //         .then(function (result) {
    //             setRst(JSON.stringify(result))
    //             console.log(result);
    //             updateBalances();
    //             getPair();
    //         });
    // }

    // async function sellOneX() {
    //     console.log('Selling ' + newData + ' OneX from ' + newAddress);
    //     try {
    //         let error = '';

    //         console.log("newData" + newData + " ethAddress " + newAddress);
    //         setRst('...')

    //         contract.methods.swapOneXToOne(newData).call({ from: '0xfc1637c7217b698385f20e8dd6a19be9fd8d62e2' })
    //             .then(function (result) {
    //                 setRst(JSON.stringify(result))
    //                 console.log(result);
    //                 updateBalances();

    //             });
    //     } catch (error) {
    //         console.log('Error in Swap OnexToOne ' + error);
    //     }


    // }

    // const handleChange = (event) => {
    //     setNewData(event.target.value);
    // }

    // const handleChangeOne = (event) => {
    //     setBalance(event.target.value);
    // }

    function createData(name, oneX, one) {
        return { name, oneX, one };
    }



    const [rows, setRows] = React.useState([]);
    function resetData() {
        setRows(new Array());
    }

    const transferToken = async (receiver, amount) => {
        if (!loading) {
            setSnackbarMessage(null)
            setSnackbarType(null)
            setLoading(true)

            const hmy = store.getStore('hmy')
            let url = ''
            try {
                const res = await store.transferTokens(receiver, amount)
                console.log('Res from Store Transfer: ' + JSON.stringify(res));

                if (res.status === 'called' || res.status === 'call') {
                    url = `${hmy.explorerUrl}/tx/${res.transaction.receipt.transactionHash}`
                    setSnackbarMessage(url)
                    setSnackbarType("Hash")
                    setLoading(false)
                } else {
                    setSnackbarMessage("An error occurred :(. Please try again!")
                    setSnackbarType("Error")
                    setLoading(false)
                }
            } catch (error) {
                if (error instanceof WalletConnectionError) {
                    setSnackbarMessage("Please connect a wallet and then try again!")
                } else {
                    setSnackbarMessage(url + "2. An error occurred :(. Please try again!" + error)
                }

                setSnackbarType("Error")
                setLoading(false)
            }
        }
    }


    const swapOneX = async (swapAmount) => {
        if (!loading) {
            setSnackbarMessage(null)
            setSnackbarType(null)
            setLoading(true)

            const hmy = store.getStore('hmy')
            let url = ''
            try {
                const res = await store.swapOneX(swapAmount)
                console.log('Res from Store Transfer: ' + JSON.stringify(res));

                if (res.status === 'called' || res.status === 'call') {
                    url = `${hmy.explorerUrl}/tx/${res.transaction.receipt.transactionHash}`
                    setSnackbarMessage(url)
                    setSnackbarType("Hash")
                    setLoading(false)
                } else {
                    setSnackbarMessage("An error occurred :(. Please try again!")
                    setSnackbarType("Error")
                    setLoading(false)
                }
            } catch (error) {
                if (error instanceof WalletConnectionError) {
                    setSnackbarMessage("Please connect a wallet and then try again!")
                } else {
                    setSnackbarMessage(url + "2. An error occurred :(. Please try again!" + error)
                }

                setSnackbarType("Error")
                setLoading(false)
            }
        }
    }

    const processDividend = async () => {
        if (!loading) {
            setSnackbarMessage(null)
            setSnackbarType(null)
            setLoading(true)

            const hmy = store.getStore('hmy')
            let url = ''
            try {
                const res = await store.processDividend()
                console.log('Res from Store Transfer: ' + JSON.stringify(res));

                if (res.status === 'called' || res.status === 'call') {
                    url = `${hmy.explorerUrl}/tx/${res.transaction.receipt.transactionHash}`
                    setSnackbarMessage(url)
                    setSnackbarType("Hash")
                    setLoading(false)
                } else {
                    setSnackbarMessage("An error occurred :(. Please try again!")
                    setSnackbarType("Error")
                    setLoading(false)
                }
            } catch (error) {
                if (error instanceof WalletConnectionError) {
                    setSnackbarMessage("Please connect a wallet and then try again!")
                } else {
                    setSnackbarMessage(url + "2. An error occurred :(. Please try again!" + error)
                }

                setSnackbarType("Error")
                setLoading(false)
            }
        }
    }

    const handleChangeD = (event) => {
        tParams[event.target.name] = event.target.value
        console.log(event.target.name + ' = ' + tParams[event.target.name]);

    }

    const handleChangeS = (event) => {
        swapParams[event.target.name] = event.target.value
        console.log(event.target.name + ' = ' + swapParams[event.target.name]);

    }




    return (
        <Grid container className={classes.root} spacing={2}>
            <PageHeader title='Swap' subtitle={"Token Swap " + getAddress(newAddress)} />
            {/* <form > */}
            {loading && <ColoredLoader />}
            {snackbarMessage && renderSnackbar()}
            <Grid item xs={12} className={classes.root}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={6} >
                        <Paper className={`${classes.paper}`} elevation={3} >
                            <div><MetamaskConnect onConnect={dataReceived} /></div>

                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">

                                    <Grid item>
                                        Pair Address (on Viperswap): {getAddress(pair)}
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.margin}>
                                <Grid container spacing={1} className={classes.container}>
                                    <Grid item className={classes.gridItem}>

                                        <TextField className={`${classes.controlT}`} name="swapAmount" id="swapAmount" label="OneX" variant="outlined" onChange={handleChangeS} />
                                        <Button className={`${classes.button} ${classes.controlB}`} id='oneTokens' variant="contained" color="secondary" onClick={() => swapOneX(swapParams["swapAmount"])}>Swap OneX to ONE</Button>
                                    </Grid>
                                    <Grid item className={classes.gridItem}>
                                        Max: {newData}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className={classes.container}>
                                    <Grid item className={classes.gridItem}>
                                        <TextField className={`${classes.controlT}`} id="receiver" name="receiver" label="Receiver (Address)" variant="outlined" onChange={handleChangeD} />
                                        <TextField className={`${classes.controlT}`} id="amount" name="amount" label="Amount" variant="outlined" onChange={handleChangeD} />
                                    </Grid>
                                    <Grid item className={classes.gridItem}>
                                        <Button className={`${classes.button} ${classes.controlB}`} id='transferButton' variant="contained" color="secondary" onClick={() => transferToken(tParams["receiver"], tParams["amount"])}>Send OneX</Button>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={1} className={classes.container}>
                                    <Grid item className={classes.gridItem}>
                                        Result = {rst}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className={classes.container}>
                                    <Grid item className={classes.gridItem}>
                                        <Button className={`${classes.button} ${classes.controlB}`} variant="contained" color="secondary" onClick={() => processDividend()}>Distribute Rewards</Button>
                                    </Grid>
                                </Grid>
                                {/* <Grid container spacing={2} className={classes.container}>
                                    <Grid item className={classes.gridItem}>
                                        <TextField className={`${classes.controlT}`} name="tokenTransfer" label="Transfer" variant="outlined" value={newData} onChange={handleChange} />
                                        <Button className={`${classes.button} ${classes.controlB}`} variant="contained" color="secondary" >Transfer</Button>
                                    </Grid>
                                </Grid> */}
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={`${classes.paper}`} elevation={3} >
                            <Button className={classes.button} variant="contained" color="secondary" onClick={resetData}>Clear Logs</Button>
                            <DataTable rows={rows} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            {/* </form> */}
        </Grid >
        // </div>
    )
}

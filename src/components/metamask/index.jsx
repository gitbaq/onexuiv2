import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import Button from '@material-ui/core/Button';
import { getAddress } from "../../constants/utility";
import {
    TOKEN_ADDRESS
} from '../../constants'
import metamask from 'assets/metamask.svg';
import logo from 'assets/v3_black.svg'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const BN = require('bn.js');

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        display: 'flex',
        width: "100%",
        // border: "1px solid white",
        padding: "10px",
        justifyContent: "flex-end",
    },
}));




async function mm_task() {
    try {
        const ethereum = new Web3(window.web3.currentProvider);
        /* provider will use network RPC, wich was selected in MetaMask */
        const accounts = await ethereum.enable();
        /* Now any request to sign a transaction will be redirected to MetaMask */
    } catch (error) {
        console.log("MM Connection Error: " + error);
    }
}

export default function MetamaskConnect(props) {
    const classes = useStyles();

    const [ethAddress, setEthAddress] = useState();
    const [isAuthorised, setIsAuthorised] = useState(false);
    async function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            console.error('Not found accounts');
            setIsAuthorised(false);
        } else {

            await props.onConnect(accounts[0]);
            setIsAuthorised(true);
            setEthAddress(accounts[0]);
            console.log('Your address: ', accounts[0]);
        }
    }
    async function signInMetamask() {
        const provider = await detectEthereumProvider();

        // @ts-ignore
        if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
        }

        if (!provider) {
            console.error('Metamask not found');
            return;
        }
        mm_task();

        // MetaMask events
        provider.on('accountsChanged', await handleAccountsChanged);

        provider.on('disconnect', () => {
            console.log('disconnect');

            setIsAuthorised(false);
        });

        provider.on('chainIdChanged', chainId => console.log('chainIdChanged', chainId));

        provider
            .request({ method: 'eth_requestAccounts' })
            .then(async params => {
                await handleAccountsChanged(params);
                setIsAuthorised(true);
            })
            .catch(err => {
                setIsAuthorised(false);

                if (err.code === 4001) {
                    console.error('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    }
    async function signIn() {
        await signInMetamask();
    }
    //signInMetamask();

    async function addTokenToMM() {
        const tokenAddress = TOKEN_ADDRESS;
        const tokenSymbol = 'ONEXT';
        const tokenDecimals = 18;
        // const tokenImage = 'http://placekitten.com/200/300';
        const provider = await detectEthereumProvider();

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await provider.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        // image: tokenImage, // A string url of the token logo
                    },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    function MMIcon(props) {
        const { imgSrc } = props;

        return (
            <img src={imgSrc} width="25" />

        );
    }

    return (
        <Paper variant="outlined" elevation={1} className={classes.root}>

            {
                isAuthorised &&
                "Connected to:" + getAddress(ethAddress)
            }
            &nbsp;&nbsp;&nbsp;&nbsp;
            {!isAuthorised &&
                <Button variant="contained" onClick={signIn} startIcon={<MMIcon imgSrc={metamask} />}>Connect Metamask</Button>
            }
            <Button variant="contained" onClick={addTokenToMM} startIcon={<MMIcon imgSrc={logo} />}>Add ONEXT To Metamask</Button>
        </Paper>
    )
}

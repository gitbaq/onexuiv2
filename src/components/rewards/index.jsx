import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import Button from '@material-ui/core/Button';

const BN = require('bn.js');



let isAuthorised = false;




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

export default function Rewards() {
    const [ethAddress, setEthAddress] = useState();
    // let ethAddress;
    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            console.error('Not found accounts');
        } else {
            // ethAddress = accounts[0];
            setEthAddress(accounts[0]);

            // console.log('Your address: ', ethAddress);
        }
    }
    const signInMetamask = async () => {
        const provider = await detectEthereumProvider();

        // @ts-ignore
        if (provider !== window.ethereum) {
            console.error('Do you have multiple wallets installed?');
        }

        if (!provider) {
            console.error('Metamask not found');
            return;
        }

        // MetaMask events
        provider.on('accountsChanged', handleAccountsChanged);

        provider.on('disconnect', () => {
            console.log('disconnect');
            isAuthorised = false;
        });

        provider.on('chainIdChanged', chainId => console.log('chainIdChanged', chainId));

        provider
            .request({ method: 'eth_requestAccounts' })
            .then(async params => {
                handleAccountsChanged(params);
                isAuthorised = true;
            })
            .catch(err => {
                isAuthorised = false;

                if (err.code === 4001) {
                    console.error('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    }
    signInMetamask();

    return (
        <div>
            "Your Metamask Address: " + {ethAddress}
            <br />
            <Button variant="contained" color="secondary" onClick={signInMetamask}>Connect Metamask</Button>
        </div>
    )
}

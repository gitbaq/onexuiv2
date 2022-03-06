import React, { useState } from 'react';
import MetamaskConnect from '../metamask';

const BN = require('bn.js');









export default function Rewards() {
    const [ethAddress, setEthAddress] = useState();

    function onConnect(walletAddress) {
        console.log("Data Received: " + JSON.stringify(walletAddress))
        setEthAddress(walletAddress);
    }

    return (
        <div><MetamaskConnect onConnect={onConnect} />
            ({ethAddress})
        </div>
    )
}

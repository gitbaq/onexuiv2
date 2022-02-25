import React, { useState, useEffect } from "react"

import BeenhereRoundedIcon from '@material-ui/icons/BeenhereRounded';

import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
} from '@material-ui/core';
import PageHeader from "../pageHeader";
import Store from "../../stores";
import { toBech32 } from '@harmony-js/crypto';
import UnlockModal from '../unlock/unlockModal.jsx';
import {
    CONNECTION_CONNECTED,
    CONNECTION_DISCONNECTED
} from '../../constants'

// import RewardDetails from './abi'
// import GetData from "./GetData";


const store = Store.store
const emitter = Store.emitter








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

export default function Rewards() {
    const classes = useStyles();
    const [account, setAccount] = useState(store.getStore('account'))
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const connectionChanged = () => {
            setAccount(store.getStore('account'))
        }

        emitter.on(CONNECTION_CONNECTED, connectionChanged)
        emitter.on(CONNECTION_DISCONNECTED, connectionChanged)

        return () => {
            emitter.removeListener(CONNECTION_CONNECTED, connectionChanged)
            emitter.removeListener(CONNECTION_DISCONNECTED, connectionChanged)
        }
    }, [])


    var address = null;
    if (account.address) {
        address = toBech32(account.address)
        address = `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`
    }

    const addressClicked = () => {
        setModalOpen(true)
    }
    const toolTipText = (text) => (
        <div style={{ lineHeight: '15px' }}>Connected To {text} <br />
            <div style={{ color: 'orange' }}>Click to Change Wallet or Disconnect</div>
        </div>
    );

    const closeModal = () => {
        setModalOpen(false)
    }

    const renderModal = () => {
        return (
            <UnlockModal closeModal={closeModal} modalOpen={modalOpen} />
        )
    }



    return (
        <div className={classes.root}>
            <PageHeader title='OneX Rewards' subtitle='Connect Wallet...' />
            <Card className={`${classes.card}`} >

                Rewards
            </Card>

        </div>
    )
}

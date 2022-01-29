import React, { useState, useEffect } from "react"
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BeenhereRoundedIcon from '@material-ui/icons/BeenhereRounded';
import Tooltip from '@material-ui/core/Tooltip';


import { colors } from "../../theme";

import {
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED
} from '../../constants'

import { toBech32 } from '@harmony-js/crypto'

import UnlockModal from '../unlock/unlockModal.jsx'
import Balances from './balances.jsx'

import Store from "../../stores";
const store = Store.store
const emitter = Store.emitter

const useStyles = makeStyles(theme => ({
  headerContainer: {
    // color: '#FFFFFF',
    // position: 'absolute',
    // top: '12px',
    // right: '12px',

    // zIndex: 999,
    display: 'flex',
  },
  actionButton: {
    background: '#bcecfd',
    color: '#00AEE9',
    borderColor: '#00AEE9',
    '&:hover': {
      color: `${colors.white} !important`
    }
  },

  account: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flex: '0'
    }
  },
  walletAddress: {
    // color: colors.black,
    padding: '12px',
    // border: '1px solid ' + colors.harmonyGradient,
    // borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      // border: "1px solid ",
      background: 'rgba(47, 128, 237, 0.1)'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      position: 'absolute',
      transform: 'translate(0, 200%)',
      border: "1px solid " + colors.borderBlue,
      background: colors.red,
      color: colors.black,
    }
  },

  connectedDot: {
    color: colors.orange,
  }
}));

export default function Header() {
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

  const closeModal = () => {
    setModalOpen(false)
  }

  const renderModal = () => {
    return (
      <UnlockModal closeModal={closeModal} modalOpen={modalOpen} />
    )
  }

  const toolTipText = (text) => (
    <div style={{ lineHeight: '15px' }}>Connected To {text} <br />
      <div style={{ color: 'orange' }}>Click to Change Wallet or Disconnect</div>
    </div>
  );

  return (
    <div className={`${classes.headerContainer}`}>
      {address &&
        <Balances />
      }
      <div className={classes.account}>
        {address &&
          <Tooltip title={toolTipText(address)}>

            <Typography variant={'h4'} className={`${classes.walletAddress} ${classes.gradientx}`} noWrap onClick={addressClicked} >
              {/* {address} */}
              <div className={classes.connectedDot}><BeenhereRoundedIcon /></div>
            </Typography>
          </Tooltip>
        }
        {!address &&
          <Typography color='secondary' variant={'h4'} className={`${classes.walletAddress} ${classes.gradient}`} noWrap onClick={addressClicked} >
            Connect your wallet
          </Typography>
        }
      </div>
      {modalOpen && renderModal()}
    </div>
  );

}

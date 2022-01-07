import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Switch,
  Route
} from "react-router-dom";
import IpfsRouter from 'ipfs-react-router'
// import { colors } from './theme'

import interestTheme from './theme';

// import Account from './components/account';
import Faucet from './components/faucet';
import Landing from './components/landing';
import ResponsiveAppBar from './components/appbar';
import Contract from './components/contract';
import Calculator from './components/calculator';

import {
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED,
  CONFIGURE,
  CONFIGURE_RETURNED,
  GET_BALANCES_PERPETUAL,
  GET_BALANCES_PERPETUAL_RETURNED
} from './constants'

import Store from "./stores";

import Home from './components/home';
import Account from './components/account';
import Whitepaper from './components/whitepaper';
import Swap from './components/swap';
const emitter = Store.emitter
const dispatcher = Store.dispatcher
// const store = Store.store

export default function App() {
  // const [account, setAccount] = useState(null)

  useEffect(() => {
    const getBalancesReturned = () => {
      window.setTimeout(() => {
        dispatcher.dispatch({ type: GET_BALANCES_PERPETUAL, content: {} })
      }, 5000)
    }

    const configureReturned = () => {
      //dispatcher.dispatch({ type: GET_BALANCES_PERPETUAL, content: {} })
    }

    const connectionConnected = () => {
      // setAccount(store.getStore('account'))
      dispatcher.dispatch({ type: CONFIGURE, content: {} })
      dispatcher.dispatch({ type: GET_BALANCES_PERPETUAL, content: {} })
    };

    const connectionDisconnected = () => {
      // setAccount(store.getStore('account'))
    }

    emitter.on(CONNECTION_CONNECTED, connectionConnected)
    emitter.on(CONNECTION_DISCONNECTED, connectionDisconnected)
    emitter.on(CONFIGURE_RETURNED, configureReturned)
    emitter.on(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned)

    return () => {
      emitter.removeListener(CONNECTION_CONNECTED, connectionConnected);
      emitter.removeListener(CONNECTION_DISCONNECTED, connectionDisconnected);
      emitter.removeListener(CONFIGURE_RETURNED, configureReturned);
      emitter.removeListener(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);
    }
  }, [])

  return (
    <MuiThemeProvider theme={createMuiTheme(interestTheme)}>
      <CssBaseline />
      <IpfsRouter>
        {/* {!account &&
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            minWidth: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            background: "#f9fafb"
          }}>
            <Account />
          </div>
        } */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          // minWidth: '100vw',
          // justifyContent: 'center',
          // alignItems: 'flex-start',
          background: "#1f1f1f"

        }}>
          <div style={{
            // minWidth: '100vw',
          }}>
            <ResponsiveAppBar />
          </div>
          <div style={{
            // padding: '5px',
            // backgroundColor: colors.compoundGreen
            minHeight: '90vh',
          }}>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/testcontract">
                <Landing />
              </Route>
              <Route path="/contract">
                <Contract />
              </Route>
              <Route path="/account">
                <Account />
              </Route><Route path="/calculator">
                <Calculator />
              </Route><Route path="/whitepaper">
                <Whitepaper />
              </Route>
              <Route path="/faucet">
                <Faucet />
              </Route>
              <Route path="/swap">
                <Swap />
              </Route>
            </Switch>
          </div>
        </div>
        {/* {account && <Header />} */}
      </IpfsRouter>
    </MuiThemeProvider>
  )
}

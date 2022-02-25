import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import IpfsRouter from 'ipfs-react-router'
import { colors } from './theme'

import interestTheme from './theme';
import { makeStyles } from '@material-ui/core/styles';


// import Account from './components/account';
import Faucet from './components/faucet';
import Landing from './components/landing';
import ResponsiveAppBar from './components/appbar';
import Contract from './components/contract';
import Calculator from './components/calculator';
import Rewards from './components/rewards';
// import Socials from './components/socials';

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
// import { colors } from '@material-ui/core';
import Faq from './components/faq';
// import { UrlJsonRpcProvider } from '@ethersproject/providers';
import BottomBar from './components/bottombar';
import Team from './components/team';
import Roadmap from './components/roadmap';
import VerifyContract from './components/verifycontract';
import TokenSwap from './components/tokenswap';
const emitter = Store.emitter
const dispatcher = Store.dispatcher
// const store = Store.store

const useStyles = makeStyles(theme => ({

  gradient: {
    backgroundColor: colors.grad,

  },
  content: {
    minHeight: 'calc(100vh - 360px)',
    background: 'linear-gradient(180deg, rgba(40,185,216, 0.1), rgba(69, 214, 202,0.1), rgba(86,234,190, 0.1))',
    width: '100vw',
    // padding: '0'
    // alignItems: 'top'
  },


}));

export default function App() {
  // const [account, setAccount] = useState(null)
  const classes = useStyles();
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

    <MuiThemeProvider theme={createTheme(interestTheme)}>
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
        <div className={classes.gradient} style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          // backgroundColor: colors.grad,
          alignItems: 'center'


        }}>
          <div style={{
            minWidth: '100vw',
          }}>
            <ResponsiveAppBar />
          </div>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/testcontract">
                <Landing />
              </Route>
              <Route exact path="/calculator">
                <Calculator />
              </Route>
              <Route exact path="/whitepaper">
                <Whitepaper />
              </Route>
              <Route exact path="/faucet">
                <Faucet />
              </Route>
              <Route exact path="/swap">
                <Swap />
              </Route>
              <Route exact path="/contract">
                <Contract />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/faq">
                <Faq />
              </Route>
              <Route exact path="/rewards">
                <Rewards />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              <Route exact path="/roadmap">
                <Roadmap />
              </Route>
              <Route exact path="/verifycontract">
                <VerifyContract />
              </Route>
              <Route exact path="/tokenswap">
                <TokenSwap />
              </Route>
            </Switch>
          </div>
          <div>


          </div>
          {/* <Socials /> */}
          <BottomBar />
        </div>
      </IpfsRouter>
    </MuiThemeProvider>
  )
}

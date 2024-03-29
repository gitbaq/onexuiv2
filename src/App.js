import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import IpfsRouter from 'ipfs-react-router'

import interestTheme from './theme';
import { makeStyles } from '@material-ui/core/styles';
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
import Faq from './components/faq';
import BottomBar from './components/bottombar';
import Team from './components/team';
import Roadmap from './components/roadmap';
import VerifyContract from './components/verifycontract';
import TokenSwap from './components/tokenswap';
import Socials from './components/socials';
import { Divider } from '@material-ui/core';
import background from './assets/blobs.svg'
import Footer from './components/footer';
import TestSetup from './components/testsetup';
// import background from './assets/harmony.png'

// import { colors } from "./theme";


const emitter = Store.emitter
const dispatcher = Store.dispatcher
// const store = Store.store

const useStyles = makeStyles(theme => ({

  root: {
    background:"linear-gradient(to bottom right, rgba(205, 238, 229, 1.0) 5%,rgba(53, 194, 220, 0.8)70%, rgba(23, 31, 107, 0.8)100%)",
    width: "100vw",
    display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
    
  },
  appBar:{
    minWidth:'100vw',
  },
  content: {
    minHeight: 'calc(100vh - 200px)',
    background:"linear-gradient(to bottom, rgba(57, 134, 246, 0.1),rgba(57, 134, 246, 0.2))",
    // backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '90vw',
    // border:'2px solid',
    // borderColor:colors.harmonyGradient,
    borderRadius:'15px',
    margin:'10px'
  },
  background: {
    display: 'flex',
    flex:1,
    flexDirection: "column",
    backgroundImage: `url(${background})`,
    width: '100vw',
    height:'150px'
  },
  divider:{
  background:
            'linear-gradient(to right, rgba(135,233,196,1.0) 50%, rgba(79,174,220,1.0) 100%)',
  height: "1px",
  }


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
        
        <div className={classes.root}>
          <div className={classes.appBar}>
            <ResponsiveAppBar />
            <Divider className={classes.divider}/>
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
              {/* <Route exact path="/rewards">
                <Rewards />
              </Route> */}
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
              <Route exact path="/testsetup">
                <TestSetup />
              </Route>
            </Switch>
          </div>
          <div className={`${classes.background}`}>
          <Socials/>
          <BottomBar />
          <Footer/>
          </div>
        </div>
      </IpfsRouter>
    </MuiThemeProvider>
  )
}

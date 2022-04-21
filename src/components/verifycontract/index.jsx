import React, { useState, useEffect } from "react";
import PageHeader from "../pageHeader";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Store from "../../stores";

import { Typography } from "@material-ui/core";
import abi from "abi/OneMaxV2.json";
import AbiCard from "./abiCard";
import { rgba } from "polished";

import { TOKEN_ADDRESS } from "../../constants";
import MetamaskConnect from "../metamask";
// import MetamaskConnect from "../metamask";

const Web3 = require("web3");
// const BN = require('bn.js');

const HMY_RPC_URL = "https://api.s0.b.hmny.io";

const web3 = new Web3(HMY_RPC_URL);
const { store } = Store;

// const address = "0xFc1637C7217B698385f20e8DD6a19Be9Fd8d62E2";

// const token = "0x5117C5022b9277770589e6c931C2Bfe56E39Abc3";
// const token = "0xaD6aEDb6d8DfA2BB8BB158a21a4d0fdaB535F5e8";

const token = TOKEN_ADDRESS;

// const contract = new web3.eth.Contract(abi, token);

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "none",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  red: {
    // backgroundColor: colors.white,
    flex: 1,
    display: "flex",
    width: "100%",
  },
  blue: {
    background: rgba(30, 30, 30, 0.1),
    flex: 1,
    display: "flex",
    width: "100%",
  },
  green: {
    // backgroundColor: colors.green,
    flex: 1,
    display: "flex",
    width: "100%",
  },
}));
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function VerifyContract() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ethAddress, setEthAddress] = useState();
  let ethAddress1;
  const [loggedIn, setLoggedIn] = React.useState(false);

  var index = 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [balance, setBalance] = useState(0);
  const wethBalance = async (balAddress) => {
    if (loggedIn) {
      web3.eth.getBalance(balAddress, (err, result) => {
        if (result && result !== "" && result !== undefined) {
          setBalance(web3.utils.fromWei(result, "ether"));
        }
      });
    }
  };

  let account;
  const setupAccount = async () => {
    account = store.getStore("account");
    if (account.address) {
      setLoggedIn(true);
      ethAddress1 = account.address;
      setEthAddress(ethAddress1);
      wethBalance(ethAddress1);
    } else {
      setLoggedIn(false);
    }
  };

  const MINUTE_MS = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setupAccount();
    }, MINUTE_MS);

    // eslint-disable-next-line max-len
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  return (
    <div className={classes.root}>
      <PageHeader
        title="Verify Contract"
        subtitle={
          ethAddress &&
          "Account: " + ethAddress + " Balance:" + balance + " ONE"
        }
      />
      <MetamaskConnect />

      {ethAddress && (
        <div className={classes.root}>
          <AppBar position="static" className={classes.root}>
            <Tabs
              className={classes.red}
              value={value}
              onChange={handleChange}
              aria-label="Contract Testbed"
            >
              <Tab label="Read" {...a11yProps(0)} />
              <Tab label="Write" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel className={classes.blue} value={value} index={0}>
            Read Contract Values
            {abi
              .filter(
                (item) =>
                  item.type !== "event" &&
                  item.stateMutability === "view" &&
                  item.name !== ""
              )
              .map((filteredItems) => (
                <AbiCard
                  key={index++ + filteredItems.name}
                  item={filteredItems}
                  abi={abi}
                  token={token}
                  address={ethAddress}
                  write={false}
                />
              ))}
          </TabPanel>
          <TabPanel className={classes.blue} value={value} index={1}>
            Write Contract Values
            {abi
              .filter(
                (item) =>
                  item.type !== "event" &&
                  item.stateMutability !== "view" &&
                  item.name !== ""
              )
              .map((filteredItems) => (
                <AbiCard
                  key={index++ + filteredItems.name}
                  item={filteredItems}
                  abi={abi}
                  token={token}
                  address={ethAddress}
                  write={true}
                />
              ))}
          </TabPanel>
        </div>
      )}
    </div>
  );
}

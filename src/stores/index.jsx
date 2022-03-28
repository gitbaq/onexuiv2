import config from "../config";
import async from "async";
import {
  ERROR,
  CONFIGURE,
  CONFIGURE_RETURNED,
  GET_BALANCES,
  GET_BALANCES_RETURNED,
  GET_BALANCES_PERPETUAL,
  GET_BALANCES_PERPETUAL_RETURNED,
  WalletConnectionError,
} from "../constants";

// import { OneWalletConnector } from "@harmony-react/onewallet-connector";
// import { MathWalletConnector } from '@harmony-react/mathwallet-connector'
import { InjectedConnector } from "@web3-react/injected-connector";

import { BN } from "bn.js";
import Web3 from "web3";
import { signInMetamask } from "./userWallet";

import { Hmy } from "@harmony-utils/wrappers";

const Dispatcher = require("flux").Dispatcher;
const Emitter = require("events").EventEmitter;

const dispatcher = new Dispatcher();
const emitter = new Emitter();
let web3;
let contract;
let faucetContract;
let gasOptions = {
  gasPrice: 30000000000,
  gasLimit: 672190,
};

class Store {
  constructor() {
    const hmy = new Hmy(config.network);
    // const onewallet = new OneWalletConnector({ chainId: hmy.client.chainId });
    // const mathwallet = new MathWalletConnector({ chainId: hmy.client.chainId })
    const metaMask = new InjectedConnector({ chainId: hmy.client.chainId });

    this.store = {
      votingStatus: false,
      governanceContractVersion: 2,
      currentBlock: 0,
      universalGasPrice: "70",
      account: {},
      hmy: hmy,
      web3: null,
      web3context: null,
      connectorsByName: {
        // OneWallet: onewallet,
        // MathWallet: mathwallet,
        Metamask: metaMask,
      },
      tokens: [
        {
          address: config.addresses.token,
          name: "OneX",
          symbol: "ONEXT",
          decimals: 18,
          balance: 0,
        },
      ],
      languages: [
        {
          language: "English",
          code: "en",
        },
      ],
    };

    dispatcher.register(
      function (payload) {
        switch (payload.type) {
          case CONFIGURE:
            this.configure(payload);
            break;
          case GET_BALANCES:
            this.getBalances(payload);
            break;
          case GET_BALANCES_PERPETUAL:
            this.getBalancesPerpetual(payload);
            break;
          default: {
          }
        }
      }.bind(this)
    );
  }

  getStore(index) {
    return this.store[index];
  }

  setStore(obj) {
    this.store = { ...this.store, ...obj };
    return emitter.emit("StoreUpdated");
  }

  configure = async () => {
    const hmy = store.getStore("hmy");
    let currentBlock = await hmy.getBlockNumber();

    store.setStore({ currentBlock: currentBlock });

    window.setTimeout(() => {
      emitter.emit(CONFIGURE_RETURNED);
    }, 100);
  };

  getBalancesPerpetual = async () => {
    const tokens = store.getStore("tokens");
    const account = store.getStore("account");
    const hmy = store.getStore("hmy");

    const currentBlock = await hmy.getBlockNumber();

    store.setStore({ currentBlock: currentBlock });

    async.map(
      tokens,
      (token, callback) => {
        async.parallel(
          [
            (callback) => {
              this.getERC20Balance(hmy, token, account, callback);
            },
          ],
          (err, data) => {
            if (err) {
              console.log(err);
              return callback(err);
            }

            token.balance = data[0];
            callback(null, token);
          }
        );
      },
      (err, tokenData) => {
        if (err) {
          console.log(err);
          return emitter.emit(ERROR, err);
        }
        store.setStore({ tokens: tokenData });
        emitter.emit(GET_BALANCES_PERPETUAL_RETURNED);
        emitter.emit(GET_BALANCES_RETURNED);
      }
    );
  };

  getBalances = () => {
    const tokens = store.getStore("tokens");
    const account = store.getStore("account");
    const hmy = store.getStore("hmy");

    async.map(
      tokens,
      (token, callback) => {
        async.parallel(
          [
            (callback) => {
              this.getERC20Balance(hmy, token, account, callback);
            },
          ],
          (err, data) => {
            if (err) {
              console.log(err);
              return callback(err);
            }

            token.balance = data[0];
            callback(null, token);
          }
        );
      },
      (err, tokenData) => {
        if (err) {
          console.log(err);
          return emitter.emit(ERROR, err);
        }
        store.setStore({ tokens: tokenData });
        emitter.emit(GET_BALANCES_RETURNED);
      }
    );
  };

  getERC20Balance = async (hmy, token, account, callback) => {
    if (account && account.address) {
      let erc20Contract = hmy.client.contracts.createContract(
        require("../abi/ERC20.json"),
        token.address
      );

      try {
        var balance = await erc20Contract.methods
          .balanceOf(account.address)
          .call(hmy.gasOptions());
        balance = parseFloat(balance) / 10 ** token.decimals;
        callback(null, Math.ceil(balance));
      } catch (err) {
        console.log(err);
        return callback(err);
      }
    } else {
      callback(null);
    }
  };

  useFaucet_one = async () => {
    const hmy = store.getStore("hmy");
    const account = store.getStore("account");
    const context = store.getStore("web3context");
    var connector = null;

    if (context) {
      connector = context.connector;
    }

    if (!connector) {
      throw new WalletConnectionError("No wallet connected");
    }
    let faucetContract = hmy.client.contracts.createContract(
      require("../abi/Faucet.json"),
      config.addresses.faucet
    );
    faucetContract = await connector.attachToContract(faucetContract);
    console.log("Gas Options: " + JSON.stringify(hmy.gasOptions()));
    return faucetContract.methods
      .fund(account.address)
      .send({ gasPrice: 2000000000, gasLimit: 6721900, from: account.address });
  };

  transferTokens_one = async (receiver, amount) => {
    console.log("in Store: " + receiver + " " + amount);
    const hmy = store.getStore("hmy");
    const account = store.getStore("account");
    const context = store.getStore("web3context");
    var connector = null;

    if (context) {
      connector = context.connector;
    }

    if (!connector) {
      throw new WalletConnectionError("No wallet connected");
    }
    let tokenContract = hmy.client.contracts.createContract(
      require("../abi/onexv2.json"),
      config.addresses.token
    );
    // tokenContract = await connector.attachToContract(tokenContract)
    console.log("Gas Options: " + JSON.stringify(hmy.gasOptions()));
    return tokenContract.methods
      .transfer(receiver, new BN(amount + "000000000000000000"))
      .send({
        gasPrice: 80000000000,
        gasLimit: 6721900,
        from: account.address,
      });
  };

  swapOneX_one = async (swapAmount) => {
    console.log("in Store: swapOneX " + swapAmount);
    const hmy = store.getStore("hmy");
    const account = store.getStore("account");
    const context = store.getStore("web3context");
    var connector = null;

    if (context) {
      connector = context.connector;
    }

    if (!connector) {
      throw new WalletConnectionError("No wallet connected");
    }
    let tokenContract = hmy.client.contracts.createContract(
      require("../abi/onexv2.json"),
      config.addresses.token
    );
    // tokenContract = await connector.attachToContract(tokenContract)
    console.log("Gas Options: " + JSON.stringify(hmy.gasOptions()));
    return tokenContract.methods
      .swapOneXToOne(new BN(swapAmount))
      .send({ gasPrice: 2000000000, gasLimit: 6721900, from: account.address });
  };

  processDividend_one = async () => {
    console.log("in Store: processDividend ");
    const hmy = store.getStore("hmy");
    const account = store.getStore("account");
    const context = store.getStore("web3context");
    var connector = null;

    if (context) {
      connector = context.connector;
      debugger;
    }

    if (!connector) {
      throw new WalletConnectionError("No wallet connected");
    }
    let tokenContract = hmy.client.contracts.createContract(
      require("../abi/onexv2.json"),
      config.addresses.token
    );
    tokenContract = await connector.attachToContract(tokenContract);
    console.log("Gas Options: " + JSON.stringify(hmy.gasOptions()));
    return tokenContract.methods.processDividend().send({
      gasPrice: 80000000000,
      gasLimit: 6721900,
      from: account.address,
    });
  };

  setupContract = async () => {
    await signInMetamask();
    web3 = new Web3(window.web3.currentProvider);
    const contractFile = require("./OneXV2.json");
    // console.log(contractFile.abi)
    const contractInstance = new web3.eth.Contract(
      contractFile.abi,
      config.addresses.token
    );
    contract = contractInstance;
  };

  getContractInstance = async () => {
    await this.setupContract();
    return contract;
  };

  setupFaucetContract = async () => {
    await signInMetamask();
    web3 = new Web3(window.web3.currentProvider);
    const contractFile = require("./Faucet.json");
    const contractInstance = new web3.eth.Contract(
      contractFile.abi,
      config.addresses.faucet
    );
    faucetContract = contractInstance;
  };

  getBal = async () => {
    await this.setupContract();
    const account = store.getStore("account");

    const value = await contract.methods.balanceOf(account.address).call({
      gasPrice: gasOptions.gasPrice,
      gasLimit: gasOptions.gasLimit,
      from: account.address,
    });
    return value;
  };

  processDividend = async () => {
    await this.setupContract();
    const account = store.getStore("account");
    const value = await contract.methods.processDividend().send({
      gasPrice: gasOptions.gasPrice,
      gasLimit: gasOptions.gasLimit,
      from: account.address,
    });
    return value;
  };

  swapOneX = async (swapAmount) => {
    await this.setupContract();
    const account = store.getStore("account");
    return contract.methods.swapOneXToOne(new BN(swapAmount)).send({
      gasPrice: gasOptions.gasPrice,
      gasLimit: gasOptions.gasLimit,
      from: account.address,
    });
  };

  transferTokens = async (receiver, amount) => {
    await this.setupContract();
    const account = store.getStore("account");
    return contract.methods
      .transfer(receiver, new BN(amount + "000000000000000000"))
      .send({
        gasPrice: gasOptions.gasPrice,
        gasLimit: gasOptions.gasLimit,
        from: account.address,
      });
  };

  useFaucet = async () => {
    await this.setupFaucetContract();
    const account = store.getStore("account");
    return faucetContract.methods.fund(account.address).send({
      gasPrice: gasOptions.gasPrice,
      gasLimit: gasOptions.gasLimit,
      from: account.address,
    });
  };
}

const store = new Store();
const stores = {
  store: store,
  dispatcher: dispatcher,
  emitter: emitter,
};
export default stores;

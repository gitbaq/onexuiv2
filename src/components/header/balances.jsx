import React, { useState, useEffect } from "react";

import {
  Typography
} from '@material-ui/core';

import {
  GET_BALANCES_PERPETUAL_RETURNED
} from '../../constants'

import Store from "../../stores";
const store = Store.store
const emitter = Store.emitter



export default function Balances() {
  const [tokenBalance, setTokenBalance] = useState(0)
  const [token, setToken] = useState(0)

  useEffect(() => {
    const getBalancesReturned = () => {
      const tokens = store.getStore('tokens')
      setToken(tokens[0])
      setTokenBalance((tokens && tokens.length >= 1) ? tokens[0].balance : 0)
    }

    emitter.on(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);

    return () => {
      emitter.removeListener(GET_BALANCES_PERPETUAL_RETURNED, getBalancesReturned);
    }
  }, [])




  return (


    <Typography color="textPrimary" noWrap>{tokenBalance} {token.name}</Typography>

  )
}

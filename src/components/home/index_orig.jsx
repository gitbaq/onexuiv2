import React /*, { useState, useEffect }*/ from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { colors } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      height: "100%",
    },
    backgroundColor: colors.green,
  },

  content: {
    flex: "1",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: colors.red,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.content}`}>
        <Typography variant="h5" className={`${classes.title} title`}>
          HOLD $OneX and earn in $ONE
        </Typography>
        <Typography variant="h3" className={`${classes.title} title`}>
          Revolutionary Auto-staking Rewards
        </Typography>
        <Typography variant="h2" className={`${classes.title} title`}>
          OneX - Amplified Rewards on Harmony ONE
        </Typography>

        <div className={`${classes.rowCard} `}>
          <Button
            variant="outlined"
            color="secondary"
            href="https://viperswap.one/#/swap"
            target="_viperswap"
          >
            Buy on Viperswap
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href="https://www.dextools.io/app/bsc/pair-explorer/"
            target="_dextools"
          >
            Chart on Dextools
          </Button>
        </div>
      </div>
    </div>
  );
}

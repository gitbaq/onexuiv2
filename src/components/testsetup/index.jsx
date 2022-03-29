import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Divider } from "@material-ui/core";

// import Divider from "@material-ui/core/Divider";
import { colors } from "../../theme";
import oneXLogo from "../../assets/v3_white_nocircle.svg";
import "./testsetup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80vw",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  subtitle1: {
    marginTop: "20px",
    fontSize: "30px",
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "center",
    justifyItems: "flex-start",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: colors.white,
  },
  subtitle2: {
    fontSize: "20px",
    fontWeight: "bold",
    justifyContent: "flex-end",
    color: colors.iconGreen,
  },
  subtitle3: {
    fontSize: "30px",
    fontWeight: "bold",
    justifyContent: "flex-end",
    color: colors.iconGreen,
  },
  link: {
    color: colors.remixOrange,
  },
  divider: {
    background:
      "linear-gradient(to right, rgba(135,233,196,1.0) 50%, rgba(79,174,220,1.0) 100%)",
    height: "1px",
  },
}));

export default function TestSetup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="OneX Logo" src={oneXLogo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle"
                  className={`${classes.title}`}
                >
                  Setup instructions for test
                </Typography>
                <Divider className={classes.divider} />
                <br />
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle2}
                >
                  Read this first{" "}
                  <a
                    className={classes.link}
                    href="/whitepaper"
                    target="_whitepaper"
                  >
                    OneX Whitepaper
                  </a>{" "}
                </Typography>

                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 1:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Ensure You have Metamask Browser Extension installed <br />
                  <a
                    className={classes.link}
                    href="https://docs.harmony.one/home/general/wallets/browser-extensions-wallets/metamask-wallet/installing-metamask"
                    target="_addMetamask"
                  >
                    Guide to install and add Metamask
                  </a>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 2:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Ensure You have Harmony Testnet configured in Metamask <br />
                  <a
                    className={classes.link}
                    href="https://docs.harmony.one/home/general/wallets/browser-extensions-wallets/metamask-wallet/adding-harmony"
                    target="_harmonyTestnet"
                  >
                    Guide to configure harmony testnet
                  </a>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 3:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Go to{" "}
                  <a
                    className={classes.link}
                    href="/verifycontract"
                    target="_verifycontract"
                  >
                    Verify Contract
                  </a>{" "}
                  Click Add OneXT to Metamask
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 4:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Connect Your Wallet (top right)
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 5:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Ensure You have ONE tokens (Harmony Testnet) in your metamask
                  wallet
                  <br />
                  <a
                    className={classes.link}
                    href="https://faucet.pops.one/"
                    target="_harmonyFaucet"
                  >
                    Harmony Testnet Faucet Link
                  </a>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 6:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Go to{" "}
                  <a className={classes.link} href="/faucet" target="_faucet">
                    OneX Faucet
                  </a>{" "}
                  and Request Test OneX
                  <br />
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle1}
                >
                  Step 7:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle2}
                >
                  Go to{" "}
                  <a
                    className={classes.link}
                    href="/tokenswap"
                    target="_tokenswap"
                  >
                    Token Swap
                  </a>{" "}
                  click View Balance and notice balance for 3 wallets receiving
                  taxes on OneX transactions (Expense, Liquidity and Staking){" "}
                  <br /> Swap 500000 (Half Million) OneX to ONE
                  <br />
                  Once Confirmation message is received, notice change in the
                  balances of 3 wallets mentioned above.
                </Typography>
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";

import { colors } from "../../theme";
import ButtonBase from "@material-ui/core/ButtonBase";
import tokenomics from "../../assets/tokenomics.jpeg";
import "./whitepaper.css";

// import PageHeader from "../pageHeader";
// import { palette } from '@material-ui/system';
// import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "60vw",
  },

  content: {
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
    },
  },

  icon: {
    fontSize: "60px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "100px",
    },
  },
  link: {
    textDecoration: "none",
  },

  subtitle1: {
    marginTop: "20px",
    fontSize: "20px",
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
  subTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    justifyContent: "flex-end",
    color: colors.iconGreen,
  },
  subTitle3: {
    fontSize: "16px",
    fontWeight: "bold",
    fontStyle: "italic",
    justifyContent: "flex-end",
    color: colors.remixOrange,
  },
  image: {
    width: 500,
    height: 500,
  },
  img: {
    margin: "auto",
    display: "inline-block",
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    borderRadius: "15px",
  },
  divider: {
    background:
      "linear-gradient(to right, rgba(135,233,196,1.0) 50%, rgba(79,174,220,1.0) 100%)",
    height: "1px",
  },
  gridCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Whitepaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <PageHeader
        title="OneMax Whitepaper (Full Version of Whitepaper will be released at launch)"
        subtitle="OneMax: Amplified rewards in $ONE! "
      /> */}
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.content} sm container>
            <Box sm='8'>
              <div className={classes.title}>OneMax Whitepaper</div>
              <Divider className={classes.divider} />

              <div className={`${classes.subTitle} subTitle`}>
                <div className={classes.subtitle1}>Concept</div>
                The OneMax is a new concept in crypto. <br />
                <br />
                {/* <div className={classes.subTitle3}>
                  How do you create sustainable and constantly-growing rewards?
                </div> */}
                <br />
                Hold OneMax for a sustainable passive income.
                <br />
                {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                  <path
                    d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                    style={{ stroke: "none", fill: colors.harmonyGradient }}
                  ></path>
                </svg> */}
                {/* <div id="wave"></div> */}
                <br />
                {/* <div className={classes.subtitle1}>Harmony Grant</div>
                OneMax has been awarded a $50K USD grant from Harmony Protocol.
                This grant will be used to establish initial liquidity and other
                expenses involved with launching and maintaining the project.
                This also gives the team a direct line of communication to the
                Harmony team for assistance with technical issues to ensure a
                successful launch and bright future for OneMax. */}
                <br />
                <div className={classes.subtitle1}>Tokenomics</div>
                3%- Total Taxes on all transactions
                <br />
                Invested to maximize rewards for holders
                <br />
                <br />
                {/* <Grid item className={classes.gridCenter}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt='Tokenomics'
                      src={tokenomics}
                    />
                  </ButtonBase>
                </Grid> */}
                <div className={classes.subtitle1}>
                  Anti-Whale &amp; Bot features
                </div>
                Max wallet - 1%
                <br />
                Max transaction - 0.25% (could be lower during launch)
                <br />
                Cool down period - 60 minutes (during launch)
                <br />
                <div className={classes.subtitle1}>
                  Method of $ONE-Rewards Generation
                </div>
                {/* A portion of collected taxes is invested by OneMax Investment Team
                for optimal yield. Earnings will be harvested periodically. This
                gives the pool more time to generate higher APY by compounding,
                thus amplifying rewards. */}
                <span className={classes.subTitle3}>%age</span> of each
                transaction is placed into a staking pool that is managed by
                OneMax for optimal yield. <br />
                Earnings will be harvested periodically. This gives the pool
                more time to generate higher APY by compounding throughout the
                period, thus amplifying rewards. <br />A majority of the
                earnings will be distributed to holders as $ONE proportionally
                to their OneMax holdings. A minor part will be reinvested, by
                this action alone, we are able to generate growth of the fund,
                leading to sustainable, constantly-growing rewards completely
                unaffected by volume!
                <br />
                <div className={classes.subtitle1}>Core Beliefs</div>
                {/* The OneMax team consists of community members who took over when
                the founding team departed. <br />
                Every aspect of OneMax has been constructed with what we, as
                investors, want in a project to develop wealth through long-term
                holdings. <br />
                OneMax is effectively a wish list of the best features of
                projects we have seen compiled into one. By building OneMax from
                the perspective of an investor, we believe the project will be
                successful and beneficial to holders in the long-term.
                <br /> */}
                <span className={classes.subTitle3}>
                  With our innovative method of rewards generation, the longer
                  we hold, the more we gain.
                </span>
                <br />
                <div className={classes.subtitle1}>Community</div>
                {/* As the team was founded by members of the community, we place a
                strong emphasis on community involvement. <br />A true DAO
                voting system is planned at some point in the future. The team
                is committed to maintaining active, transparent and honest
                communication with the community. */}
                <br />
                <div className={classes.subtitle1}>Security</div>
                {/* The OneMax team is internally doxxed. <br />A multisig Gnosis
                safe wallet with a majority consensus is used for interaction
                with the Harmony team for distribution of the grant funds.{" "}
                <br />
                Investment pools will be intensively analyzed by the team before
                a decision is made to stake in it. <br /> */}
                <div className={classes.subTitle3}>
                  The highest level of care possible will be taken by the team
                  to ensure the safety of the pooled assets.
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import SwapHorizontalCircleRoundedIcon from "@material-ui/icons/SwapHorizontalCircleRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded";
import GroupIcon from "@material-ui/icons/Group";
import MapRoundedIcon from "@material-ui/icons/MapRounded";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import SwapHorizRoundedIcon from "@material-ui/icons/SwapHorizRounded";
import { withRouter } from "react-router-dom";

import "./appbar.css";
import oneXLogo from "../../assets/v3_white_nocircle.svg";
import Header from "../header";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background:
      "linear-gradient(30deg,rgba(241, 245, 249, 1.0)10%, rgba(241, 245, 249, 0.1)100%)",
  },

  title: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    // minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const PrimarySearchAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appBar} elevation={1}>
        <Toolbar
          className={classes.toolbar}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <div>
            <img alt="OneX logo" src={oneXLogo} className="logo" />
          </div>
          {/* <Tooltip title="BBH Swap">
            <IconButton
              aria-label="BBH Swap"
              className="appBarLabel"
              onClick={() => handleButtonClick("/swap")}
            >
              <SwapHorizontalCircleRoundedIcon />
              <div className="appBarLabel">BBH Swap</div>
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Verify Contract">
            <IconButton
              aria-label="Account"
              className="appBarLabel"
              onClick={() => handleButtonClick("/verifycontract")}
            >
              <DoneAllRoundedIcon />
              <div className="appBarLabel">Verify Contract</div>
            </IconButton>
          </Tooltip>
          <div className={classes.grow} />
          <div className={`${classes.sectionDesktop}`}>
            <Tooltip title="Home">
              <IconButton
                aria-label="Home"
                color="inherit"
                onClick={() => handleButtonClick("/home")}
              >
                <HomeRoundedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Whitepaper">
              <IconButton
                aria-label="Whitepaper"
                color="inherit"
                onClick={() => handleButtonClick("/whitepaper")}
              >
                <AssignmentRoundedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Frequently Asked Questions">
              <IconButton
                aria-label="FAQ"
                color="inherit"
                onClick={() => handleButtonClick("/faq")}
              >
                <ContactSupportRoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Team">
              <IconButton
                aria-label="Team"
                color="inherit"
                onClick={() => handleButtonClick("/team")}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Roadmap">
              <IconButton
                aria-label="Roadmap"
                color="inherit"
                onClick={() => handleButtonClick("/roadmap")}
              >
                <MapRoundedIcon />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem />

            <Tooltip title="Faucet">
              <IconButton
                aria-label="Faucet"
                color="inherit"
                onClick={() => handleButtonClick("/faucet")}
              >
                <GetAppIcon />
                <div className="appBarLabel">Faucet</div>
              </IconButton>
            </Tooltip>
            <Tooltip title="Token Swap">
              <IconButton
                aria-label="Token Swap"
                color="inherit"
                onClick={() => handleButtonClick("/tokenswap")}
              >
                <SwapHorizRoundedIcon />
                <div className="appBarLabel">Token Swap</div>
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
          </div>
          &nbsp;&nbsp;
          <Header />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(PrimarySearchAppBar);

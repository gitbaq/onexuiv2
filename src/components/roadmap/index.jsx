import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PageHeader from "../pageHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import Divider from "@material-ui/core/Divider";

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
}));

export default function Roadmap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader
        title="Roadmap (Full Roadmap will be released at launch)"
        subtitle="What's ahead "
      />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <DoneOutlineRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Testnet" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DoneOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Mainnet" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DoneOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="DAO" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DoneOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="1,000 daily active users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DoneOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="10,000 daily active users" />
        </ListItem>
      </List>
    </div>
  );
}

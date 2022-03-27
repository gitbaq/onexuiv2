import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import MetamaskConnect from "../metamask";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "15px 15px 20px 20px",
  },

  title: {
    // padding: '5px 0 0 0',
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "0",
    },
  },
  subTitle: {
    // padding: '0 0 12px 0',
    fontSize: "12px",
    [theme.breakpoints.up("sm")]: {
      // paddingBottom: '12px'
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={`${classes.title} title`} sm={12}>
        <Typography variant={"h3"} className={`${classes.title} title`}>
          {props.title}
        </Typography>
        {/* <hr /> */}
        <Typography variant={"h3"} className={`${classes.subTitle} subTitle`}>
          {props.subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
}

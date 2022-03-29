import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FaqCard from "./faqCard";
import faqData from "./faqData";
// import Card from '@material-ui/core/Card';
// import PageHeader from "../pageHeader";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import { colors } from "../../theme";

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
    width: "80%",
  },
  content: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
      width: "100%",
    },
  },
  cards: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  divider: {
    background:
      "linear-gradient(to right, rgba(135,233,196,1.0) 50%, rgba(79,174,220,1.0) 100%)",
    height: "1px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: colors.white,
  },
}));

export default function Faq() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.content} sm container>
            <Box sm="12" className={classes.cards}>
              <div className={classes.title}>Frequently Asked Questions</div>
              <Divider className={classes.divider} />
              {faqData.map((item) => (
                <FaqCard key={item.id} item={item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

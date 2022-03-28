import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
// import Divider from "@material-ui/core/Divider";
import { colors } from "../../theme";
import oneXLogo from "../../assets/v3_white_nocircle.svg";
import "./home.css";

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
    fontSize: "40px",
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "center",
    justifyItems: "flex-start",
  },
  title: {
    fontSize: "60px",
    fontWeight: "bold",
    color: colors.white,
  },
  subtitle2: {
    fontSize: "40px",
    fontWeight: "bold",
    justifyContent: "flex-end",
    color: colors.iconGreen,
  },
}));

export default function Home() {
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
                  className={`${classes.subtitle1}`}
                >
                  Not interested in NFTs?
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.subtitle2}
                >
                  Fed up of over-complicated <br />
                  (and underperforming) <br />
                  Defi protocols ?
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.subtitle1}
                >
                  In Love with One and Harmony chain ?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                  className={classes.subtitle2}
                >
                  Here is what we offer:{" "}
                  {/* <span className={classes.subtitle1}>OneX</span> */}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: "190px" }}
                  className="animate-charcter"
                >
                  OneX
                </Typography>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  className={classes.subtitle2}
                >
                  <ListItem button style={{ fontSize: "60px" }}>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon className={classes.subtitle1} />
                    </ListItemIcon>
                    <ListItemText
                      primary="a simple and efficient reward
                  token, launching on Harmony"
                      classes={{ primary: classes.subtitle1 }}
                    />
                  </ListItem>
                  {/* <Divider /> */}
                  <ListItem button>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon className={classes.subtitle1} />
                    </ListItemIcon>
                    <ListItemText
                      primary="rewards are provided in $One"
                      classes={{ primary: classes.subtitle1 }}
                    />
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon className={classes.subtitle1} />
                    </ListItemIcon>
                    <ListItemText
                      primary="a small market cap with high
                  potential"
                      classes={{ primary: classes.subtitle1 }}
                    />
                  </ListItem>
                </List>
                <Typography variant="subtitle1" className={classes.subtitle1}>
                  OneX - Amplify ONE rewards
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

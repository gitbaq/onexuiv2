import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import oneXLogo from "../../assets/v3_white_nocircle.svg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "60vw",
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
                <Typography gutterBottom variant="subtitle1">
                  Not interested in Nft ?
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Fed up with over complicated ( and underperforming) Defi
                  protocols ?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  In Love with One and Harmony chain ?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Here is what we offer: OneX
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="a simple and efficient reward
                  token, launching on Harmony"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="rewards are provided in $One" />
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <DoneOutlineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="a small market cap with high
                  potential"
                    />
                  </ListItem>
                </List>
                <Typography variant="subtitle1">
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

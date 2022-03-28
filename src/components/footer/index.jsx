import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import RedditIcon from "@material-ui/icons/Reddit";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.darkGray,
    width: "100%",
    minHeight: "60px",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>&copy; 2022 OneX</div>
    </div>
  );
}

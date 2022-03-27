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
    // backgroundColor: "rgb(28,28,28)",
    color: colors.darkGray,
    width: "100%",
    background:
      "linear-gradient(30deg,rgba(241, 245, 249, 1.0)10%, rgba(241, 245, 249, 0.1)100%)",
  },

  title: {
    padding: "24px 0 12px 0",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "12px",
    },
  },
  subTitle: {
    padding: "0 0 12px 0",
    fontSize: "12px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "12px",
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
}));

export default function Socials(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Let's start a conversation:&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://twitter.com/OneXToken" target="_twitter">
        <TwitterIcon className="twitterIcon" />
      </a>
      &nbsp;&nbsp;
      <a href="https://t.me/OnexMainTG" target="_telegram">
        <TelegramIcon className="telegramIcon" />
      </a>
      &nbsp;&nbsp;
      <a href="https://www.reddit.com/r/OneXTokenHRC/" target="_reddit">
        <RedditIcon className="redditIcon" />
      </a>
    </div>
  );
}

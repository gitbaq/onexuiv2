import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { colors } from "../../theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import RedditIcon from "@material-ui/icons/Reddit";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      minHeight: "50px",
    },
  },
}));

export default function Socials(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Let's start a conversation:&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='https://twitter.com/OneMaxToken' target='_twitter'>
        <TwitterIcon className='twitterIcon' />
      </a>
      &nbsp;&nbsp;
      <a href='https://t.me/OneMaxMainTG' target='_telegram'>
        <TelegramIcon className='telegramIcon' />
      </a>
      &nbsp;&nbsp;
      <a href='https://www.reddit.com/r/OneMaxTokenHRC/' target='_reddit'>
        <RedditIcon className='redditIcon' />
      </a>
    </div>
  );
}

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
// import background from "assets/blobs.svg";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import RedditIcon from "@material-ui/icons/Reddit";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Box from "@material-ui/core/Box";
import { colors } from "../../theme";
import avatar from "assets/photos/avatar.png";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "216px",
  },
  cardActions: {},

  background: {
    // backgroundImage: `url(${background})`,
    background: "rgb(228,227,227)",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: colors.white,
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: colors.remixOrange,
  },
  description: {
    fontSize: "14px",
    color: colors.iconGreen,
  },
  media: {
    width: "288px",
    justifyContent: "center",
  },
  divider: {
    background:
      "linear-gradient(to right, rgba(135,233,196,1.0) 50%, rgba(79,174,220,1.0) 100%)",
    height: "1px",
  },
}));

const defaultProps = {
  bgcolor: colors.white,
  m: 1,
  border: 1,
  style: { width: "288" },
};

export default function TeamCard(props) {
  const classes = useStyles();
  const data = props.item;

  return (
    <div>
      <Box display="flex" justifyContent="center">
        {/* <Box borderRadius="50%" {...defaultProps} />
      <Box borderRadius="borderRadius" {...defaultProps} /> */}
        <Box borderRadius={5} {...defaultProps}>
          <Card className={`${classes.root} ${classes.background}`}>
            <CardActionArea className={`${classes.content}`}>
              <CardMedia className={`${classes.media}`} image={avatar}>
                <svg
                  width="288"
                  height="216"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M263.998 1c17.876 21.62 25.238 37.742 22.417 48.915a19.819 19.819 0 0 1-5.377 9.178c-8.585 8.602-25.397 13.605-42.962 18.824-20.988 6.281-44.772 13.39-59.487 28.146-14.715 14.757-21.795 38.657-28.032 59.748-6.829 23.09-13.263 44.847-27.942 48.59-15.199 3.906-39.503-11.265-74.597-46.484C12.925 132.698-2.256 108.097 1.58 92.71 3.795 83.813 12.47 77.883 24 73.054"
                    stroke="url(#bow-partial_svg__a)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="bow-partial_svg__a"
                      x1="243.2"
                      y1="-28.338"
                      x2="43.935"
                      y2="170.117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(135,233,196,1.0)" />
                      <stop offset="1" stopColor="rgba(79,174,220,1.0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </CardMedia>

              <CardContent>
                <div className={classes.title}>{data.name}</div>
                <br /> <div className={classes.subtitle}>{data.role}</div>
                <br />{" "}
                <div className={classes.description}>{data.description}</div>
                <br />
                <Divider className={classes.divider} />
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardActions}>
              <a href={`https://twitter.com/${data.twitter}`} target="_twitter">
                {" "}
                <TwitterIcon className="twitterIcon" fontSize="large" />
              </a>
              <a href={`https://t.me/${data.telegram}`} target="_telegram">
                {" "}
                <TelegramIcon color="secondary" fontSize="large" />
              </a>
              <a
                href={`https://www.reddit.com/r/${data.reddit}`}
                target="_reddit"
              >
                {" "}
                <RedditIcon color="error" fontSize="large" />
              </a>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

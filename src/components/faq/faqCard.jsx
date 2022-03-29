import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import background from "./blobs.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: "300px",
    marginTop: "5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  background: {
    backgroundImage: `url(${background})`,
  },
}));

export default function FaqCard(props) {
  const data = props.item;

  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${classes.background}`}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data.id}
          </Avatar>
        }
        title={data.question}
        subheader={data.date}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.reply}
        </Typography>
      </CardContent>
    </Card>
  );
}

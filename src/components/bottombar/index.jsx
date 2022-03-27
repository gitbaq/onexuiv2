import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

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

  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  bottomNav: {
    width: "100%",
  },
}));

const BottomBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { history } = props;
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <Grid container className={`${classes.root}`} spacing={2}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeRoundedIcon />}
          onClick={() => handleButtonClick("/home")}
        />
        <BottomNavigationAction
          label="Whitepaper"
          icon={<AssignmentRoundedIcon />}
          onClick={() => handleButtonClick("/whitepaper")}
        />
        <BottomNavigationAction
          label="FAQs"
          icon={<ContactSupportRoundedIcon />}
          onClick={() => handleButtonClick("/faq")}
        />
        <BottomNavigationAction
          label="Team"
          icon={<ContactSupportRoundedIcon />}
          onClick={() => handleButtonClick("/team")}
        />
        <BottomNavigationAction
          label="Roadmap"
          icon={<ContactSupportRoundedIcon />}
          onClick={() => handleButtonClick("/roadmap")}
        />
      </BottomNavigation>
      &copy; 2022 OneX
    </Grid>
  );
};

export default withRouter(BottomBar);

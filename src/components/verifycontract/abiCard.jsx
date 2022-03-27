import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { orange } from "@material-ui/core/colors";
import background from "assets/blobs.svg";
import { colors } from "../../theme";
import { rgb } from "polished";
import Store from "../../stores";

const Web3 = require("web3");

const HMY_RPC_URL = "https://api.s0.b.hmny.io";

const web3 = new Web3(HMY_RPC_URL);
const { store } = Store;

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: "5px",
    width: "100%",
    border: "1px solid white",
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
    backgroundColor: orange[500],
    color: colors.black,
  },
  background: {
    backgroundImage: `url(${background})`,
  },

  red: {
    backgroundColor: colors.red,
    flex: 1,
    display: "flex",
    width: "100%",
  },
  blue: {
    backgroundColor: colors.blue,
    background: colors.blue,
    flex: 1,
    display: "flex",
    width: "100%",
  },
  green: {
    // backgroundColor: colors.green,
    flex: 1,
    // display: 'flex',
    width: "100%",
    justifyContent: "none",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      width: "95vw",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    borderRadius: "5px",
  },
  remixBlue: {
    backgroundColor: colors.remixBlue,
  },
  dataResult: {
    color: rgb(163, 56, 53),
  },
}));

export default function AbiCard(props) {
  const data = props.item;
  const inputs = data.inputs;
  const address = props.address;
  const write = props.write;
  // const token = props.token;
  const contract = new web3.eth.Contract(props.abi, props.token);
  var args = [];

  const classes = useStyles();

  const getData = async (event) => {
    let error;
    setNewData("...");
    let res;
    try {
      if (inputs && inputs.length > 0) {
        // debugger;
        if (write) {
          let contractInstance = await store.getContractInstance();
          res = await contractInstance.methods[data.name]
            .apply(null, args)
            .send({
              gasPrice: 80000000000,
              gasLimit: 6721900,
              from: address,
            });
        } else {
          contract.methods[data.name].apply(null, args).call((err, result) => {
            error = err
              ? err
              : setNewData(data.name + " = " + JSON.stringify(result));
          });
        }
        setNewData(data.name + " = " + JSON.stringify(res));
      } else {
        contract.methods[data.name]().call((err, result) => {
          error = err
            ? err
            : setNewData(data.name + " = " + JSON.stringify(result));
        });
      }
    } catch {
      setNewData("Error: " + error);
    }
  };

  function handleUpdateArgs(e) {
    args[e.target.id] = e.target.value;
    // console.log(">>" + args);
  }

  const [newData, setNewData] = useState("...");
  var index = 0;

  return (
    <form noValidate autoComplete="off">
      <Card
        className={`${classes.root} ${classes.green} ${classes.background}`}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {data.type.substring(0, 1)}
            </Avatar>
          }
          title={data.name}
          subheader={data.type}
        />

        <CardContent>
          <Typography variant="body2" className={classes.dataResult}>
            {newData}
          </Typography>

          {inputs &&
            inputs.map((item) => (
              <TextField
                key={item.name}
                label={item.name + " (" + item.type + ")"}
                id={index++ + ""}
                defaultValue=""
                variant="filled"
                size="small"
                onChange={handleUpdateArgs}
              />
            ))}
        </CardContent>

        <CardActions disableSpacing>
          <Button
            className={`${classes.button} ${classes.remixBlue}`}
            variant="contained"
            color="secondary"
            onClick={getData}
          >
            {data.name}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

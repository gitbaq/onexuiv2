import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import background from "./blobs.svg";
import { colors } from '../../theme';
import { rgb } from 'polished';


const Web3 = require('web3');


const HMY_RPC_URL = 'https://api.s0.b.hmny.io';

const web3 = new Web3(HMY_RPC_URL);


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        marginTop: '5px',
        width: "100%",
        border: "1px solid white"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
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
        display: 'flex',
        width: '100%',
    },
    blue: {
        backgroundColor: colors.blue,
        background: colors.blue,
        flex: 1,
        display: 'flex',
        width: '100%',
    },
    green: {
        // backgroundColor: colors.green,
        flex: 1,
        // display: 'flex',
        width: '100%',
        justifyContent: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            width: '95vw',

        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        borderRadius: "5px"
    },
    remixBlue: {
        backgroundColor: colors.remixBlue
    },
    dataResult: {
        color: rgb(163, 56, 53),
    }
}));

export default function AbiCard(props) {

    const data = props.item;
    const inputs = data.inputs;
    const address = props.address;
    const token = props.token;
    const contract = new web3.eth.Contract(props.abi, props.token);


    const classes = useStyles();

    const getData = (event) => {
        let error;
        try {
            console.log("Calling: " + data.name + " " + token + " " + address);
            if (data.name === 'allowance') {
                // contract.methods[data.name](address, token).call((err, result) => { error = err ? err : setNewData(data.name + " = " + JSON.stringify(result)) })
                const inputs = [

                    token, address

                ];
                var args = new Array();
                console.log("Params " + JSON.stringify(inputs))
                // contract.methods[data.name](token, address).call({ from: address })
                contract.methods[data.name].apply(null, args).call({ from: address })
                    .then(function (result) {
                        console.log("Result: " + result);
                        setNewData(data.name + " = " + JSON.stringify(result))

                    });
            }
            else {
                contract.methods[data.name]().call((err, result) => { error = err ? err : setNewData(data.name + " = " + JSON.stringify(result)) })
            }
        } catch {
            console.log("Something Wrong Happened..." + error)
        }


    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [newData, setNewData] = useState('...');


    return (


        <Card className={`${classes.root} ${classes.green} ${classes.background}`}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {data.type.substring(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.name}
                subheader={JSON.stringify(data.type)}
            />

            <CardContent >
                <Typography variant="body2" className={classes.dataResult} component="p">
                    {newData}
                </Typography>
                <form noValidate autoComplete="off">
                    <CardContent>
                        {/* {inputs &&
                            <Typography >
                                Inputs:
                            </Typography>
                        } */}
                        {inputs &&
                            inputs.map((item) => (
                                <TextField
                                    label={item.name}
                                    id={item.name}
                                    defaultValue=""
                                    variant="filled"
                                    size="small"
                                />
                            ))
                        }
                    </CardContent>
                </form>
            </CardContent>
            <CardActions disableSpacing>
                <Button className={`${classes.button} ${classes.remixBlue}`} variant="contained" color="secondary" onClick={getData}>Get {data.name}</Button>
            </CardActions>

        </Card>
    );
}

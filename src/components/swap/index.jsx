import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Grid,
    Typography,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { getEffectiveTypeRoots } from "typescript";
import PageHeader from "../pageHeader";




const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    card: {
        flex: '1',
        height: '25vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '0px',
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
            minWidth: '20%',
            minHeight: '50vh',
        }
    },
}));

export default function Swap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PageHeader title='Swap' subtitle='Baby Harmony to OneX' />
            <Card className={`${classes.card}`} >

                <div>
                    <Button variant="outlined" color="primary">Connect BBH Wallet</Button>
                    <Button variant="outlined" color="secondary">Connect OneX Wallet</Button>
                </div>
            </Card>

        </div>
    )
}

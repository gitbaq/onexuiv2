import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
} from '@material-ui/core';
import { colors } from '../../theme'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'




const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
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

    title: {
        padding: '24px 0 12px 0',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px'
        }
    },
    subTitle: {
        padding: '0 0 12px 0',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px'
        }
    },
    icon: {
        fontSize: '60px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '100px',
        }
    },
    link: {
        textDecoration: 'none'
    }
}));

export default function Swap() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <Card className={`${classes.card}`} >
                <div>
                    <AttachMoneyIcon className={`${classes.icon} icon`} />
                    <Typography variant={'h3'} className={`${classes.title} title`}>Swap</Typography>
                    <Typography variant={'h6'} className={`${classes.subTitle} title`}>(BBH to OneX Tokens)</Typography>
                </div>
                <div>
                    <Button variant="outlined" color="primary">Connect BBH Wallet</Button>
                    <Button variant="outlined" color="secondary">Connect OneX Wallet</Button>
                </div>
            </Card>

        </div>
    )
}

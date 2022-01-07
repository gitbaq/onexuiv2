import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
} from '@material-ui/core';
import { colors } from '../../theme'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import ColoredLoader from '../loader/coloredLoader'
import Snackbar from '../snackbar'



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
    gradient: {
        backgroundColor: '#00AEE9',

        // backgroundColor: colors.white,
        // '&:hover': {
        //     backgroundColor: '#00AEE9',
        //     '& .title': {
        //         color: colors.white,
        //     },
        //     '& .icon': {
        //         color: colors.white
        //     }
        // },
        '& .title': {
            color: colors.white,
        },
        '& .icon': {
            color: colors.white
        },
    },
    green: {
        backgroundColor: colors.white,
        '&:hover': {
            // backgroundColor: colors.compoundGreen,
            '& .title': {
                color: colors.white,
            },
            '& .icon': {
                color: colors.white
            }
        },
        '& .title': {
            color: colors.compoundGreen,
        },
        '& .icon': {
            color: colors.compoundGreen
        },
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

export default function Whitepaper() {
    const classes = useStyles();
    const [snackbarMessage, setSnackbarMessage] = useState(null)
    const [snackbarType, setSnackbarType] = useState(null)
    const [loading, setLoading] = useState(false)

    const renderSnackbar = () => {
        return <Snackbar type={snackbarType} message={snackbarMessage} open={true} />
    }



    return (
        <div className={classes.root}>
            <Card className={`${classes.card} ${classes.gradient}`} >
                <AttachMoneyIcon className={`${classes.icon} icon`} />
                <Typography variant={'h3'} className={`${classes.title} title`}>OneX</Typography>
                <Typography variant={'h6'} className={`${classes.subTitle} title`}>(Whitepaper    )</Typography>
            </Card>
            {loading && <ColoredLoader />}
            {snackbarMessage && renderSnackbar()}
        </div>
    )
}

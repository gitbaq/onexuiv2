import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
        borderRadius: '5px',
        transition: 'background-color 0.2s linear',
        [theme.breakpoints.up('sm')]: {
            padding: '25px',
        }
    },


    title: {
        padding: '24px 0 12px 0',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px',
            padding: '20px'

        }
    },
    subTitle: {
        padding: '0 0 12px 0',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '12px',
            padding: '20px'

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

export default function Roadmap() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <PageHeader title="Roadmap" subtitle="What's ahead " />
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} justifyContent="center">
                    <Box sm="8">
                        <Typography className={`${classes.title} title`}>
                            Roadmap<br />
                        </Typography>

                        <Typography className={`${classes.subTitle} subtitle`}>

                            Roadmap
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

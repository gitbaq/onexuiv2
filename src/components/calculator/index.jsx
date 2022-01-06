import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        minWidth: '100vw',
        // minHeight: '100vh',
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(16),
            // height: theme.spacing(16),
        },
    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Paper elevation={2}>
                <Typography variant="h4">Simple Paper Nothing else</Typography>
            </Paper>
        </div>
    );
}

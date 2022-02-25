import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PageHeader from "../pageHeader";
import TeamCard from "./teamCard"
import teamData from './teamData';
import { colors } from '../../theme';
import background from "../../assets/blobs.svg";







const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${background})`,

    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },







}));

export default function Team() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <PageHeader title="Team" subtitle="OneX Core Team" />
            <Grid container spacing={1} direction="row"
                justifyContent="center"
                alignItems="center">
                {teamData.map(filteredItems => (
                    <Grid item xs={filteredItems.weight}>
                        <TeamCard key={filteredItems.id} item={filteredItems} className={classes.paper} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import PageHeader from "../pageHeader";
import TeamCard from "./teamCard"

import coreTeamData from './coreTeamData';
import daoTeamData from './daoTeamData';

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
            <PageHeader title="Team" subtitle="OneX Team" />
            <Grid container spacing={1} direction="row"
                justifyContent="center"
                alignItems="center">
                {coreTeamData.map(filteredItems => (
                    <Grid key={filteredItems.id} item xs={3}>
                        {filteredItems.name}:{filteredItems.role} 
                        <TeamCard key={filteredItems.id} item={filteredItems} className={classes.paper} />
                    </Grid>
                ))}
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={1} direction="row"
                justifyContent="center"
                alignItems="center">
                {daoTeamData.map(filteredItems => (
                    <Grid key={filteredItems.id} item xs={3}>
                        <TeamCard key={filteredItems.id} item={filteredItems} className={classes.paper} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

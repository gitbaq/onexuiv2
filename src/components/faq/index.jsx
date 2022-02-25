import React from "react";

import { makeStyles } from '@material-ui/core/styles'
import FaqCard from "./faqCard";
import faqData from './faqData';
import Card from '@material-ui/core/Card';
import PageHeader from "../pageHeader";






const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        // marginBottom: '5px',

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
            minWidth: '100%',
        }
    },
    gradient: {
        // background: colors.harmonyGradient,

    },
    title: {
        justifyContent: 'center',
    }

}));


export default function Faq() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PageHeader title='Frequently Asked Questions' subtitle='Answers to your most common queries' />
            <Card className={`${classes.card} ${classes.gradient}`} >
                {faqData.map((item) => (
                    <FaqCard key={item.id} item={item} />
                ))}
            </Card>
        </div>
    );
}

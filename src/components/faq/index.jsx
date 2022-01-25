import React from "react";

import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../theme'
import FaqCard from "./faqCard";




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
        justifyContent: 'none',
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
        backgroundColor: colors.white,

    },
    title: {
        justifyContent: 'center',
    }

}));


export default function Faq() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Card className={`${classes.card} ${classes.gradient}`} >
                <Typography variant={'h2'} className={`${classes.title}`} >Frequently Asked Questions</Typography>
            </Card> */}
            <FaqCard></FaqCard>
            {/* <FaqCard></FaqCard> */}

        </div>
    );
}

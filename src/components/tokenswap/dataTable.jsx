import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { colors } from '../../theme'


const useStyles = makeStyles({
    table: {
        width: "100%",
        maxHeight: 440,
    },
    header: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.remixOrange,
    },
    upperText: {

        color: colors.remixBlue,

    },
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 400,
    },
});



export default function DataTable(props) {
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    const rows = props.rows ? props.rows : [];
    let index = 0;
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" size='small'>
                    <TableHead>
                        <StyledTableRow >
                            <TableCell className={classes.header}>&nbsp;</TableCell>
                            <TableCell className={classes.header}>Wallet</TableCell>
                            <TableCell align="right" className={classes.header}>OneX</TableCell>
                            <TableCell align="right" className={classes.header}>One</TableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={index++} style={{ backgroundColor: (!row.oneX && !row.one) ? colors.harmonyGradient : 'white' }}>
                                <TableCell align="right">{row.date}</TableCell>

                                <TableCell component="th" scope="row" className={`${classes.header} ${classes.upperText}`}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.oneX}</TableCell>
                                <TableCell align="right">{row.one}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}


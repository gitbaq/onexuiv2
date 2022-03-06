import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

    },
    header: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.remixOrange,
    },
    upperText: {

        color: colors.remixBlue,

    }
});



export default function DataTable(props) {
    const classes = useStyles();
    const rows = props.rows ? props.rows : [];
    let index = 0;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.header}>Wallet</TableCell>
                        <TableCell align="right" className={classes.header}>OneX</TableCell>
                        <TableCell align="right" className={classes.header}>One</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={index++}>
                            <TableCell component="th" scope="row" className={`${classes.header} ${classes.upperText}`}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.oneX}</TableCell>
                            <TableCell align="right">{row.one}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


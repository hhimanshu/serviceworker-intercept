import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(property, value) {
    return { property, value };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function UserTable({ user }) {
    const classes = useStyles();
    const userProperties = Object.entries(user).map(([key, value]) => createData(key, value))
    console.log(userProperties)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Property</StyledTableCell>
                        <StyledTableCell>Value</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userProperties.map((row, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row">
                                {row.property}
                            </StyledTableCell>
                            <StyledTableCell>{ !row.value ? "" : row.value.toString()}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { withStyles } from '@material-ui/styles';
import Avatar from '@mui/material/Avatar';
import Pagination from "@material-ui/lab/Pagination";
import { FormoutStyles } from '../styles/jss/TableStyles'



const UsersTable = (props) => {

    const { data, classes, pageNumber, totalPages, setPageNumber } = props
    return (
        <div>
            <Table className={classes.table}>
                <TableHead style={{ backgroundColor: "#F4F4F4" }}>
                    <TableRow>
                        <TableCell className={classes.cellHead1}>S.No</TableCell>
                        <TableCell className={classes.cellHead1}>Name</TableCell>
                        <TableCell className={classes.cellHead1}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.length > 0
                        ? data.map((item, i) => (
                            <TableRow key={item.id + "ff"}>
                                <TableCell
                                    className="small-content-formout"
                                    component="th"
                                    scope="row"
                                >
                                    {item.hasOwnProperty('id') ? item.id : '-'}
                                </TableCell>
                                <TableCell align="left" className="small-content-formout">
                                    <div className='name-cell'>
                                        <span>
                                            <Avatar alt={`${item.hasOwnProperty('first_name') ? item.first_name : ''}`} src={`${item.hasOwnProperty('avatar') ? item.avatar : ""}`} />
                                        </span>
                                        &nbsp; &nbsp;
                                        <span>
                                            {`${item.hasOwnProperty('first_name') ? item.first_name : "-"} ${item.hasOwnProperty('last_name') ? item.last_name : '-'}`}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell align="left" className="small-content-formout">
                                    {item.hasOwnProperty('email') ? item.email
                                        : '-'}
                                </TableCell>
                            </TableRow>
                        ))
                        : null}
                </TableBody>
            </Table>
            <div className={classes.pagination}>
                <Pagination
                    className={classes.paginationBorder}
                    count={totalPages}
                    onChange={(event, val) => {
                        setPageNumber(val)
                    }}
                    page={pageNumber}
                />
            </div>
        </div>
    )
}

export default withStyles(FormoutStyles)(UsersTable);
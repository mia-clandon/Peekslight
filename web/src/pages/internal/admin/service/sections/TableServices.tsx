import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDeleteServiceMutation, useServicesListQuery} from "../../../../../generated/graphql";
import {EditDeleteServiceButtons} from "../blocks/EditDeleteServiceButtons";

export default function TableServices() {
    const [{data, error, fetching}] = useServicesListQuery();

    if (!fetching && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }

    return (
        <TableContainer component={Paper}>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Table sx={{minWidth: 650}} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Категория</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data!.servicesList.map((service) => (
                            <TableRow
                                key={service.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {service.title}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {service.category}
                                </TableCell>
                                <TableCell align="right">{service.price}</TableCell>
                                <TableCell align="right">
                                  <EditDeleteServiceButtons id={service.id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}

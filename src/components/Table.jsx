import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    {},
    { field: 'firstName', headerName: 'Name', width: 200 },
    {
        field: 'status', headerName: 'Status', width: 200,
        valueGetter: (params) => {
            if (params.row.status) {
                return <Button color="success">Active</Button>
            }
            if (!params.row.status) {
                return <Button color="primary">Inactive</Button>
            }
        }
    },
];

const rows = [
    { id: 1, status: true, firstName: 'Jon', age: 35 },
    { id: 2, status: false, firstName: 'Jessica', age: 42 }
];


export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

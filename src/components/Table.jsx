import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import Badge from '@mui/material/Badge';
import { Chip } from '@mui/material';


const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        status: true,
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        status: false,
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        status: false,
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        status: true,
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        status: true,
        city: 'Charleston',
        state: 'South Carolina',
    },
];

const Example = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName',
                header: 'Name',
            },
            {
                header: 'Status',
                accessorFn: (row) => {
                    if (row.status) {
                        return <Chip label="Active" color="success" />
                    }
                    return <Chip label="InActive" color="error" />
                }
            }
        ],
        [],
    );

    return <MaterialReactTable
        toggleFullScreen={false}
        toggleSelectAll={false}
        toggleVisibility={false}
        enableColumnActions={false}
        enableRowSelection={true}
        getCanMultiSelect={true}
        enableSelectAll={true}
        enablePagination={false}
        enableGlobalFilter={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableColumnFilterModes={false}
        enableStickyHeader={true}
        positionToolbarAlertBanner="top"
        enableTopToolbar={false}
        initialState={{ showColumnFilters: false }}
        columns={columns}
        data={data}
    />;
};

export default Example;

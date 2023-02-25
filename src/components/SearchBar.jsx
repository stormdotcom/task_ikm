import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, Paper } from '@material-ui/core';
import Search from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

function SearchBar() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="search">
                <Search />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="contained" sx={{ backgroundColor: "green", borderRadius: "10%" }}>   Burial Type </Button>
        </Paper>
    );
}

export default SearchBar;
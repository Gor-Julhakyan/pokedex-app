import React, { Component } from 'react';
import './styles/AppToolbar.sass';
import logo from '../logo.svg';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9ccc65',
    },
    secondary: {
      main: '#d50000',
    },
  },
})

const props = {
  itemPerPage: [25, 50, 100]
}


const AppToolbar = ({}) => {
  return (
    <div className="AppToolbar">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <TextField
              label="Type"
              type="search"
              helperText = "Filter Pokemons By Type"
              margin = "normal"
              color = "inherit"
            />
            <TextField
              id="select-pokemon-count"
              select
              label="Count"
              // className={classes.textField}
              value={props.itemPerPage}
              // onChange={this.handleChange('currency')}
              helperText="Pokemons per page"
              margin="normal"
            >
            {props.itemPerPage.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
            </TextField>

            // <IconButton color="inherit" aria-label="Menu">
            //   <MenuIcon />
            // </IconButton>
            // {props.pageItemCnt}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

export default AppToolbar;
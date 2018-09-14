import React from 'react';
import './styles/AppToolbar.sass';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9ccc65',
    },
    secondary: {
      light: '#ffd600',
      main: '#ff6d00',
    },
  },
})

const itemsPerPage = [20, 50, 100]
let c = [20, 50, 100]


const AppToolbar = (props) => {
  const inputChanges = e => props.inputChanges(e.target)


  return (
    <div className="AppToolbar">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <TextField
              name = "type"
              label="Type"
              type="search"
              helperText = "Filter Pokemons By Type"
              margin = "normal"
              color = "inherit"
              onChange={inputChanges}
            />

            <div>
              <IconButton aria-label="Menu" className="items-count">20</IconButton>
              <IconButton aria-label="Menu" className="items-count">100</IconButton>
              <IconButton aria-label="Menu" className="items-count">50</IconButton>
            </div>

            
            
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

export default AppToolbar;
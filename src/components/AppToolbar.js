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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';


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
            {/* <TextField
              name = "type"
              label="Type"
              type="search"
              helperText = "Filter Pokemons By Type"
              margin = "normal"
              color = "inherit"
              onChange={inputChanges}
            /> */}

            <TextField
              name="category"
              select
              label="Category"
              value={props.states.category}
              className='classes.textField'
              onChange={inputChanges}
              SelectProps={{
                MenuProps: {
                  className: 'classes.menu',
                },
              }}
              helperText="Select type"
            >
              {props.states.pokemonTypes.map(option => (
                <MenuItem key={option.name} value={option.name} >
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <div>
              <IconButton aria-label="pokemonPerPage" name="pokemonPerPage" value="20" className="items-count" onClick={inputChanges}>20</IconButton>
              <IconButton aria-label="pokemonPerPage" name="pokemonPerPage" value="50" className="items-count" onClick={inputChanges}>50</IconButton>
              <IconButton aria-label="pokemonPerPage" name="pokemonPerPage" value="100" className="items-count" onClick={inputChanges}>100</IconButton>
            </div>
            
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

export default AppToolbar;
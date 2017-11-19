import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { clickAction } from '../../state/actions';
import FormAddNewBook from '../FormAddNewBook';
import SearchResults from '../SearchResults';

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/col
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#ff6f00',
  },
});


class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="App" muiTheme={muiTheme}>

        <AppBar
          title="Remember me! - Lukulista"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Tabs>
           <Tab
             icon={<FontIcon className="material-icons">home</FontIcon>}
             label="Lisää kirja">
                <FormAddNewBook />
          </Tab>
           <Tab
             icon={<FontIcon className="material-icons">favorite</FontIcon>}
             label="Suosikit"
           />

         </Tabs>

         <SearchResults />

      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

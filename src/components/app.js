import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import InfoBar from './info-bar'
import FilterButtons from './filter-buttons';
import Tabs from './tabs';
import './app.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#ff6f00',
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="app" muiTheme={muiTheme}>
      <div>
        <AppBar
          title="Remember me"
          className="app-bar"
          iconElementRight={<FilterButtons />}
        />
        <InfoBar message={this.props.message} />
        <Tabs />
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.form.message,
  };
}

export default connect(mapStateToProps, null)(App);
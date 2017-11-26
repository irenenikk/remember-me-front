import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { clickAction } from '../../state/actions';
import FormAddNewBook from './FormAddNewBook';
import SearchResults from './SearchResults/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import InfoBar from './InfoBar'
import './index.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#ff6f00',
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="App" muiTheme={muiTheme}>
      <div>
        <AppBar
          title="Remember me - Lukulista"
        />
        <InfoBar message={this.props.message} />
        <Tabs>
           <Tab
             label="Lisää kirja">
                <FormAddNewBook />
          </Tab>
        </Tabs>
         <SearchResults />
      </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.form.message,
  };
}

export default connect(mapStateToProps, null)(App);

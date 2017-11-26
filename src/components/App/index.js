import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { clickAction } from '../../state/actions';
import FormAddNewBook from './FormAddNewBook';
import FormAddNewBlogpost from './FormAddNewBlogpost';
import FormAddNewVideo from './FormAddNewVideo';

import ListAllTips from './SearchResults/';
import ListBooks from './SearchResults/ListBooks';
import ListBlogposts from './SearchResults/ListBlogposts';
import ListVideos from './SearchResults/ListVideos';

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
            label="Kaikki lukuvinkit">
               <ListAllTips />
         </Tab>

           <Tab
             label="Lisää kirja">
                <FormAddNewBook />
                <ListBooks />
          </Tab>

          <Tab
            label="Lisää blogikirjoitus">
               <FormAddNewBlogpost />
               <ListBlogposts />
         </Tab>

         <Tab
           label="Lisää video">
              <FormAddNewVideo />
              <ListVideos />
        </Tab>

        </Tabs>
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
